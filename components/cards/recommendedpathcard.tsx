import SecondaryButton from "@components/buttons/secondary.button"

const RecommendedPathCard = (props: {
    active?: boolean;
    route?:any
}) => {
    return (
        <div className="shadow bg-white  py-4 px-4 border border-green-400 rounded-lg">
            <div className="font-bold text-xl">Visual Quality Assurance</div>
            <div className="flex my-2 ">
                {/* images */}
                <div className="relative">
                    <div className=" w-8 h-8 border border-white bg-gray-300 mx-auto mb-2 rounded-full"></div>
                    <div className=" w-8 h-8 border absolute top-0 left-2 border-white  transform   bg-gray-300 mx-auto mb-2 rounded-full"></div>
                    <div className=" w-8 h-8 border absolute top-0 left-4 border-white   text-white  bg-green-400 mx-auto mb-2 rounded-full text-center text-xs flex font-semibold"><div className="mx-auto  my-auto">+2</div></div>
                </div>

                <div className="text-xs ml-8">
                    <div className="text-gray-500">Path Instructors</div>
                    <div className="">Matt, 2+</div>
                </div>

                <div className="text-xs ml-4">
                    <div className="text-gray-500">Avg. Path Rating</div>
                    <div className="">4.7</div>
                </div>

                <div className="text-xs flex ml-4">
                    <div className="rounded-full mr-1 h-6 w-6 bg-green-200"></div>
                    <div className="w-fit">
                        <div className="font-semibold">Certificate</div>
                        <div className="text-green-400">Available on completion</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="font-semibold">Path Overview</div>
                <div className="text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quis earum eum dolorum aliquid quasi deserunt, neque ulla...<span onClick={props.route} className="text-green-400 cursor-pointer">Read more</span></div>
            </div>

            {props.active ? <div className="lg:grid grid-cols-3 gap-2 flex justify-between">
                <div className="text-xs">
                    <div>Courses</div>
                    <div className="text-green-400">7 Courses</div>
                </div>

                <div className="text-xs">
                    <div>Career</div>
                    <div className="text-green-400">Beginner</div>
                </div>

                <div className="text-xs">
                    <div>Est. Completion</div>
                    <div className="text-green-400">62 Hours</div>
                </div>
            </div> :
                <SecondaryButton title="Join this Career Path" />
            }
        </div>
    )
}

export default RecommendedPathCard