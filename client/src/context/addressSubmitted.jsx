import React, {useState, useEffect} from 'react';

const AddressSubmittedContext = React.createContext();

function AddressSubmittedProvider({children}){
  const [addressSubmitted, setAddressSubmitted] = useState(false);


  return (
      <AddressSubmittedContext.Provider value={{addressSubmitted, setAddressSubmitted}}> 
          {children} 
      </AddressSubmittedContext.Provider> 
  )

}

export {AddressSubmittedContext, AddressSubmittedProvider };