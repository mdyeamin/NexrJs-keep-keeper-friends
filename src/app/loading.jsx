"use client";

import { FourSquare } from "react-loading-indicators";

const loading = () => {
  return (
   <div className="min-h-screen flex items-center justify-center">
  <FourSquare color="#32cd32" size="large" text="" textColor="" />
</div>
  );
};

export default loading;
