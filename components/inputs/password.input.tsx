import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const PasswordInput = (props: {
  title?: string;
  label?: string;
  placeholder?: string;
  required?:boolean;
  value?: string;
  
  hint?: string;
}) => {
  return (
    <div className="my-4 px-2 flex flex-col border rounded-lg w-full">
      <label className="text-gray-400 py-1 font-medium text-sm">
        {props.label}
      </label>
      <input
        className="focus:outline-none py-1 placeholder-gray-400 text-gray-900"
        type={'text'}
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
};

export default PasswordInput;
