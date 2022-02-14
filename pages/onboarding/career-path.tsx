import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";

//onboard the user to pick a career
const CareerPathPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen   flex flex-col px-4 md:px-24">
      <div className="flex flex-row  w-full mt-4">
        <div className=" flex flex-col">
          <div className="font-medium text-black">
            Let&apos;s find you a{" "}
            <span className="text-green-300">Career Path</span>
          </div>
          <div className="font-medium text-xs text-gray-400">
            The very last step before you head in
          </div>
        </div>

        <div className="mx-8 flex flex-row">
          <div className=" mx-2 border cursor-pointer font-medium text-sm text-center p-2 rounded-2xl active:bg-green-100 active:border-0">Management Path</div>
          <div className=" mx-2 border cursor-pointer font-medium text-sm text-center p-2 rounded-2xl active:bg-green-100 active:border-0">Creative Path</div>
          <div className=" mx-2 border cursor-pointer font-medium text-sm text-center p-2 rounded-2xl active:bg-green-100 active:border-0">Engineering Path</div>
        </div>
      </div>

      <div className="font-medium mt-8">72,800 Areas <span className="text-gray-400">Available</span></div>
    
    <div>
<div>
  <CourseCard title="Architectural Design" count="30,352"/>
</div>
    </div>

    </div>
  );
};

export default CareerPathPage;
