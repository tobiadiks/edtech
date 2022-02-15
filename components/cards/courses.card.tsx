import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const CourseCard = (props: {
  title?: string;
  onclick?: any;
  type?: any;
  count: string;
}) => {
  return (
    <div className="bg-gray-100 rounded-md  flex flex-col p-2 mx-0 md:mx-1 my-1">
      <div className="w-full h-full flex flex-row justify-between">
        <input className="w-6 h-6 bg-white " type={"radio"} />
        <div className="font-medium text-sm">Enroll</div>
      </div>
      <div className="mt-16">
        <div className="font-bold text-sm">Architectural Design</div>
        <div className="text-xs text-gray-400">45,637 Learners</div>
      </div>
    </div>
  );
};

export default CourseCard;
