// code came from this mapbox direct tutorial
// https://docs.mapbox.com/mapbox-search-js/example/autofill-checkout-react/

import React, { useState, useCallback, useEffect, useContext } from 'react';

import { user, UserProvider, UserContext } from '../context/user';
import { barCocktails, BarCocktailsContext } from '../context/barCocktails';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SubmitReviewForm() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { barCocktails, setBarCocktails } = useContext(BarCocktailsContext);

  const location = useLocation();
  let barCocktail = location.state.barCocktail;

  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(1);

  const [success, setSuccess] = useState('');
  const [errorArray, setErrorArray] = useState([]);
  const [error, setError] = useState('');
  const [errorsExist, setErrorsExist] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/reviews/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        comment: comment,
        stars: stars,
        bar_cocktail_id: barCocktail.id,
        user_id: user.id,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((theNewReview) => {
          //& find the matching drink within BarCocktails
          const thisDrink = barCocktails.find(
            (drink) => theNewReview.bar_cocktail_id === drink.id
          );

          console.log('thisDrink in SRF:', thisDrink);
          const drinkExistsWithinUsersBarCocktails = user.bar_cocktails.find(
            (drink) => drink.id === theNewReview.bar_cocktail_id
          );
          console.log(
            'drinkExistsWithinUsersBarCocktails :',
            drinkExistsWithinUsersBarCocktails
          );
          if (drinkExistsWithinUsersBarCocktails === undefined) {
            setUser({
              ...user,
              reviews: [...user.reviews, theNewReview],
              bar_cocktails: [...user.bar_cocktails, thisDrink],
            });
          } else {
            setUser({
              ...user,
              reviews: [...user.reviews, theNewReview],
            });
          }

          // //^ handling setUser
          // //& the new review is added to user.reviews
          // setUser({
          //   ...user,
          //   reviews: [...user.reviews, theNewReview],
          // });

          //^ handling setBarCocktails
          //& add the new review to this BarCocktail
          thisDrink.reviews.unshift(theNewReview); // add the new review to thisDrink

          //& filter all other drinks except thisDrink
          const allOtherDrinks = barCocktails.filter(
            (eachOne) => eachOne.id !== thisDrink.id
          );

          //& set BarCocktails to all the old drinks + the newly updated drink (with the new review)
          setBarCocktails([...allOtherDrinks, thisDrink]);

          setError('');
          setErrorsExist(false);
          setSuccess('success!');
          setSubmitted(true);
          // set timeOut function to navigate after 1 second
          // navigate('/bar_cocktails');
        });
      } else {
        response.json().then((e) => {
          console.log('e: ', e);
          setErrorsExist(true);
          setErrorArray(e.errors);
        });
      }
    });
  }

  function handleStarsChange(e) {
    if (e.target.value > 5) {
      window.alert('5 is the highest rating!');
      setStars(5);
    }
    if (e.target.value < 1) {
      window.alert('1 is the lowest rating!');
      setStars(1);
    } else if (e.target.value > 0 && e.target.value < 6)
      setStars(e.target.value);
  }

  return (
    <div>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto'>
          {success !== '' ? (
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
                <span>{success}</span>
              </div>
            </div>
          ) : null}

          {errorsExist !== false ? (
            <div className='shadow-lg alert alert-warning'>
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
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
                {errorArray.map((eachError) => (
                  <span>{eachError}</span>
                ))}
              </div>
            </div>
          ) : null}

          <h1 className='text-2xl text-center text-white sm:text-3xl'>
            LEAVE A REVIEW FOR THE
          </h1>
          <h1 className='text-3xl italic text-center uppercase text-primary sm:text-3xl'>
            {barCocktail.special_name}
          </h1>
          <form className='p-8 mt-2 mb-0 space-y-4 rounded-lg shadow-2xl'>
            <div>
              <label class='label'>
                <span class='label-text text-secondary uppercase'>
                  how many stars does this deserve?
                </span>
              </label>
              <input
                type='number'
                id='stars'
                value={stars}
                onChange={(e) => handleStarsChange(e)}
                placeholder='how many tickets?'
                className='w-full max-w-xs input input-bordered'
              />
            </div>

            <div>
              <label class='label'>
                <span class='label-text text-secondary uppercase'>
                  leave a comment
                </span>
              </label>
              <input
                type='text'
                id='comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder='write your message here! price, offers, etc'
                className='w-full max-w-xs input input-bordered'
              />
            </div>
            {submitted === false ? (
              <button
                onClick={handleSubmit}
                type='submit'
                className='justify-center w-full btn btn-primary btn-outline'>
                SUBMIT
              </button>
            ) : (
              <button
                disabled
                type='submit'
                className='block w-full px-5 py-3 text-sm font-medium text-white bg-black rounded-lg'>
                SUBMITTED!
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
