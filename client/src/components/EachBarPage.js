import { useParams, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import Loading from './Loading';
import EachBarCocktailCard from './EachBarCocktailCard';
import { barCocktails, BarCocktailsContext } from '../context/barCocktails';

function EachBarPage({}) {
  const location = useLocation();
  let bar = location.state.bar;
  const { barCocktails } = useContext(BarCocktailsContext);

  const thisBarsCocktails = barCocktails.filter(
    (eachDrink) => eachDrink.bar_id === bar.id
  );

  return (
    <div>
      <div class='mb-10 md:mb-16'>
        <h1 class='mb-4 text-center text-6xl font-thin uppercase text-primary md:mb-6 lg:text-7xl'>
          {bar.name}
        </h1>
        <h1 class='mb-4 text-center text-4xl font-thin italic uppercase text-primary md:mb-6 lg:text-3xl'>
          {bar.address}
        </h1>
      </div>
      <div class='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
        {thisBarsCocktails.map((barCocktail) => (
          <EachBarCocktailCard barCocktail={barCocktail} />
        ))}
      </div>
    </div>
  );
}

export default EachBarPage;
