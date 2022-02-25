import type { NextPage } from "next";
import cn from 'classnames'
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import CourseCard from "@components/cards/courses.card";
import HeaderNavigation from "@components/navigations/header.navigation";
import CurrentCourseCard from "@components/cards/currentcourse.card";
import OtherCourseCard from "@components/cards/othercourses.card";
//import LearningChartCard from "@components/cards/learningchart.card";
import dynamic from "next/dynamic";
import CertProgressCard from "@components/cards/certprogress.card";
import PercentageAchieversCard from "@components/cards/percentachievers.card";
import CareerPathProgressCard from "@components/cards/careerpathprogress.card";
import LearningChartCard from "@components/cards/learningchart.card";


//user dashboard
const DashBoardPage: NextPage = () => {
const [statVisible,setStatVisible]= React.useState(true)

  return (
    <>
      <HeaderNavigation />
      <div className="w-full font-inter min-h-screen  mt-16 flex flex-col px-4 md:px-4 lg:px-8">
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
            <div className="mx-1 md:mx-2 my-1 flex h-fit  cursor-pointer font-medium text-sm text-center p-2 rounded-2xl bg-green-100 border-0">
              <div className="h-8 w-8 bg-white md:my-auto mr-1   rounded-full border-2 border-black"></div>{" "}
              <div className="my-auto">Night Owl</div>
            </div>
            <div className="mx-1 md:mx-2 my-1 flex h-fit  cursor-pointer font-medium text-sm text-center p-2 rounded-2xl bg-green-100 border-0">
              <div className="h-8 w-8 bg-white my-auto  mr-1 rounded-full border-2 border-black"></div>{" "}
              <div className="my-auto">2x Learner</div>
            </div>
            {/* <div className="mx-1 md:mx-2 flex h-fit  cursor-pointer font-medium text-sm text-center p-2 rounded-2xl bg-green-100 border-0">
            <div className="h-8 w-8 bg-white my-auto mr-1 rounded-full border-2 border-black"></div> <div className="my-auto">Night Owl</div>
            </div> */}
          </div>
        </div>

        <div className={"font-medium mt-8"}>
          <div>
            Learning Stat <span className="text-green-400 text-sm cursor-pointer" onClick={()=>{setStatVisible(!statVisible)}}>{statVisible?'Hide':'Show'}</span>
          </div>
          <div className={cn(" flex-col md:flex-row justify-between text-sm", statVisible?'flex':'hidden')}>
            <div>Displaying your stats over time</div>
            <div className="flex justify-between  text-gray-400 mt-2 md:mt-0 ">
              <div className="hover:text-green-400 cursor-pointer md:mx-2 active:hover:text-green-400">
                Today
              </div>
              <div className="hover:text-green-400 cursor-pointer md:mx-2 text-green-400 active:hover:text-green-400">
                This Week
              </div>
              <div className="hover:text-green-400 cursor-pointer md:mx-2 active:hover:text-green-400">
                This Month
              </div>
            </div>
          </div>
        </div>

        <div className={cn("my-4 p-2 w-full   border rounded-xl  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 ",statVisible?'grid':'hidden')}>
          <div className="border-b md:border-b-0 md:border-r xl:border-r w-full"><LearningChartCard /></div>
          <div className="border-b md:border-b-0 md:border-r-0 xl:border-r"><CertProgressCard /></div>
          <div className="border-b md:border-b-0 md:border-r md:border-t  xl:border-r"><PercentageAchieversCard /></div>
          <div className=" md:border-t"><CareerPathProgressCard /></div>
        </div>

        <div className="font-medium mt-4 border rounded-xl p-2">
          <div className="w-full flex justify-between">
            <div>Your Courses</div>
            <div className="cursor-pointer font-bold text-green-400">Find More Courses</div>
          </div>
          <div className="font-medium text-xs text-gray-400">
            This are courses you are currently taking based on your path
          </div>

          <div className="my-4 w-full  grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 ">
            <CurrentCourseCard title="Building systems with golang and ..." started />
            <CurrentCourseCard title="Building systems with golang and ..." started />
            <CurrentCourseCard title="Building systems with golang and ..." started />
            <CurrentCourseCard title="Building systems with golang and ..." />
            <CurrentCourseCard title="Building systems with golang and ..." />

          </div>
        </div>


        <div className="font-medium my-4">
          <div>
            Other Courses You&apos;ll Love
          </div>
          <div className="font-medium text-xs text-gray-400">
            This are courses you might want to give a shot
          </div>

          <div className="mt-4 w-full  border rounded-xl grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 p-2 ">
            <OtherCourseCard title="How UX Focused Teams Make The Best Team ..." count="73,293" />
            <OtherCourseCard title="How UX Focused Teams Make The Best Team ..." count="73,293" />
            <OtherCourseCard title="How UX Focused Teams Make The Best Team ..." count="73,293" />
            <OtherCourseCard title="How UX Focused Teams Make The Best Team ..." count="73,293" />
            <OtherCourseCard title="How UX Focused Teams Make The Best Team ..." count="73,293" />
          </div>
        </div>

      </div>
    </>
  );
};

export default DashBoardPage;
