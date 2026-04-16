"use client"
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const BackButton = () => {
    return (
         
          <div className="max-w-6xl mx-auto mb-6">
            <button 
              onClick={() => window.history.back()} 
              className="group flex items-center gap-2 text-slate-500 hover:text-[#244d3f] transition-all duration-300"
            >
              <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm group-hover:border-emerald-200 group-hover:shadow-md transition-all">
                <FiArrowLeft className="text-xl" />
              </div>
              <span className="font-bold text-sm tracking-wide">Back to Dashboard</span>
            </button>
          </div>
    );
};

export default BackButton;