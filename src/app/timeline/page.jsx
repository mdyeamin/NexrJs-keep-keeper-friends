import React from 'react';
import { HiHome } from 'react-icons/hi';
import TimeLineCard from '../components/Shared/TimeLineCard';

const TimeLine = () => {

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-[#1a2b3b]">Timeline</h1>
        <div className="flex items-center gap-1 text-slate-500 cursor-pointer hover:text-slate-800">
          <HiHome className="text-xl" />
          <span className="font-medium">Home</span>
        </div>
      </div>

   

      {/* Timeline Items */}
      <div className="space-y-4">
      
          <TimeLineCard/>
        
      </div>
    </div>
    );
};

export default TimeLine;