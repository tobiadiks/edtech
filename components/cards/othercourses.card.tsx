import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const OtherCourseCard = (props: {
    title?: string;
    onclick?: any;
    // started?: boolean;
    count?: string
}) => {
    return (
        <div>
            <div className="bg-gray-100 rounded-xl font-inter  flex flex-col justify-between p-2 mx-0 md:mx-1 my-1">
                <div className="w-full  flex flex-row-reverse">
                    {/* {props.started ?
                        <div className="h-8 w-8  md:mx-0 border-2 border-green-400 bg-white my-auto rounded-full md:mr-2"></div>
                        :
                        <div className="font-semibold  text-sm cursor-pointer mb-2  ">ENROLL</div>
                    } */}

                    {/* <div className="font-semibold my-auto text-sm cursor-pointer">ENROLL</div> */}
                </div>
                <div className="mt-32 ">
                </div>
            </div>
            <div className=" p-2">
                <div className=" text-sm">{props.title}</div>
                <div className=" text-sm text-gray-400">{props.count} Active Learners</div>
            </div>

        </div>
    );
};

export default OtherCourseCard;
