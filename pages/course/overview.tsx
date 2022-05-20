import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import CourseCard from "@components/cards/courses.card";
import HeaderNavigation from "@components/navigations/header.navigation";
import SecondaryButton from "@components/buttons/secondary.button";

//onboard the user to pick a career
const CareerSummaryPage: NextPage = () => {
    return (
        <>
            <HeaderNavigation />
            <div className="w-full font-inter min-h-screen lg:mt-16  mt-24 flex flex-col px-4 md:px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row  w-full mt-4">
                    <div className=" flex flex-col">
                        <div className="font-semibold text-black">
                            Go Back to Recommended Paths
                        </div>
                        <div className="font-semibold text-xs text-gray-400">
                            All your badges and certs will appear here as you earn them on Learnali
                        </div>
                    </div>


                </div>



                <div className="mt-4 w-full  ">

                    {/* card */}
                    <div className="shadow relative  bg-white  lg:py-8 lg:px-8 px-4 py-4 overflow-hidden border border-green-400 rounded-lg">
                        <div className="font-bold text-xl">Visual Quality Assurance</div>
                        <div className="grid lg:grid-cols-4 grid-cols-2 my-4 lg:w-1/2 gap-2  justify-between">
                            <div className="text-xs ">
                                <div className="text-gray-500">Avg. Path Rating</div>
                                <div className="">4.7(23 Ratings)</div>
                            </div>

                            <div className="text-xs">
                                <div>Courses</div>
                                <div className="text-green-400">7 Courses</div>
                            </div>

                            <div className="text-xs">
                                <div>Career</div>
                                <div className="text-green-400">Beginner</div>
                            </div>

                            <div className="text-xs">
                                <div>Est. Completion</div>
                                <div className="text-green-400">62 Hours</div>
                            </div>

                            <div className="bg-green-400 blur-3xl h-full w-8 absolute top-0 right-0"></div>
                        </div>




                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                        <div>
                            <div>
                                <div className="font-semibold text-gray-500">About this Path</div>
                                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi accusantium officia quod. Id, pariatur nesciunt impedit minima magni sint odit animi modi eos, rerum blanditiis architecto eius quas repellendus...<span className="text-green-500">Read more</span></div>
                            </div>

                            <div className="flex justify-between my-4">
                                {/* images */}
                                <div className="relative flex">
                                    <div className=" w-8 h-8 border border-white bg-gray-300 mx-auto mb-2 rounded-full"></div>
                                    <div className=" w-8 h-8 border absolute top-0 left-2 border-white  transform   bg-gray-300 mx-auto mb-2 rounded-full"></div>
                                    <div className=" w-8 h-8 border absolute top-0 left-4 border-white   text-white  bg-green-400 mx-auto mb-2 rounded-full text-center text-xs flex font-semibold"><div className="mx-auto  my-auto">+2</div></div>
                               
                                    <div className="text-xs ml-8">
                                    <div className="text-gray-500">Path Instructors</div>
                                    <div className="">Matt, 2+</div>
                                </div> </div>

                                <div>
                                    <div></div>
                                    <div className="text-xs">
                                        <div className="text-gray-500">Offered by</div>
                                        <div>Havard Business School</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* s2 */}
                        <div>
                            <div>
                                <div className="font-semibold text-gray-500">What you get</div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>










                </div>
            </div>
        </>
    );
};

export default CareerSummaryPage;
