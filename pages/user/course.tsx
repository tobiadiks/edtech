import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import CourseCard from "@components/cards/courses.card";
import HeaderNavigation from "@components/navigations/header.navigation";
import CoursePopUp from "@components/cards/coursepopup.card";

//onboard the user to buy a course
const UserCoursePage: NextPage = () => {
    // popup state
    const [isOpen,setIsOpen]=React.useState(false)
    return (
        <>
            <HeaderNavigation />
            <div className="w-full relative font-inter min-h-screen lg:mt-16  mt-24 flex flex-col px-4 md:px-4 lg:px-8">
                {isOpen && <CoursePopUp onclose={()=>setIsOpen(false)}/>}
                <div className="my-8">
                    <div className="flex justify-between">
                        <div className="w-3/5">
                            <div className="font-semibold">Your Courses</div>
                            <div className="text-sm text-gray-400">These are courses you are currently taking based on your <span className="text-black">path</span></div>
                        </div>
                        <div className="font-semibold cursor-pointer text-green-400 my-auto">See all</div>
                    </div>

                    <div className="mt-4 w-full grid grid-cols-1  lg:grid-cols-6 ">
                        <CourseCard onclick={()=>setIsOpen(true)} title="Frontend Development" count="30,122" />

                        <CourseCard onclick={()=>setIsOpen(true)} title="Backend Development" count="34,352" />

                        <CourseCard onclick={()=>setIsOpen(true)} title="DevOps" count="23,112" />

                        <CourseCard onclick={()=>setIsOpen(true)} title="Cloud Engineer" count="30,352" />

                    </div>
                </div>

                <div className="my-8">
                    <div className="flex justify-between">
                        <div className="w-3/5">
                            <div className="font-semibold">Saved Courses</div>
                            <div className="text-sm text-gray-400">These are courses you have saved but not yet enrolled in</div>
                        </div>
                        <div className="font-semibold cursor-pointer text-green-400 my-auto">See all</div>
                    </div>

                    <div className="mt-4 w-full grid grid-cols-1  lg:grid-cols-6 ">
                        <CourseCard title="Frontend Development" count="30,122" />

                        <CourseCard title="Backend Development" count="34,352" />

                        <CourseCard title="DevOps" count="23,112" />

                        <CourseCard title="Cloud Engineer" count="30,352" />

                        <CourseCard title="Data Science" count="32,343" />

                        <CourseCard title="MLOps" count="14,312" />
                    </div>
                </div>

                <div className="my-8">
                    <div className="flex justify-between">
                        <div className="w-3/5">
                            <div className="font-semibold">Suggested Courses</div>
                            <div className="text-sm text-gray-400">These are courses you have saved but not yet enrolled in</div>
                        </div>
                        <div className="font-semibold cursor-pointer text-green-400 my-auto">See all</div>
                    </div>

                    <div className="mt-4 w-full grid grid-cols-1  lg:grid-cols-6 ">
                        <CourseCard title="Frontend Development" count="30,122" />

                        <CourseCard title="Backend Development" count="34,352" />

                        <CourseCard title="DevOps" count="23,112" />

                        <CourseCard title="Cloud Engineer" count="30,352" />


                    </div>
                </div>

            </div>
        </>
    );
};

export default UserCoursePage;
