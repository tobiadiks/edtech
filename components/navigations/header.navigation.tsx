import type { NextPage } from "next";
import Link from "next/link";

const HeaderNavigation: NextPage = () => {
  return (
    <div className="w-full font-inter fixed bg-white top-0">
      <div className="border px-4 md:px-4 lg:px-24 grid grid-cols-4">
        <div className=" col-span-2 my-auto py-2  flex h-full">
          <Link href={"/"} passHref>
            <div className="cursor-pointer  text-lg font-bold my-auto">
              learnali.
            </div>
          </Link>
        </div>

        <div className="col-span-1 border-l py-2  px-2 my-auto h-full">
          <div className="font-medium text-xs text-gray-400">
            Wallet Balance
          </div>
          <div className=" font-medium text-sm">N/A</div>
        </div>

        <div className="col-span-1 border-l py-2  px-2 my-auto flex h-full">
          <div className="h-8 w-8 md:mx-0 mx-auto bg-gray-300 my-auto rounded-full md:mr-2"></div>
          <div className="cursor-pointer hidden md:inline text-sm font-medium my-auto ">
            Tamoru Dara
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
