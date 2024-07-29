import { createRoot } from "react-dom/client";
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.css'

// THIS IS THE DEFAULT PUBLIC TOKEN
// I may be dumb, but I'm not stupid
// TODO: replace with private environment variable securely read on server side
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVua2xvc2t5IiwiYSI6ImNsejVwOTdnNzBxNjkyaXE1cDh0dDQzbzgifQ.3N3KSfATURB0JbJvwiEFmw';

function App() {
  // boilerplate params provided by Mapbox for a React map
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  // function that initializes the map itself
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',  // <---- change map style here
      center: [lng, lat],  // uses params above
      zoom: zoom  // zoom
    });
  });

  // this is what will actually be rendered by React's DOM
  return (
    <div className="App">
      <h1>YO WHADDUP this a websiteee
      </h1>
      <div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);