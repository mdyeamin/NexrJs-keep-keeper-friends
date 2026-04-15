"use client";
import { FriendsContext } from "@/app/contexts/FriendsProvider";
import React, { useContext, useState } from "react";

const TimeLineCard = () => {
  const { friendInfo } = useContext(FriendsContext);
  const [filterType, setFilterType] = useState(friendInfo);
  console.log(friendInfo);

  const handleTimelineByType = (e) => {
    if (e.target.value === "All") {
      setFilterType([...friendInfo],"all log");
    }
    if (e.target.value === "Call") {
      const call = friendInfo.filter((info) => info.status === "call");
      console.log(call, "call log");
      setFilterType(call);
    }
    if (e.target.value === "Text") {
      const text = friendInfo.filter((info) => info.status === "text");
      console.log(text, "text log");
      setFilterType(text);
    }
    if (e.target.value === "Video") {
      const video = friendInfo.filter((info) => info.status === "video");
      console.log(video, "video log");
      setFilterType(video);
    }
  };
  handleTimelineByType
  console.log(filterType);

  return (
    <>
      <div className="div">
        {/* Filter Dropdown */}
        <div className="mb-8">
          <select
            onChange={handleTimelineByType}
            className="w-full md:w-64 p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            <option>All</option>
            <option>Call</option>
            <option>Text</option>
            <option>Video</option>
          </select>
        </div>
        {filterType.map((timeline, i) => {
          return (
            <div
              key={i}
              className="flex items-center p-5 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-50 rounded-full text-2xl">
                {timeline.icon}
              </div>

              <div className="ml-4 flex-grow">
                <div className="flex flex-wrap items-center gap-1">
                  <span className="font-bold text-emerald-800 text-lg">
                    {timeline.status}
                  </span>
                  <span className="text-slate-500">With {timeline.name}</span>
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {timeline.fullDate}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TimeLineCard;
