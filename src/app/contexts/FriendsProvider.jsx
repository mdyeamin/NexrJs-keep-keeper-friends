'use client'
import React, { createContext, useState } from "react";

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [friendInfo, setFriendInfo] = useState([]);

  const data = {
    friendInfo,
    setFriendInfo
  };

  return (
      <FriendsContext.Provider value={data}>
      {children}
      </FriendsContext.Provider>
  );
};

export default FriendsProvider;
