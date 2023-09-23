import { HtmlProps } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import * as React from "react";

const CurrentCourseCard = (props: {
    title?: string;
    onclick?: any;
    started?: boolean;
}) => {
    const route= useRouter()
    return (
        <div>
            <div className="bg-gray-100 rounded-xl font-inter  flex flex-col justify-between p-2 mx-0 md:mx-1 my-1">
                <div className="w-full  flex flex-row-reverse">
                    {props.started ?
                        <div className="h-8 w-8  md:mx-0 ring-2 ring-emerald-400 bg-white my-auto rounded-full md:mr-2"></div>
                        :
                        <div className="font-semibold  text-sm cursor-pointer mb-2 mr-2 bg-white px-2 py-1 rounded-full">START</div>
                    }

                    {/* <div className="font-semibold my-auto text-sm cursor-pointer">ENROLL</div> */}
                </div>
                <div className="mt-24 ">
                </div>
            </div>
            <div className=" p-2">
                <div onClick={()=>route.push('/student/learn/v/123')} className="cursor-pointer text-sm">{props.title}</div>
            </div>
        </div>
    );
};

export default CurrentCourseCard;
