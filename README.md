# averyxlin.com

## description
this is my personal website, which i built primarily with react + [docusaurus](https://docusaurus.io/), deployed using [vercel](https://vercel.com/). i chose to use docusaurus because i want to eventually publish my writings onto this site, and docusaurus makes it really easy to host a blog. plus it helped me configure light/dark mode switching using [infima](https://infima.dev/) themes which i liked.

i used the [react-leaflet](https://react-leaflet.js.org/) library to build the map on my homepage, but since the library directly makes calls to the DOM when it is loaded, it isn't compatible with server-side rendering, which was a problem since docusaurus is a static website generator. i resolved this by skipping leaflet in SSR environments and hydrating the map on the client-side using a wrapper + [lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading).

in the future, i hope to add demos to my projects + any notes/documentation i think is helpful :)

## credits
- lin logo in top navbar was built by me in figma
- all icons belong to font awesome 
- all logos belong to their respective companies

copyright © 2024 avery lin