import React from "react";
import { Text, Button, Img, Input, SelectBox, Heading } from "..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function BroweHeader({
  caption = "Find Jobs",
  line,
  captionOne = "Browse Companies",
  captionTwo = "Login",
  signUp = "Sign Up",
  findyour = "Find your",
  dreamjob = "dream job",
  findyournext = "Find your next career at companies like HubSpot, Nike, and Dropbox",
  jobtitleor = "Job title or keyword",
  florenceitaly = "Florence, Italy",
  search = "Search",
  popularui = "Popular : UI Designer, UX Researcher, Android, Admin",
  ...props
}: IBrowse) {
  return (
    <div {...props}>
      <div className="flex w-full flex-col items-center gap-[65px] sm:gap-8">
        <header className="flex items-center justify-center self-stretch bg-white-A700">
          <div className="container-sm flex items-center justify-between gap-5 md:flex-col md:p-5">
            <div className="ml-2 flex w-[38%] items-center justify-between gap-5 md:ml-0 md:w-full sm:flex-col">
              <a href="/">
                <Img src="images/img_header_logo.png" alt="headerlogo" className="h-[34px] w-[180px] object-cover" />
              </a>
              <div className="flex w-[54%] items-start justify-between gap-3 pt-2 sm:w-full sm:pt-5">
                <div className="flex w-[33%] flex-col gap-2">
                  <a href="/find">
                    <Text as="p" className="!font-medium !text-blue_gray-700">
                      {caption}
                    </Text>
                  </a>
                </div>
                <ul className="flex">
                  <li>
                    <Text as="p" className="!font-medium !text-indigo-A700">
                      {captionOne}
                    </Text>
                    <div className="h-[4px] bg-indigo-A700" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center pl-6 sm:pl-5">
              <Heading as="h6" className="text-center !font-bold !text-indigo-A700">
                {captionTwo}
              </Heading>
              <div className="ml-10 h-[48px] w-px bg-gray-300" />
              <Button className="ml-[15px] h-[50px] min-w-[108px] bg-indigo-A700 px-6 text-base font-bold text-white-A700 sm:px-5">
                {signUp}
              </Button>
            </div>
          </div>
        </header>
        <div className="container-sm flex flex-col items-center gap-10 md:p-5">
          <div className="flex w-[50%] flex-col items-center gap-7 pb-[5px] md:w-full">
            <div className="flex w-full items-center gap-7 md:w-full sm:flex-col">
              <Heading size="8xl" as="h1" className="text-center !font-clashdisplayvariable">
                {findyour}
              </Heading>
              <div>
                <Heading size="8xl" as="h1" className="text-center !font-clashdisplayvariable !text-blue-500">
                  {dreamjob}
                </Heading>
                <Img src="images/img_group.svg" alt="image" className="relative mt-[-7px] h-[14px]" />
              </div>
            </div>
            <Text size="2xl" as="p" className="text-center !text-blue_gray-700">
              {findyournext}
            </Text>
          </div>
          <div className="flex flex-col items-start gap-5 self-stretch pb-1">
            <div className="flex items-center justify-center gap-5 self-stretch bg-white-A700 p-6 shadow-xs md:flex-col sm:p-5">
              <div className="flex flex-1 items-center justify-center gap-4 md:self-stretch sm:flex-col">
                <Img src="images/img_rewind.svg" alt="rewind" className="h-[24px] w-[24px] sm:w-full" />
                <div className="flex flex-1 flex-col items-start pt-3.5 sm:self-stretch">
                <Input
                  name="frame1063"
                  placeholder={`Job title or keyword`}
                  className="h-[57px] w-[100%] border-b pr-[35px] text-blue_gray-400_87 sm:pr-5"
                />
                  <div className="h-px w-full self-stretch bg-gray-300" />
                </div>
              </div>
              <div className="h-[56px] w-px bg-gray-900_19 md:h-px md:w-[56px] md:p-5" />
              <div className="flex flex-1 items-center justify-center gap-4 md:self-stretch sm:flex-col">
                <Img src="images/img_linkedin.svg" alt="linkedin" className="h-[24px] w-[24px] sm:w-full" />
                <div className="flex flex-1 flex-col  pt-2.5 sm:self-stretch">
                  <div className="flex items-center justify-between gap-5">
                  <SelectBox
                  indicator={<Img src="images/img_arrow_down.svg" alt="arrowdown" className="h-[16px] w-[16px]" />}
                  name="florenceitaly"
                  placeholder={`Florence, Italy`}
                  options={dropDownOptions}
                  className="flex-grow gap-px border-b border-solid border-gray-300 pb-[15px] pr-[35px] pt-6 text-base text-blue_gray-900_ab sm:pr-5 sm:pt-5"
                />
                  </div>
                  <div className="h-px bg-gray-300" />
                </div>
              </div>
              <Button
                size="7xl"
                variant="fill"
                shape="square"
                className="min-w-[150px] h-[65px] self-start bg-indigo-A700 text-white-A700 font-bold md:p-5 sm:px-5"
              >
                {search}
              </Button>
            </div>
            <Text as="p" className="!text-blue_gray-700_b2">
              {popularui}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
