// code came from this mapbox direct tutorial
// https://docs.mapbox.com/mapbox-search-js/example/autofill-checkout-react/

import React, { useState, useCallback, useEffect, useContext } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';
import { UserContext } from '../context/user';
import { LoggedInContext } from '../context/loggedIn';
import { AddressSubmittedContext } from '../context/addressSubmitted';
import { useNavigate, Link } from 'react-router-dom';

export default function UserAddressForm() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { addressSubmitted, setAddressSubmitted } = useContext(
    AddressSubmittedContext
  );

  const [street, setStreet] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [postcode, setPostcode] = useState(user.postcode);

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [errorsExist, setErrorsExist] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  //^ NOTE: FOR FUTURE, LOOK INTO IMPLEMENTING REACT-MAP-GL'S GEOCODER AS OPPOSED TO ADDRESS AUTOFILL

  function validZipcode(postcode) {
    const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(postcode)) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        street,
        city,
        state,
        postcode,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((info) => {
          console.log('response of user address form: ', info);
          setError('');
          setErrorsExist(false);
          setSuccess('success!');
          setSubmitted(true);
          setAddressSubmitted(true);
        });
      } else {
        response.json().then((e) => {
          console.log('e: ', e);
          setErrorsExist(true);
          setError(e.error);
        });
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='p-8 mt-2 mb-0 space-y-4 rounded-lg shadow-2xl'>
      <AddressAutofill accessToken='pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xnbXZ5MjR4MDl3cDNzcWFvN3Nsc3F0aSJ9.eDrOKKxTWcKvQfdCuDIiFA'>
        <div className='w-full max-w-xs form-control'>
          <label className='label'>
            <span className='label-text'>Type in a street...</span>
            <span className='label-text-alt'>Street</span>
          </label>
          <input
            name='street'
            placeholder={`${user.address}`}
            type='text'
            onChange={(e) => setStreet(e.target.value)}
            autoComplete='address-line1'
            className='w-full max-w-xs input input-bordered'
          />
        </div>
      </AddressAutofill>

      <div className='w-full max-w-xs form-control'>
        <label className='label'>
          <span className='label-text'>Enter your state</span>
          <span className='label-text-alt'>State</span>
        </label>
        <input
          name='state'
          placeholder={`${user.state}`}
          type='text'
          onChange={(e) => setState(e.target.value)}
          autoComplete='address-level1'
          className='w-full max-w-xs input input-bordered'
        />
      </div>

      <div className='w-full max-w-xs form-control'>
        <label className='label'>
          <span className='label-text'>Enter your city</span>
          <span className='label-text-alt'>City</span>
        </label>
        <input
          name='city'
          placeholder={`${user.city}`}
          type='text'
          onChange={(e) => setCity(e.target.value)}
          autoComplete='address-level2'
          className='w-full max-w-xs input input-bordered'
        />
      </div>

      <div className='w-full max-w-xs form-control'>
        <label className='label'>
          <span className='label-text'>Enter your postal/zip code</span>
          <span className='label-text-alt'>Postal Code</span>
        </label>
        <input
          name='postcode'
          placeholder={`${user.postcode}`}
          type='text'
          onChange={(e) => setPostcode(e.target.value)}
          autoComplete='postal-code'
          className='w-full max-w-xs input input-bordered'
        />
      </div>
      {submitted === false ? (
        street !== '' ? (
          city !== '' ? (
            state !== '' ? (
              postcode !== '' ? (
                validZipcode(postcode) === true ? (
                  <div>
                    <div className='mt-6 form-control'>
                      <button className='btn btn-primary'>
                        Submit Address
                      </button>
                    </div>
                  </div>
                ) : null
              ) : null
            ) : null
          ) : null
        ) : null
      ) : (
        <div className='shadow-lg alert alert-success'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='flex-shrink-0 w-6 h-6 stroke-current'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>You're all set!</span>
          </div>
        </div>
      )}
      {submitted === true ? (
        <Link
          reloadDocument
          to={'/'}
          type='submit'
          className='justify-center w-full btn btn-primary btn-outline'>
          GO TO THE MAP
        </Link>
      ) : null}
    </form>
  );
}
