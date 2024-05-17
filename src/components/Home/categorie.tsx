import React from "react";
import { Img, Text } from "..";

const data = [
  {
    designone: "images/img_icon.svg",
    designtwo: "Design",
    jobs: "235 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_indigo_a700.svg",
    designtwo: "Sales",
    jobs: "756 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_white_a700.svg",
    designtwo: "Marketing",
    jobs: "140 jobs available",
    jobs1: "images/img_arrow_left_white_a700.svg",
  },
  {
    designone: "images/img_icon_indigo_a700_48x48.svg",
    designtwo: "Finance",
    jobs: "325 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_48x48.svg",
    designtwo: "Technology",
    jobs: "436 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_1.svg",
    designtwo: "Engineering",
    jobs: "542 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_2.svg",
    designtwo: "Business",
    jobs: "211 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_blue_gray_900.svg",
    designtwo: "Human Resource",
    jobs: "346 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
];

export default function Categorie({
  exploreby,
  showalljobs = "Show all jobs",
  categoryname = "Design",
  jobsavailable = "235 jobs available",
  categoryname1 = "Sales",
  jobsavailable1 = "756 jobs available",
  categoryname2 = "Marketing",
  jobsavailable2 = "140 jobs available",
  categoryname3 = "Finance",
  jobsavailable3 = "325 jobs available",
  categoryname4 = "Technology",
  jobsavailable4 = "436 jobs available",
  categoryname5 = "Engineering",
  jobsavailable5 = "542 jobs available",
  categoryname6 = "Business",
  jobsavailable6 = "211 jobs available",
  categoryname7 = "Human Resource",
  jobsavailable7 = "346 jobs available",
  ...props
}: Categorie) {
  return (
    <div {...props}>
      <div className="container-sm flex items-center justify-between gap-5 md:flex-col md:p-5">
        <Text className="ml-[9px] !font-clashdisplayvariable text-5xl font-semibold !text-blue_gray-900 md:ml-0 md:text-[44px] sm:text-[38px]">
          <span className="text-blue_gray-900">Explore by&nbsp;</span>
          <span className="text-blue-500">category</span>
        </Text>
        <div className="mb-[7px] flex items-start gap-4 self-end">
          <Text className="text-center text-base font-semibold !text-indigo-A700">{showalljobs}</Text>
          <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
        </div>
      </div>
      <div className="container-sm grid grid-cols-4 justify-center gap-8 md:grid-cols-2 md:p-5 sm:grid-cols-1">
        {data.map((d, index) => (
          <div
            key={"content" + index}
            className="flex w-full flex-col items-start gap-8 border border-solid border-gray-300 bg-white-A700 p-8 sm:p-5"
          >
            <Img src={d.designone} alt="design" className="h-[48px] w-[48px]" />
            <div className="flex flex-col items-start gap-[9px]">
              <Text className="!font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
                {d.designtwo}
              </Text>
              <div className="flex items-center gap-4">
                <Text className="self-start text-lg font-normal !text-blue_gray-400">{d.jobs}</Text>
                <Img src={d.jobs1} alt="235_jobs" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
