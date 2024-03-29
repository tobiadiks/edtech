import * as React from "react";

const LoadingButton = () => {
  return (
    <button
      disabled
      type={'button'}
      className="bg-emerald-50 my-4 font-inter focus:outline-none text-black p-4 font-semibold text-center rounded-lg w-full "
    >
      Loading... 
    </button>
  );
};

export default LoadingButton;
