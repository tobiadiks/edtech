import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import TextInput from "@components/inputs/text.input";
import PasswordInput from "@components/inputs/password.input";
import SelectInput from "@components/inputs/select.input";
import DualInput from "@components/inputs/dual.input";

const SignUpPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col my-8 md:my-11 justify-center align-middle px-4 md:px-6">
      <div className="w-full">
        <div className=" text-center w-full md:w-1/3 mx-auto text-lg font-medium">
          learnali.
        </div>

        <div className="flex w-full md:w-1/3 my-6 font-medium mx-auto justify-between">
          <div className="border-y border-l px-2 py-4 rounded-l-lg text-center w-1/2">
            Join Learnali
          </div>
          <div className="border-y  border-x px-2 py-4 rounded-r-lg text-center w-1/2">
            Login
          </div>
        </div>
        <div className=" text-center w-full md:w-1/3 mx-auto font-medium">
          Fill in your correct detail
        </div>
      </div>

      <form className="w-full md:w-1/3 my-6 mx-auto">
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
        <PrimaryButton type={"submit"} title={"Create an Account"} />
      </form>
    </div>
  );
};

export default SignUpPage;
