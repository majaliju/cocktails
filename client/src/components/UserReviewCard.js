import { Link } from 'react-router-dom';
import { BarCocktailsContext } from '../context/barCocktails';
import { UserContext } from '../context/user';
import { useContext, useEffect } from 'react';

function UserReviewCard({ review, handleReviewDelete }) {
  const { user, setUser } = useContext(UserContext);
  const { barCocktails, setBarCocktails } = useContext(BarCocktailsContext);

  const updatedDrink = barCocktails.find(
    (drink) => drink.id === review.bar_cocktail_id
  );

  function handleReviewDelete(review) {
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
    }).then(() => {
      // check if a drink has any reviews left
      // if a given drink has 0 reviews, remove that drink
      // otherwise, keep that drink
      // update user's reviews, and remove the given review

      //^ if remainingReviewsForDrink.length === 0 that means get rid of the drink
      //^ else, just get rid of the review only
      const remainingReviewsForDrink = user.reviews.filter(
        (eachReview) =>
          eachReview.bar_cocktail_id === updatedDrink.id &&
          eachReview.id !== review.id
      );

      console.log('remainingReviewsForDrink: ', remainingReviewsForDrink);

      //^ get all reviews which aren't the deleted review
      const updatedReviews = user.reviews.filter(
        (eachReview) => eachReview.id !== review.id
      );

      if (remainingReviewsForDrink.length === 0) {
        const updatedBarCocktails = user.bar_cocktails.filter(
          (drink) => drink.id !== review.bar_cocktail_id
        );

        setUser({
          ...user,
          reviews: updatedReviews,
          bar_cocktails: updatedBarCocktails,
        });
      } else {
        setUser({
          ...user,
          reviews: updatedReviews,
        });
      }

      //^ update the barCocktail.reviews
      const updatedDrinkReviews = updatedDrink.reviews.map((givenReview) => {
        if (givenReview.id !== review.id) {
          return givenReview;
        }
      });
      updatedDrink['reviews'] = updatedDrinkReviews;

      const allOtherDrinks = barCocktails.filter(
        (eachOne) => eachOne.id !== updatedDrink.id
      );
      setBarCocktails([...allOtherDrinks, updatedDrink]);
    });
  }

  // console.log('updatedDrink in URC: ', updatedDrink);
  return (
    <div className='justify-center text-gray-900 card w-96 bg-primary'>
      <div key={review.id} className='card-body'>
        <h1 className='text-2xl italic uppercase'>{review.special_name}</h1>
        <h2 className='justify-center bg-gray-800 text-primary card-title'>
          {review.stars} stars
        </h2>
        <p className='text-tertiary'>{review.comment}</p>
        <div className='justify-end card-actions'>
          <div>
            <div>
              <Link
                to={`/reviews/${review.id}`}
                state={{ review: review, updatedDrink: updatedDrink }}
                className='justify-center w-full btn text-gray-950 bg-primary to-secondary-focus'>
                Edit your review
              </Link>
            </div>
            <div>
              <button
                className='justify-center w-full btn'
                onClick={() => handleReviewDelete(review)}>
                Delete this
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReviewCard;
