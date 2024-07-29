import { createRoot } from "react-dom/client";
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.css' //TODO: implement Tailwind so I can make stuff pretty

// THIS IS THE DEFAULT PUBLIC TOKEN
// I may be dumb, but I'm not stupid   -ben
// TODO: replace with secure read method
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVua2xvc2t5IiwiYSI6ImNsejVwOTdnNzBxNjkyaXE1cDh0dDQzbzgifQ.3N3KSfATURB0JbJvwiEFmw';

function App() {
  // TODO: put below into appropriate separate file
  // and import, rather than write inside App(), to prevent monolith, just dont wanna debug rn
  //
  // these are the boilerplate params provided by Mapbox-gl
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(38.889805);
  const [lng, setLng] = useState(-77.009056);
  const [zoom, setZoom] = useState(9);

  // Effect hook (side effects in function components) that initializes the map
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',  // <---- change map style here
      center: [lng, lat],  // uses params above
      zoom: zoom  // zoom
    });
    map.current.on('load', () => {
      map.current.addSource('earthquakes', {
        type: 'geojson',
        // Use a URL for the value for the data property.
        data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
        });
      map.current.addLayer({
        'id': 'earthquakes-layer',
        'type': 'circle',
        'source': 'earthquakes',
        'paint': {
            'circle-radius': 4,
            'circle-stroke-width': 2,
            'circle-color': 'red',
            'circle-stroke-color': 'white'
        }
      });
    });
  });

  // this is what will actually be rendered by React's DOM
  return (
    <div className="App">
      <h1 className="font-serif text-3xl underline"> Public Transit Fairness Platform
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