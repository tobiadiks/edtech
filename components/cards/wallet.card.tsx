import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const WalletCard = (props: {
  title?: string;
  onclick?: any;
  type?: any;
  count: string;
}) => {
  return (
    <div className="bg-gray-100 rounded-md font-inter  flex flex-col justify-between p-2 mx-0 md:mx-1 my-1">
      <div className="w-full  flex flex-row  justify-between">
      <div className="h-8 w-8 md:mx-0  bg-gray-300 my-auto rounded-full md:mr-2"></div>
        <div className="font-medium my-auto text-sm cursor-pointer">ENROLL</div>
      </div>
      <div className="mt-16">
        <div className="font-bold text-sm">{props.title}</div>
        <div className="text-xs text-gray-400">{props.count} Learners</div>
      </div>
    </div>
  );
};

export default WalletCard;
