import * as React from 'react';
import { Map, Marker } from 'react-map-gl';
import { useContext } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

import { UserContext } from '../context/user';
import { BarsContext } from '../context/bars';
import { AddressSubmittedContext } from '../context/addressSubmitted';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xnbXZ5MjR4MDl3cDNzcWFvN3Nsc3F0aSJ9.eDrOKKxTWcKvQfdCuDIiFA';
// Set your mapbox token here

export default function MapGL({}) {
  const { user } = useContext(UserContext);
  const { bars } = useContext(BarsContext);
  const { addressSubmitted } = useContext(AddressSubmittedContext);

  // console.log('bars', bars);

  return (
    <Map
      initialViewState={{
        longitude: user.longitude,
        latitude: user.latitude,
        zoom: 10,
      }}
      style={{ width: 700, height: 400 }}
      mapStyle='mapbox://styles/mapbox/dark-v11'
      mapboxAccessToken={MAPBOX_TOKEN}>
      <Marker longitude={user.longitude} latitude={user.latitude} color='red' />
      {addressSubmitted === true
        ? bars.map((bar) => {
            <Marker
              longitude={bar.longitude}
              latitude={bar.latitude}
              color='red'
            />;
            console.log('bar: ', bar);
          })
        : null}
    </Map>
  );
}
