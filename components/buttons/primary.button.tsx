import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const PrimaryButton = (props: { title: string; onclick: any; type: any }) => {
  return (
    <button
      onClick={props.onclick}
      type={props.type ? props.type : "button"}
      className="bg-black my-4 text-white p-4 font-medium text-center rounded-lg w-full"
    >
      {props.title}
    </button>
  );
};

export default PrimaryButton;
