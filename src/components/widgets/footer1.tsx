import React from "react";
import { Button, Img, Text, Input } from "..";

interface F {
  className?: string;
}

export default function Footer1({ ...props }: F) {
  return (
    <footer {...props}>
      <div className="container-sm mt-[26px] flex items-start justify-center md:flex-col md:p-5">
        <div className="flex flex-1 flex-col gap-[31px] md:self-stretch">
          <Img src="images/img_footer_logo.png" alt="footerlogo" className="h-[34px] w-[160px] object-cover" />
          <Text className="text-xl font-normal leading-[160%]">
            Great platform for the job seeker that passionate about startups. Find your dream job easier.
          </Text>
        </div>
        <div className="ml-[88px] flex w-[28%] items-start justify-between gap-5 pb-1 md:ml-0 md:w-full">
          <div className="flex flex-col items-start gap-[29px]">
            <Text className="text-lg font-semibold !text-white-A700">About</Text>
            <ul className="flex flex-col items-start gap-6">
              <li>
                <a href="Companies" target="_blank" rel="noreferrer">
                  <Text className="text-base font-normal">Companies</Text>
                </a>
              </li>
              <li>
                <a href="Pricing" target="_blank" rel="noreferrer">
                  <Text className="text-base font-normal">Pricing</Text>
                </a>
              </li>
              <li>
                <a href="Terms" target="_blank" rel="noreferrer">
                  <Text className="text-base font-normal">Terms</Text>
                </a>
              </li>
              <li>
                <a href="Advice" target="_blank" rel="noreferrer">
                  <Text className="text-base font-normal">Advice</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text className="text-base font-normal">Privacy Policy</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-[29px]">
            <Text className="text-lg font-semibold !text-white-A700">Resources</Text>
            <ul className="flex flex-col items-start gap-6">
              <li>
                <a href="#">
                  <Text className="text-base font-normal">Help Docs</Text>
                </a>
              </li>
              <li>
                <a href="Guide" target="_blank" rel="noreferrer">
                  <Text className="text-base font-normal">Guide</Text>
                </a>
              </li>
              <li>
                <a href="Updates" target="_blank" rel="noreferrer">
                  <Text className="text-base font-normal">Updates</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text className="text-base font-normal">Contact Us</Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-[71px] flex flex-1 flex-col items-start md:ml-0 md:self-stretch">
          <Text className="text-lg font-semibold !text-white-A700">Get job notifications</Text>
          <Text className="mt-[23px] w-[85%] text-base font-normal leading-[160%] md:w-full">
            The latest job news, articles, sent to your inbox weekly.
          </Text>
          <div className="mt-10 flex gap-2 self-stretch">
            <Input name="email" placeholder={`Email Address`} className="h-[50px] pl-4 pr-[35px] sm:pr-5" />
            <Button className="h-[50px] min-w-[131px] bg-indigo-A700 px-6 text-base font-bold text-white-A700 sm:px-5">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="container-sm flex justify-center md:p-5">
        <div className="flex w-full flex-col gap-10">
          <Img src="images/img_divider.svg" alt="divider" className="h-full" />
          <div className="flex items-center self-start md:flex-col">
            <Text className="mt-0.5 self-start text-base font-medium !text-white-A700">
              2021 @ JobHuntly. All rights reserved.
            </Text>
            <Button className="ml-[641px] h-[32px] w-[32px] rounded-[16px] bg-white-A700_19 px-2.5 md:ml-0">
              <Img src="images/img_facebook.svg" />
            </Button>
            <Button className="ml-6 h-[32px] w-[32px] rounded-[16px] bg-white-A700_19 px-[9px] md:ml-0">
              <Img src="images/img_info.svg" />
            </Button>
            <Button className="ml-6 h-[32px] w-[32px] rounded-[16px] bg-white-A700_19 px-1.5 md:ml-0">
              <Img src="images/img_globe.svg" />
            </Button>
            <Button className="ml-6 h-[32px] w-[32px] rounded-[16px] bg-white-A700_19 px-2.5 md:ml-0">
              <Img src="images/img_link.svg" />
            </Button>
            <Button className="ml-6 h-[32px] w-[32px] rounded-[16px] bg-white-A700_19 px-[9px] md:ml-0">
              <Img src="images/img_trash.svg" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
