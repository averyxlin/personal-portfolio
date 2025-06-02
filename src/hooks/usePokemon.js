import { useState, useEffect, useCallback, useRef } from 'react';
import { POKEMON_TYPES } from '../constants/pokemonTypes';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const ITEMS_PER_PAGE = 20;

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  
  // Cache for storing Pokemon data
  const cache = useRef(new Map());
  const lastFetchTime = useRef(new Map());
  
  // Track the current page
  const currentPage = useRef(0);
  
  // Track if we're currently fetching
  const isFetching = useRef(false);

  // Function to check if cached data is still valid
  const isCacheValid = (id) => {
    const lastFetch = lastFetchTime.current.get(id);
    if (!lastFetch) return false;
    return Date.now() - lastFetch < CACHE_DURATION;
  };

  // Function to fetch a single Pokemon's data
  const fetchPokemonData = useCallback(async (id) => {
    // Check cache first
    if (cache.current.has(id) && isCacheValid(id)) {
      return cache.current.get(id);
    }

    try {
      // Fetch both species and Pokemon data
      const [speciesResponse, pokemonResponse] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      ]);

      if (!speciesResponse.ok || !pokemonResponse.ok) {
        throw new Error('Failed to fetch Pokemon data');
      }
      
      const speciesData = await speciesResponse.json();
      const pokemonData = await pokemonResponse.json();
      
      // Combine the data
      const combinedData = {
        ...speciesData,
        sprites: pokemonData.sprites,
        height: pokemonData.height,
        weight: pokemonData.weight,
        abilities: pokemonData.abilities.map(ability => ({
          name: ability.ability.name,
          isHidden: ability.is_hidden
        })),
        types: pokemonData.types.map(type => ({
          name: type.type.name,
          ...POKEMON_TYPES[type.type.name]
        })),
        flavor_text: speciesData.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || 
                    speciesData.flavor_text_entries[0]?.flavor_text || 
                    'No description available.'
      };
      
      // Update cache
      cache.current.set(id, combinedData);
      lastFetchTime.current.set(id, Date.now());
      
      return combinedData;
    } catch (error) {
      console.error(`Error fetching Pokemon ${id}:`, error);
      throw error;
    }
  }, []);

  // Function to fetch a page of Pokemon
  const fetchPage = useCallback(async (page) => {
    if (isFetching.current) return;
    isFetching.current = true;
    setLoading(true);
    setError(null);

    try {
      const offset = page * ITEMS_PER_PAGE;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${ITEMS_PER_PAGE}`
      );
      
      if (!response.ok) throw new Error('Failed to fetch Pokemon list');
      
      const data = await response.json();
      
      // Update hasMore based on if there are more Pokemon to fetch
      setHasMore(data.next !== null);
      
      // Fetch detailed data for each Pokemon in the page
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const id = pokemon.url.split('/').slice(-2, -1)[0];
          return fetchPokemonData(id);
        })
      );
      
      setPokemonList(prev => {
        // If it's the first page, replace the list
        if (page === 0) return pokemonData;
        // Otherwise, append to existing list
        return [...prev, ...pokemonData];
      });
      
      currentPage.current = page;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  }, [fetchPokemonData]);

  // Function to load more Pokemon
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchPage(currentPage.current + 1);
    }
  }, [loading, hasMore, fetchPage]);

  // Initial fetch
  useEffect(() => {
    fetchPage(0);
  }, [fetchPage]);

  // Function to get a specific Pokemon by ID
  const getPokemonById = useCallback(async (id) => {
    try {
      return await fetchPokemonData(id);
    } catch (error) {
      setError(error.message);
      return null;
    }
  }, [fetchPokemonData]);

  return {
    pokemonList,
    loading,
    error,
    hasMore,
    loadMore,
    getPokemonById,
  };
};

export default usePokemon; 