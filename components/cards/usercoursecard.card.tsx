const UserCourseCard=()=>{
    return(
        <div className="bg-green-50  p-2 rounded hover:border-1  hover:border-green-400">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">UX Design</div>
                  <div className="text-xs">45,838 Learners</div>
                </div>
                <div className="bg-white flex py-1 px-1 my-auto rounded-full">
                  <div className="h-8 w-8  md:mx-0 border-2 border-green-400 bg-white my-auto rounded-full md:mr-2"></div>
                  <div className="my-auto font-semibold text-sm">25%</div>
                </div>
              </div>

              <div className="mt-12">
                <div className=" lg:flex  my-4 flex justify-between">
                  <div className="relative flex">
                    <div className=" w-8 h-8 border border-white bg-gray-300 mx-auto left-0 rounded-full"></div>
                    <div className=" w-8 h-8 border absolute top-0 left-2 border-white  transform   bg-gray-300 mx-auto mb-2 rounded-full"></div>
                    <div className=" w-8 h-8 border absolute top-0 left-4 border-white   text-white  bg-green-400 mx-auto mb-2 rounded-full text-center text-xs flex font-semibold"><div className="mx-auto  my-auto">+2</div></div>
                  </div>

                  <div className="text-xs">
                    <div>Courses</div>
                    <div className="text-green-400">7 Courses</div>
                  </div>

                  <div className="text-xs">
                    <div>Career</div>
                    <div className="text-green-400">Beginner</div>
                  </div>

                </div>
              </div>
            </div>
    )
}

export default UserCourseCard;