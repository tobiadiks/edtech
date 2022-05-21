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
                    <div className=" flex flex-col mx-auto text-center my-4">
                        <div className="font-semibold text-black">
                            Recommended Paths and Breakdown
                        </div>
                        <div className="font-semibold text-xs text-gray-400">
                            All your badges and certs will appear here as you earn them on Learnali
                        </div>
                    </div>


                </div>



                <div className="mt-4 w-full flex flex-col lg:space-x-4 space-y-4 lg:space-y-0 lg:flex-row ">
                    <div
                        className="w-full relative lg:w-1/3  shadow  bg-white  py-4 border border-green-400 rounded-lg  mx-auto"
                    >
                        <div className="flex px-4 flex-col w-fit mx-auto">

                            <div className=" w-8 h-8   bg-gray-300 mx-auto mb-2 rounded-full"></div>
                            <div className=" text-sm  w-fit mx-auto  lg:text-sm font-semibold ">
                                Hey, Tamoru Dara
                            </div>

                            <div className="text-xs mx-auto w-fit text-gray-400">Here is your path breakdown, you are</div>
                            <div>
                                <div className="font-semibold text-lg text-center my-2">
                                    <span>83% Creative</span>&nbsp;<p />
                                    <span className="text-gray-500">10% Analytic</span>&nbsp;
                                    <span className="text-gray-300">7% Managarial</span>
                                </div>
                                <div className="text-xs text-center text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis deleniti similique dolor quod molestiae nisi, eius corporis maxime, voluptatem amet voluptatum doloribus fuga sed voluptatibus. Est harum dolore doloribus?
                                </div>
                            </div>
                        </div>

                        <div className="flex my-4 snap-x px-4 snap-mandatory space-x-4 w-full    no-scrollbar overflow-x-scroll">


                            <div className="flex-none snap-center rounded p-4 bg-gray-100  lg:w-full w-11/12 h-full">
                                <div className="font-semibold text-sm">Which of these subjects would you
                                    most like to take a class in?</div>
                                <div className="w-full mt-4">
                                    <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold '>Making Robots</div><div></div></div>

                                </div>

                            </div>
                            <div className="flex-none snap-center rounded p-4 bg-yellow-100  lg:w-full w-11/12 h-full">
                                <div className="font-semibold text-sm">Which of these subjects would you
                                    most like to take a class in?</div>
                                <div className="w-full mt-4">
                                    <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold '>Making Robots</div><div></div></div>

                                </div>

                            </div>
                            <div className="flex-none snap-center rounded p-4 bg-blue-100  lg:w-full w-11/12 h-full">
                                <div className="font-semibold text-sm">Which of these subjects would you
                                    most like to take a class in?</div>
                                <div className="w-full mt-4">
                                    <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold '>Making Robots</div><div></div></div>

                                </div>

                            </div>

                        </div>

                        <div className="px-4 pt-4">
                            <SecondaryButton type={'button'} title={'Share with your friends'} />
                        </div>

                    </div>

                    <div className="w-full relative lg:w-2/3 gap-4 lg:h-screen overflow-y-auto space-y-4 lg:space-y-0 snap-y snap-mandatory lg:grid grid-cols-2 no-scrollbar   mx-auto">
                        {/* card */}
                        <div className="shadow bg-white  py-4 px-4 border border-green-400 rounded-lg">
                            <div className="font-bold text-xl">Visual Quality Assurance</div>
                            <div className="flex my-2 ">
                                {/* images */}
                                <div className="relative">
                                    <div className=" w-8 h-8 border border-white bg-gray-300 mx-auto mb-2 rounded-full"></div>
                                    <div className=" w-8 h-8 border absolute top-0 left-2 border-white  transform   bg-gray-300 mx-auto mb-2 rounded-full"></div>
                                    <div className=" w-8 h-8 border absolute top-0 left-4 border-white   text-white  bg-green-400 mx-auto mb-2 rounded-full text-center text-xs flex font-semibold"><div className="mx-auto  my-auto">+2</div></div>
                                </div>

                                <div className="text-xs ml-8">
                                    <div className="text-gray-500">Path Instructors</div>
                                    <div className="">Matt, 2+</div>
                                </div>

                                <div className="text-xs ml-4">
                                    <div className="text-gray-500">Avg. Path Rating</div>
                                    <div className="">4.7</div>
                                </div>

                                <div className="text-xs flex ml-4">
                                    <div className="rounded-full mr-1 h-6 w-6 bg-green-200"></div>
                                    <div className="w-fit">
                                        <div className="font-semibold">Certificate</div>
                                        <div className="text-green-400">Available on completion</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="font-semibold">Path Overview</div>
                                <div className="text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quis earum eum dolorum aliquid quasi deserunt, neque ulla...<span className="text-green-400">Read more</span></div>
                            </div>

                            {/* <div className="lg:grid grid-cols-3 gap-2 flex justify-between">
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
                            </div> */}
                             <SecondaryButton title="Join this Career Path"/>
                        </div>


                        {/* card */}
                        <div className="shadow  bg-white  py-4 px-4 border border-green-400 rounded-lg">
                            <div className="font-bold text-xl">Visual Quality Assurance</div>
                            <div className="flex my-2">
                                {/* images */}
                                <div className="relative">
                                    <div className=" w-8 h-8 border border-white bg-gray-300 mx-auto mb-2 rounded-full"></div>
                                    <div className=" w-8 h-8 border absolute top-0 left-2 border-white  transform   bg-gray-300 mx-auto mb-2 rounded-full"></div>
                                    <div className=" w-8 h-8 border absolute top-0 left-4 border-white   text-white  bg-green-400 mx-auto mb-2 rounded-full text-center text-xs flex font-semibold"><div className="mx-auto  my-auto">+2</div></div>
                                </div>

                                <div className="text-xs ml-8">
                                    <div className="text-gray-500">Path Instructors</div>
                                    <div className="">Matt, 2+</div>
                                </div>

                                <div className="text-xs ml-4">
                                    <div className="text-gray-500">Avg. Path Rating</div>
                                    <div className="">4.7</div>
                                </div>

                                <div className="text-xs flex ml-4">
                                    <div className="rounded-full mr-1 h-6 w-6 bg-green-200"></div>
                                    <div>
                                        <div className="font-semibold">Certificate</div>
                                        <div className="text-green-400">Available on completion</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="font-semibold">Path Overview</div>
                                <div className="text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quis earum eum dolorum aliquid quasi deserunt, neque ulla...<span className="text-green-400">Read more</span></div>
                            </div>

                            <div className="lg:grid grid-cols-3 gap-2 flex justify-between">
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
                            </div>
                        </div>

                        {/* card */}
                        <div className="shadow  bg-white  py-4 px-4 border border-green-400 rounded-lg">
                            <div className="font-bold text-xl">Visual Quality Assurance</div>
                            <div className="flex my-2 ">
                                {/* images */}
                                <div className="relative">
                                    <div className=" w-8 h-8 border border-white bg-gray-300 mx-auto mb-2 rounded-full"></div>
                                    <div className=" w-8 h-8 border absolute top-0 left-2 border-white  transform   bg-gray-300 mx-auto mb-2 rounded-full"></div>
                                    <div className=" w-8 h-8 border absolute top-0 left-4 border-white   text-white  bg-green-400 mx-auto mb-2 rounded-full text-center text-xs flex font-semibold"><div className="mx-auto  my-auto">+2</div></div>
                                </div>

                                <div className="text-xs ml-8">
                                    <div className="text-gray-500">Path Instructors</div>
                                    <div className="">Matt, 2+</div>
                                </div>

                                <div className="text-xs ml-4">
                                    <div className="text-gray-500">Avg. Path Rating</div>
                                    <div className="">4.7</div>
                                </div>

                                <div className="text-xs flex ml-4">
                                    <div className="rounded-full mr-1 h-6 w-6 bg-green-200"></div>
                                    <div>
                                        <div className="font-semibold">Certificate</div>
                                        <div className="text-green-400">Available on completion</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="font-semibold">Path Overview</div>
                                <div className="text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quis earum eum dolorum aliquid quasi deserunt, neque ulla...<span className="text-green-400">Read more</span></div>
                            </div>

                            {/* <div className="lg:grid grid-cols-3 gap-2 flex justify-between">
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
                            </div> */}
                            <SecondaryButton title="Join this Career Path"/>
                        </div>



                    </div>




                </div>
            </div>
        </>
    );
};

export default CareerSummaryPage;
