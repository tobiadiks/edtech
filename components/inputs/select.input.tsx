import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const SelectInput = (props: {
  title: string;
  label: string;
  placeholder: string;
  value: string;
  type: string;
  required:boolean;
  hint: string;
}) => {
  return (
    <div className="my-4 px-2 w-full flex flex-col border rounded-lg">
      <label className="text-gray-400 py-1 font-medium text-sm">
        {props.label}
      </label>
      <select
        className="focus:outline-none py-1 placeholder-gray-400 text-gray-900"
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
      >
<option>
 Select
</option>
<option>
  South Africa
</option>
      </select>
    </div>
  );
};

export default SelectInput;
