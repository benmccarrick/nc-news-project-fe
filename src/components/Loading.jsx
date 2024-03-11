import React from "react";
import { ProgressBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loading">
      <h2>
        Loading
        <br></br>
        <ProgressBar
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </h2>
    </div>
  );
};

export default Loading;
