"use client";
import { useContext } from "react";
import { FriendsContext } from "../contexts/FriendsProvider";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const States = () => {
  const { friendInfo } = useContext(FriendsContext);

  const call = friendInfo.filter((call) => call.status === "call");
  const text = friendInfo.filter((text) => text.status === "text");
  const video = friendInfo.filter((video) => video.status === "video");
  //   console.log(call.length, "call data");
  // console.log(text, "text data");
  // console.log(video, "video data");

  const data = [
    { name: "call", value: call.length, fill: "#0088FE" },
    { name: "text", value: text.length, fill: "#00C49F" },
    { name: "video", value: video.length, fill: "#FF8042" },
  ];

  return (
  
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 w-full max-w-6xl mx-auto p-4 py-16 min-h-[400px]">
  {/* Left Side: Chart Container */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <PieChart
      style={{
        width: "100%",
        maxWidth: "400px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius=""
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        isAnimationActive={true}
      />
      <Tooltip />
      <Legend
        verticalAlign="bottom"
        align="center"
        iconType="square"
        wrapperStyle={{
          paddingTop: "40px",
        }}
      />
    </PieChart>
  </div>

  {/* Right Side: Data Cards Container */}
  <div className="w-full lg:w-1/2">
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-8 ml-1">
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">
            Interaction Insights
          </h2>
        </div>
        <p className="text-sm text-slate-500 font-medium">
          Detailed breakdown of your timeline activities and their frequencies.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 w-full">
        {data.map((d, i) => {
          return (
            <div
              key={i}
              className="group relative flex items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Left Color Accent Bar */}
              <div
                className="absolute left-0 top-0 h-full w-1.5 transition-all duration-300 group-hover:w-2"
                style={{ backgroundColor: d.fill }}
              ></div>

              {/* Icon/Indicator Circle */}
              <div
                className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: `${d.fill}20`, color: d.fill }}
              >
                <span className="text-xl font-bold">#</span>
              </div>

              <div className="relative z-10 flex flex-col">
                <span
                  className="text-xs font-bold uppercase tracking-wider mb-0.5 opacity-80"
                  style={{ color: d.fill }}
                >
                  {d.name}
                </span>

                <div className="flex items-baseline gap-1.5">
                  <h6 className="text-2xl font-black text-slate-800">
                    {d.value}
                  </h6>
                  <span className="text-sm font-medium text-slate-400">
                    times recorded
                  </span>
                </div>
              </div>

              {/* Animated Background Glow */}
              <div
                className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-[6] transition-all duration-700 ease-in-out"
                style={{ backgroundColor: d.fill }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</div>
  );
};

export default States;
