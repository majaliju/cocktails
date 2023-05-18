import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Login from './Login';
import SignUp from './SignUp';
import BarsDisplay from './BarsDisplay';
import BarCocktailsDisplay from './BarCocktailsDisplay';
import EachBarPage from './EachBarPage';
import EachBarCocktailPage from './EachBarCocktailPage';
import SubmitReviewForm from './SubmitReviewForm';
import EditReviewForm from './EditReviewForm';
import 'mapbox-gl/dist/mapbox-gl.css';

import { UserContext } from '../context/user';
import { LoggedInContext } from '../context/loggedIn';
import { BarsContext } from '../context/bars';
import { Link } from 'react-router-dom';
import UserAddressForm from './UserAddressForm';
import UserReviews from './UserReviews';
import { AddressSubmittedContext } from '../context/addressSubmitted';
import UserBarCocktails from './UserBarCocktails';

function App() {
  const { user, setUser } = useContext(UserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { addressSubmitted, setAddressSubmitted } = useContext(
    AddressSubmittedContext
  );
  const { bars } = useContext(BarsContext);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((response) => {
          console.log('within /me, the response is: ', response);
          setUser(response);
          setLoggedIn(true);
          if (user.latitude !== null) {
            setAddressSubmitted(true);
          }
        });
      } else {
        setUser({});
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/addressUpdate' element={<UserAddressForm />} />
        <Route path='/yourReviews' element={<UserReviews />} />
        <Route path='/yourBarCocktails' element={<UserBarCocktails />} />

        <Route
          path='/bars'
          element={
            <BarsDisplay
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path='/bars/:id' element={<EachBarPage />} />

        <Route
          path='/bar_cocktails'
          element={
            <BarCocktailsDisplay
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path='/bar_cocktails/:id' element={<EachBarCocktailPage />} />

        <Route path='/reviews' element={<SubmitReviewForm />} />
        <Route path='/reviews/:id' element={<EditReviewForm />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
