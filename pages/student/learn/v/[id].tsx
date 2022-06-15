import VideoController from "@components/controls/video";
import HeaderNavigation from "@components/navigations/header.navigation";
import AuthGuard from "guards/auth.guard";
import React from "react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoCourse = () => {
    const [isPlay, setIsPlay] = useState<boolean>(false)
    const [totalDurationOfVideo, setTotalDurationOfVideo] = useState<number>(0)
    const [currentSeek, setCurrentSeek] = useState<number>(0);
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const [currentVolume, setCurrentVolume] = useState<number>(0.5)
    const [currentVolumeBar, setCurrentVolumeBar] = useState<number>(50)

    const hostVideo = React.createRef<any>()
    const handlePlay = () => {
        if (totalDurationOfVideo == 0) {
            setTotalDurationOfVideo(hostVideo.current.getDuration())

        }
        setIsPlay(true)

    }

    const handlePause = () => {
        setIsPlay(false)
    }

    const handleOnProgress = (e:any) => {
        setCurrentSeek(e.playedSeconds)
    }

    const handleSeekChange = (e:any) => {
        setCurrentSeek(e.target.value);
        hostVideo.current.seekTo(e.target.value);
    }

    const handleVolumeChange = (e:any) => {
        setCurrentVolume(e.target.value / 100);
        setCurrentVolumeBar(e.target.value);
    }

    return (
        <AuthGuard>
            <HeaderNavigation />
            <div className="w-full font-inter min-h-screen  lg:mt-16 mt-28 flex flex-col px-4 md:px-4 lg:px-8">
                <div className="flex flex-col mt-4 lg:flex-row">
                    {/* left */}
                    {console.log(currentSeek)}
                    <div className="lg:w-3/5 w-full lg:border-r">
                        <div>
                            <div className="w-fit text-sm text-gray-400">Go Back To Dashboard</div>
                            <div className=" w-full flex text-lg lg:text-2xl font-bold my-4"><div className="w-4/5">Applying Heuristic Evaluations In Your Next Design Project</div>
                                <div className="flex self-end h-fit"><div className="h-4 w-4 bg-white rounded-full ring-2 ring-emerald-400"></div><div className="text-xs ml-2 my-auto">81% Done</div></div>
                            </div>
                        </div>
                        {/* video */}
                        <div className="my-8 relative bg-emerald-100 w-full h-64">
                            <ReactPlayer
                                // url='https://www.youtube.com/watch?v=Z_MvkyuOJgk'
                                width={'100%'}
                                height={'100%'}
                                controls={false}
                                playing={isPlay}
                                ref={hostVideo}
                                onProgress={handleOnProgress}
                                volume={currentVolume}
                            />
                            <VideoController currentVolume={currentVolumeBar} handleVolumeChange={handleVolumeChange} handleSeekChange={handleSeekChange} totalDurationOfVideo={totalDurationOfVideo} currentSeek={currentSeek} playing={isPlay} handlePlay={handlePlay} handlePause={handlePause} />
                        </div>

                        <div className="my-8">
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
                                        <div className="text-gray-400 text-xs">My Learning Progress</div>
                                        <div className="text-sm">12/372 Chapters</div>
                                    </div>
                                </div>



                            </div>

                            <div className="my-4 lg:pr-4">
                                <div className="text-xs text-gray-400">CLASS ACTIVITY</div>
                                <div className="text-xs my-2">None yet - This will be added by your course instructor</div>

                                <div className="text-sm mt-4 font-bold">Course Modules</div>
                                <div className="text-xs mt-4 text-gray-400 ">COURSE MODULE</div>
                                <ul className="my-1">
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


                        </div>
                    </div>
                    {/* right */}
                    <div className="lg:w-2/5 w-full lg:pl-4 relative">
                        <div className="flex justify-between">
                            <div>
                                <div className="text-xs text-gray-400">Next Lesson</div>
                                <div className="text-xs">Applying Heuristics in Fintech</div>
                            </div>
                            <div className="text-emerald-400 my-auto text-sm font-bold">Jump to next lesson</div>
                        </div>
                        {/* course resource */}
                        <div className="my-8 h-28">
                            <div className="font-bold">Course Resource</div>
                        </div>

                        <div>
                            <div className="text-gray-400 text-xs">Study Group #92</div>
                            <div className="flex w-full">
                                {/* images */}
                                <div className="relative my-2 w-full flex justify-between">
                                    <div className="my-auto"><div className="h-4 w-4  rounded-full absolute bg-gray-200 top-0 left-0 border border-white"></div>
                                        <div className="h-4 w-4 rounded-full absolute bg-gray-200 top-0 left-2 border border-white"></div>
                                        <div className="h-4 w-4 rounded-full absolute bg-gray-200 top-0 left-4 border border-white"></div>
                                        <div className="text-xs ml-10 my-auto">12 Group Members</div>
                                    </div>

                                    <div className="text-sm font-bold my-auto self-end">Coming Soon</div>
                                </div>

                            </div>
                        </div>

                        <div className="flex justify-between my-4 w-full ">
                            <div className="flex">
                                <div className="h-10 w-10 rounded-full bg-gray-100"></div>
                                <div className="ml-2">
                                    <div><span className="text-gray-400 text-xs">Sonia Theodore</span>&nbsp;<span className="text-gray-200 text-xs">completed a quiz</span></div>
                                    <div className="text-xs text-gray-200">07:02am</div>
                                </div>
                            </div>
                            <div className="  my-auto">
                                <span></span>&nbsp;<span className="text-red-400 text-sm font-bold">282</span>&nbsp;<span className="text-sm text-gray-400">Likes</span>
                            </div>
                        </div>
                        {/* chat card */}
                        <div className="absolute top-28 w-full">
                            <div className="border rounded-lg bg-white shadow-2xl shadow-emerald-100 ">
                                <div className="p-2 text-white flex justify-between bg-emerald-600 rounded-t-lg">
                                    <div><div className="text-sm">Class Disscussions</div>
                                        <div className="relative my-2 w-full flex justify-between">
                                            <div className="my-auto"><div className="h-4 w-4  rounded-full absolute bg-gray-200 top-0 left-0 border border-white"></div>
                                                <div className="h-4 w-4 rounded-full absolute bg-gray-200 top-0 left-2 border border-white"></div>
                                                <div className="h-4 w-4 rounded-full absolute bg-gray-200 top-0 left-4 border border-white"></div>
                                                <div className="text-xs ml-10 my-auto">75+ Messages</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-4 w-4 bg-white my-auto"></div>
                                </div>

                                <div>
                                {/* messages */}

                                <div className="flex p-4">
                                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                                    <div className=" w-fit text-sm ml-2">
                                        <div className=""><span className="font-bold text-base">Moses Okon</span>&nbsp;<span className="text-xs text-gray-400">07:03am</span></div>
                                        <div className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                        <div className="flex">
                                            <div className="text-red-400 mr-4">Like</div>
                                            <div className="text-emerald-600">Comment</div>
                                        </div>
                                    </div>
                                </div>
                                {/* you */}
                                <div className="flex p-4">
                                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                                    <div className=" w-fit text-sm ml-2">
                                        <div className=""><span className="font-bold text-base">Ekemini Mark - You</span>&nbsp;<span className="text-xs text-gray-400">07:03am</span></div>
                                        <div className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                        <div className="flex">
                                            <div className="text-red-400 mr-4"><span>23</span>&nbsp;<span className="text-black">Likes</span></div>
                                            <div className="text-black mr-4"><span>11</span>&nbsp;<span className="text-black">Comments</span></div>
                                            <div className="text-emerald-600 mr-4">Edit Post</div>
                                            <div className="text-red-400 ">Delete Post</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-sm flex flex-col">
                                    <textarea
                                    placeholder="Write your reply here. Sound complementary"
                                    className="w-full p-4 border-t border-t-emerald-600 focus:outline-none h-10 no-scrollbar resize-none"/>
                                <div className="text-emerald-600 text-sm p-4 self-end cursor-pointer">Send Post</div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </AuthGuard>
    )
}

export default VideoCourse;