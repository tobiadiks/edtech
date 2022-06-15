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
import { userService } from "services/user/user.service";
import LoadingButton from "@components/buttons/loading.button";
import SecondaryButton from "@components/buttons/secondary.button";
import Image from "next/image";
import { miscService } from "services/user/misc.service";

interface IFormInput {
  first_name: String;
  last_name: String;
  email: String;
  country_id: String;
  password: String;
  password_confirmation: String;
  phone_number: String;
}

const SignUpPage: NextPage = () => {
  const route = useRouter();
  const { register, handleSubmit, setError, formState } = useForm<IFormInput>();
  const onsubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);

    return userService
      .signup(JSON.stringify(data))
      .then(() => {
        route.push("/student/onboarding/assessment");
      })
      .catch((error) => {
        setError("email", { message: error });
      });
  };

  return (
    <div className="w-full font-inter min-h-screen flex flex-col my-8 md:my-11 justify-center align-middle px-4 md:px-6">
      <div className="w-full">
        <Link href={"/"} passHref>
          <div className="cursor-pointer mb-6 text-center w-full md:w-1/2 lg:w-1/3 mx-auto text-lg font-bold">
            learnali.
          </div>
        </Link>

        <div className="flex rounded-lg shadow font-semibold w-11/12 md:w-1/3 lg:w-1/4   mx-auto justify-between">
          <Link href={"/auth/signup"} passHref>
            <div className="border-y border-emerald-400 bg-emerald-100 text-emerald-400 border-l px-2 py-4 rounded-l-lg text-center w-1/2 cursor-pointer">
              Join Learnali
            </div>
          </Link>
          <Link href={"/auth/login"} passHref>
            <div className="border-y border-l-emerald-400  border-x px-2 py-4 rounded-r-lg text-center w-1/2 cursor-pointer">
              Login
            </div>
          </Link>
        </div>
        {/* <div className=" text-center w-full md:w-1/2 lg:w-1/3 mx-auto font-semibold">
          Fill in your correct detail
        </div> */}
      </div>

      <form
        onSubmit={handleSubmit(onsubmit)}
        className="w-full  shadow md:w-1/2 lg:w-1/3 transform -translate-y-2  bg-white border p-4 rounded-lg  mx-auto"
      >
        <div className=" h-64 no-scrollbar overflow-y-scroll">
        <DualInput
          first_register={register}
          first_name={"first_name"}
          second_register={register}
          second_name={"last_name"}
          first_label="First name"
          second_label="Last Name"
          first_placeholder="Your first name"
          second_placeholder="Your last name"
          first_required
          second_required
          hint="We are big on real names here"
        />
        <SelectInput
          register={register}
          name={"country_id"}
          label="Where are you from"
          placeholder="Select"
          required
          
        />
        <TextInput
          register={register}
          name={"email"}
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          required
        />
        <TextInput
          register={register}
          name={"phone_number"}
          label="Phone"
          placeholder="Enter your phone number"
          type="tel"
          required
        />
        <PasswordInput
          register={register}
          name={"password"}
          label="Your Password"
          placeholder="Enter your password"
          required
        />
        <PasswordInput
          register={register}
          name={"password_confirmation"}
          label="Confirm Password"
          placeholder="Re-enter your password"
          required
        />
        {formState.isSubmitting ? (
          <LoadingButton />
        ) : (
          <SecondaryButton type={"submit"} title={"Create an Account"} />
        )}
        </div>

        <div className=" pt-4">
          <div className="mb-2">
            <div className="text-sm text-gray-400">or Join Learnali via...</div>
          <div className="grid grid-cols-3 font-semibold text-sm">
<div>Google</div>
<div>Twitter</div>
<div>Github</div>
          </div>
          </div>
        </div>
      </form>
      <div className="w-full mb-16 md:mb-0 mx-auto md:w-1/2 lg:w-1/3">
      <div className="my-2 text-sm">
        By creating an account you agree to LearnAli’s <span className="text-emerald-400">Terms of Service</span>&nbsp;
and <span className="text-emerald-400">Privacy Policy</span>
        </div>
        <div className="my-2 text-sm">We are Hiring ⚡️ <span className="text-emerald-400">Join Us</span></div>
        
      </div>
{/* <div className="fixed bottom-0 left-0">
      <div className="relative w-32 lg:w-64">
        <Image
        alt="Charco-Education"
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
        alt="Charco-Direction"
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

export default SignUpPage;
