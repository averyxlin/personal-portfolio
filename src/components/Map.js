import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer } from './MapComponents'
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

export default function Map() {
  const mapRef = useRef(null);
  return (
    <MapContainer 
      ref={mapRef}
      className={styles.currentLocationMap}
      style={{ 
        height: '25rem', 
        width: '100wh',
      }} 
      center={[37.7899, -122.4194]} zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}
