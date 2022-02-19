import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import TextInput from "@components/inputs/text.input";
import PasswordInput from "@components/inputs/password.input";
import SelectInput from "@components/inputs/select.input";
import DualInput from "@components/inputs/dual.input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  first_name:String;
  last_name:String;
  email:String;
  country_id:String;
  password:String;
  password_confirmation:String;
  phone_number:String;
}
const SignUpPage: NextPage = () => {
  const route = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onsubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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
          Fill in your correct detail
        </div>
      </div>

      <form onSubmit={handleSubmit(onsubmit)} className="w-full md:w-1/2 lg:w-1/3 my-6 mx-auto">
        <DualInput
          first_register={register}
          first_name={'first_name'}
          second_register={register}
          second_name={'last_name'}
          first_label="First name"
          second_label="Last Name"
          first_placeholder="Your first name"
          second_placeholder="Your last name"
          hint="We are big on real names here"
        />
        <SelectInput
        register={register}
        name={'country_id'}
        label="Where are you from" placeholder="Select" />
        <TextInput
          register={register}
          name={'email'}
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          required
        />
        <TextInput
          register={register}
          name={'phone_number'}
          label="Phone"
          placeholder="Enter your phone number"
          type="tel"
          required
        />
        <PasswordInput
          register={register}
          name={'password'}
          label="Your Password"
          placeholder="Enter your password"
          required
        />
        <PasswordInput
          register={register}
          name={'password_confirmation'}
          label="Confirm Password"
          placeholder="Re-enter your password"
          required
        />
        <PrimaryButton
          
          type={"submit"}
          title={"Create an Account"}
        />
      </form>
    </div>
  );
};

export default SignUpPage;
