import * as React from "react";

const PasswordInput = (props: {
  title?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  type?: string;
  onchange?: any;
  hint?: string;
}) => {
  return (
    <div className="my-4 px-2 font-inter flex flex-col border rounded-lg w-full">
      <label className="text-gray-400 py-1 font-medium text-sm">
        {props.label}
      </label>
      <input
        className="focus:outline-none py-1 placeholder-gray-400 text-gray-900"
        type={props.type ? props.type : "password"}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onchange}
        required={props.required}
      />
    </div>
  );
};

export default PasswordInput;
