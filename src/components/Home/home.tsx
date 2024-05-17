import React from "react";
import { Text, Button, Input, SelectBox, Img } from "..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Home({
  findjobstext = "Find Jobs",
  browsecompaniestext = "Browse Companies",
  logintext = "Login",
  signupbutton = "Sign Up",
  discovermoretext,
  greatplatformtext = "Great platform for the job seeker that searching for new career heights and passionate about startups.",
  jobtitleorkeywordtext = "Job title or keyword",
  florenceitalytext = "Florence, Italy",
  searchmyjobbutton = "Search my job",
  popularuitext,
  ...props
}: IAHeader2) {
  return (
    <div {...props}>
      <Img
        src="images/img_pic.png"
        alt="pic"
        className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[239px] w-[39%] object-cover"
      />
      <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full flex-col items-center gap-[82px] md:gap-[61px] sm:gap-[41px]">
        <header className="flex items-center justify-center self-stretch">
          <div className="container-sm flex justify-between gap-5 md:flex-col md:p-5">
            <div className="ml-2 flex w-[38%] items-center justify-between gap-5 md:ml-0 md:w-full sm:flex-col">
              <Img src="images/img_header_logo.png" alt="headerlogo" className="h-[34px] w-[180px] object-cover" />
              <ul className="flex flex-wrap gap-4 py-[26px] sm:py-5">
                <li>
                  <a href="/find">
                    <Text className="text-base font-medium !text-blue_gray-700">{findjobstext}</Text>
                  </a>
                </li>
                <li>
                  <a href="/browse">
                    <Text className="text-base font-medium !text-blue_gray-700">{browsecompaniestext}</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center py-3.5 pl-3.5">
              <Text className="text-center text-base font-bold !text-indigo-A700">{logintext}</Text>
              <div className="ml-10 h-[48px] w-px bg-gray-300" />
              <Button className="ml-[15px] h-[50px] min-w-[108px] bg-indigo-A700 px-6 text-base font-bold text-white-A700 sm:px-5">
                {signupbutton}
              </Button>
            </div>
          </div>
        </header>
        <div className="container-sm flex flex-col items-start px-[11px] md:p-5">
          <div className="flex w-[72%] flex-col gap-[23px] md:w-full">
            <div className="flex w-[63%] flex-col gap-3 md:w-full">
              <Text className="!font-clashdisplayvariable text-7xl font-semibold leading-[110%] !text-blue_gray-900 md:text-5xl">
                <span className="text-blue_gray-900">Discover more than</span>
                <span className="text-blue_gray-900">&nbsp;</span>
                <span className="text-blue-500">5000+ Jobs</span>
              </Text>
              <Img src="images/img_group.svg" alt="image" className="h-[39px] w-[85%]" />
            </div>
            <Text className="w-[61%] text-xl font-normal leading-[160%] !text-blue_gray-700_b2 md:w-full">
              {greatplatformtext}
            </Text>
            <div className="flex flex-col items-start gap-5 pb-1">
            <div className="flex justify-center self-stretch bg-white-A700 p-4 shadow-xs md:flex-col">
              <div className="flex flex-1 items-center justify-evenly gap-4 md:self-stretch">
                <Img src="images/img_rewind.svg" alt="rewind_one" className="h-[24px] w-[24px]" />
                <Input
                  name="frame1063"
                  placeholder={`Job title or keyword`}
                  className="h-[57px] w-[100%] border-b pr-[35px] text-blue_gray-400_87 sm:pr-5"
                />
                </div>
                <div className="flex flex-1 items-center justify-center gap-4 px-2 md:self-stretch">
                <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[24px] w-[24px]" />
                <SelectBox
                  indicator={<Img src="images/img_arrow_down.svg" alt="arrowdown" className="h-[16px] w-[16px]" />}
                  name="florenceitaly"
                  placeholder={`Florence, Italy`}
                  options={dropDownOptions}
                  className="flex-grow gap-px border-b border-solid border-gray-300 pb-[15px] pr-[35px] pt-6 text-base text-blue_gray-900_ab sm:pr-5 sm:pt-5"
                />
              </div>
                <Button className="h-[57px] min-w-[209px] bg-indigo-A700 px-[35px] text-lg font-bold text-white-A700 md:p-5 sm:px-5">
                  {searchmyjobbutton}
                </Button>
              </div>
              <Text className="text-base font-normal !text-gray-900_b2">
                <span className="text-gray-900_b2">Popular :&nbsp;</span>
                <span className="font-medium text-gray-900_b2">UI Designer, UX Researcher, Android, Admin</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
