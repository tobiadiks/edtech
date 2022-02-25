import { Line, ResponsiveLine, ResponsiveLineCanvas } from "@nivo/line";
import { Pie } from "@nivo/pie";
import * as React from "react";
import cn from 'classnames'



const CareerPathProgressCard = (props: {
    title?: string;
    onclick?: any;
    started?: boolean;
}) => {

    const [isExpand, setIsExpand] = React.useState(false)
    return (
        <div >
            <div className="bg-white rounded-xl font-inter  flex flex-col justify-between p-2 mx-0 ">
                <div className="w-full  flex flex-row justify-between">
                    <div className="flex flex-col">
                        <div className="text-xs text-gray-400">Career Path Progress</div>
                        <div className="font-medium  text-sm">QA Analyst <span className="text-gray-400">Track</span></div>
                    </div>
                    <div className="text-xs my-auto text-green-400 cursor-pointer">Change Track</div>
                </div>
                <div className="mt-2 w-full flex flex-col ">


                    <div className=" text-sm  my-auto">
                        <div className="flex justify-between my-2">
                            <div className="text-gray-400 my-auto  w-3/4"><span className="text-black">8/8</span> Course taken</div>
                            <div className="h-3 flex  rounded-lg bg-green-50 mr-2 my-auto w-1/4">
                                <div className="h-full w-[100%] rounded-lg bg-green-600"></div>
                                <div className="h-full w-0  bg-black"></div>
                            </div>
                        </div>
                        <div className="flex justify-between my-2">
                            <div className="text-gray-400 my-auto w-3/4"><span className="text-black">0/21</span> Completed Quiz</div>
                            <div className="h-3 flex  rounded-lg bg-green-50 mr-2 my-auto w-1/4">
                                <div className="h-full w-[0%] rounded-l-lg bg-green-600"></div>
                                <div className="h-full w-1  bg-black"></div>
                            </div>
                        </div>

                        <div className={cn("md:flex justify-between my-2 ", isExpand ? 'flex' : 'hidden')}>
                            <div className="text-gray-400 my-auto"><span className="text-black w-3/4">31/51</span> Resource Check&apos;</div>
                            <div className="h-3 flex  rounded-lg bg-green-50 mr-2 my-auto w-1/4">
                                <div className="h-full w-[85%] rounded-l-lg bg-green-600"></div>
                                <div className="h-full w-1  bg-black"></div>
                            </div>
                        </div>

                        <div className={cn("md:flex justify-between my-2 ", isExpand ? 'flex' : 'hidden')}>
                            <div className="text-gray-400 my-auto  w-3/4"><span className="text-black">5/10</span> Resource Projects</div>
                            <div className="h-3 flex  rounded-lg bg-green-50 mr-2 my-auto w-1/4">
                                <div className="h-full w-[50%] rounded-l-lg bg-green-600"></div>
                                <div className="h-full w-1  bg-black"></div>
                            </div>
                        </div>
                        <div className="text-center text-xs md:hidden cursor-pointer text-green-400" onClick={() => { setIsExpand(!isExpand) }}>{isExpand ? 'close' : 'expand'}</div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default CareerPathProgressCard;
