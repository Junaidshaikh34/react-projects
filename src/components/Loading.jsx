import React from "react";
const Loading = () => {
  return (
    <div className="loading-inner d-flex align-items-center justify-content-center">
      <div className="h1 font-weight-bold text-warning d-flex align-items-baseline">
        Loading
        <div className="loading-dot ml-1 bg-warning"></div>
        <div className="loading-dot ml-1 bg-warning"></div>
        <div className="loading-dot ml-1 bg-warning"></div>
      </div>
    </div>
  );
};
export default Loading;
