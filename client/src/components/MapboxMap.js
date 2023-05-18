import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';
import { BarsContext } from '../context/bars';
import { AddressSubmittedContext } from '../context/addressSubmitted';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xnbXZ5MjR4MDl3cDNzcWFvN3Nsc3F0aSJ9.eDrOKKxTWcKvQfdCuDIiFA';

function MapboxMap({ geojson }) {
  const { user } = useContext(UserContext);
  const { bars } = useContext(BarsContext);
  const { addressSubmitted } = useContext(AddressSubmittedContext);

  const navigate = useNavigate();

  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lat, setLat] = useState(user.latitude);
  const [lng, setLng] = useState(user.longitude);
  const [zoom, setZoom] = useState(12);

  console.log('addressSubmitted in mapbox: ', addressSubmitted);

  // function checkUserCoors() {
  //   if (user.latitude === null || user.longitude === null) {
  //     const [lat, setLat] = useState(40.708497166);
  //     const [lng, setLng] = useState(-73.951996192);
  //   } else {
  //     const [lat, setLat] = useState(user.latitude);
  //     const [lng, setLng] = useState(user.longitude);
  //   }
  // }

  // useEffect(() => {
  //   if (mapLoaded === false) {
  //     navigate(0);
  //     setMapLoaded(true);
  //   } else {
  //     return;
  //   }
  // }, []);

  // useEffect(() => checkUserCoors());

  // useEffect(() => navigate(0), []);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [lng, lat],
      zoom: zoom,
    });
    // // add markers to map
    // for (const feature of geojson.features) {
    //   // create a HTML element for each feature
    //   const el = document.createElement('div');
    //   el.className = 'marker';
    //   // console.log('feature: ', feature);
    //   // make a marker for each feature and add to the map
    //   new mapboxgl.Marker(el)
    //     .setLngLat(feature.geometry.coordinates)
    //     .addTo(map);
    // }
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(14));
      setLat(map.current.getCenter().lat.toFixed(14));
      setZoom(map.current.getZoom().toFixed(10));
    });
  });

  // the old original useEffect to render map
  // useEffect(() => {
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/dark-v11',
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });

  //   // bars.map((eachBar) => {
  //   //   console.log('eachBar :', eachBar.name);
  //   //   new mapboxgl.Marker()
  //   //     .setLngLat([eachBar.latitude, eachBar.longitude])
  //   //     .addTo(map);
  //   // });
  // }, []);

  return (
    <div>
      <div ref={mapContainer} className='map-container' />
    </div>
  );
}

export default MapboxMap;
