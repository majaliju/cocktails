import React, {useState, useEffect} from 'react';

const BarCocktailsContext = React.createContext();

function BarCocktailsProvider({children}){
  const [barCocktails, setBarCocktails] = useState([]);

  useEffect(() => {
    fetch('/bar_cocktails')
      .then((r) => r.json())
      .then((info) => setBarCocktails(info));
  }, []);
  
  // console.log("barCocktails within barCocktails Context: ", barCocktails)

  return (
      <BarCocktailsContext.Provider value={{barCocktails, setBarCocktails}}> 
          {children} 
      </BarCocktailsContext.Provider> 
  )

}

export {BarCocktailsContext, BarCocktailsProvider };