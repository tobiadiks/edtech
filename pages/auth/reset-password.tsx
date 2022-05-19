import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import TextInput from "@components/inputs/text.input";
import PasswordInput from "@components/inputs/password.input";
import SelectInput from "@components/inputs/select.input";
import DualInput from "@components/inputs/dual.input";
import SecondaryButton from "@components/buttons/secondary.button";
import OtpInput from "@components/inputs/otp.input";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import LoadingButton from "@components/buttons/loading.button";

interface IFormInput {
  email:String;
  password:String;
  
}
const ResetPasswordPage: NextPage = () => {
  const [isVerified, setIsVerified] = React.useState(false);
  const { register, handleSubmit, formState,setError } = useForm<IFormInput>();
  const onsubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  if (!isVerified) {
    return (
      <div className="w-full font-inter min-h-screen flex flex-col my-8 md:my-11 justify-center align-middle px-4 md:px-6">
        <div className="w-full">
          <Link href={"/"} passHref>
            <div className="cursor-pointer mb-6 text-center w-full md:w-1/2 lg:w-1/3 mx-auto text-lg font-bold">
              learnali.
            </div>
          </Link>

          
        <div className="flex shadow rounded-lg font-semibold w-11/12 md:w-1/3 lg:w-1/4   mx-auto justify-between">
          <Link href={"/auth/signup"} passHref>
            <div className="border-y    border-l px-2 py-4 rounded-l-lg text-center w-1/2 cursor-pointer">
              Join Learnali
            </div>
          </Link>
          <Link href={"/auth/login"} passHref>
            <div className="border-y border-l-green-400 bg-green-100 text-green-400 border-green-400  border-x px-2 py-4 rounded-r-lg text-center w-1/2 cursor-pointer">
              Login
            </div>
          </Link>
        </div>
         
        </div>

        <form className="w-full md:w-1/2 shadow transform -translate-y-2 bg-white lg:w-1/3 p-4 border rounded-lg  mx-auto">
        <div className="  w-full text-sm  mx-auto font-semibold">
            Enter Password Code Here
          </div>
          <div className=" text-xs text-gray-400 w-full mx-auto font-semibold">
            Check your email for the code or click the link in your email
          </div>
          <OtpInput
            label="Email Address"
            placeholder="Enter your email address"
            type="text"
            required
          />

          <SecondaryButton
            onclick={() => {
              setIsVerified(true);
            }}
            type={"submit"}
            title={"Reset Password"}
          />
        </form>
        <div className="w-full mx-auto md:w-1/2 lg:w-1/3">
      <div className="my-2 text-sm">
        By creating an account you agree to LearnAli’s <span className="text-green-400">Terms of Service</span>&nbsp;
and <span className="text-green-400">Privacy Policy</span>
        </div>
        <div className="my-2 text-sm">We are Hiring ⚡️ <span className="text-green-400">Join Us</span></div>
        
      </div>
      </div>
    );
  } else {
    return (
      <div className="w-full font-inter min-h-screen flex flex-col my-8 md:my-11 justify-center align-middle px-4 md:px-6">
        <div className="w-full">
          <Link href={"/"} passHref>
            <div className="cursor-pointer mb-6 text-center w-full md:w-1/2 lg:w-1/3 mx-auto text-lg font-bold">
              learnali.
            </div>
          </Link>

          
        <div className="flex shadow rounded-lg font-semibold w-11/12 md:w-1/3 lg:w-1/4   mx-auto justify-between">
          <Link href={"/auth/signup"} passHref>
            <div className="border-y    border-l px-2 py-4 rounded-l-lg text-center w-1/2 cursor-pointer">
              Join Learnali
            </div>
          </Link>
          <Link href={"/auth/login"} passHref>
            <div className="border-y border-l-green-400 bg-green-100 text-green-400 border-green-400  border-x px-2 py-4 rounded-r-lg text-center w-1/2 cursor-pointer">
              Login
            </div>
          </Link>
        </div>
          
        </div>

        <form
          onSubmit={handleSubmit(onsubmit)}
          className="w-full md:w-1/2 shadow transform -translate-y-2 bg-white lg:w-1/3 p-4 border rounded-lg  mx-auto"
        >
          <div className=" w-full mx-auto text-sm font-semibold">
            Let&apos; reset your password
          </div>
          <TextInput
            register={register}
            name={"email"}
            label="Email Address"
            placeholder="Enter your email address"
            type="email"
            value="custom@gmail.com"
            required
          />
          <PasswordInput
            register={register}
            name={"password"}
            label="Confirm New Password"
            placeholder="Enter your password here"
            required
          />
  {formState.isSubmitting ? (
          <LoadingButton />
        ) : (
         <SecondaryButton type={"submit"} title={"Change Password"} />
        )}
          
        </form>
      
        <div className="w-full mx-auto md:w-1/2 lg:w-1/3">
      <div className="my-2 text-sm">
        By creating an account you agree to LearnAli’s <span className="text-green-400">Terms of Service</span>&nbsp;
and <span className="text-green-400">Privacy Policy</span>
        </div>
        <div className="my-2 text-sm">We are Hiring ⚡️ <span className="text-green-400">Join Us</span></div>
        
      </div>
      </div>
    );
  }
};

export default ResetPasswordPage;
