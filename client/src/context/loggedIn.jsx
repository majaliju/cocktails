import React, {useState, useEffect} from 'react';

const LoggedInContext = React.createContext();

function LoggedInProvider({children}){
  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
      <LoggedInContext.Provider value={{loggedIn, setLoggedIn}}> 
          {children} 
      </LoggedInContext.Provider> 
  )

}

export {LoggedInContext, LoggedInProvider };