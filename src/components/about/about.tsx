import React from "react";
import { Button, Img, Text } from "..";

export default function About({
  caption = "Find Jobs",
  captionOne = "Browse Companies",
  captionTwo = "Login",
  signUp = "Sign Up",
  homecompanies = "Home / Companies / Nomad / Social Media Assistant",
  socialmedia = "Social Media Assistant",
  nomad = "Stripe",
  parisfrance = "Paris, France",
  fulltime = "Full-Time",
  apply = "Apply",
  ...props
}: IAHeader) {
  return (
    <div {...props}>
      <header className="flex items-center justify-center self-stretch bg-white-A700">
        <div className="container-sm flex justify-between gap-5 md:flex-col md:p-5">
          <div className="ml-2 flex w-[38%] items-center justify-between gap-5 md:ml-0 md:w-full sm:flex-col">
            <a href="/home">
              <Img src="images/img_header_logo.png" alt="headerlogo" className="h-[34px] w-[180px] object-cover" />
            </a>
            <div className="flex w-[54%] items-start justify-between gap-3 pt-2 sm:w-full sm:pt-5">
              <div className="flex w-[33%] flex-col gap-2">
                <Text as="p" className="!font-medium !text-indigo-A700">
                  {caption}
                </Text>
                <div className="h-[4px] bg-indigo-A700" />
              </div>
              <ul className="flex">
                <li>
                  <a href="/browse">
                    <Text as="p" className="!font-medium !text-blue_gray-700">
                      {captionOne}
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center py-3.5 pl-3.5">
            <Text className="text-center text-base font-bold !text-indigo-A700">{captionTwo}</Text>
            <div className="ml-10 h-[48px] w-px bg-gray-300" />
            <Button className="ml-[15px] h-[50px] min-w-[108px] bg-indigo-A700 px-6 text-base font-bold text-white-A700 sm:px-5">
              {signUp}
            </Button>
          </div>
        </div>
      </header>
      <div className="container-sm mb-[71px] flex flex-col gap-[45px] md:p-5">
        <div className="flex flex-col items-start px-[9px]">
          <Text className="text-base font-normal !text-gray-900">{homecompanies}</Text>
        </div>
        <div className="flex items-center justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-6 md:flex-col sm:p-5">
          <div className="ml-[9px] flex w-[41%] items-center justify-center gap-6 md:ml-0 md:w-full sm:flex-col">
            <div className="w-[20%] sm:w-full">
              <Img
                src="images/img_stripe_logo_dp4f5yykm.png"
                alt="stripelogo"
                className="h-[82px] w-full object-cover md:h-auto"
              />
            </div>
            <div className="flex flex-1 flex-col items-start gap-[7px] sm:self-stretch">
              <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
                {socialmedia}
              </Text>
              <div className="flex w-[89%] items-center gap-2 md:w-full">
                <Text className="self-end text-xl font-normal !text-blue_gray-700">{nomad}</Text>
                <div className="h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-700" />
                <Text className="text-xl font-normal !text-blue_gray-700">{parisfrance}</Text>
                <div className="h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-700" />
                <Text className="self-start text-xl font-normal !text-blue_gray-700">{fulltime}</Text>
              </div>
            </div>
          </div>
          <div className="mr-[7px] flex w-[22%] items-center justify-between gap-5 md:mr-0 md:w-full">
            <Img src="images/img_icon_blue_gray_400.svg" alt="icon" className="h-[33px] w-[32px]" />
            <div className="h-full w-px bg-gray-300" />
            <Button className="h-[57px] min-w-[164px] bg-indigo-A700 px-[35px] text-lg font-bold text-white-A700 sm:px-5">
              {apply}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
