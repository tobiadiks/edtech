import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import TextInput from "@components/inputs/text.input";
import PasswordInput from "@components/inputs/password.input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useService } from "services/user.service";
import LoadingButton from "@components/buttons/loading.button";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SecondaryButton from "@components/buttons/secondary.button";
import Image from "next/image";

interface IFormInput {
    email: String;
    password: String;
}
const AssessmentPage: NextPage = () => {
    const route = useRouter();
    const validateSchema = Yup.object().shape({
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required"),
    });
    const formOptions = { resolver: yupResolver(validateSchema) };
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;
    const onsubmit = (data: any) => {
        console.log(data);

        return useService
            .login(JSON.stringify(data))
            .then(() => {
                route.push("/dashboard");
            })
            .catch((error) => {
                setError("email", { message: 'error' });
            });
    };

    return (
        <div className="w-full min-h-screen font-inter flex flex-col my-8 md:my-11 justify-center md:align-middle px-4 md:px-6">
            <div className="w-full">
                {/* <Link href={"/"} passHref>
          <div className="cursor-pointer mb-6 text-center w-full md:w-1/2 lg:w-1/3 mx-auto text-lg font-bold">
            learnali.
          </div>
        </Link> */}


                {/* <div className=" text-center w-full md:w-1/2 lg:w-1/3 mx-auto font-semibold">
          Let&apos;s log you back in!
        </div> */}
            </div>
            {/* {errors.email?.message} */}
            <form
                onSubmit={handleSubmit((data) => onsubmit(data))}
                className="w-full relative md:w-1/2 shadow  bg-white lg:w-1/3 py-4 border border-green-400 rounded-lg  mx-auto"
            >
                <div className="flex justify-between px-4">
                    <div>
                        <div className="font-semibold">
                            72,800 Areas <span className="text-gray-400">Available</span>
                        </div>
                        <div className="text-xs">Let’s help you find yours</div>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">You are logged in as</div>
                        <div className="flex">
                            <div className=" w-6 h-6 md:mx-0  bg-gray-300 my-auto rounded-full"></div>&nbsp;
                            <div className="cursor-pointer text-xs  lg:text-sm font-semibold my-auto ">
                                Tamoru Dara
                            </div>
                        </div>
                    </div>
                </div>
<div className="w-full px-4 mt-2">
    <div className="flex justify-between font-semibold text-sm"><div>Previous</div>
    <div className="text-green-400">Next Question</div></div>
    <div className="w-full mt-2 relative h-1 rounded bg-green-100">
<div className="absolute top-0 left-0 bg-green-400 w-1/3 h-1"></div>
    </div>
</div>
                <div className="flex my-4 snap-x px-4 snap-mandatory space-x-4 w-full  h-48  no-scrollbar overflow-x-scroll">


                    <div className="flex-none snap-center rounded px-2 py-2 bg-gray-100  lg:w-full w-11/12 h-full">
                        <div className="font-semibold text-sm">Which of these subjects would you
                            most like to take a class in?</div>
                            <div className="w-full mt-4">
                            <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold '>Making Robots</div><div></div></div>
                            <div className="flex justify-between w-full p-2 bg-green-100 "><div className='text-xs font-semibold '>Making Robots</div><div></div></div>
                            <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold'>Making Robots</div><div></div></div>
                        </div>
                      
                    </div>
                    <div className="flex-none snap-center rounded px-2 py-2 bg-yellow-100  lg:w-full w-11/12 h-full">
                        <div className="font-semibold text-sm">Which of these subjects would you
                            most like to take a class in?</div>
                            <div className="w-full mt-4">
                            <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold '>Making Robots</div><div></div></div>
                            <div className="flex justify-between w-full p-2 bg-green-100 "><div className='text-xs font-semibold '>Making Robots</div><div></div></div>
                            <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold'>Making Robots</div><div></div></div>
                        </div>
                        
                    </div>
                    <div className="flex-none snap-center rounded px-2 py-2 bg-blue-100  lg:w-full w-11/12 h-full">
                        <div className="font-semibold text-sm">Which of these subjects would you
                            most like to take a class in?</div>
                            <div className="w-full mt-4">
                            <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold '>Making Robots</div><div></div></div>
                            <div className="flex justify-between w-full p-2 bg-green-100 "><div className='text-xs font-semibold '>Making Robots</div><div></div></div>
                            <div className="flex justify-between w-full p-2 bg-white"><div className='text-xs font-semibold'>Making Robots</div><div></div></div>
                        </div>
                        
                    </div>

                </div>

                <div className="px-4 pt-4">
                    <SecondaryButton type={'button'} title={'Reveal Suggested Path'} />
                </div>
                <div className="text-sm mx-auto w-fit">Skip, I have a Path</div>
            </form>

            {/* <div className="w-full mx-auto md:w-1/2 lg:w-1/3">
      <div className="my-2 text-sm">
        By creating an account you agree to LearnAli’s <span className="text-green-400">Terms of Service</span>&nbsp;
and <span className="text-green-400">Privacy Policy</span>
        </div>
        <div className="my-2 text-sm">We are Hiring ⚡️ <span className="text-green-400">Join Us</span></div>
        
      </div> */}
            {/* <div className="fixed bottom-0 left-0">
      <div className="relative w-32 lg:w-64">
        <Image
        src={'/Charco-Education.png'}
        layout='responsive'
        height={316}
        width={505}
        />
      </div>
      </div> */}

            {/* <div className="fixed bottom-0 right-0">
      <div className="relative w-32 lg:w-64">
        <Image
        src={'/Charco-Directions.png'}
        layout='responsive'
        height={316}
        width={505}
        />
      </div>
      </div> */}
        </div>
    );
};

export default AssessmentPage;
