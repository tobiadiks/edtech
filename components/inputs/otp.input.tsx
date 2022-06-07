import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const OtpInput = (props: {
  title?: string;
  label?: string;
  register?:any;
  placeholder?: string;
  value?: string;
  type?: string;
  required?: boolean;
  hint?: string;
}) => {
  return (
    <div className="my-4 px-0 w-full font-inter flex flex-col ">
      
      <div className="grid gap-1 grid-cols-6">
        <input
          className=" h-14 border-2  border-gray-400 focus:border-black  rounded-lg text-center text-2xl font-semibold"
          minLength={1}
          maxLength={1}
          type="text"
          {...props.register('0',{required:props.required})}
        />
        <input
          className=" h-14 border-2  border-gray-400 focus:border-black  rounded-lg text-center text-2xl font-semibold"
          minLength={1}
          maxLength={1}
          type="text"
          {...props.register('1',{required:props.required})}
        />
        <input
          className=" h-14 border-2  border-gray-400 focus:border-black  rounded-lg text-center text-2xl font-semibold"
          minLength={1}
          maxLength={1}
          type="text"
          {...props.register('2',{required:props.required})}
        />
        <input
          className=" h-14 border-2  border-gray-400 focus:border-black  rounded-lg text-center text-2xl font-semibold"
          minLength={1}
          maxLength={1}
          type="text"
          {...props.register('3',{required:props.required})}
        />
        <input
          className=" h-14 border-2  border-gray-400 focus:border-black  rounded-lg text-center text-2xl font-semibold"
          minLength={1}
          maxLength={1}
          type="text"
          {...props.register('4',{required:props.required})}
        />
        <input
          className=" h-14 border-2  border-gray-400 focus:border-black  rounded-lg text-center text-2xl font-semibold"
          minLength={1}
          maxLength={1}
          type="text"
          {...props.register('5',{required:props.required})}
        />
      </div>
    </div>
  );
};

export default OtpInput;
