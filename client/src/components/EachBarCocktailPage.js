import { useLocation, Link } from 'react-router-dom';
import { UserContext } from '../context/user';
import { BarCocktailsContext } from '../context/barCocktails';
import { useContext, useState } from 'react';
import BarCocktailReviewCard from './BarCocktailReviewCard';

function EachBarCocktailPage() {
  const location = useLocation();
  let barCocktail = location.state.barCocktail;

  const { user, setUser } = useContext(UserContext);
  const { barCocktails, setBarCocktails } = useContext(BarCocktailsContext);

  const [updatedDrink, setUpdatedDrink] = useState(barCocktail);

  //^ the original
  const barCocktailReviews = barCocktail.reviews;

  // function handleDelete(review) {
  //   fetch(`/reviews/${review.id}`, {
  //     method: 'DELETE',
  //   }).then(() => {
  //     console.log('DELETE works!');
  //   });
  // }

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

  return (
    <div>
      <div class='mb-10 md:mb-16'>
        <h1 class='mb-4 text-center text-5xl font-thin uppercase text-primary md:mb-6 lg:text-6xl'>
          {barCocktail.special_name}
        </h1>

        <div className='flex justify-center w-full input-group input-group-lg'>
          <Link to={'/reviews'} state={{ barCocktail: barCocktail }}>
            <button className='btn btn-secondary btn-outline'>
              Submit a Review!
            </button>
          </Link>
        </div>
      </div>
      <div class='grid justify-center gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
        {barCocktailReviews.length === 0 ? (
          <div>No reviews here yet! Be the first one!</div>
        ) : (
          barCocktailReviews.map((review) => (
            <BarCocktailReviewCard review={review} />
          ))
        )}
      </div>
    </div>
  );
}

export default EachBarCocktailPage;
