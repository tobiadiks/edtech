import SecondaryButton from "@components/buttons/secondary.button"

const CareerPathSummaryCard=()=>{
    return(
        <div className="w-full relative lg:w-1/3   shadow  bg-white  py-4 border border-green-400 rounded-lg  mx-auto">
        <div className="flex px-4 flex-col w-fit mx-auto">

            <div className=" w-8 h-8   bg-gray-300 mx-auto mb-2 rounded-full"></div>
            <div className=" text-sm  w-fit mx-auto  lg:text-sm font-semibold ">
                Hey, Tamoru Dara
            </div>

            <div className="text-xs mx-auto w-fit text-gray-400">Here is your path breakdown, you are</div>
            <div>
                <div className="font-semibold text-lg text-center my-2">
                    <span>83% Creative</span>&nbsp;<p />
                    <span className="text-gray-500">10% Analytic</span>&nbsp;
                    <span className="text-gray-300">7% Managarial</span>
                </div>
                <div className="text-xs text-center text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis deleniti similique dolor quod molestiae nisi, eius corporis maxime, voluptatem amet voluptatum doloribus fuga sed voluptatibus. Est harum dolore doloribus?
                </div>
            </div>
        </div>

        <div className="flex my-4 snap-x px-4 snap-mandatory space-x-4 w-full    no-scrollbar overflow-x-scroll">


            <div className="flex-none snap-center rounded p-4 bg-gray-100  lg:w-full w-11/12 h-full">
                <div className="font-semibold text-sm">Which of these subjects would you
                    most like to take a class in?</div>
                <div className="w-full mt-4">
                    <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold '>Making Robots</div><div></div></div>

                </div>

            </div>
            <div className="flex-none snap-center rounded p-4 bg-yellow-100  lg:w-full w-11/12 h-full">
                <div className="font-semibold text-sm">Which of these subjects would you
                    most like to take a class in?</div>
                <div className="w-full mt-4">
                    <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold '>Making Robots</div><div></div></div>

                </div>

            </div>
            <div className="flex-none snap-center rounded p-4 bg-blue-100  lg:w-full w-11/12 h-full">
                <div className="font-semibold text-sm">Which of these subjects would you
                    most like to take a class in?</div>
                <div className="w-full mt-4">
                    <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold '>Making Robots</div><div></div></div>

                </div>

            </div>

        </div>

        <div className="px-4 pt-4">
            <SecondaryButton type={'button'} title={'Share with your friends'} />
        </div>

    </div>
    )
}

export default CareerPathSummaryCard