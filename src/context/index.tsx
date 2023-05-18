import React,{createContext, useState} from 'react';
import UserProfile from './UserProfie';
import UserContext from './useContext';

function DemoContext() {
  const [userData, setUserData] = useState({ name: 'trường', age: 24 });


  const updateUserData = () => {
    const randomName = Math.random().toString(36).substring(7);
    const randomAge = Math.floor(Math.random() * 100);
    setUserData({ name: randomName, age: randomAge });
  };

  return (
    <div>
      <UserContext.Provider value={{...userData,updateUserData}}>
        <UserProfile/>
      </UserContext.Provider>
    </div>
  )
}

export default DemoContext


