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
import UserCourseCard from "@components/cards/usercoursecard.card";
import JobCard from "@components/cards/jobs.cards";


//user dashboard
const DashBoardPage: NextPage = () => {
  const [statVisible, setStatVisible] = React.useState(true)

  return (
    <>
      <HeaderNavigation />
      <div className="w-full font-inter min-h-screen  mt-16 flex flex-col px-4 md:px-4 lg:px-8">
        {/* <div className="flex flex-col  w-full mt-4"> */}
        {/* <div className=" flex flex-col">
            <div className="font-semibold text-black">
              My Learning Badges and Certs
            </div>
            <div className="font-semibold text-xs text-gray-400">
              All your badges and certs will appear here as you earn them on
              Learnali
            </div>
          </div> */}

        {/* <div className="mx-0  flex flex-wrap lg:flex-nowrap flex-row mt-2">
            <div className="mx-1 md:mx-2 my-1 flex h-fit  cursor-pointer font-semibold text-sm text-center p-2 rounded-2xl bg-green-100 border-0">
              <div className="h-8 w-8 bg-white md:my-auto mr-1   rounded-full border-2 border-black"></div>{" "}
              <div className="my-auto">Night Owl</div>
            </div>
            <div className="mx-1 md:mx-2 my-1 flex h-fit  cursor-pointer font-semibold text-sm text-center p-2 rounded-2xl bg-green-100 border-0">
              <div className="h-8 w-8 bg-white my-auto  mr-1 rounded-full border-2 border-black"></div>{" "}
              <div className="my-auto">2x Learner</div>
            </div>
             <div className="mx-1 md:mx-2 flex h-fit  cursor-pointer font-semibold text-sm text-center p-2 rounded-2xl bg-green-100 border-0">
            <div className="h-8 w-8 bg-white my-auto mr-1 rounded-full border-2 border-black"></div> <div className="my-auto">Night Owl</div>
            </div> 
          </div> */}
        {/* </div> */}

        <div className=" mt-4 border rounded-xl p-4">
          <div className="w-full flex justify-between">
            <div className="font-semibold">Your Career Path</div>
            <div className="cursor-pointer font-bold flex  "><div className="text-gray-400 mr-4 text-sm">Job Readiness <span className="text-green-400">76%</span> <span className="text-black">Ready</span></div><div className="text-green-400 text-sm">Change Career Path</div></div>
          </div>
          <div className=" text-xs text-gray-400">
            This is a breakdown of the <span className="text-black">career path</span> you are on
          </div>
          <div className="my-4 w-full gap-2 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 ">
            {/* card */}
            <UserCourseCard/>
            <UserCourseCard/>

          </div>


          <div className="w-full flex justify-between">
            <div className="font-semibold">Your Courses</div>
            <div className="cursor-pointer font-bold text-green-400 text-sm">Find More Courses</div>
          </div>
          <div className=" text-xs text-gray-400">
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


        <div className={" mt-8"}>
          <div className="font-semibold">
            Learning Stat <span className="text-green-400 text-sm cursor-pointer" onClick={() => { setStatVisible(!statVisible) }}>{statVisible ? 'Hide' : 'Show'}</span>
          </div>
          <div className={cn(" flex-col md:flex-row justify-between text-sm", statVisible ? 'flex' : 'hidden')}>
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

        <div className={cn("my-4 p-4 w-full   border rounded-xl  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 ", statVisible ? 'grid' : 'hidden')}>
          <div className="border-b md:border-b-0 md:border-r xl:border-r w-full"><LearningChartCard /></div>
          <div className="border-b md:border-b-0 md:border-r-0 xl:border-r"><CertProgressCard /></div>
          <div className="border-b md:border-b-0 md:border-r md:border-t  xl:border-r"><PercentageAchieversCard /></div>
          <div className=" md:border-t"><CareerPathProgressCard /></div>
        </div>




        <div className=" my-4 relative h-full">
          <div className=" bg-gradient-to-b from-[#ffffffef]  to-white flex h-full w-full absolute top-0 z-30 ">
            <div className="mx-auto my-auto w-fit">
              <div></div>
              <div className="text-gray-400 text-center">Unlock more access with <span className="text-black font-bold">Learnali</span><span className="text-green-400 font-bold">Pro</span></div>
           <div className="font-bold text-center my-2">Starting from just $3.99 Monthly</div>
            <div className="text-sm text-center text-green-400 cursor-pointer font-semibold">See Benefits</div>
            </div>
          </div>
          <div className="font-semibold">
            Matching Job Posts
          </div>
          <div className=" text-xs text-gray-400">
           Showing job and opportuinities that matches <span className="text-black">your skills</span>
          </div>

          <div className="mt-4 w-full gap-4  rounded-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  ">
            {/* card */}
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
          </div>
        </div>

      </div>
    </>
  );
};

export default DashBoardPage;
