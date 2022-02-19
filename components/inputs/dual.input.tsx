import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const DualInput = (props: {
  first_label?: string;
  first_placeholder?: string;
  first_value?: string;
  first_type?: string;
  first_required?: boolean;
  first_name?: string;
  first_register?: any;
  second_label?: string;
  second_placeholder?: string;
  second_value?: string;
  second_type?: string;
  second_required?: boolean;
  second_name?: string;
  second_register?: any;

  hint?: string;
}) => {
  return (
    <div className="my-4 font-inter flex flex-col w-full">
      <div className="flex flex-row">
        <div className="border-y rounded-l-lg border-l px-2 w-1/2">
          <label className="text-gray-400 py-1 font-medium text-sm">
            {props.first_label}
          </label>
          <input
            className="focus:outline-none w-full py-1 placeholder-gray-400 text-gray-900"
            type={props.first_type}
            {...props.first_register(props.first_name, { required: props.first_required })}
            placeholder={props.first_placeholder}
            
          />
        </div>
        <div className="border-y rounded-r-lg border-l border-r px-2 w-1/2">
          <label className="text-gray-400 py-1 font-medium text-sm">
            {props.second_label}
          </label>
          <input
            className="focus:outline-none w-full py-1 placeholder-gray-400 text-gray-900"
            type={props.second_type}
            {...props.second_register(props.second_name, { required: props.second_required })}
            placeholder={props.second_placeholder}
            
          />
        </div>
      </div>
      {/* hint */}
      {props.hint ? (
        <div className="text-xs mt-1 text-gray-400">{props.hint}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DualInput;
