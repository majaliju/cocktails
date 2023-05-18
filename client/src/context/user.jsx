import React, {useState, useEffect} from 'react';

const UserContext = React.createContext();

function UserProvider({children}){
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if (res.ok){
        res.json().then(response => setUser(response))
      }
    })
  }, []);
  
  // console.log("user within user Context: ", user)

  return (
      <UserContext.Provider value={{user, setUser}}> 
          {children} 
      </UserContext.Provider> 
  )

}

export {UserContext, UserProvider };