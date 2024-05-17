import React from "react";
import { Button, Text, Img } from "..";

export default function Job({
  featuredjobs,
  showalljobsOne = "Show all jobs",
  fullTime = "Full Time",
  emailmarketingtext = "Email Marketing",
  revoluttext = "Revolut",
  madridspaintext = "Madrid, Spain",
  revolutistext = "Revolut is looking for Email Marketing to help team ma ...",
  marketing = "Marketing",
  design = "Design",
  fulltime1 = "Full Time",
  branddesignertext = "Brand Designer",
  dropboxtext = "Dropbox",
  sanfransiscoustext = "San Fransisco, US",
  revolutistext1 = "Dropbox is looking for Brand Designer to help the team t ...",
  design1 = "Design",
  business = "Business",
  fulltime2 = "Full Time",
  customermanagertext = "Email Marketing",
  blinklisttext = "Pitch",
  berlingermanytext = "Berlin, Germany",
  revolutistext2 = "Pitch is looking for Customer Manager to join marketing t ...",
  marketing1 = "Marketing",
  fulltime3 = "Full Time",
  blinkisttext = "Visual Designer",
  granadaspaintext = "Blinklist",
  madridspain = "Granada, Spain",
  revolutistext3 = "Blinkist is looking for Visual Designer to help team desi ...",
  design2 = "Design",
  fulltime4 = "Full Time",
  emailmarketing = "Product Designer",
  revolut = "ClassPass",
  madridspain1 = "Manchester, UK",
  revolutis = "ClassPass is looking for Product Designer to help us...",
  marketing2 = "Marketing",
  design3 = "Design",
  fulltime5 = "Full Time",
  emailmarketing1 = "Lead Designer",
  revolut1 = "Canva",
  madridspain2 = "Ontario, Canada",
  revolutis1 = "Canva is looking for Lead Engineer to help develop n ...",
  design4 = "Design",
  business1 = "Business",
  fulltime6 = "Full Time",
  godaddytext = "Brand Strategist",
  marseillefrancetext = "GoDaddy",
  marseillefrancetext1 = "Marseille, France",
  revolutistext4 = "GoDaddy is looking for Brand Strategist to join the team...",
  marketing3 = "Marketing",
  fulltime7 = "Full Time",
  twittertext = "Data Analyst",
  viewtext = "Twitter",
  madridspain3 = "San Diego, US",
  revolutistext5 = "Twitter is looking for Data Analyst to help team desi ...",
  technology = "Technology",
  ...props
}: Ijob2) {
  return (
    <div {...props}>
      <div className="container-sm flex items-center justify-between gap-5 md:p-5 sm:flex-col">
        <Text className="ml-2 !font-clashdisplayvariable text-5xl font-semibold !text-blue_gray-900 md:text-[44px] sm:ml-0 sm:text-[38px]">
          <span className="text-blue_gray-900">Featured&nbsp;</span>
          <span className="text-blue-500">jobs</span>
        </Text>
        <div className="mb-[7px] flex items-start gap-4 self-end">
          <Text className="text-center text-base font-semibold !text-indigo-A700">{showalljobsOne}</Text>
          <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
        </div>
      </div>
      <div className="container-sm grid grid-cols-4 justify-center gap-8 md:grid-cols-2 md:p-5 sm:grid-cols-1">
        <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <Img
              src="images/img_bvboaeet_400x400.png"
              alt="email_marketing"
              className="h-[48px] w-[48px] rounded-[50%]"
            />
            <Button className="h-[34px] min-w-[91px] border border-solid border-indigo-A700 px-[9px] text-base text-indigo-A700">
              {fullTime}
            </Button>
          </div>
          <div className="flex w-[81%] flex-col items-start gap-[7px] pt-1 md:w-full">
            <Text className="text-lg font-semibold !text-blue_gray-900">{emailmarketingtext}</Text>
            <div className="flex items-start gap-2 self-stretch">
              <Text className="text-base font-normal !text-blue_gray-700">{revoluttext}</Text>
              <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text className="text-base font-normal !text-blue_gray-700">{madridspaintext}</Text>
            </div>
          </div>
          <Text className="!font-inter text-base font-normal leading-[160%] !text-blue_gray-400">{revolutistext}</Text>
          <div className="flex gap-2">
            <Button className="h-[30px] min-w-[104px] rounded-[15px] bg-yellow-900_19 px-4 text-sm font-semibold text-yellow-700">
              {marketing}
            </Button>
            <Button className="h-[30px] min-w-[80px] rounded-[15px] bg-teal-300_19 px-4 text-sm font-semibold text-teal-300">
              {design}
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <Img src="images/img_close.svg" alt="close" className="h-[48px] w-[48px]" />
            <Button className="h-[34px] min-w-[91px] border border-solid border-indigo-A700 px-[9px] text-base text-indigo-A700">
              {fulltime1}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[7px] pt-1">
            <Text className="text-lg font-semibold !text-blue_gray-900">{branddesignertext}</Text>
            <div className="flex items-start gap-2 self-stretch">
              <Text className="text-base font-normal !text-blue_gray-700">{dropboxtext}</Text>
              <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text className="text-base font-normal !text-blue_gray-700">{sanfransiscoustext}</Text>
            </div>
          </div>
          <Text className="!font-inter text-base font-normal leading-[160%] !text-blue_gray-400">{revolutistext1}</Text>
          <div className="flex gap-2">
            <Button className="h-[30px] min-w-[80px] rounded-[15px] bg-teal-300_19 px-4 text-sm font-semibold text-teal-300">
              {design1}
            </Button>
            <Button className="h-[30px] min-w-[95px] rounded-[15px] bg-indigo-A700_19 px-4 text-sm font-semibold text-indigo-A700">
              {business}
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img src="images/img_fisx9qyy_400x400.png" alt="fisx9qyy" className="h-[48px] w-[48px] rounded-[50%]" />
            <Button className="h-[34px] min-w-[91px] border border-solid border-indigo-A700 px-[9px] text-base text-indigo-A700">
              {fulltime2}
            </Button>
          </div>
          <div className="flex w-[81%] flex-col items-start gap-[7px] pt-1 md:w-full">
            <Text className="text-lg font-semibold !text-blue_gray-900">{customermanagertext}</Text>
            <div className="flex items-start gap-2 self-stretch">
              <Text className="text-base font-normal !text-blue_gray-700">{blinklisttext}</Text>
              <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text className="text-base font-normal !text-blue_gray-700">{berlingermanytext}</Text>
            </div>
          </div>
          <Text className="w-full !font-inter text-base font-normal leading-[160%] !text-blue_gray-400">
            {revolutistext2}
          </Text>
          <Button className="h-[30px] min-w-[104px] rounded-[15px] bg-yellow-900_19 px-4 text-sm font-semibold text-yellow-700">
            {marketing1}
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img
              src="images/img_quvcta52_400x400.png"
              alt="quvctafiftytwo"
              className="h-[48px] w-[48px] rounded-[50%]"
            />
            <Button className="h-[34px] min-w-[91px] border border-solid border-indigo-A700 px-[9px] text-base text-indigo-A700">
              {fulltime3}
            </Button>
          </div>
          <div className="flex w-[88%] flex-col items-start gap-[7px] pt-1 md:w-full">
            <Text className="text-lg font-semibold !text-blue_gray-900">{blinkisttext}</Text>
            <div className="flex items-start gap-2 self-stretch">
              <Text className="text-base font-normal !text-blue_gray-700">{granadaspaintext}</Text>
              <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text className="text-base font-normal !text-blue_gray-700">{madridspain}</Text>
            </div>
          </div>
          <Text className="w-full !font-inter text-base font-normal leading-[160%] !text-blue_gray-400">
            {revolutistext3}
          </Text>
          <Button className="h-[30px] min-w-[80px] rounded-[15px] bg-teal-300_19 px-4 text-sm font-semibold text-teal-300">
            {design2}
          </Button>
        </div>
        <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <Img src="images/img_s93hu9p3_400x400.png" alt="s93hu9pthree" className="h-[48px] w-[48px] rounded-[50%]" />
            <Button className="h-[34px] min-w-[91px] border border-solid border-indigo-A700 px-[9px] text-base text-indigo-A700">
              {fulltime4}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[7px] pt-1">
            <Text className="text-lg font-semibold !text-blue_gray-900">{emailmarketing}</Text>
            <div className="flex items-start gap-2 self-stretch">
              <Text className="text-base font-normal !text-blue_gray-700">{revolut}</Text>
              <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text className="text-base font-normal !text-blue_gray-700">{madridspain1}</Text>
            </div>
          </div>
          <Text className="!font-inter text-base font-normal leading-[160%] !text-blue_gray-400">{revolutis}</Text>
          <div className="flex gap-2">
            <Button className="h-[30px] min-w-[104px] rounded-[15px] bg-yellow-900_19 px-4 text-sm font-semibold text-yellow-700">
              {marketing2}
            </Button>
            <Button className="h-[30px] min-w-[80px] rounded-[15px] bg-teal-300_19 px-4 text-sm font-semibold text-teal-300">
              {design3}
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <Img src="images/img_v_6ghzad_400x400.png" alt="v6ghzad" className="h-[48px] w-[48px] object-cover" />
            <Button className="h-[34px] min-w-[91px] border border-solid border-indigo-A700 px-[9px] text-base text-indigo-A700">
              {fulltime5}
            </Button>
          </div>
          <div className="flex w-[86%] flex-col items-start gap-[7px] pt-1 md:w-full">
            <Text className="text-lg font-semibold !text-blue_gray-900">{emailmarketing1}</Text>
            <div className="flex items-start gap-2 self-stretch">
              <Text className="text-base font-normal !text-blue_gray-700">{revolut1}</Text>
              <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text className="text-base font-normal !text-blue_gray-700">{madridspain2}</Text>
            </div>
          </div>
          <Text className="!font-inter text-base font-normal leading-[160%] !text-blue_gray-400">{revolutis1}</Text>
          <div className="flex gap-2">
            <Button className="h-[30px] min-w-[80px] rounded-[15px] bg-teal-300_19 px-4 text-sm font-semibold text-teal-300">
              {design4}
            </Button>
            <Button className="h-[30px] min-w-[95px] rounded-[15px] bg-indigo-A700_19 px-4 text-sm font-semibold text-indigo-A700">
              {business1}
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img
              src="images/img_godaddy_logo_0_1.png"
              alt="godaddylogozero"
              className="h-[48px] w-[48px] rounded-[50%]"
            />
            <Button className="h-[34px] min-w-[91px] border border-solid border-indigo-A700 px-[9px] text-base text-indigo-A700">
              {fulltime6}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[7px] self-stretch pt-1">
            <Text className="text-lg font-semibold !text-blue_gray-900">{godaddytext}</Text>
            <div className="flex items-start gap-2 self-stretch">
              <Text className="text-base font-normal !text-blue_gray-700">{marseillefrancetext}</Text>
              <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text className="text-base font-normal !text-blue_gray-700">{marseillefrancetext1}</Text>
            </div>
          </div>
          <Text className="w-full !font-inter text-base font-normal leading-[160%] !text-blue_gray-400">
            {revolutistext4}
          </Text>
          <Button className="h-[30px] min-w-[104px] rounded-[15px] bg-yellow-900_19 px-4 text-sm font-semibold text-yellow-700">
            {marketing3}
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img src="images/img_btnfm47p_400x400.png" alt="btnfm47p" className="h-[48px] w-[48px] rounded-[50%]" />
            <Button className="h-[34px] min-w-[91px] border border-solid border-indigo-A700 px-[9px] text-base text-indigo-A700">
              {fulltime7}
            </Button>
          </div>
          <div className="flex w-[80%] flex-col items-start gap-[7px] pt-1 md:w-full">
            <Text className="text-lg font-semibold !text-blue_gray-900">{twittertext}</Text>
            <div className="flex items-center gap-2 self-stretch">
              <Text className="self-start text-base font-normal !text-blue_gray-700">{viewtext}</Text>
              <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text className="text-base font-normal !text-blue_gray-700">{madridspain3}</Text>
            </div>
          </div>
          <Text className="w-full !font-inter text-base font-normal leading-[160%] !text-blue_gray-400">
            {revolutistext5}
          </Text>
          <Button className="h-[38px] min-w-[114px] rounded-[19px] bg-deep_orange-400_19 px-4 text-sm font-semibold text-deep_orange-400">
            {technology}
          </Button>
        </div>
      </div>
    </div>
  );
}
