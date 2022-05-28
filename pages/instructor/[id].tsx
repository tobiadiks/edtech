import CourseCard from "@components/cards/courses.card"
import HeaderNavigation from "@components/navigations/header.navigation"
import type { NextPage } from "next"

const InstructorDetailPage: NextPage = () => {
    return (
        <>
            <HeaderNavigation />
            <div className="w-full font-inter min-h-screen  mt-16 flex flex-col px-4 md:px-4 lg:px-8">
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

                            <div className="my-4 flex">
                                <div className="flex mr-4">
                                    <div className="h-4 my-auto w-4 mr-2 rounded-full bg-green-100"></div>
                                    <div>4.7 (23 Rating)</div>
                                </div>
                                <div className="font-semibold text-green-400">Read Bio</div>
                            </div>

                            <div className="my-4 flex">
                                <div className="flex mr-4 border hover:border-green-200 border-green-100 rounded-full p-2">
                                    <div className="h-8 my-auto w-8 mr-2 rounded-full bg-green-100"></div>
                                    <div className="font-semibold my-auto">Share</div>
                                </div>
                                <div className="flex mr-4 border hover:border-red-200 border-red-100 rounded-full p-2">
                                    <div className="h-8 my-auto w-8 mr-2 rounded-full bg-red-100"></div>
                                    <div className="h-8 my-auto w-8 mr-2 transform -translate-x-4 border border-white rounded-full bg-red-100"></div>
                                    <div className="font-semibold my-auto transform -translate-x-4">Clap</div>
                                    <div className="my-auto text-gray-400">134,718</div>
                                </div>
                            </div>
                        </div>
                        {/* instructor course card  */}
                        <div className="p-4 my-8 relative overflow-hidden border rounded-md border-green-100">
                            <div className="absolute top-0 left-0 w-8 h-full  blur-3xl bg-green-200"></div>
                            <div className=" border-b-2 py-4 my-8 border-b-green-100">
                                <div className="text-lg font-semibold">Instructor Category</div>
                                <div className=" grid gap-4 my-4 grid-cols-2 text-sm">
                                    <div className="flex">
                                        <div className="h-6 w-6 ring ring-white my-auto rounded-full bg-green-100"></div>
                                        <div className=" ml-2  w-fit">
                                            <div className="text-gray-400">Teaching Language</div>
                                            <div>Hausa, English</div>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="h-6 w-6 ring ring-white my-auto rounded-full bg-green-100"></div>
                                        <div className=" ml-2  w-fit">
                                            <div className="text-gray-400">Skill Level</div>
                                            <div>Beginner and Mid Friendly</div>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="h-6 w-6 ring ring-white my-auto rounded-full bg-green-100"></div>
                                        <div className=" ml-2  w-fit">
                                            <div className="text-gray-400">Course Learne</div>
                                            <div>67,456 Students</div>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="h-6 w-6 ring ring-white my-auto rounded-full bg-green-100"></div>
                                        <div className=" ml-2  w-fit">
                                            <div className="text-gray-400">Courses</div>
                                            <div className="text-green-400">7 Courses</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" border-b-2 py-4 my-8 border-b-green-100">
                                <div className="text-lg font-semibold">Social Links</div>
                                <div className=" grid gap-4 my-4 grid-cols-2 text-sm">
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

                            <div className="my-8">
                                <div className="text-lg font-semibold">Technical Skills</div>
                                <div className="mt-4 flex flex-wrap  gap-4">
                                    <div className="font-semibold bg-green-50 p-2 rounded-full">UX Research</div>
                                    <div className="font-semibold bg-green-50 p-2 rounded-full">UX Design</div>
                                    <div className="font-semibold bg-green-50 p-2 rounded-full">Information Architecture</div>
                                    <div className="font-semibold bg-green-50 p-2 rounded-full">Iconography</div>
                                    <div className="font-semibold bg-green-50 p-2 rounded-full">UX Copywriting</div>                            </div>
                            </div>
                        </div>


                    </div>

                    <div className="lg:w-1/2 w-full">
                    <div className="my-8">
                            <div className="flex justify-between">
                                <div>
                                    <div className="font-semibold">Top Rated Courses</div>
                                    <div className="text-sm text-gray-400">These are the most enrolled courses by our commuinity</div>
                                </div>
                                <div className="font-semibold cursor-pointer text-green-400 my-auto">See all</div>
                            </div>

                            <div className="my-4 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                                <CourseCard title="Frontend Development" count="30,122" />

                                <CourseCard title="Backend Development" count="34,352" />

                                <CourseCard title="DevOps" count="23,112" />
                            </div>
                        </div>
                        
                        <div className="my-8">
                            <div className="flex justify-between">
                                <div>
                                    <div className="font-semibold">Jacob&apos;s Courses</div>
                                    <div className="text-sm text-gray-400">These are courses you are currently enrolled in</div>
                                </div>
                                <div className="font-semibold cursor-pointer text-green-400 my-auto">See all</div>
                            </div>

                            <div className="my-4 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                                <CourseCard title="Frontend Development" count="30,122" />

                                <CourseCard title="Backend Development" count="34,352" />

                                <CourseCard title="DevOps" count="23,112" />
                                <CourseCard title="Frontend Development" count="30,122" />

                                <CourseCard title="Backend Development" count="34,352" />

                                <CourseCard title="DevOps" count="23,112" />

                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default InstructorDetailPage