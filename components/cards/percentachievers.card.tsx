import { Line, ResponsiveLine, ResponsiveLineCanvas } from "@nivo/line";
import { Pie, ResponsivePie } from "@nivo/pie";
import * as React from "react";
import cn from 'classnames'



const PercentageAchieversCard = (props: {
    title?: string;
    onclick?: any;
    started?: boolean;
}) => {



    return (
        <div >
            <div className="bg-white rounded-xl font-inter  flex flex-col justify-between p-2 mx-0 ">
                <div className="w-full  flex flex-col">
                    <div className="text-xs text-gray-400">Achieved by only 12% of our learners</div>
                    <div className="font-semibold  text-sm">34 Courses <span className="text-gray-400">Taken</span></div>
                </div>
                <div className="mt-2 w-full h-32 flex  ">
                    <div className="w-1/2 h-full">
                        <ResponsivePie

                            margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                            sortByValue
                            borderWidth={2}
                            enableArcLabels={false}
                            motionConfig="wobble"
                            activeOuterRadiusOffset={4}
                            enableArcLinkLabels={false}
                            borderColor="black"
                            colors={{ datum: 'data.color' }}
                            data={[
                                {
                                    'id': 'In Progress',
                                    'label': 'In Progress',
                                    'value': 8,
                                    'color': '#fef3dc'
                                },
                                {
                                    'id': 'Completed',
                                    'label': 'Completed',
                                    'value': 21,
                                    'color': '#52a977'
                                },
                                {
                                    'id': 'Enrolled',
                                    'label': 'Enrolled',
                                    'value': 11,
                                    'color': '#ffebe7'
                                },
                            ]
                            }

                        />
                    </div>

                    <div className=" text-xs w-1/2 ml-2  my-auto">
                        <div className="flex my-2 flex-wrap">
                            <div className="h-4 w-4 rounded-full bg-[#fef3dc] mr-2 my-auto"></div>
                            <div className="text-gray-400 my-auto"><span className="text-black">8</span> In Progress</div>
                        </div>
                        <div className="flex my-2 flex-wrap">
                            <div className="h-4 w-4 rounded-full bg-[#52a997] mr-2 my-auto"></div>
                            <div className="text-gray-400 my-auto"><span className="text-black">21</span> Completed</div>
                        </div>

                        <div className="flex  my-2 flex-wrap">
                            <div className="h-4 w-4 rounded-full bg-[#ffebe7] mr-2 my-auto"></div>
                            <div className="text-gray-400 my-auto"><span className="text-black">11</span> Enrolled</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row-reverse mt-1">
                    <div className="text-green-400 text-sm cursor-pointer">See all course</div>
                </div>
            </div>

        </div>
    );
};

export default PercentageAchieversCard;
