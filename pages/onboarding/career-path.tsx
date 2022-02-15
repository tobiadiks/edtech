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
      <div className="w-full min-h-screen  mt-16 flex flex-col px-4 md:px-24">
        <div className="flex flex-col md:flex-row  w-full mt-4">
          <div className=" flex flex-col">
            <div className="font-medium text-black">
              Let&apos;s find you a{" "}
              <span className="text-green-400">Career Path</span>
            </div>
            <div className="font-medium text-xs text-gray-400">
              The very last step before you head in
            </div>
          </div>

          <div className="mx-0 md:mx-8 flex flex-row mt-2 md:mt-0">
            <div className="mx-1 md:mx-2  cursor-pointer font-medium text-sm text-center p-2 rounded-2xl bg-green-100 border-0">
              Management
            </div>
            <div className="mx-1 md:mx-2 border cursor-pointer font-medium text-sm text-center p-2 rounded-2xl active:bg-green-100 active:border-0">
              Creative
            </div>
            <div className="mx-1 md:mx-2 border cursor-pointer font-medium text-sm text-center p-2 rounded-2xl active:bg-green-100 active:border-0">
              Engineering
            </div>
          </div>
        </div>

        <div className="font-medium mt-8">
          72,800 Areas <span className="text-gray-400">Available</span>
        </div>

        <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-4 grid-rows-4">
          <CourseCard title="Architectural Design" count="30,352" />

          <CourseCard title="Architectural Design" count="30,352" />

          <CourseCard title="Architectural Design" count="30,352" />

          <CourseCard title="Architectural Design" count="30,352" />

          <CourseCard title="Architectural Design" count="30,352" />

          <CourseCard title="Architectural Design" count="30,352" />
        </div>
      </div>
    </>
  );
};

export default CareerPathPage;
