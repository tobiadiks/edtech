import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const CourseCard = (props: {
  title?: string;
  onclick?: any;
  type?: any;
  count: string;
}) => {
  return (
    <div className="relative  " onClick={props.onclick}>
      <div className="h-3 w-1/2 absolute bottom-1/3 blur-2xl left-1/2 transform -translate-x-1/2 -z-10 bg-green-300"></div>
    <div className="bg-green-100 h-24 rounded-lg font-inter  flex flex-col justify-between p-2 mx-0 md:mx-1 my-1">
      <div className="w-full  flex flex-row  justify-between">
      <div className="h-8 w-8 md:mx-0  bg-gray-100 border border-white my-auto rounded-full md:mr-2"></div>
        <div className="font-semibold my-auto text-sm px-2 py-1 bg-white rounded-full cursor-pointer">ENROLL</div>
      </div>
    </div>

    <div className="mt-4">
        <div className="font-bold text-sm">{props.title}</div>
        <div className="text-xs text-gray-400">{props.count} Learners</div>
      </div>
    </div>
  );
};

export default CourseCard;
