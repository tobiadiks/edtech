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
      className="bg-white hover:shadow-lg shadow-emerald-200 my-4 font-inter focus:outline-none  p-4 text-center border border-emerald-400 text-emerald-400 rounded-lg font-semibold w-full"
    >
      {props.title}
    </button>
  );
};

export default SecondaryButton;
