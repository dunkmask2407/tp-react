import React from "react";
import { Heading, Text, Button, Img } from "..";

const data = [
  { iconone: "images/img_icon_blue_500.svg", founded: "Founded", july312011: "July 31, 2011" },
  { iconone: "images/img_icon_blue_500_44x44.svg", founded: "Employees", july312011: "4000+" },
  { iconone: "images/img_linkedin_blue_500.svg", founded: "Location", july312011: "20 countries" },
  { iconone: "images/img_icon_44x44.svg", founded: "Industry", july312011: "Payment Gateway" },
];

export default function Profil({
  caption = "Find Jobs",
  captionOne = "Browse Companies",
  captionTwo = "Login",
  signUp = "Sign Up",
  homecompanies = "Home / Companies / Nomad",
  stripe = "Stripe",
  p43jobs = "43 Jobs",
  weburl = "https://stripe.com",
  founded = "Founded",
  july312011 = "July 31, 2011",
  employees = "Employees",
  fourthousand = "4000+",
  location = "Location",
  countriescounte = "20 countries",
  industry = "Industry",
  paymentgateway = "Payment Gateway",
  ...props
}: IPHeader) {
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
          <div className="flex w-[19%] justify-center gap-[15px] py-3.5 md:w-full">
            <div className="flex w-full items-center justify-between gap-5">
              <Heading as="h6" className="ml-[23px] text-center !font-bold !text-indigo-A700">
                {captionTwo}
              </Heading>
              <div className="h-[48px] w-px bg-gray-300" />
            </div>
            <Button className="ml-[15px] h-[50px] min-w-[108px] bg-indigo-A700 px-6 text-base font-bold text-white-A700 sm:px-5">
              {signUp}
            </Button>
          </div>
        </div>
      </header>
      <div className="container-sm mb-[72px] flex flex-col items-start px-[11px] md:p-5">
        <div className="flex w-[85%] flex-col items-start gap-[45px] md:w-full">
          <Text as="p" className="!text-blue_gray-900">
            {homecompanies}
          </Text>
          <div className="flex items-center gap-6 self-stretch md:flex-col">
            <div className="w-[19%] p-2 md:w-full">
              <Img
                src="images/img_stripe_logo_dp4f5yykm.png"
                alt="stripelogo"
                className="h-[171px] w-[171px] object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6 md:self-stretch">
              <div className="flex flex-col items-start gap-[9px] pb-1">
                <div className="flex items-start gap-3">
                  <Heading size="8xl" as="h1" className="!font-clashdisplayvariable">
                    {stripe}
                  </Heading>
                  <Button shape="square" color="undefined_undefined" className="mt-[9px] min-w-[85px]">
                    {p43jobs}
                  </Button>
                </div>
                <Heading as="h6" className="!text-indigo-A700">
                  {weburl}
                </Heading>
              </div>
              <div className="flex gap-10 md:flex-col">
                {data.map((d, index) => (
                  <div key={"about" + index} className="flex items-center gap-4">
                    <Button size="4xl" variant="fill" shape="circle" className="w-[44px] !rounded-[22px]">
                      <Img src={d.iconone} />
                    </Button>
                    <div className="flex flex-col items-start justify-center gap-2.5">
                      <Text as="p" className="!text-blue_gray-700">
                        {d.founded}
                      </Text>
                      <Heading as="h6">{d.july312011}</Heading>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
