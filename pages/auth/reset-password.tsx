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
      <div className="w-full font-archivo min-h-screen flex flex-col my-8 md:my-11 justify-center align-middle px-4 md:px-6">
        <div className="w-full">
          <Link href={"/"} passHref>
            <div className="cursor-pointer text-center w-full md:w-1/2 lg:w-1/3 mx-auto text-lg font-bold">
              learnali.
            </div>
          </Link>

          <div className="flex w-full md:w-1/2 lg:w-1/3 my-6 font-medium mx-auto justify-between">
            <Link href={"/auth/signup"} passHref>
              <div className="border-y border-l px-2 py-4 rounded-l-lg text-center w-1/2 cursor-pointer">
                Join Learnali
              </div>
            </Link>
            <Link href={"/auth/login"} passHref>
              <div className="border-y  border-x px-2 py-4 rounded-r-lg text-center w-1/2 cursor-pointer">
                Login
              </div>
            </Link>
          </div>
          <div className=" text-center w-full md:w-1/2 lg:w-1/3 mx-auto font-medium">
            Enter Password Code Here
          </div>
          <div className=" text-center text-xs text-gray-400 w-full md:w-1/2 lg:w-1/3 mx-auto font-medium">
            Check your email for the code or click the link in your email
          </div>
        </div>

        <form className="w-full md:w-1/2 lg:w-1/3 my-6 mx-auto">
          <OtpInput
            label="Email Address"
            placeholder="Enter your email address"
            type="text"
            required
          />

          <PrimaryButton
            onclick={() => {
              setIsVerified(true);
            }}
            type={"submit"}
            title={"Reset Password"}
          />
        </form>
      </div>
    );
  } else {
    return (
      <div className="w-full font-archivo min-h-screen flex flex-col my-8 md:my-11 justify-center align-middle px-4 md:px-6">
        <div className="w-full">
          <Link href={"/"} passHref>
            <div className="cursor-pointer text-center w-full md:w-1/2 lg:w-1/3 mx-auto text-lg font-bold">
              learnali.
            </div>
          </Link>

          <div className="flex w-full md:w-1/2 lg:w-1/3 my-6 font-medium mx-auto justify-between">
            <Link href={"/auth/signup"} passHref>
              <div className="border-y border-l px-2 py-4 rounded-l-lg text-center w-1/2 cursor-pointer">
                Join Learnali
              </div>
            </Link>
            <Link href={"/auth/login"} passHref>
              <div className="border-y  border-x px-2 py-4 rounded-r-lg text-center w-1/2 cursor-pointer">
                Login
              </div>
            </Link>
          </div>
          <div className=" text-center w-full md:w-1/2 lg:w-1/3 mx-auto font-medium">
            Let&apos; reset your password
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onsubmit)}
          className="w-full md:w-1/2 lg:w-1/3 my-6 mx-auto"
        >
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
         <PrimaryButton type={"submit"} title={"Change Password"} />
        )}
          
        </form>
      </div>
    );
  }
};

export default ResetPasswordPage;
