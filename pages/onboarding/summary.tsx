import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import CourseCard from "@components/cards/courses.card";
import HeaderNavigation from "@components/navigations/header.navigation";
import SecondaryButton from "@components/buttons/secondary.button";
import CareerPathSummaryCard from "@components/cards/careerpathsummary.card";
import RecommendedPathCard from "@components/cards/recommendedpathcard";

//onboard the user to pick a career
const CareerSummaryPage: NextPage = () => {
    return (
        <>
            <HeaderNavigation />
            <div className="w-full font-inter min-h-screen lg:mt-16  mt-28 flex flex-col px-4 md:px-4 lg:px-8">
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
                    {/* career summary card */}
                    <CareerPathSummaryCard/>

                    <div className="w-full relative lg:w-2/3 gap-4 lg:h-screen overflow-y-auto space-y-4 lg:space-y-0 snap-y snap-mandatory lg:grid grid-cols-2 no-scrollbar   mx-auto pb-8">
                        {/* card */}
                    <RecommendedPathCard active/>
                    <RecommendedPathCard/>
                    <RecommendedPathCard active/>
                    <RecommendedPathCard/>
                    <RecommendedPathCard/>
                    <RecommendedPathCard active/>

                    </div>




                </div>
            </div>
        </>
    );
};

export default CareerSummaryPage;
