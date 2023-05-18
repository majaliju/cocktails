import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import 'mapbox-gl/dist/mapbox-gl.css';

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user';
import { BarsProvider } from './context/bars';
import { BarCocktailsProvider } from './context/barCocktails';
import { LoggedInProvider } from './context/loggedIn';
import { AddressSubmittedProvider } from './context/addressSubmitted';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AddressSubmittedProvider>
      <LoggedInProvider>
        <UserProvider>
          <BarsProvider>
            <BarCocktailsProvider>
              <App />
            </BarCocktailsProvider>
          </BarsProvider>
        </UserProvider>
      </LoggedInProvider>
    </AddressSubmittedProvider>
  </BrowserRouter>
);
