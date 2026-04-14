import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  const { name, picture, id, days_since_contact, status, tags } = friend;
  return (
    <Link
      href={`friend/33`}
      className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-md overflow-hidden"
    >
      {/* Top Border Animation - Left side */}
      <span className="absolute top-0 left-0 h-[3px] w-1/2 bg-[#244d3f] transition-transform duration-500 scale-x-0 origin-left group-hover:scale-x-100"></span>

      {/* Top Border Animation - Right side */}
      <span className="absolute top-0 right-0 h-[3px] w-1/2 bg-[#244d3f] transition-transform duration-500 scale-x-0 origin-right group-hover:scale-x-100"></span>

      <Image
        width={100}
        height={100}
        src={picture}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-4 transition-transform duration-300 group-hover:rotate-3"
      />

      <h3 className="text-lg font-bold text-[#1e293b]">{name}</h3>
      <p className="text-gray-400 text-xs mb-3">{days_since_contact}d ago</p>

      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#dcfce7] text-[#166534] text-[10px] font-bold px-3 py-1 rounded-full uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`
    ${status.toLowerCase() === "almost due" && "bg-[#efad44]"}
    ${status.toLowerCase() === "on-track" && "bg-[#244d3f]"}
    ${status.toLowerCase() === "overdue" && "bg-[#ef4444]"}
    text-[10px] text-white font-bold px-4 py-1 rounded-full transition-colors duration-300`}
      >
        {status}
      </span>
    </Link>
  );
};

export default FriendCard;
