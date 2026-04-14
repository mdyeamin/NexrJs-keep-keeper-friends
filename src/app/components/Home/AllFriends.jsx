import React from "react";
import FriendCard from "./FriendCard";

const AllFriends = async () => {
  const res = await (await fetch(
    "https://raw.githubusercontent.com/mdyeamin/friends-data/refs/heads/main/keepkeper",
  )).json();
const friends = await res.friends;

  return (
    <div className="bg-[#f8fafc] p-8 min-h-screen">
      <h2 className="text-2xl font-bold text-[#1e293b] mb-8">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          friends.map(friend=><FriendCard key={friend.id} friend={friend}/>)
        }
        
      </div>
    </div>
  );
};

export default AllFriends;
