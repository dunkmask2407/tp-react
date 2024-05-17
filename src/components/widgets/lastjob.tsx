import React from "react";
import { Button, Text, Img } from "..";

export default function Dernierjob({
  latestjobs,
  showalljobsTwo = "Show all jobs",
  jobtitle = "Social Media Assistant",
  companyname = "Nomad",
  location = "Paris, France",
  fulltimebutton = "Full-Time",
  marketingbutton = "Marketing",
  designbutton = "Design",
  jobtitle1 = "Social Media Assistant",
  companyname1 = "Netlify",
  location1 = "Paris, France",
  fulltimebutton1 = "Full-Time",
  marketingbutton1 = "Marketing",
  designbutton1 = "Design",
  jobtitle2 = "Brand Designer",
  companyname2 = "Dropbox",
  location2 = "San Fransisco, USA",
  fulltimebutton2 = "Full-Time",
  marketingbutton2 = "Marketing",
  designbutton2 = "Design",
  jobtitle3 = "Brand Designer",
  companyname3 = "Maze",
  location3 = "San Fransisco, USA",
  fulltimebutton3 = "Full-Time",
  marketingbutton3 = "Marketing",
  designbutton3 = "Design",
  jobtitle4 = "Interactive Developer",
  companyname4 = "Terraform",
  location4 = "Hamburg, Germany",
  fulltimebutton4 = "Full-Time",
  marketingbutton4 = "Marketing",
  designbutton4 = "Design",
  jobtitle5 = "Interactive Developer",
  companyname5 = "Udacity",
  location5 = "Hamburg, Germany",
  fulltimebutton5 = "Full-Time",
  marketingbutton5 = "Marketing",
  designbutton5 = "Design",
  jobtitle6 = "HR Manager",
  companyname6 = "Packer",
  location6 = "Lucern, Switzerland",
  fulltimebutton6 = "Full-Time",
  marketingbutton6 = "Marketing",
  designbutton6 = "Design",
  jobtitle7 = "HR Manager",
  companyname7 = "Webflow",
  location7 = "Lucern, Switzerland",
  fulltimebutton7 = "Full-Time",
  marketingbutton7 = "Marketing",
  designbutton7 = "Design",
  ...props
}: Ijob) {
  return (
    <div {...props}>
      <Img
        src="images/img_pattern.png"
        alt="pattern"
        className="absolute bottom-0 right-[0.00px] top-0 my-auto h-[794px] w-[46%] object-cover"
      />
      <div className="container-sm absolute left-[8%] top-[8%] my-auto flex flex-col gap-[41px] md:p-5">
        <div className="flex items-center justify-between gap-5 sm:flex-col">
          <Text className="!font-clashdisplayvariable text-5xl font-semibold !text-blue_gray-900 md:text-[44px] sm:text-[38px]">
            <span className="text-blue_gray-900">Latest&nbsp;</span>
            <span className="text-blue-500">jobs open</span>
          </Text>
          <div className="mb-[7px] flex items-start gap-4 self-end">
            <Text className="text-center text-base font-semibold !text-indigo-A700">{showalljobsTwo}</Text>
            <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center gap-8 md:grid-cols-1">
          <div className="flex w-full items-start gap-6 bg-white-A700 p-[23px] md:flex-col sm:p-5">
            <Img src="images/img_television.svg" alt="image" className="ml-4 h-[64px] w-[64px] md:ml-0 md:w-full" />
            <div className="flex w-[54%] flex-col items-start gap-[9px] md:w-full">
              <Text className="text-xl font-semibold !text-blue_gray-900">{jobtitle}</Text>
              <div className="flex w-[66%] items-start gap-2 md:w-full">
                <Text className="text-base font-normal !text-blue_gray-700">{companyname}</Text>
                <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text className="text-base font-normal !text-blue_gray-700">{location}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                  {fulltimebutton}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                  {marketingbutton}
                </Button>
                <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                  {designbutton}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 bg-white-A700 p-[23px] sm:flex-col sm:p-5">
            <div className="ml-4 w-[13%] bg-white-A700 sm:ml-0 sm:w-full sm:p-5">
              <Img
                src="images/img_netlify_logo_1.png"
                alt="netlifylogoone"
                className="h-[58px] w-[58px] rounded-[50%]"
              />
            </div>
            <div className="flex w-[54%] flex-col items-start gap-[9px] sm:w-full">
              <Text className="text-xl font-semibold !text-blue_gray-900">{jobtitle1}</Text>
              <div className="flex w-[64%] items-start gap-2 md:w-full">
                <Text className="text-base font-normal !text-blue_gray-700">{companyname1}</Text>
                <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text className="text-base font-normal !text-blue_gray-700">{location1}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                  {fulltimebutton1}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                  {marketingbutton1}
                </Button>
                <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                  {designbutton1}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 bg-white-A700 p-6 sm:flex-col sm:p-5">
            <Img src="images/img_close.svg" alt="close" className="ml-4 h-[64px] w-[64px] sm:ml-0 sm:w-full" />
            <div className="flex w-[54%] flex-col items-start gap-2 sm:w-full">
              <Text className="text-xl font-semibold !text-blue_gray-900">{jobtitle2}</Text>
              <div className="flex w-[87%] items-start gap-2 md:w-full">
                <Text className="text-base font-normal !text-blue_gray-700">{companyname2}</Text>
                <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text className="text-base font-normal !text-blue_gray-700">{location2}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                  {fulltimebutton2}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                  {marketingbutton2}
                </Button>
                <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                  {designbutton2}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 bg-white-A700 p-6 sm:flex-col sm:p-5">
            <Img
              src="images/img_7tuadqi_400x400.png"
              alt="7tuadqi400x400"
              className="ml-4 h-[64px] w-[64px] rounded-[50%] sm:ml-0"
            />
            <div className="flex w-[54%] flex-col items-start gap-2 sm:w-full">
              <Text className="text-xl font-semibold !text-blue_gray-900">{jobtitle3}</Text>
              <div className="flex w-[78%] items-start gap-2 md:w-full">
                <Text className="text-base font-normal !text-blue_gray-700">{companyname3}</Text>
                <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text className="text-base font-normal !text-blue_gray-700">{location3}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                  {fulltimebutton3}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                  {marketingbutton3}
                </Button>
                <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                  {designbutton3}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 bg-white-A700 p-6 sm:flex-col sm:p-5">
            <Img
              src="images/img_thumbs_up.svg"
              alt="companylogo"
              className="ml-4 h-[64px] w-[64px] sm:ml-0 sm:w-full"
            />
            <div className="flex w-[54%] flex-col items-start gap-2 sm:w-full">
              <Text className="text-xl font-semibold !text-blue_gray-900">{jobtitle4}</Text>
              <div className="flex items-start gap-2 self-stretch">
                <Text className="text-base font-normal !text-blue_gray-700">{companyname4}</Text>
                <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text className="text-base font-normal !text-blue_gray-700">{location4}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                  {fulltimebutton4}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                  {marketingbutton4}
                </Button>
                <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                  {designbutton4}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 bg-white-A700 p-6 sm:flex-col sm:p-5">
            <Img
              src="images/img_1m3hz0d_400x400.png"
              alt="1m3hz0d400x400"
              className="ml-4 h-[64px] w-[64px] rounded-[50%] sm:ml-0"
            />
            <div className="flex w-[54%] flex-col items-start gap-2 sm:w-full">
              <Text className="text-xl font-semibold !text-blue_gray-900">{jobtitle5}</Text>
              <div className="flex w-[85%] items-start gap-2 py-1 md:w-full">
                <Text className="text-base font-normal !text-blue_gray-700">{companyname5}</Text>
                <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text className="text-base font-normal !text-blue_gray-700">{location5}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                  {fulltimebutton5}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                  {marketingbutton5}
                </Button>
                <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                  {designbutton5}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 bg-white-A700 p-6 sm:flex-col sm:p-5">
            <Img src="images/img_user.svg" alt="companylogo" className="ml-4 h-[64px] w-[64px] sm:ml-0 sm:w-full" />
            <div className="flex w-[54%] flex-col items-start gap-2 sm:w-full">
              <Text className="text-xl font-semibold !text-blue_gray-900">{jobtitle6}</Text>
              <div className="flex w-[85%] items-start gap-2 md:w-full">
                <Text className="text-base font-normal !text-blue_gray-700">{companyname6}</Text>
                <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text className="text-base font-normal !text-blue_gray-700">{location6}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                  {fulltimebutton6}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                  {marketingbutton6}
                </Button>
                <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                  {designbutton6}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 bg-white-A700 p-6 sm:flex-col sm:p-5">
            <div className="ml-4 w-[13%] sm:ml-0 sm:w-full">
              <Img src="images/img_tg7mrqk2_400x400.png" alt="tg7mrqktwo" className="h-[57px] w-[57px] object-cover" />
            </div>
            <div className="flex w-[54%] flex-col items-start gap-2 sm:w-full">
              <Text className="text-xl font-semibold !text-blue_gray-900">{jobtitle7}</Text>
              <div className="flex items-start gap-2 self-stretch">
                <Text className="text-base font-normal !text-blue_gray-700">{companyname7}</Text>
                <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text className="text-base font-normal !text-blue_gray-700">{location7}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button className="h-[34px] w-full flex-1 rounded-[17px] bg-teal-300_19 px-[9px] text-sm font-semibold text-teal-300">
                  {fulltimebutton7}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button className="h-[34px] w-full flex-1 rounded-[17px] border border-solid border-yellow-700 px-2 text-sm font-semibold text-yellow-700">
                  {marketingbutton7}
                </Button>
                <Button className="h-[34px] min-w-[68px] rounded-[17px] border border-solid border-indigo-A700 px-2 text-sm font-semibold text-indigo-A700">
                  {designbutton7}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
