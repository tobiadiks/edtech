import * as React from "react";

const LoadingButton = () => {
  return (
    <button
      disabled
      type={"button"}
      className="bg-green-50 my-4 font-inter focus:outline-none text-black p-4 font-medium text-center rounded-lg w-full "
    >
      Loading... 
    </button>
  );
};

export default LoadingButton;
