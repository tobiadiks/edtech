import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import TextInput from "@components/inputs/text.input";
import PasswordInput from "@components/inputs/password.input";
import SelectInput from "@components/inputs/select.input";
import DualInput from "@components/inputs/dual.input";
import SecondaryButton from "@components/buttons/secondary.button";
import Link from "next/link";
import { useRouter } from "next/router";

const ForgotPasswordPage: NextPage = () => {
  const route = useRouter();
  const [email, setEmail] = React.useState("");
  return (
    <div className="w-full min-h-screen flex font-inter flex-col my-8 md:my-11 justify-center align-middle px-4 md:px-6">
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
          Reset Your Password
        </div>
        <div className=" text-center text-xs text-gray-400 w-full md:w-1/2 lg:w-1/3 mx-auto font-medium">
          Let&apos;s get your email and we will get you back in!
        </div>
      </div>

      <form className="w-full md:w-1/2 lg:w-1/3 my-6 mx-auto">
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          value={email}
          onchange={(e: any) => setEmail(e.target.value)}
          required
        />

        <SecondaryButton
          type={"button"}
          title={"Reset Password"}
          onclick={() => {
            email ? route.push("/auth/reset-password") : null;
          }}
        />
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
