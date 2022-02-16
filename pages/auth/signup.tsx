import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import TextInput from "@components/inputs/text.input";
import PasswordInput from "@components/inputs/password.input";
import SelectInput from "@components/inputs/select.input";
import DualInput from "@components/inputs/dual.input";
import Link from "next/link";
import { useRouter } from "next/router";

const SignUpPage: NextPage = () => {
  const route = useRouter();
  return (
    <div className="w-full font-inter min-h-screen flex flex-col my-8 md:my-11 justify-center align-middle px-4 md:px-6">
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
          Fill in your correct detail
        </div>
      </div>

      <form className="w-full md:w-1/2 lg:w-1/3 my-6 mx-auto">
        <DualInput
          first_label="First name"
          second_label="Last Name"
          first_placeholder="Your first name"
          second_placeholder="Your last name"
          hint="We are big on real names here"
        />
        <SelectInput label="Where are you from" placeholder="Select" />
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          required
        />
        <PasswordInput
          label="Your Password"
          placeholder="Enter your password"
          required
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Re-enter your password"
          required
        />
        <PrimaryButton
          onclick={() => {
            route.push("/onboarding/career-path");
          }}
          type={"button"}
          title={"Create an Account"}
        />
      </form>
    </div>
  );
};

export default SignUpPage;
