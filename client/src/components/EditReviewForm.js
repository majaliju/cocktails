import { useLocation, useNavigate } from 'react-router-dom';
import { user, UserProvider, UserContext } from '../context/user';
import { barCocktails, BarCocktailsContext } from '../context/barCocktails';
import { useState, useContext } from 'react';

export default function EditReviewForm() {
  const location = useLocation();
  let review = location.state.review;
  let updatedDrink = location.state.updatedDrink;

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { barCocktails, setBarCocktails } = useContext(BarCocktailsContext);

  const [comment, setComment] = useState(review.comment);
  const [stars, setStars] = useState(review.stars);

  const [success, setSuccess] = useState('');
  const [errorArray, setErrorArray] = useState([]);
  const [error, setError] = useState('');
  const [errorsExist, setErrorsExist] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        comment: comment,
        stars: stars,
        bar_cocktail_id: review.bar_cocktail_id,
        user_id: review.user_id,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((theUpdatedReview) => {
          //& user successfully updates
          const updatedReviews = user.reviews.map((thisReview) => {
            if (thisReview.id === theUpdatedReview.id) {
              return theUpdatedReview;
            } else {
              return thisReview;
            }
          });
          setUser({ ...user, reviews: updatedReviews });

          const updatedDrinkReviews = updatedDrink.reviews.map(
            (givenReview) => {
              if (givenReview.id === theUpdatedReview.id) {
                return theUpdatedReview;
              } else {
                return givenReview;
              }
            }
          );

          // console.log('updatedDrinkReviews :', updatedDrinkReviews);
          // //* here is where updatedDrink needs inidividual updating of the reviews
          updatedDrink['reviews'] = updatedDrinkReviews;
          // console.log('updatedDrink after the update: ', updatedDrink);

          // filter all other drinks except thisDrink
          const allOtherDrinks = barCocktails.filter(
            (eachOne) => eachOne.id !== updatedDrink.id
          );

          //* here is where i update barCocktails itself with the old drinks + the newly updated drink

          // // update barCocktails with (all drinks whhere thisDrink.id !== drink.id) + (thisDrink)
          setBarCocktails([...allOtherDrinks, updatedDrink]);

          console.log('barCocktails after all updates: ', barCocktails);

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

          <h1 className='text-2xl italic text-center text-secondary sm:text-1xl'>
            edit your review for
          </h1>
          <h1 className='text-3xl italic text-center uppercase text-primary sm:text-3xl'>
            {review.special_name}
          </h1>
          <form className='p-8 mt-2 mb-0 space-y-4 rounded-lg shadow-2xl'>
            <div>
              <label className='label'>
                <span className='uppercase label-text text-secondary'>
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
              <label className='label'>
                <span className='uppercase label-text text-secondary'>
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
