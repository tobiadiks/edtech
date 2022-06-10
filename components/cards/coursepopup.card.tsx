import PrimaryButton from "@components/buttons/primary.button";

const CoursePopUp = (props: { onclose?: any }) => {
    return (
        <div onClick={props.onclose} className="w-full h-full bg-[#ffffffef] left-0 z-30 absolute lg:p-2 p-4  top-0 md:top-0 lg:top-0">
            {/* card */}
            <div className="relative z-40 mt-8 md:w-1/2 lg:w-1/2 w-full mx-auto">
                <div className="border border-emerald-100 rounded-lg bg-white p-4">
                    <div className="w-full h-32 bg-emerald-100 rounded-lg"></div>
                    <div className="flex my-4">
                        <div className=" font-extrabold text-md w-full ">Applying Heuristic Evaluations In Your Next Design Project </div>
                        <div className="border rounded-md w-full h-fit ml-2 my-auto p-1">
                            <div className="text-sm">Course Duration</div>
                            <div className="text-xs">
                                12wks&nbsp;<span className="text-gray-400">Feb - April 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex">
                            <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                            <div className="my-auto ml-2">
                                <div className="text-gray-400 text-xs">Instructor</div>
                                <div className="text-sm">Mrs. Theresa Dardnia</div>
                            </div>
                        </div>

                        <div className="flex ml-4">
                            <div className="my-auto ml-2">
                                <div className="text-gray-400 text-xs">Course Ratings</div>
                                <div className="text-sm">4.7</div>
                            </div>
                        </div>

                        <div className="flex ml-4">
                            <div className="my-auto ml-2">
                                <div className="text-gray-400 text-xs">Available Language</div>
                                <div className="text-sm">Dutch, English, Igbo</div>
                            </div>
                        </div>

                    </div>

                    <div className="my-4 h-32 overflow-y-scroll no-scrollbar">
                        <div className="text-sm font-bold">Course Overview</div>
                        <div className="text-xs my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in rem illum fugit deserunt unde nam iusto aut repellendus, maiores ipsam nisi voluptatum sequi reprehenderit culpa, sunt error? Id, eos!</div>

                        <div className="text-sm mt-4 font-bold">Course Modules</div>
                        <ul className="my-4">
                            <li className="py-2 flex justify-between">
                                <div className="flex">
                                    <div className="h-10 w-10 mr-2 rounded-full bg-emerald-600"></div>
                                    <div className="text-xs">
                                        <div className="text-gray-400">MODULE 1</div>
                                        <div className="mt-2 font-bold">Introduction to Heurestics</div>
                                    </div>
                                </div>
                                <div className="text-emerald-400 font-bold text-xs my-auto">12/12 Lessons</div>
                            </li>
                            <li className="py-2 flex justify-between">
                                <div className="flex">
                                    <div className="h-10 w-10 mr-2 rounded-full bg-emerald-600"></div>
                                    <div className="text-xs">
                                        <div className="text-gray-400">MODULE 1</div>
                                        <div className="mt-2 font-bold">Introduction to Heurestics</div>
                                    </div>
                                </div>
                                <div className="text-emerald-400 font-bold text-xs my-auto">12/12 Lessons</div>
                            </li>
                            <li className="py-2 flex justify-between">
                                <div className="flex">
                                    <div className="h-10 w-10 mr-2 rounded-full bg-emerald-600"></div>
                                    <div className="text-xs">
                                        <div className="text-gray-400">MODULE 1</div>
                                        <div className="mt-2 font-bold">Introduction to Heurestics</div>
                                    </div>
                                </div>
                                <div className="text-emerald-400 font-bold text-xs my-auto">12/12 Lessons</div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <PrimaryButton type={'button'} title="Begin Learning" />
                    </div>
                </div>
                <div className="h-3 w-1/2 absolute bottom-1/3 blur-2xl left-1/2 transform -translate-x-1/2 -z-10 bg-emerald-300"></div>
            </div>
        </div>
    );
}

export default CoursePopUp;