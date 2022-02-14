import type { NextPage } from "next";
import PrimaryButton from "@components/buttons/primary.button";
import * as React from "react";
import TextInput from "@components/inputs/text.input";
import PasswordInput from "@components/inputs/password.input";
import SelectInput from "@components/inputs/select.input";
import DualInput from "@components/inputs/dual.input";
import SecondaryButton from "@components/buttons/secondary.button";
import OtpInput from "@components/inputs/otp.input";

const ResetPasswordPage: NextPage = () => {

  const [isVerified,setIsVerified] = React.useState(false);

  if (!isVerified){
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
          Enter Password Code Here
        </div>
        <div className=" text-center text-xs text-gray-400 w-full md:w-1/3 mx-auto font-medium">
          Check your email for the code or click the link in your email
        </div>
      </div>

      <form className="w-full md:w-1/3 my-6 mx-auto">
        <OtpInput
          label="Email Address"
          placeholder="Enter your email address"
          type="text"
          required
        />

        <SecondaryButton onclick={()=>{setIsVerified(true)}} type={"submit"} title={"Reset Password"} />
      </form>
    </div>
  );
  }

  else{
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
            Let&apos; reset your password
          </div>
          
        </div>
  
        <form className="w-full md:w-1/3 my-6 mx-auto">
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          value="custom@gmail.com"
          required
        />
        <PasswordInput
          label="Confirm New Password"
          placeholder="Enter your password here"
          required
        />
  
          <SecondaryButton type={"submit"} title={"Change Password"} />
        </form>
      </div>
    );
  }

};

export default ResetPasswordPage;
