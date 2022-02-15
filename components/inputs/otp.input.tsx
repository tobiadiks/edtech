import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const OtpInput = (props: {
  title?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  required?: boolean;
  hint?: string;
}) => {
  return (
    <div className="my-4 px-0 w-full flex flex-col ">
      <div className="flex justify-even">
        <input
          className="w-1/6 h-14 border-2  border-gray-400 focus:border-black rounded-lg text-center text-2xl font-medium"
          minLength={1}
          maxLength={1}
          type="text"
        />
        <input
          className="w-1/6 h-14 border-2  border-gray-400 focus:border-black  rounded-lg text-center text-2xl font-medium"
          minLength={1}
          maxLength={1}
          type="text"
        />
        <input
          className="w-1/6 h-14 border-2  border-gray-400 focus:border-black  rounded-lg text-center text-2xl font-medium"
          minLength={1}
          maxLength={1}
          type="text"
        />
        <input
          className="w-1/6 h-14 border-2  border-gray-400 focus:border-black  rounded-lg text-center text-2xl font-medium"
          minLength={1}
          maxLength={1}
          type="text"
        />
        <input
          className="w-1/6 h-14 border-2  border-gray-400 focus:border-black  rounded-lg text-center text-2xl font-medium"
          minLength={1}
          maxLength={1}
          type="text"
        />
        <input
          className="w-1/6 h-14 border-2  border-gray-400 focus:border-black  rounded-lg text-center text-2xl font-medium"
          minLength={1}
          maxLength={1}
          type="text"
        />
      </div>
    </div>
  );
};

export default OtpInput;
