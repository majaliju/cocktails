import React, {useState, useEffect} from 'react';

const BarsContext = React.createContext();

function BarsProvider({children}){
  const [bars, setBars] = useState([]);

  useEffect(() => {
    fetch('/bars')
      .then((r) => r.json())
      .then((info) => setBars(info));
  }, [])
  

  return (
      <BarsContext.Provider value={{bars, setBars}}> 
          {children} 
      </BarsContext.Provider> 
  )

}

export {BarsContext, BarsProvider };