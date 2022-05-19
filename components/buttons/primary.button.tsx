import * as React from "react";

const PrimaryButton = (props: {
  title?: string;
  onclick?: any;
  type?: any;
}) => {
  return (
    <button
      onClick={props.onclick}
      type={props.type ? props.type : "button"}
      className="bg-black my-4 font-inter focus:outline-none text-white p-4 font-semibold text-center rounded-lg w-full hover:bg-white hover:text-green-400 hover:border hover:border-green-400"
    >
      {props.title}
    </button>
  );
};

export default PrimaryButton;
