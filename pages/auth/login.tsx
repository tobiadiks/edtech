import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import TextInput from "@components/inputs/text.input";
import PasswordInput from "@components/inputs/password.input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: String;
  password: String;
}
const SignInPage: NextPage = () => {
  const route = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onsubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="w-full min-h-screen font-archivo flex flex-col my-8 md:my-11 justify-center md:align-middle px-4 md:px-6">
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
          Let&apos;s log you back in!
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onsubmit)}
        className="w-full md:w-1/2 lg:w-1/3 my-6 mx-auto"
      >
        <TextInput
          register={register}
          name={'email'}
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          required
        />
        <PasswordInput
          register={register}
          name="password"
          label="Your Password"
          placeholder="Enter your password"
          required={true}
        />
        <Link href={"/auth/forgot-password"} passHref>
          <div className="cursor-pointer text-right text-sm w-full  mx-auto font-medium">
            Forgot Password?
          </div>
        </Link>
        <PrimaryButton type={"submit"} title={"Login to Learnali"} />
      </form>
    </div>
  );
};

export default SignInPage;
