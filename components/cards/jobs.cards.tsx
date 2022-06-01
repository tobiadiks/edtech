const JobCard=()=>{
    return(
<div className="border border-gray-400 rounded-md p-4">
              <div className="flex">
                <div className="h-12 w-12 bg-black rounded-full"></div>
                <div className="ml-4">
<div className=" text-lg">Q/A Devops Engineer</div>
<div>Intercom</div>
                </div>
              </div>
              <div className="flex mt-4">
                <div className=" flex mr-4">
<div className="h-4 w-4 bg-green-200 rounded-full my-auto mr-2"></div>
<div className="font-semibold">Worldwide, Remote</div>
                </div>

                <div className="flex">
<div className="h-4 w-4 bg-green-200 rounded-full my-auto mr-2"></div>
<div className="font-semibold">Hybrid</div>
                </div>
              </div>
            </div>
    )
}

export default JobCard;