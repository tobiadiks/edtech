import * as React from "react";

const PasswordInput = 
  (
    props: {
      title?: string;
      name?:string;
      register?:any;
      required?: boolean;
      label?: string;
      placeholder?: string;
      
      value?: string;
      type?: string;
      onchange?: any;
      hint?: string;
      
    }
  ) => {
    return (
      <div className="my-4 px-2 font-inter flex flex-col border rounded-lg w-full">
        <label className="text-gray-400 py-1 font-semibold text-sm">
          {props.label}
        </label>
        <input
           {...props.register(props.name,{required:props.required})}
          className="focus:outline-none py-1 placeholder-gray-400 text-gray-900"
          type={props.type ? props.type : "password"}
          placeholder={props.placeholder}
          onChange={props.onchange}
          
        />
      </div>
    );
  }
;



export default PasswordInput;
