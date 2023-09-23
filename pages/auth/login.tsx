import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import TextInput from "@components/inputs/text.input";
import PasswordInput from "@components/inputs/password.input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { userService } from "services/user/user.service";
import LoadingButton from "@components/buttons/loading.button";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SecondaryButton from "@components/buttons/secondary.button";
import Image from "next/image";

interface IFormInput {
  email: String;
  password: String;
}
const SignInPage: NextPage = () => {
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
setTimeout(()=>route.push("/student/onboarding/assessment"),2000)
    // return userService
    //   .login(JSON.stringify(data))
    //   .then(() => {
    //     route.push("/student/dashboard");
    //   })
    //   .catch((error) => {
    //     setError("email", { message: 'error' });
    //   });
  };

  return (
    <div className="w-full min-h-screen font-inter flex flex-col my-8 md:my-11 justify-center md:align-middle px-4 md:px-6">
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
            <div className="border-y border-l-emerald-400 bg-emerald-100 text-emerald-400 border-emerald-400  border-x px-2 py-4 rounded-r-lg text-center w-1/2 cursor-pointer">
              Login
            </div>
          </Link>
        </div>
        {/* <div className=" text-center w-full md:w-1/2 lg:w-1/3 mx-auto font-semibold">
          Let&apos;s log you back in!
        </div> */}
      </div>
      {/* {errors.email?.message} */}
      <form
        onSubmit={handleSubmit((data)=>onsubmit(data))}
        className="w-full md:w-1/2 shadow transform -translate-y-2 bg-white lg:w-1/3 p-4 border rounded-lg  mx-auto"
      ><div className=" h-64 no-scrollbar overflow-y-scroll">
        <TextInput
          register={register}
          name={"email"}
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
          <div className="cursor-pointer text-right text-sm w-full  mx-auto font-semibold text-emerald-400">
            Forgot Password?
          </div>
        </Link>
        {formState.isSubmitting ? (
          <LoadingButton />
        ) : (
          <SecondaryButton type={"submit"} title={"Jump right back in!"} />
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

      <div className="w-full mx-auto md:w-1/2 lg:w-1/3">
      <div className="my-2 text-sm">
        By creating an account you agree to LearnAli’s <span className="text-emerald-400">Terms of Service</span>&nbsp;
and <span className="text-emerald-400">Privacy Policy</span>
        </div>
        <div className="my-2 text-sm">We are Hiring ⚡️ <span className="text-emerald-400">Join Us</span></div>
        
      </div>
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

export default SignInPage;
