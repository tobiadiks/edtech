import CourseCard from "@components/cards/courses.card"
import JobCard from "@components/cards/jobs.cards"
import HeaderNavigation from "@components/navigations/header.navigation"
import type { NextPage } from "next"

const InstructorMoreDetailPage: NextPage = () => {
    return (
        <>
            <HeaderNavigation />
            <div className="w-full font-inter min-h-screen  lg:mt-16 mt-28 flex flex-col px-4 md:px-4 lg:px-8">
                <div className="flex flex-col mt-4 lg:flex-row">
                    <div className="lg:w-1/2 w-full lg:pr-8">
                        {/* instructor bio */}
                        <div>
                            <div className="flex">
                                <div className="h-12 w-12 bg-gray-400 rounded-full"></div>
                                <div className=" my-auto ml-4">
                                    <div className="font-semibold">Jacob Banks</div>
                                    <div className="text-gray-400">Product Operations Specialist <span className="text-black">DoorDash</span></div>
                                </div>
                            </div>



                            <div className="my-4 font-medium">
                                I love creating and building for teams that build with ease and of use. Currently with the growth team at @<span className="text-green-400">DoorDash</span>
                            </div>

                            <div className="  my-4 ">
                                <div className=" grid gap-4 my-4 grid-cols-1 text-sm">
                                    <div className="flex">
                                        <div className="h-6 w-6 ring ring-white my-auto rounded-full bg-green-100"></div>
                                        <div className=" ml-2 my-auto  w-fit flex">
                                            <div className="text-gray-400 mr-2">Website</div>
                                            <div className="font-semibold">trakit.com</div>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="h-6 w-6 ring ring-white my-auto rounded-full bg-green-100"></div>
                                        <div className=" ml-2 my-auto  w-fit flex">
                                            <div className="text-gray-400 mr-2">Twitter</div>
                                            <div className="font-semibold">@trakit</div>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="h-6 w-6 ring ring-white my-auto rounded-full bg-green-100"></div>
                                        <div className=" ml-2 my-auto  w-fit flex">
                                            <div className="text-gray-400 mr-2">Linkedin</div>
                                            <div className="font-semibold">/in/trakit</div>
                                        </div>
                                    </div>

                                    {/* <div className="flex">
                                        <div className="h-6 w-6 ring ring-white my-auto rounded-full bg-green-100"></div>
                                        <div className=" ml-2  w-fit">
                                            <div className="text-gray-400">Courses</div>
                                            <div className="text-green-400">7 Courses</div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="my-4">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="font-semibold">My Certificates</div>
                                        <div className="text-sm text-gray-400">Jacob&apos;s Certificate Stash</div>
                                    </div>
                                    {/* <div className="font-semibold cursor-pointer text-green-400 my-auto">See all</div> */}
                                </div>

                                <div className="my-4 w-full grid grid-cols-1 gap-4 first-letter: md:grid-cols-2 lg:grid-cols-2 ">
                                    <div className=" h-44 w-full border rounded-md border-gray-400 bg-green-50"></div>
                                    <div className=" h-44 w-full border rounded-md border-gray-400 bg-green-50"></div>

                                </div>
                            </div>

                        </div>



                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="my-0 relative h-44 bg-green-100 rounded-lg p-4">
                            <div className="flex flex-wrap justify-end w-full gap-4">
                                <div className="font-semibold bg-white p-2 rounded-full flex text-sm"><div className="h-8 w-8 bg-green-200 rounded-full my-auto mr-2"></div><div className="my-auto">Download as PDF</div></div>
                                <div className="font-semibold bg-white p-2 rounded-full flex text-sm"><div className="h-8 w-8 bg-green-200 rounded-full my-auto mr-2"></div><div className="my-auto">Share</div></div>
                            </div>
                        </div>

                        <div className="my-8">
                            <div className="flex flex-col lg:flex-col">
                                <div className=" text-gray-400 font-bold w-2/5">Tech Stack</div>
                                <div className="flex flex-wrap mt-4 lg:mt-0 w-full gap-4">
                                    <div className="font-semibold border border-red-100 bg-white p-2 rounded-full flex text-sm"><div className="h-8 w-8 bg-red-100 rounded-full my-auto mr-2"></div><div className="my-auto">Javascript</div></div>
                                    <div className="font-semibold border border-red-100 bg-white p-2 rounded-full flex text-sm"><div className="h-8 w-8 bg-red-100 rounded-full my-auto mr-2"></div><div className="my-auto">Vue Js</div></div>
                                    <div className="font-semibold border border-red-100 bg-white p-2 rounded-full flex text-sm"><div className="h-8 w-8 bg-red-100 rounded-full my-auto mr-2"></div><div className="my-auto">React</div></div>
                                    <div className="font-semibold border border-red-100 bg-white p-2 rounded-full flex text-sm"><div className="h-8 w-8 bg-red-100 rounded-full my-auto mr-2"></div><div className="my-auto">Typescript</div></div>
                                </div>
                            </div>

                            <div className="flex my-8 flex-col lg:flex-col">
                                <div className=" text-gray-400 font-bold w-2/5">Work Experience</div>
                                <div className="grid w-full gap-4 mt-4 lg:mt-0">
                                    <JobCard/>
                                    <JobCard/>
                                </div>
                            </div>

                            <div className="flex my-8 flex-col lg:flex-col">
                                <div className=" text-gray-400 font-bold w-2/5">Credentials</div>
                                <div className="grid w-full gap-4 mt-4 lg:mt-0">
                                    <div className="h-24 w-full border border-gray-400 rounded-md"></div>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default InstructorMoreDetailPage