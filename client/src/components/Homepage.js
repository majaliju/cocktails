import MapboxMap from './MapboxMap';
import UserAddressForm from './UserAddressForm';
import MapGL from './MapGL';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/user';
import { BarsContext } from '../context/bars';
import { LoggedInContext } from '../context/loggedIn';
import { AddressSubmittedContext } from '../context/addressSubmitted';
import { NavLink, Link, Navigate, useNavigate } from 'react-router-dom';

function Homepage({ mapLoaded, setMapLoaded }) {
  const { user } = useContext(UserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { addressSubmitted, setAddressSubmitted } = useContext(
    AddressSubmittedContext
  );
  const { bars } = useContext(BarsContext);

  const navigate = useNavigate();

  // //^ defining the geoJSON object for the map markers
  // const geojson = {
  //   type: 'FeatureCollection',
  //   features: bars.map((item) => {
  //     return {
  //       id: item.id,
  //       type: 'Feature',
  //       properties: {
  //         placeID: item.id,
  //         name: item.name,
  //         // icon: item.icon,
  //         addressFormatted: item.address,
  //       },
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [item.latitude, item.longitude],
  //       },
  //     };
  //   }),
  // };

  // console.log('geojson: ', geojson);

  return (
    <div className='flex flex-col w-full'>
      {loggedIn === true ? (
        <div>
          <h1 className='grid h-10 text-2xl italic uppercase text-primary text-bold card bg-base-300 rounded-box place-items-center'>
            Welcome back, {user.username}!
          </h1>
          <h1 className='grid h-6 italic text-1xl text-primary text-bold card bg-base-300 rounded-box place-items-center'>
            Showing bars near:
          </h1>
          <h3 className='grid h-10 italic uppercase text-1xl text-secondary text-bold card bg-base-300 rounded-box place-items-center'>
            {user.address}
          </h3>
          {user.latitude === null ? (
            <div>
              <NavLink
                to='/addressUpdate'
                className='font-bold uppercase border-none btn '>
                <h3 className='font-bold uppercase'>
                  SUBMIT YOUR ADDRESS TO START!
                </h3>
              </NavLink>
            </div>
          ) : (
            <div>
              <MapGL className='flex flex-col justify-center w-full h-full' />
            </div>
          )}
          {/* //&& PLACE A BUTTON OR NOTIFICATION HERE IN THE NULL ABOVE, TO PROMPT THE USER TO ENTER SOME ADDRESS MARKERS */}
        </div>
      ) : (
        <Link to='/login' replace={true}>
          <button className='gap-2 btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
            Click here to log in!
          </button>
        </Link>
      )}
      <div className='divider'></div>
    </div>
  );
}

export default Homepage;

{
  /* <div>
  {loggedIn === true ? (
    <div>
      <h1 className='justify-center text-4xl text-secondary'>
        Welcome back {user.username}!
      </h1>
      {user.latitude === null ? (
        <div>
          <NavLink
            to='/addressUpdate'
            className='font-bold uppercase border-none btn '>
            <h3 className='font-bold uppercase'>
              SUBMIT YOUR ADDRESS TO START!
            </h3>
          </NavLink>
        </div>
      ) : (
        <MapboxMap />
      )}
    
    </div>
  ) : (
    <Link to='/login' replace={true}>
      <button className='gap-2 btn'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
        Click here to log in!
      </button>
    </Link>
  )}
</div>; */
}
