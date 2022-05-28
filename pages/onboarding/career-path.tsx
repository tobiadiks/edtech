import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import CourseCard from "@components/cards/courses.card";
import HeaderNavigation from "@components/navigations/header.navigation";

//onboard the user to pick a career
const CareerPathPage: NextPage = () => {
  return (
    <>
      <HeaderNavigation />
      <div className="w-full font-inter min-h-screen  mt-24 flex flex-col px-4 md:px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row  w-full mt-4">
          <div className=" flex flex-col">
            <div className="font-semibold text-black">
              Let&apos;s find you a{" "}
              <span className="text-green-400 font-bold">Career Path</span>
            </div>
            <div className="font-semibold text-xs text-gray-400">
              The very last step before you head in
            </div>
          </div>

          <div className="mx-0 lg:mx-8 flex flex-wrap lg:flex-nowrap flex-row mt-2 md:mt-0">
            <div className="mx-1 md:mx-2 h-fit  cursor-pointer font-semibold text-sm text-center p-2 rounded-2xl bg-green-100 border-0">
            Engineering
            </div>
            <div className="mx-1 md:mx-2 h-fit border cursor-pointer font-semibold text-sm text-center p-2 rounded-2xl active:bg-green-100 active:border-0">
              Creative
            </div>
            <div className="mx-1 md:mx-2 h-fit border cursor-pointer font-semibold text-sm text-center p-2 rounded-2xl active:bg-green-100 active:border-0">
              Management
            </div>
          </div>
        </div>

        <div className="font-semibold mt-8">
          72,800 Areas <span className="text-gray-400">Available</span>
        </div>

        <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          <CourseCard title="Frontend Development" count="30,122" />

          <CourseCard title="Backend Development" count="34,352" />

          <CourseCard title="DevOps" count="23,112" />

          <CourseCard title="Cloud Engineer" count="30,352" />

          <CourseCard title="Data Science" count="32,343" />

          <CourseCard title="MLOps" count="14,312" />
        </div>
      </div>
    </>
  );
};

export default CareerPathPage;
