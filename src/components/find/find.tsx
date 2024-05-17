import React from "react";
import { Img, Text, Button, CheckBox } from "..";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";


export default function Find({
  _typeof = "Type of Employment",
  categories = "Categories",
  joblevel = "Job Level",
  salaryrange = "Salary Range",
  alljobs = "All Jobs",
  showingseventyt = "Showing 73 results",
  sortby = "Sort by:",
  mostrelevant = "Most relevant",
  socialmedia = "Social Media Assistant",
  nomad = "Nomad",
  parisfrance = "Paris, France",
  fulltime = "Full-Time",
  marketing = "Marketing",
  design = "Design",
  apply = "Apply",
  p5appliedoften,
  socialmedia1 = "Brand Designer",
  nomad1 = "Dropbox",
  parisfrance1 = "San Fransisco, USA",
  fulltime1 = "Full-Time",
  marketing1 = "Marketing",
  design1 = "Design",
  apply1 = "Apply",
  p5appliedoften1,
  socialmedia2 = "Interactive Developer",
  nomad2 = "Terraform",
  parisfrance2 = "Hamburg, Germany",
  fulltime2 = "Full-Time",
  marketing2 = "Marketing",
  design2 = "Design",
  apply2 = "Apply",
  p5appliedoften2,
  socialmedia3 = "Email Marketing",
  nomad3 = "Revolut",
  parisfrance3 = "Madrid, Spain",
  fulltime3 = "Full-Time",
  marketing3 = "Marketing",
  design3 = "Design",
  apply3 = "Apply",
  p5appliedoften3,
  socialmedia4 = "Lead Engineer",
  nomad4 = "Canva",
  parisfrance4 = "Ankara, Turkey",
  fulltime4 = "Full-Time",
  marketing4 = "Marketing",
  design4 = "Design",
  apply4 = "Apply",
  p5appliedoften4,
  socialmedia5 = "Product Designer",
  nomad5 = "ClassPass",
  parisfrance5 = "Berlin, Germany",
  fulltime5 = "Full-Time",
  marketing5 = "Marketing",
  design5 = "Design",
  apply5 = "Apply",
  p5appliedoften5,
  socialmedia6 = "Customer Manager",
  nomad6 = "Pitch",
  parisfrance6 = "Berlin, Germany",
  fulltime6 = "Full-Time",
  marketing6 = "Marketing",
  design6 = "Design",
  apply6 = "Apply",
  p5appliedoften6,
  one = "1",
  one1 = "2",
  oneOne = "3",
  oneTwo = "4",
  oneThree = "5",
  oneFour = "...",
  oneFive = "33",
  ...props
}: IFPage) {
  return (
    <div {...props}>
      <div className="container-sm flex items-start justify-center gap-[39px] md:flex-col md:p-5">
        <Accordion preExpanded={[0]} className="flex w-[20%] flex-col gap-10 md:w-full">
          {[...Array(4)].map((_, i) => (
            <AccordionItem uuid={i} key={`filter${i}`}>
              <div className="flex flex-1 flex-col gap-5">
                <AccordionItemHeading className="w-full">
                  <AccordionItemButton>
                    <AccordionItemState>
                      {(props) => (
                        <>
                          <div className="flex items-center justify-between gap-5">
                            <Text className="self-start text-base font-bold !text-blue_gray-900">{_typeof}</Text>
                            <Img src="images/img_arrow_up.svg" alt="arrowup" className="h-[20px] w-[20px]" />
                          </div>
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex w-[66%] flex-col gap-5 md:w-full">
                    <CheckBox
                      name="fulltimeThree"
                      label="Full-time (3)"
                      id="fulltimeThree"
                      className="flex gap-4 py-1 text-left text-base text-blue_gray-700"
                    />
                    <CheckBox
                      name="parttimeFive"
                      label="Part-Time (5)"
                      id="parttimeFive"
                      className="flex gap-4 px-px py-1 text-left text-base text-blue_gray-700"
                    />
                    <CheckBox
                      name="remoteTwo"
                      label="Remote (2)"
                      id="remoteTwo"
                      className="flex gap-4 py-1 text-left text-base text-blue_gray-700"
                    />
                    <CheckBox
                      name="internshipTwent"
                      label="Internship (24)"
                      id="internshipTwent"
                      className="flex gap-4 py-1 text-left text-base text-blue_gray-700"
                    />
                    <CheckBox
                      name="contractThree"
                      label="Contract (3)"
                      id="contractThree"
                      className="flex gap-4 px-px py-1 text-left text-base text-blue_gray-700"
                    />
                  </div>
                </AccordionItemPanel>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-1 flex-col items-center gap-8 md:self-stretch">
          <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
            <div className="flex flex-col items-start gap-[7px]">
              <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
                {alljobs}
              </Text>
              <Text className="text-base font-normal !text-blue_gray-400">{showingseventyt}</Text>
            </div>
            <div className="flex items-center gap-[21px]">
              <div className="flex items-center gap-[22px]">
                <div className="flex items-start gap-3">
                  <Text className="text-right text-base font-normal !text-blue_gray-400">{sortby}</Text>
                  <div className="flex items-start gap-2">
                    <Text className="text-base font-medium !text-blue_gray-900">{mostrelevant}</Text>
                    <Img src="images/img_arrow_down_indigo_a700.svg" alt="arrowdown" className="h-[16px] w-[16px]" />
                  </div>
                </div>
                <div className="h-full w-px bg-gray-900_19" />
              </div>
              <div className="flex items-center gap-6 pl-2">
                <Img src="images/img_icon_blue_gray_700.svg" alt="icon" className="h-[24px] w-[24px]" />
                <Button className="h-[40px] w-[40px] rounded bg-indigo-A700_0f px-2">
                  <Img src="images/img_user_indigo_a700.svg" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 self-stretch">
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-[23px] sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img src="images/img_television.svg" alt="image" className="h-[64px] w-[64px]" />
                <div className="flex flex-1 flex-col items-start gap-[9px]">
                  <Text className="text-xl font-semibold !text-blue_gray-900">{socialmedia}</Text>
                  <div className="flex w-[66%] items-start gap-2 md:w-full">
                    <Text className="text-base font-normal !text-blue_gray-400">{nomad}</Text>
                    <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text className="text-base font-normal !text-blue_gray-400">{parisfrance}</Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                      {fulltime}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                      {marketing}
                    </Button>
                    <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                      {design}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button className="h-[50px] w-full bg-indigo-A700 px-[35px] text-base font-bold text-white-A700 sm:px-5">
                  {apply}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar.svg" alt="image" className="h-[6px]" />
                  <Text className="text-center text-sm font-normal !text-black-900">
                    <span className="font-semibold text-blue_gray-900">5 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-6 sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img src="images/img_close.svg" alt="close" className="h-[64px] w-[64px]" />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Text className="text-xl font-semibold !text-blue_gray-900">{socialmedia1}</Text>
                  <div className="flex w-[87%] items-start gap-2 md:w-full">
                    <Text className="text-base font-normal !text-blue_gray-400">{nomad1}</Text>
                    <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text className="text-base font-normal !text-blue_gray-400">{parisfrance1}</Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                      {fulltime1}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                      {marketing1}
                    </Button>
                    <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                      {design1}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button className="h-[50px] w-full bg-indigo-A700 px-[35px] text-base font-bold text-white-A700 sm:px-5">
                  {apply1}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar_gray_300.svg" alt="progressbar" className="h-[6px]" />
                  <Text className="text-center text-sm font-normal !text-black-900">
                    <span className="font-semibold text-blue_gray-900">2 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-[23px] sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img src="images/img_thumbs_up.svg" alt="companylogo" className="h-[64px] w-[64px]" />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Text className="text-xl font-semibold !text-blue_gray-900">{socialmedia2}</Text>
                  <div className="flex items-start gap-2 self-stretch">
                    <Text className="text-base font-normal !text-blue_gray-400">{nomad2}</Text>
                    <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text className="text-base font-normal !text-blue_gray-400">{parisfrance2}</Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                      {fulltime2}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                      {marketing2}
                    </Button>
                    <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                      {design2}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button className="h-[50px] w-full bg-indigo-A700 px-[35px] text-base font-bold text-white-A700 sm:px-5">
                  {apply2}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar_gray_300_6x165.svg" alt="progressbar" className="h-[6px]" />
                  <Text className="text-center text-sm font-normal !text-black-900">
                    <span className="font-semibold text-blue_gray-900">8 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 12 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-6 sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img
                  src="images/img_bvboaeet_400x400_64x64.png"
                  alt="bvboaeet"
                  className="h-[64px] w-[64px] rounded-[50%]"
                />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Text className="text-xl font-semibold !text-blue_gray-900">{socialmedia3}</Text>
                  <div className="flex w-[69%] items-start gap-2 md:w-full">
                    <Text className="text-base font-normal !text-blue_gray-400">{nomad3}</Text>
                    <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text className="text-base font-normal !text-blue_gray-400">{parisfrance3}</Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                      {fulltime3}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                      {marketing3}
                    </Button>
                    <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                      {design3}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button className="h-[50px] w-full bg-indigo-A700 px-[35px] text-base font-bold text-white-A700 sm:px-5">
                  {apply3}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar_gray_300_6x164.svg" alt="progressbar" className="h-[6px]" />
                  <Text className="text-center text-sm font-normal !text-black-900">
                    <span className="font-semibold text-blue_gray-900">0 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-6 sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img src="images/img_v_6ghzad_400x400.png" alt="v6ghzad" className="h-[64px] w-[64px] object-cover" />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Text className="text-xl font-semibold !text-blue_gray-900">{socialmedia4}</Text>
                  <div className="flex w-[67%] items-start gap-2 md:w-full">
                    <Text className="text-base font-normal !text-blue_gray-400">{nomad4}</Text>
                    <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text className="text-base font-normal !text-blue_gray-400">{parisfrance4}</Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                      {fulltime4}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                      {marketing4}
                    </Button>
                    <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                      {design4}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button className="h-[50px] w-full bg-indigo-A700 px-[35px] text-base font-bold text-white-A700 sm:px-5">
                  {apply4}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar.svg" alt="progressbar" className="h-[6px]" />
                  <Text className="text-center text-sm font-normal !text-black-900">
                    <span className="font-semibold text-blue_gray-900">5 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-6 sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img
                  src="images/img_s93hu9p3_400x400_64x64.png"
                  alt="s93hu9pthree"
                  className="h-[64px] w-[64px] rounded-[50%]"
                />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Text className="text-xl font-semibold !text-blue_gray-900">{socialmedia5}</Text>
                  <div className="flex w-[83%] items-start gap-2 md:w-full">
                    <Text className="text-base font-normal !text-blue_gray-400">{nomad5}</Text>
                    <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text className="text-base font-normal !text-blue_gray-400">{parisfrance5}</Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                      {fulltime5}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                      {marketing5}
                    </Button>
                    <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                      {design5}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button className="h-[50px] w-full bg-indigo-A700 px-[35px] text-base font-bold text-white-A700 sm:px-5">
                  {apply5}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar.svg" alt="progressbar" className="h-[6px]" />
                  <Text className="text-center text-sm font-normal !text-black-900">
                    <span className="font-semibold text-blue_gray-900">5 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-6 sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img
                  src="images/img_fisx9qyy_400x400_64x64.png"
                  alt="fisx9qyy"
                  className="h-[64px] w-[64px] rounded-[50%]"
                />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Text className="text-xl font-semibold !text-blue_gray-900">{socialmedia6}</Text>
                  <div className="flex w-[68%] items-start gap-2 md:w-full">
                    <Text className="text-base font-normal !text-blue_gray-400">{nomad6}</Text>
                    <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text className="text-base font-normal !text-blue_gray-400">{parisfrance6}</Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                      {fulltime6}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                      {marketing6}
                    </Button>
                    <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                      {design6}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button className="h-[50px] w-full bg-indigo-A700 px-[35px] text-base font-bold text-white-A700 sm:px-5">
                  {apply6}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar.svg" alt="progressbar" className="h-[6px]" />
                  <Text className="text-center text-sm font-normal !text-black-900">
                    <span className="font-semibold text-blue_gray-900">5 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[42%] items-center gap-2 md:w-full sm:flex-col">
            <Img
              src="images/img_arrow_left_blue_gray_900_24x24.svg"
              alt="arrowleft"
              className="h-[24px] w-[24px] sm:w-full"
            />
            <div className="flex flex-1 sm:self-stretch">
              <Button className="h-[46px] min-w-[46px] rounded-lg bg-indigo-A700 px-[19px] font-inter text-base font-semibold text-white-A700">
                {one}
              </Button>
              <div className="flex w-full flex-col items-center rounded-lg p-3">
                <Text className="text-center !font-inter text-base font-semibold !text-blue_gray-700">{one1}</Text>
              </div>
              <div className="flex w-full flex-col items-center rounded-lg p-3">
                <Text className="text-center !font-inter text-base font-semibold !text-blue_gray-700">{oneOne}</Text>
              </div>
              <div className="flex w-full flex-col items-center rounded-lg p-3">
                <Text className="text-center !font-inter text-base font-semibold !text-blue_gray-700">{oneTwo}</Text>
              </div>
              <div className="flex w-full flex-col items-center rounded-lg p-3">
                <Text className="text-center !font-inter text-base font-semibold !text-blue_gray-700">{oneThree}</Text>
              </div>
              <div className="flex w-full flex-col items-center rounded-lg p-2">
                <Text className="mt-[9px] text-center !font-inter text-base font-semibold !text-blue_gray-700">
                  {oneFour}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg p-3">
                <Text className="text-center !font-inter text-base font-semibold !text-blue_gray-700">{oneFive}</Text>
              </div>
            </div>
            <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[24px] w-[25px] sm:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
