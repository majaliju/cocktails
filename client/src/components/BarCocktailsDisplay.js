import { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EachBarCocktailPage from './EachBarCocktailPage';
import EachBarCocktailCard from './EachBarCocktailCard';
import Loading from './Loading';
import { BarCocktailsContext } from '../context/barCocktails';

function BarCocktailsDisplay({ searchTerm, setSearchTerm }) {
  const { barCocktails } = useContext(BarCocktailsContext);

  let navigate = useNavigate();

  useEffect(() => {
    setSearchTerm('');
  }, [barCocktails]);

  return (
    <div class='bg-base-900 justify-center py-6 sm:py-8 lg:py-12'>
      <div class='form-control'>
        <label class='flex input-group input-group-lg'>
          <span>SEARCH</span>
          <input
            type='text'
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search for any bar by typing in the name of a drink or of a bar...'
            className='w-full text-center input input-bordered input-lg'
          />
        </label>
      </div>

      <div>
        {barCocktails.length > 0 ? (
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='mb-10 md:mb-16'>
              <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
                THE COCKTAIL LIBRARY
              </h1>
            </div>
            <div className='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
              {barCocktails
                .filter((barCocktail) => {
                  if (searchTerm === '') {
                    return barCocktail;
                  } else if (
                    barCocktail.special_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return barCocktail;
                  }
                })
                .map((barCocktail) => (
                  <EachBarCocktailCard
                    key={barCocktail.id}
                    barCocktail={barCocktail}
                  />
                ))}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default BarCocktailsDisplay;
