import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import CourseCard from "@components/cards/courses.card";
import HeaderNavigation from "@components/navigations/header.navigation";

//user dashboard
const DashBoardPage: NextPage = () => {
  return (
    <>
      <HeaderNavigation />
      <div className="w-full font-inter min-h-screen  mt-16 flex flex-col px-4 md:px-4 lg:px-24">
        <div className="flex flex-col  w-full mt-4">
          <div className=" flex flex-col">
            <div className="font-medium text-black">
              My Learning Badges and Certs
            </div>
            <div className="font-medium text-xs text-gray-400">
              All your badges and certs will appear here as you earn them on
              Learnali
            </div>
          </div>

          <div className="mx-0  flex flex-wrap lg:flex-nowrap flex-row mt-2">
            <div className="mx-1 md:mx-2 flex h-fit  cursor-pointer font-medium text-sm text-center p-2 rounded-2xl bg-green-100 border-0">
              <div className="h-8 w-8 bg-white my-auto mr-1 rounded-full border-2 border-black"></div>{" "}
              <div className="my-auto">Night Owl</div>
            </div>
            <div className="mx-1 md:mx-2 flex h-fit  cursor-pointer font-medium text-sm text-center p-2 rounded-2xl bg-green-100 border-0">
              <div className="h-8 w-8 bg-white my-auto mr-1 rounded-full border-2 border-black"></div>{" "}
              <div className="my-auto">2x Learner</div>
            </div>
            {/* <div className="mx-1 md:mx-2 flex h-fit  cursor-pointer font-medium text-sm text-center p-2 rounded-2xl bg-green-100 border-0">
            <div className="h-8 w-8 bg-white my-auto mr-1 rounded-full border-2 border-black"></div> <div className="my-auto">Night Owl</div>
            </div> */}
          </div>
        </div>

        <div className="font-medium mt-8">
          <div>
            Learning Stat <span className="text-green-400 text-sm">Hide</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-sm">
            <div>Displaying your stats over time</div>
            <div className="flex text-gray-400 mt-2 md:mt-0 ">
              <div className="hover:text-green-400 cursor-pointer mx-2 active:hover:text-green-400">
                Today
              </div>
              <div className="hover:text-green-400 cursor-pointer mx-2 text-green-400 active:hover:text-green-400">
                This Week
              </div>
              <div className="hover:text-green-400 cursor-pointer mx-2 active:hover:text-green-400">
                This Month
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full h-[40vh] border rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
         
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
