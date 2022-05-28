import { HtmlProps } from "next/dist/shared/lib/utils";
import * as React from "react";

const CurrentCourseCard = (props: {
    title?: string;
    onclick?: any;
    started?: boolean;
}) => {
    return (
        <div>
            <div className="bg-gray-100 rounded-xl font-inter  flex flex-col justify-between p-2 mx-0 md:mx-1 my-1">
                <div className="w-full  flex flex-row-reverse">
                    {props.started ?
                        <div className="h-8 w-8  md:mx-0 ring-2 ring-green-400 bg-white my-auto rounded-full md:mr-2"></div>
                        :
                        <div className="font-semibold  text-sm cursor-pointer mb-2 mr-2 ">START</div>
                    }

                    {/* <div className="font-semibold my-auto text-sm cursor-pointer">ENROLL</div> */}
                </div>
                <div className="mt-24 ">
                </div>
            </div>
            <div className=" p-2">
                <div className=" text-sm">{props.title}</div>
            </div>
        </div>
    );
};

export default CurrentCourseCard;
