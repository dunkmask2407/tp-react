import React from "react";
import { Button, Text, Img } from "..";

export default function Description({
  descriptiontext = "Description",
  descriptiontext1 = "Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.",
  responsibilitie = "Responsibilities",
  communitytext = "Community engagement to ensure that is supported and actively represented online",
  focusonsocialtext = "Focus on social media content development and publication",
  marketingandstrategytext = "Marketing and strategy support",
  stayontopoftrendstext = "Stay on top of trends on social media platforms, and suggest content ideas to the team",
  engagewithcommunitiestext = "Engage with online communities",
  whoyouare = "Who You Are",
  yougetenergytext = "You get energy from people and building the ideal work environment",
  youhavesenseforspacestext = "You have a sense for beautiful spaces and office experiences",
  youareconfidentofficemanagertext = "You are a confident office manager, ready for added responsibilities",
  youaredetailorientedtext = "You&#39;re detail-oriented and creative",
  youaregrowthmarketertext = "You&#39;re a growth marketer and know how to run campaigns",
  nicetohaves = "Nice-To-Haves",
  fluentin = "Fluent in English",
  project = "Project management skills",
  copyediting = "Copy editing skills",
  aboutthisroletext = "About this role",
  appliedcapacitytext,
  applybefore = "Apply Before",
  applybeforetext = "July 31, 2021",
  jobpostedon = "Job Posted On",
  jobpostedontext = "July 1, 2021",
  jobtype = "Job Type",
  jobtypetext = "Full-Time",
  salary = "Salary",
  salarytext = "$75k-$85k USD",
  categories = "Categories",
  marketingcategory = "Marketing",
  designcategory = "Design",
  requiredskills = "Required Skills",
  projectmanagementskill = "Project Management",
  copywritingskill = "Copywriting",
  socialmediamarketingskill = "Social Media Marketing",
  englishskill = "English",
  copyeditingskill = "Copy Editing",
  ...props
}: Idesc) {
  return (
    <div {...props}>
      <div className="container-sm flex items-start justify-between gap-5 md:flex-col md:p-5">
        <div className="ml-2 flex w-[63%] flex-col gap-[39px] md:ml-0 md:w-full">
          <div className="flex flex-col items-start gap-[13px]">
            <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
              {descriptiontext}
            </Text>
            <Text className="w-full text-base font-normal leading-[160%] !text-blue_gray-700">{descriptiontext1}</Text>
          </div>
          <div className="flex flex-col gap-[38px]">
            <div className="flex flex-1 flex-col items-start gap-[13px]">
              <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
                {responsibilitie}
              </Text>
              <div className="flex flex-col gap-2 self-stretch">
                <div className="flex items-center gap-2 pb-1 pr-1 md:flex-col">
                  <Img
                    src="images/img_icon_teal_300.svg"
                    alt="image"
                    className="h-[20px] w-[20px] self-start md:w-full"
                  />
                  <Text className="self-end text-base font-normal !text-blue_gray-700">{communitytext}</Text>
                </div>
                <div className="flex items-center gap-2 self-start pb-[5px] sm:flex-col">
                  <Img
                    src="images/img_icon_teal_300.svg"
                    alt="image"
                    className="h-[20px] w-[20px] self-start sm:w-full"
                  />
                  <Text className="self-end text-base font-normal !text-blue_gray-700">{focusonsocialtext}</Text>
                </div>
                <div className="flex items-center gap-2 self-start pb-1">
                  <Img src="images/img_icon_teal_300.svg" alt="image" className="h-[20px] w-[20px] self-start" />
                  <Text className="self-end text-base font-normal !text-blue_gray-700">{marketingandstrategytext}</Text>
                </div>
                <div className="flex items-start justify-center gap-2 pr-[42px] md:flex-col md:pr-5">
                  <Img src="images/img_icon_teal_300.svg" alt="image" className="h-[20px] w-[20px] md:w-full" />
                  <Text className="w-[97%] text-base font-normal leading-[160%] !text-blue_gray-700 md:w-full">
                    {stayontopoftrendstext}
                  </Text>
                </div>
                <div className="flex items-center gap-2 self-start pb-1">
                  <Img src="images/img_icon_teal_300.svg" alt="image" className="h-[20px] w-[20px] self-start" />
                  <Text className="self-end text-base font-normal !text-blue_gray-700">
                    {engagewithcommunitiestext}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start gap-[15px]">
              <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
                {whoyouare}
              </Text>
              <div className="flex flex-col items-center gap-2 self-stretch">
                <div className="flex items-center gap-2 self-start pb-[5px] sm:flex-col">
                  <Img
                    src="images/img_icon_teal_300.svg"
                    alt="icon"
                    className="h-[20px] w-[20px] self-start sm:w-full"
                  />
                  <Text className="self-end text-base font-normal !text-blue_gray-700">{yougetenergytext}</Text>
                </div>
                <div className="flex items-center gap-2 self-start pb-[5px] sm:flex-col">
                  <Img
                    src="images/img_icon_teal_300.svg"
                    alt="icon"
                    className="h-[20px] w-[20px] self-start sm:w-full"
                  />
                  <Text className="self-end text-base font-normal !text-blue_gray-700">
                    {youhavesenseforspacestext}
                  </Text>
                </div>
                <div className="flex items-center gap-2 self-start pb-[5px] sm:flex-col">
                  <Img
                    src="images/img_icon_teal_300.svg"
                    alt="icon"
                    className="h-[20px] w-[20px] self-start sm:w-full"
                  />
                  <Text className="self-end text-base font-normal !text-blue_gray-700">
                    {youareconfidentofficemanagertext}
                  </Text>
                </div>
                <div className="flex items-center gap-2 self-start pb-1.5">
                  <Img src="images/img_icon_teal_300.svg" alt="icon" className="h-[20px] w-[20px]" />
                  <Text className="self-end text-base font-normal !text-blue_gray-700">{youaredetailorientedtext}</Text>
                </div>
                <div className="flex items-center gap-2 self-start pb-1 sm:flex-col">
                  <Img
                    src="images/img_icon_teal_300.svg"
                    alt="icon"
                    className="h-[20px] w-[20px] self-start sm:w-full"
                  />
                  <Text className="self-end text-base font-normal !text-blue_gray-700">{youaregrowthmarketertext}</Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[15px]">
            <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
              {nicetohaves}
            </Text>
            <div className="flex flex-col items-center gap-2 self-stretch">
              <div className="flex items-center gap-2 self-start pb-1">
                <Img src="images/img_icon_teal_300.svg" alt="icon" className="h-[20px] w-[20px] self-start" />
                <Text className="self-end text-base font-normal !text-blue_gray-700">{fluentin}</Text>
              </div>
              <div className="flex items-center gap-2 self-start pb-1">
                <Img src="images/img_icon_teal_300.svg" alt="icon" className="h-[20px] w-[20px] self-start" />
                <Text className="self-end text-base font-normal !text-blue_gray-700">{project}</Text>
              </div>
              <div className="flex items-center gap-2 self-start pb-1">
                <Img src="images/img_icon_teal_300.svg" alt="icon" className="h-[20px] w-[20px] self-start" />
                <Text className="self-end text-base font-normal !text-blue_gray-700">{copyediting}</Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[32%] flex-col items-start gap-[39px] md:w-full">
          <div className="flex flex-col items-start gap-[22px] self-stretch">
            <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
              {aboutthisroletext}
            </Text>
            <div className="flex flex-col items-start justify-center gap-[13px] self-stretch bg-gray-50 p-4">
              <Text className="text-center text-base font-semibold !text-blue_gray-900">
                <span className="text-blue_gray-900">5 applied</span>
                <span className="text-blue_gray-900">&nbsp;</span>
                <span className="font-normal text-blue_gray-400">of 10 capacity</span>
              </Text>
              <Img src="images/img_progress_bar.svg" alt="progressbar" className="h-[8px] w-full" />
            </div>
            <div className="flex flex-wrap justify-between gap-5 self-stretch">
              <Text className="text-base font-normal !text-blue_gray-700">{applybefore}</Text>
              <Text className="text-base font-semibold !text-blue_gray-900">{applybeforetext}</Text>
            </div>
            <div className="flex flex-wrap items-start justify-between gap-5 self-stretch">
              <Text className="mb-[5px] text-base font-normal !text-blue_gray-700">{jobpostedon}</Text>
              <Text className="text-base font-semibold !text-blue_gray-900">{jobpostedontext}</Text>
            </div>
            <div className="flex flex-wrap justify-between gap-5 self-stretch">
              <Text className="self-start text-base font-normal !text-blue_gray-700">{jobtype}</Text>
              <Text className="self-start text-base font-semibold !text-blue_gray-900">{jobtypetext}</Text>
            </div>
            <div className="flex flex-wrap justify-between gap-5 self-stretch">
              <Text className="self-start text-base font-normal !text-blue_gray-700">{salary}</Text>
              <Text className="self-start text-base font-semibold !text-gray-900">{salarytext}</Text>
            </div>
          </div>
          <div className="h-px w-full self-stretch bg-gray-300" />
          <div className="flex flex-col items-start gap-[21px]">
            <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
              {categories}
            </Text>
            <div className="flex gap-2">
              <Button className="h-[34px] min-w-[92px] rounded-[17px] bg-yellow-900_19 px-[9px] text-sm font-semibold text-yellow-700">
                {marketingcategory}
              </Button>
              <Button className="h-[34px] min-w-[68px] rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                {designcategory}
              </Button>
            </div>
          </div>
          <div className="h-px w-full self-stretch bg-gray-300" />
          <div className="flex flex-col items-start gap-2.5">
            <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
              {requiredskills}
            </Text>
            <div className="flex gap-2.5">
              <Button className="h-[34px] min-w-[189px] bg-gray-50 px-2.5 text-base text-indigo-A700">
                {projectmanagementskill}
              </Button>
              <Button className="h-[34px] min-w-[117px] bg-gray-50 px-2.5 text-base text-indigo-A700">
                {copywritingskill}
              </Button>
            </div>
            <div className="flex gap-2.5">
              <Button className="h-[34px] min-w-[205px] bg-gray-50 px-2.5 text-base text-indigo-A700">
                {socialmediamarketingskill}
              </Button>
              <Button className="h-[34px] min-w-[79px] bg-gray-50 px-2.5 text-base text-indigo-A700">
                {englishskill}
              </Button>
            </div>
            <Button className="h-[34px] min-w-[120px] bg-gray-50 px-2.5 text-base text-indigo-A700">
              {copyeditingskill}
            </Button>
          </div>
        </div>
      </div>
      <div className="container-sm h-px bg-gray-300 md:p-5" />
    </div>
  );
}
