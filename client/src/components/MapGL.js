import * as React from 'react';
import { Map, Marker, Popup } from 'react-map-gl';
import { useContext, useState, useMemo, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Pin from './Pin';
import { useNavigate, Link } from 'react-router-dom';
/* eslint-disable import/no-webpack-loader-syntax */
import mapboxgl from 'mapbox-gl';
// @ts-ignore

import { UserContext } from '../context/user';
import { BarsContext } from '../context/bars';
import { AddressSubmittedContext } from '../context/addressSubmitted';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xnbXZ5MjR4MDl3cDNzcWFvN3Nsc3F0aSJ9.eDrOKKxTWcKvQfdCuDIiFA';

export default function MapGL({}) {
  const { user } = useContext(UserContext);
  const { bars } = useContext(BarsContext);
  const { addressSubmitted } = useContext(AddressSubmittedContext);

  const navigate = useNavigate();

  const [popupInfo, setPopupInfo] = useState(false);
  const [barPopUp, setBarPopUp] = useState('');

  const pins = useMemo(
    () =>
      bars.map((bar, index) => (
        <Link to={`/bars/${bar.id}`} state={{ bar: bar }}>
          <Marker
            key={`marker-${index}`}
            longitude={bar.longitude}
            latitude={bar.latitude}
            anchor='bottom'
            // onClick={() => {
            //   // e.originalEvent.stopPropagation();
            //   // console.log('barPopUp: ', bar);
            //   navigate(`/bars/${bar.id}`);
            // }}
            // onMouseOver={(e) => {
            //   console.log('barPopUp: ', bar);
            //   setBarPopUp(bar);
            // }}
            // onClick={(e) => {
            //   // If we let the click event propagates to the map, it will immediately close the popup
            //   // with `closeOnClick: true`
            //   // e.originalEvent.stopPropagation();
            //   // setPopupInfo(true);
            // }}
          >
            <Pin />
          </Marker>
        </Link>
      )),
    []
  );
  console.log('popupInfo: ', popupInfo);
  return (
    <Map
      initialViewState={{
        longitude: user.longitude,
        latitude: user.latitude,
        zoom: 10,
      }}
      style={{ width: 1000, height: 800 }}
      mapStyle='mapbox://styles/mapbox/dark-v11'
      mapboxAccessToken={MAPBOX_TOKEN}>
      <Marker
        longitude={user.longitude}
        latitude={user.latitude}
        color='blue'
      />
      {pins}

      {popupInfo && (
        <Popup
          anchor='top'
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(false)}>
          <div>{barPopUp}</div>
        </Popup>
      )}
    </Map>
  );
}

// mapboxgl.workerClass =
//   require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
