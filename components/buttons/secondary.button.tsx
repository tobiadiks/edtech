import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const SecondaryButton = (props: {
  title?: string;
  onclick?: any;
  type?: any;
}) => {
  return (
    <button
      onClick={props.onclick}
      type={props.type ? props.type : "button"}
      className="bg-white my-4 font-inter focus:outline-none text-black p-4 text-center border-2 border-green-200 rounded-lg font-medium w-full"
    >
      {props.title}
    </button>
  );
};

export default SecondaryButton;
