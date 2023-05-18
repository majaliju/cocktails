import { Link } from 'react-router-dom';
import { BarCocktailsContext } from '../context/barCocktails';
import { UserContext } from '../context/user';
import { useContext, useEffect } from 'react';

export default function BarCocktailReviewCard({ review, handleReviewDelete }) {
  const { user, setUser } = useContext(UserContext);
  const { barCocktails, setBarCocktails } = useContext(BarCocktailsContext);

  const updatedDrink = barCocktails.find(
    (drink) => drink.id === review.bar_cocktail_id
  );

  function handleReviewDelete(review) {
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
    }).then(() => {
      const updatedReviews = user.reviews.filter(
        (eachReview) => eachReview.id !== review.id
      );
      setUser({
        ...user,
        reviews: updatedReviews,
      });
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

  console.log('updatedDrink in URC: ', updatedDrink);
  return (
    <div className='justify-center text-gray-900 card w-96 bg-primary'>
      <div key={review.id} className='card-body'>
        <h1 className='text-2xl italic uppercase'>{review.special_name}</h1>
        <h2 className='justify-center bg-gray-800 text-primary card-title'>
          {review.stars} stars
        </h2>
        <p className='text-tertiary'>{review.comment}</p>
        <div className='justify-end card-actions'>
          {parseInt(review.user_id) === parseInt(user.id) ? (
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
                <Link
                  to={`/yourReviews`}
                  className='justify-center w-full btn text-gray-950 bg-primary to-secondary-focus'>
                  View more of your reviews
                </Link>
              </div>
            </div>
          ) : (
            <h1 className='justify-center w-full btn btn-ghost'>
              Posted by {review.posted_user}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
