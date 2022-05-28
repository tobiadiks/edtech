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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8">
                        <div>
                            <div>
                                <div className="font-semibold text-gray-500">About this Path</div>
                                <div>In this Specialization, you will learn the essential skills to coach people for
                                    improved performance. You will learn from Executive Coach and UC Davis
                                    Instructor Kris Plachy, who has created and transformed dozens of teams
                                    through coaching. She will share best practices, research, tools and models
                                    for coaching effectively.  You will learn how effective managers use coaching to establish clear expectations and accountability, how to assess performance...<span className="text-green-500">Read more</span></div>
                            </div>

                            <div className="flex justify-between my-8">
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

                            <div className="my-8">
                                <div>
                                    <div className="font-semibold text-gray-500">Skills You’ll Learn</div>
                                    <div>Machine Learning, Python Programming, Predictive Analytics, Data Processing, Data Visualization (DataViz), Python Libraries, Data Pre-Processing, Web Scraping, Big Data Products, <span className="text-green-500">and more</span></div>
                                </div>
                            </div>


                            <div className="my-8">
                                <div>
                                    <div className="font-semibold flex justify-between"><div className="text-gray-500">Course in this Path (9)</div><div className="text-green-400">Find More Courses</div></div>

                                    <div className="mt-4 space-y-4">
                                        {/* more */}
                                        <div className="flex justify-between">
                                            <div className="flex">
                                                <div className="h-8 w-8 bg-green-100 my-auto"></div>
                                                <div className=" ml-4 my-auto"><div className="text-sm">Landing Your First VQA Role</div>
                                                    <div className="text-xs text-gray-400">21.8k Learners</div></div>
                                            </div>

                                            <div className="my-auto text-green-400">Enroll</div>
                                        </div>
                                        {/* more enrolled */}
                                        <div className="flex justify-between">
                                            <div className="flex">
                                                <div className="h-8 w-8 bg-green-100 my-auto"></div>
                                                <div className=" ml-4 my-auto"><div className="text-sm">Landing Your First VQA Role</div>
                                                    <div className="text-xs text-gray-400">21.8k Learners</div></div>
                                            </div>

                                            <div className="my-auto ">Enrolled</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="my-8">
                                <div className=""><div className="text-gray-500 font-semibold">Reviews</div><div className="text-xs">We’ve gotten reviews from over 230+ students on this path</div></div>
                                <div className=" my-4 flex w-full snap-x space-x-2 relative snap-mandatory overflow-x-scroll no-scrollbar ">

                                    {/* review card */}
                                    <div className=" border flex-none rounded-md snap-center w-10/12 p-2">
                                        <div className=" flex w-full">
                                            <div className="h-8 w-8 bg-green-100 rounded-full"></div>
                                            <div className="text-sm w-fit ml-4"><div>Learning new things have always been a
                                                joy, and that has been rekindled by Learnali</div>
                                                <div className="mt-2">
                                                    <div className="font-semibold text-sm">
                                                        Saviour Udoka
                                                    </div>
                                                    <div className="text-xs font-gray-400">-Product Guy</div>
                                                </div></div>
                                        </div>


                                    </div>

                                    {/* review card */}
                                    <div className=" border flex-none rounded-md snap-center w-10/12 p-2">
                                        <div className=" flex w-full">
                                            <div className="h-8 w-8 bg-green-100 rounded-full"></div>
                                            <div className="text-sm w-fit ml-4"><div>Learning new things have always been a
                                                joy, and that has been rekindled by Learnali</div>
                                                <div className="mt-2">
                                                    <div className="font-semibold text-sm">
                                                        Saviour Udoka
                                                    </div>
                                                    <div className="text-xs font-gray-400">-Product Guy</div>
                                                </div></div>
                                        </div>


                                    </div>
                                    {/* review card */}
                                    <div className=" border flex-none rounded-md snap-center w-10/12 p-2">
                                        <div className=" flex w-full">
                                            <div className="h-8 w-8 bg-green-100 rounded-full"></div>
                                            <div className="text-sm w-fit ml-4"><div>Learning new things have always been a
                                                joy, and that has been rekindled by Learnali</div>
                                                <div className="mt-2">
                                                    <div className="font-semibold text-sm">
                                                        Saviour Udoka
                                                    </div>
                                                    <div className="text-xs font-gray-400">-Product Guy</div>
                                                </div></div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="my-8">
                                <div className="text-xs text-gray-400">This path is offered by <span className="text-black">Harvard Business School</span></div>
                                <div className="my-4 flex">
                                    <div className="w-36 h-16 bg-green-100"></div>
                                    <div className="text-xs ml-4 w-fit">
                                        UC Davis, one of the nation’s top-ranked research universities, is a global leader in agriculture, veterinary medicine, sustainability, environmental and biological sciences, and technology. With four colleges and six professional schools, UC Davis and... <span className="text-green-400">Read more</span>
                                    </div>
                                </div>
                            </div>

                            <div className="my-8">
                                <div className=""><div className="text-gray-500 font-semibold">Frequently Asked Questions</div><div className="text-xs">Our team asnswered some your questions so you dont’t have to ask</div></div>

                                <div className="my-4 border rounded-md p-4 space-y-4">
                                    <div className="font-bold">Is this course really 100% online? Or in person?</div>
                                    <div className="font-bold">How many language is this path offered in?</div>
                                    <div className="font-bold">Is this course really 100% online? Or in person?</div>
                                    <div className="font-bold">How many language is this path offered in?</div>
                                </div>

                                <div className="text-xs text-right">Any more questions? Visit <span className="text-green-400">LearnAli Help Center</span></div>
                            </div>

                        </div>
                        {/* s2 */}
                        <div>
                            <div>
                                <div className="font-semibold text-gray-500">What you get</div>
                                <div className=" grid gap-4 my-4 grid-cols-2">
                                    <div className="flex">
                                        <div className="h-4 w-4 rounded-full bg-green-100"></div>
                                        <div className=" ml-2 text-xs w-fit">
                                            <div className="text-gray-400">Certificate</div>
                                            <div>Available on completion</div>
                                            <div className="text-gray-400">Shareable on ...</div>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="h-4 w-4 rounded-full bg-green-100"></div>
                                        <div className=" ml-2 text-xs w-fit">
                                            <div className="text-gray-400">Available Language</div>
                                            <div>English, Dutch, Igbo, Hausa.
                                                Can be transcribed to Italian, Croatia</div>
                                            {/* <div className="text-gray-400">Shareable on ...</div> */}
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="h-4 w-4 rounded-full bg-green-100"></div>
                                        <div className=" ml-2 text-xs w-fit">
                                            <div className="text-gray-400">Flexible Schedule</div>
                                            <div>Set and maintain flexible
                                                deadlines</div>
                                            {/* <div className="text-gray-400">Shareable on ...</div> */}
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="h-4 w-4 rounded-full bg-green-100"></div>
                                        <div className=" ml-2 w-fit text-xs">
                                            <div className="text-gray-400">Skill level</div>
                                            <div>Some related experience required</div>
                                            {/* <div className="text-gray-400">Shareable on ...</div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full flex">
                                    <div className="border rounded-md w-fit h-fit my-auto p-1">
                                        <div>Course Duration</div>
                                        <div className="text-xs">
                                            12wks&nbsp;<span className="text-gray-400">Feb - April 2022</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-1/2 lg:w-8/12"><PrimaryButton title="Enroll for Free"/></div>
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
