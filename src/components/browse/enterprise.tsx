import React from "react";
import { Button, Text, Img } from "..";

export default function Enterprise({
  recommendedcompaniestext = "Recommended Companies",
  basedonprofiletext = "Based on your profile, company preferences, and recent activity",
  nomadonebutton = "3 Jobs",
  nomadonetext = "Nomad",
  nomadonedescription = "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
  business = "Business Service",
  discordbutton = "3 Jobs",
  discordtext = "Discord",
  discorddescription = "We&#39;d love to work with someone like you. We care about creating a delightful experience.",
  business1 = "Business Service",
  mazebutton = "3 Jobs",
  mazetext = "Maze",
  mazedescription = "We&#39;re a passionate bunch working from all over the world to build the future of rapid testing together.",
  business2 = "Business Service",
  udacitybutton = "3 Jobs",
  udacitytext = "Udacity",
  udacitydescription = "Udacity is a new type of online university that teaches the actual programming skills.",
  business3 = "Business Service",
  webflowbutton = "3 Jobs",
  webflowtext = "Webflow",
  webflowdescription = "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
  business4 = "Business Service",
  technology = "Technology",
  foundationbutton = "3 Jobs",
  foundationtext = "Foundation",
  foundationdescription = "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
  business5 = "Business Service",
  crypto = "Crypto",
  ...props
}: IRecom) {
  return (
    <div {...props}>
      <div className="container-sm flex flex-col items-start px-2.5 md:p-5">
        <div className="flex flex-col items-start gap-[9px]">
          <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
            {recommendedcompaniestext}
          </Text>
          <Text className="text-base font-normal !text-blue_gray-400">{basedonprofiletext}</Text>
        </div>
      </div>
      <div className="container-sm grid grid-cols-3 justify-center gap-8 md:grid-cols-2 md:p-5 sm:grid-cols-1">
        <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img src="images/img_television.svg" alt="nomad" className="h-[88px] w-[88px]" />
            <Button className="h-[34px] min-w-[76px] bg-gray-50 px-2.5 text-base text-indigo-A700">
              {nomadonebutton}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[15px] self-stretch">
            <Text className="!font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
              {nomadonetext}
            </Text>
            <Text className="w-full text-lg font-normal leading-[160%] !text-blue_gray-700">{nomadonedescription}</Text>
          </div>
          <Button className="h-[34px] min-w-[140px] rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
            {business}
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img src="images/img_dbymbmgq_400x400.png" alt="dbymbmgq" className="h-[88px] w-[88px] rounded-[50%]" />
            <Button className="h-[34px] min-w-[76px] bg-gray-50 px-2.5 text-base text-indigo-A700">
              {discordbutton}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[15px] self-stretch">
            <Text className="!font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
              {discordtext}
            </Text>
            <Text className="w-full text-lg font-normal leading-[160%] !text-blue_gray-700">{discorddescription}</Text>
          </div>
          <Button className="h-[34px] min-w-[140px] rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
            {business1}
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img
              src="images/img_7tuadqi_400x400_88x88.png"
              alt="7tuadqi400x400"
              className="h-[88px] w-[88px] rounded-[50%]"
            />
            <Button className="h-[34px] min-w-[76px] bg-gray-50 px-2.5 text-base text-indigo-A700">{mazebutton}</Button>
          </div>
          <div className="flex flex-col items-start gap-[15px] self-stretch">
            <Text className="!font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
              {mazetext}
            </Text>
            <Text className="w-full text-lg font-normal leading-[160%] !text-blue_gray-700">{mazedescription}</Text>
          </div>
          <Button className="h-[34px] min-w-[140px] rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
            {business2}
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img
              src="images/img_1m3hz0d_400x400_88x88.png"
              alt="1m3hz0d400x400"
              className="h-[88px] w-[88px] rounded-[50%]"
            />
            <Button className="h-[34px] min-w-[76px] bg-gray-50 px-2.5 text-base text-indigo-A700">
              {udacitybutton}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-3.5 self-stretch">
            <Text className="!font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
              {udacitytext}
            </Text>
            <Text className="w-full text-lg font-normal leading-[160%] !text-blue_gray-700">{udacitydescription}</Text>
          </div>
          <Button className="h-[34px] min-w-[140px] rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
            {business3}
          </Button>
        </div>
        <div className="flex w-full flex-col gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <div className="w-[27%]">
              <Img
                src="images/img_tg7mrqk2_400x400_79x79.png"
                alt="tg7mrqktwo"
                className="h-[79px] w-[79px] object-cover"
              />
            </div>
            <Button className="h-[34px] min-w-[76px] bg-gray-50 px-2.5 text-base text-indigo-A700">
              {webflowbutton}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[15px]">
            <Text className="!font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
              {webflowtext}
            </Text>
            <Text className="w-full text-lg font-normal leading-[160%] !text-blue_gray-700">{webflowdescription}</Text>
          </div>
          <div className="flex gap-4">
            <Button className="h-[34px] min-w-[140px] rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
              {business4}
            </Button>
            <Button className="h-[34px] min-w-[102px] rounded-[17px] bg-deep_orange-400_19 px-[9px] text-sm font-semibold text-deep_orange-400">
              {technology}
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <div className="w-[27%]">
              <Img
                src="images/img_2ali5jb7_400x400.png"
                alt="2ali5jbseven"
                className="h-[80px] w-[80px] object-cover"
              />
            </div>
            <Button className="h-[34px] min-w-[76px] bg-gray-50 px-2.5 text-base text-indigo-A700">
              {foundationbutton}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[15px]">
            <Text className="!font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
              {foundationtext}
            </Text>
            <Text className="w-full text-lg font-normal leading-[160%] !text-blue_gray-700">
              {foundationdescription}
            </Text>
          </div>
          <div className="flex gap-4">
            <Button className="h-[34px] min-w-[140px] rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
              {business5}
            </Button>
            <Button className="h-[34px] min-w-[69px] rounded-[17px] bg-indigo-A700_19 px-[9px] text-sm font-semibold text-indigo-A700">
              {crypto}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
