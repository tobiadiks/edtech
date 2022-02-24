import { Line, ResponsiveLine, ResponsiveLineCanvas } from "@nivo/line";
import * as React from "react";



const LearningChartCard = (props: {
    title?: string;
    onclick?: any;
    started?: boolean;
}) => {
    return (
        <div>
            <div className="bg-white rounded-xl font-inter  flex flex-col justify-between p-2 mx-0 ">
                <div className="w-full  flex flex-col">
                    <div className="text-xs text-gray-400">Total Learning Hours</div>
                    <div className="font-medium  text-sm">36 Hours <span className="text-gray-400">this week</span></div>
                </div>
                <div className="mt-2 w-full ">

                    <Line
                        height={100}
                        width={200}
                        useMesh={false}
                        enableGridX={false}
                        enableGridY={false}
                        data={[
                            {
                                id: 'daily learns',
                                data: [
                                    { x: 'M', y: 7 },
                                    { x: 'T', y: 5 },
                                    { x: 'W', y: 8 },
                                    { x: 'T', y: 8 },
                                    { x: 'F', y: 16 },
                                    { x: 'S', y: 2 },
                                    { x: 'S', y: 8 },
                                ]
                            }
                        ]}


                    />
                </div>
            </div>

        </div>
    );
};

export default LearningChartCard;
