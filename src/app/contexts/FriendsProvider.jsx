'use client'
import React, { createContext, useEffect, useState } from "react";

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [friendInfo, setFriendInfo] = useState([]);
  
 const [filterType, setFilterType] = useState([]);

 useEffect(()=>{
  setFilterType(friendInfo)
 },[friendInfo])
  const data = {
    friendInfo,
    setFriendInfo,
    filterType,
    setFilterType
  };

  return (
      <FriendsContext.Provider value={data}>
      {children}
      </FriendsContext.Provider>
  );
};

export default FriendsProvider;
