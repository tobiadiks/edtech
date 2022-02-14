import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const CourseCard = (props: { title: string; onclick: any; type: any }) => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="w-full flex flex-row justify-between">
        <input type={"radio"} />
        <div>Enroll</div>
      </div>
    </div>
  );
};

export default CourseCard;
