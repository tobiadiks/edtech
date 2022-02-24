import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const SelectInput = (props: {
  title?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onchange?: any;
  required?: boolean;
  register?: any;
  name?: string;
  hint?: string;
}) => {
  return (
    <div className="my-4 px-2 font-inter w-full flex flex-col border rounded-lg">
      <label className="text-gray-400 py-1 font-medium text-sm">
        {props.label}
      </label>
      <select
        className="focus:outline-none py-1 bg-transparent placeholder-gray-400 text-gray-900"
        {...props.register(props.name, { required: props.required })}
        placeholder={props.placeholder}
        onChange={props.onchange}
        required={props.required}
      >
        <option value={'92485dfc-3b42-414c-b577-63e089b2b538'}>Nigeria</option>
        {/* <option>South Africa</option> */}
      </select>
    </div>
  );
};

export default SelectInput;
