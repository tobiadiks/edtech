import { Line, ResponsiveLine, ResponsiveLineCanvas } from "@nivo/line";
import * as React from "react";



const CertProgressCard = (props: {
    title?: string;
    onclick?: any;
    started?: boolean;
}) => {
    return (
        <div >
            <div className="bg-white rounded-xl font-inter  flex flex-col justify-between p-2 mx-0 ">
                <div className="w-full  flex flex-col">
                    <div className="text-xs text-gray-400">Current Certification Progress</div>
                    <div className="font-semibold  text-sm">12 Certs. <span className="text-gray-400">earned so far</span></div>
                </div>
                <div className="mt-2 w-full ">
                    <div className="flex">
                        <div className="h-12 w-12 ring-2 rounded-full ring-emerald-400 bg-emerald-50"></div>
                        <div className="my-auto px-1">
                            <div className="text-sm">Building Systems in Go</div>
                            <div className="text-xs text-gray-400">15% Left</div>
                        </div>
                    </div>

                    <div className="flex mt-1 w-full">
                        <div className="h-12 w-12 ring-2 rounded-full ring-emerald-400 bg-emerald-50"></div>
                        <div className="my-auto px-1">
                            <div className="text-sm">Arch. Math for Designers</div>
                            <div className="text-xs text-gray-400">65% Left</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row-reverse">
                    <div className="text-emerald-400 text-sm cursor-pointer">See all</div>
                </div>
            </div>

        </div>
    );
};

export default CertProgressCard;
