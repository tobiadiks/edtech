import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const TextInput = (props: {
  title?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  required?: boolean;
  onchange?: any;
  name?: string;
  register?: any;
  hint?: string;
}) => {
  return (
    <div className="my-4 px-2 font-inter w-full flex flex-col border rounded-lg">
      <label className="text-gray-400 py-1 font-medium text-sm">
        {props.label}
      </label>
      <input
        className="focus:outline-none py-1 placeholder-gray-400 text-gray-900"
        type={props.type}
        {...props.register(props.name, { required: props.required })}
        placeholder={props.placeholder}
        onChange={props.onchange}
        required={props.required}
      />
    </div>
  );
};

export default TextInput;
