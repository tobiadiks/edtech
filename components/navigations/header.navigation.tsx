import type { NextPage } from "next";
import Link from "next/link";
import cn from 'classnames'
import { useRouter } from "next/router";

const HeaderNavigation: NextPage = () => {
  const route= useRouter()
  return (
    <div className="w-full z-50 font-inter fixed bg-white top-0">
      <div className="border px-4 md:px-4 lg:px-8 grid lg:grid-cols-4 grid-cols-3">
        <div className=" lg:col-span-2 my-auto py-2  flex h-full">
          <Link href={"/"} passHref>
            <div className="cursor-pointer  text-lg font-bold my-auto">
              learnali.
            </div>
          </Link>
        </div>

        <div className="col-span-1 flex hover:bg-emerald-100 border-l py-2  px-2 my-auto h-full">
          <div className="my-auto">
          <div className="font-semibold text-xs text-gray-400">
            Wallet Balance
          </div>
          <div className={cn(" font-semibold text-sm", true ? 'text-emerald-400' : 'text-black')}>NGN {true ? '78,900' : 'N/A'}</div>
        </div></div>

        <div className="col-span-1 border-l py-2  px-2 my-auto flex h-full">
          <div className="h-12 w-12 mr-2 bg-gray-300 my-auto rounded-full md:mr-2"></div>
          <div className="my-auto">
            <div className="text-xs text-gray-400">You are logged in as</div>
          <div onClick={()=>route.push('/student/122')} className="cursor-pointer text-sm font-semibold my-auto ">
            Tamoru Dara
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
