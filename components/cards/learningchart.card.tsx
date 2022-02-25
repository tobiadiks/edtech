import { Line, ResponsiveLine, ResponsiveLineCanvas } from "@nivo/line";
import * as React from "react";



const LearningChartCard = (props: {
    title?: string;
    onclick?: any;
    started?: boolean;
}) => {
    return (
        <div >
            <div className="bg-white rounded-xl font-inter  flex flex-col justify-between p-2 mx-0 ">
                <div className="w-full  flex flex-col">
                    <div className="text-xs text-gray-400">Total Learning Hours</div>
                    <div className="font-medium  text-sm">36 Hours <span className="text-gray-400">this week</span></div>
                </div>
                <div className="mt-2 w-full h-32 ">

                    <ResponsiveLine
                        enablePoints={false}
                        isInteractive
                        enableSlices='x'
                        margin={{ top: 5, right: 10, bottom: 20, left: 10 }}
                        colors="#52a997"

                        useMesh

                        axisLeft={null}
                        curve="linear"
                        crosshairType="x"
                        motionConfig={'wobble'}
                        enableGridX={false}
                        enableGridY={false}
                        enableArea
                        areaOpacity={0.05}
                        axisBottom={{
                            tickSize: 0
                        }}
                        data={[
                            {
                                id: 'Hours',
                                data: [
                                    { x: 'Mon', y: 7 },
                                    { x: 'Tue', y: 5 },
                                    { x: 'Wed', y: 8 },
                                    { x: 'Thu', y: 8 },
                                    { x: 'Fri', y: 16 },
                                    { x: 'Sat', y: 2 },
                                    { x: 'Sun', y: 8 },
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