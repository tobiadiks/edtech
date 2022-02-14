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
      <div className="flex">
        <input
          className="w-14 h-14 border-2  border-black rounded-lg text-center text-2xl font-medium"
          min={0}
          max={9}
          type="number"
        />
        <input
          className="w-14 h-14 border-2  border-black rounded-lg text-center text-2xl font-medium"
          min={0}
          max={9}
          type="number"
        />
        <input
          className="w-14 h-14 border-2  border-black rounded-lg text-center text-2xl font-medium"
          min={0}
          max={9}
          type="number"
        />
        <input
          className="w-14 h-14 border-2  border-black rounded-lg text-center text-2xl font-medium"
          min={0}
          max={9}
          type="number"
        />
        <input
          className="w-14 h-14 border-2  border-black rounded-lg text-center text-2xl font-medium"
          min={0}
          max={9}
          type="number"
        />
        <input
          className="w-14 h-14 border-2  border-black rounded-lg text-center text-2xl font-medium"
          min={0}
          max={9}
          type="number"
        />
      </div>
    </div>
  );
};

export default OtpInput;
