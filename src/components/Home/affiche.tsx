import React from "react";
import { Img, Text, Button } from "..";


interface IAf {
  className?: string;
}

export default function Affiche({ ...props }: IAf) {
  return (
    <div {...props} className="relative">
      <Img
        src="images/img_rectangle_2742.svg"
        alt="image_two"
        className="h-[414px] w-full max-w-[1192px]"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="container-xs">
          <div className="flex w-full items-start justify-between gap-5 md:flex-col">
            <div className="ml-[50px] mt-[125px] flex w-[35%] flex-col items-start gap-7 md:w-full">
              <Text className="w-full !font-clashdisplayvariable text-5xl font-semibold leading-[110%] !text-white-A700 md:text-[44px] sm:text-[38px]">
                Start posting jobs today
              </Text>
              <Text className="text-base font-medium !text-white-A700">Start posting jobs for only $10.</Text>
              <Button className="h-[50px] min-w-[179px] bg-white-A700 px-6 text-base font-bold text-indigo-A700 sm:px-5">
                Sign Up For Free
              </Button>
            </div>
            <div className="mr-[50px] flex w-[54%] items-center justify-center gap-3 bg-white-A700 pr-2.5 md:w-full sm:flex-col">
            <div className="flex w-[20%] items-start justify-center self-end sm:w-full">
            <Img src="images/img_vector.svg" alt="vector" className="relative z-[1] mt-[50px] h-[9px]" />
            <div className="relative ml-[-1px] h-[480px] flex-1 border border-solid border-indigo-50 bg-gray-50_03 p-1.5">
              <div className="absolute bottom-[20.37px] right-[11.42px] m-auto flex flex-col items-start">
                <Text className="!font-inter text-[7.05px] font-semibold !text-gray-900">Maria Kelly</Text>
                <Text className="!font-inter text-[5.48px] font-normal !text-gray-900_7f">mariakelly@email.com</Text>
              </div>
              <div className="absolute bottom-[19.37px] left-[12.53px] m-auto h-[19px] w-[21%]">
                <div className="absolute left-0 right-0 top-[0.00px] m-auto w-[96%] rounded-[9px] bg-indigo-A700_4c">
                  <Img
                    src="images/img_lion27_suzn455l_pm_unsplash.png"
                    alt="lion27suzn455l"
                    className="h-[18px] w-[18px] rounded-[50%]"
                  />
                </div>
                <Img
                  src="images/img_television.svg"
                  alt="television"
                  className="absolute bottom-[0.25px] right-[0.26px] m-auto h-[7px] w-[7px]"
                />
              </div>
              <div className="absolute left-0 right-0 top-[13.31px] m-auto flex w-full flex-col items-start">
                <div className="ml-1.5 flex items-center gap-[3px] md:ml-0">
                  <Img src="images/img_frame_3.svg" alt="image" className="h-[12px] w-[12px] self-start" />
                  <Text className="!font-redhatdisplay text-[9.4px] font-bold tracking-[-0.09px] !text-gray-900">
                    JobHuntly
                  </Text>
                </div>
                <div className="mt-[18px] flex self-stretch rounded-[3px] bg-indigo-A700_0c p-1">
                  <div className="flex items-center gap-1.5">
                    <Img src="images/img_icon_indigo_a700_9x9.svg" alt="icon" className="h-[9px] w-[9px]" />
                    <Text className="!font-inter text-[6.26px] font-medium !text-indigo-A700">Dashboard</Text>
                  </div>
                </div>
                <div className="ml-1.5 mt-1.5 flex items-center gap-1.5 md:ml-0">
                  <Img src="images/img_icon_blue_gray_900_9x9.svg" alt="icon" className="h-[9px] w-[9px]" />
                  <Text className="self-end !font-inter text-[6.26px] font-medium !text-gray-900">Messages</Text>
                </div>
                <div className="ml-1.5 mt-[9px] flex items-center gap-1.5 md:ml-0">
                  <Img src="images/img_icon_9x9.svg" alt="icon" className="h-[9px] w-[9px]" />
                  <Text className="self-end !font-inter text-[6.26px] font-medium !text-gray-900">Company Profile</Text>
                </div>
                <div className="ml-1.5 mt-[9px] flex items-center gap-1.5 md:ml-0">
                  <Img src="images/img_icon_blue_gray_900.svg" alt="icon" className="h-[9px] w-[9px]" />
                  <Text className="self-end !font-inter text-[6.26px] font-medium !text-gray-900">All Applicants</Text>
                </div>
                <div className="ml-1.5 mt-[9px] flex items-center gap-1.5 md:ml-0">
                  <Img src="images/img_icon_3.svg" alt="icon" className="h-[9px] w-[9px]" />
                  <Text className="self-end !font-inter text-[6.26px] font-medium !text-gray-900">Job Listing</Text>
                </div>
                <Text className="ml-1.5 mt-5 !font-inter text-[5.48px] font-semibold tracking-[0.22px] !text-gray-900_7f md:ml-0">
                  SETTINGS
                </Text>
                <div className="ml-1.5 mt-2.5 flex items-center gap-1.5 opacity-0.7 md:ml-0">
                  <Img src="images/img_icon_4.svg" alt="icon_eleven" className="h-[9px] w-[9px]" />
                  <Text className="self-end !font-inter text-[6.26px] font-medium !text-gray-900">Settings</Text>
                </div>
                <div className="ml-1.5 mt-[9px] flex items-center gap-1.5 opacity-0.7 md:ml-0">
                  <Img src="images/img_icon_5.svg" alt="icon_thirteen" className="h-[9px] w-[9px]" />
                  <Text className="self-end !font-inter text-[6.26px] font-medium !text-gray-900">Help</Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center gap-[11px] sm:self-stretch">
            <div className="relative h-[35px] w-[26%] self-end md:h-auto">
              <div className="mb-[7px] flex flex-col items-center rounded-[7px] bg-white-A700 p-[3px]">
                <Img src="images/img_icon_gray_900.svg" alt="icon_fifteen" className="h-[9px] w-[9px]" />
              </div>
              <Button className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max min-w-[111px] bg-indigo-A700 pl-[22px] pr-[7px] text-base font-bold text-white-A700 sm:pl-5">
                Post a job
              </Button>
            </div>
            <div className="flex items-center justify-between gap-5 self-stretch">
              <div className="flex flex-col items-start gap-0.5">
                <Text className="!font-clashdisplayvariable text-[12.53px] font-semibold tracking-[-0.25px] !text-gray-900">
                  Good morning, Maria
                </Text>
                <Text className="text-[6.26px] font-medium !text-gray-900_7f">
                  Here is what’s happening with your job listings from July 19 - July 25.
                </Text>
              </div>
              <Button className="h-[18px] min-w-[67px] self-end rounded-[3px] border border-solid border-indigo-50 bg-white-A700 pl-[17px] pr-1.5 font-inter text-[6.26px] font-medium text-gray-900">
                Jul 19 - Jul 25
              </Button>
            </div>
            <div className="flex w-[49%] flex-col gap-1 self-start border border-solid border-gray-300 bg-white-A700 p-[9px] md:w-full">
              <div className="flex w-[90%] items-start justify-between gap-5 md:w-full">
                <div className="flex flex-col items-start gap-2">
                  <Text className="text-[7.83px] font-semibold !text-blue_gray-900">Company Visitors</Text>
                  <div className="flex flex-col items-start">
                    <Text className="text-[28.19px] font-semibold !text-blue_gray-900 md:text-[26px] sm:text-2xl">
                      21,457
                    </Text>
                    <Text className="text-[7.05px] font-medium !text-blue_gray-400">
                      Visitors from July 19 - July 25
                    </Text>
                  </div>
                </div>
                <div className="flex w-[24%] flex-col items-center gap-0.5 rounded-[3px] bg-blue_gray-900 px-[5px] pt-[5px]">
                  <Text className="text-center text-[6.26px] font-normal">Visitors</Text>
                  <Text className="text-center text-[7.05px] font-semibold !text-white-A700">5,879</Text>
                  <Img
                    src="images/img_polygon_1.png"
                    alt="polygonone"
                    className="mr-2.5 h-[3px] self-end rounded-[1px] object-cover md:mr-0"
                  />
                </div>
              </div>
              <Img src="images/img_chart.svg" alt="chart" className="h-[55px]" />
              <div className="flex flex-wrap gap-[17px] self-center">
                <Text className="self-start text-center text-[6.26px] font-normal !text-blue_gray-400">Mon</Text>
                <Text className="self-start text-center text-[6.26px] font-normal !text-blue_gray-400">Tue</Text>
                <Text className="self-start text-center text-[6.26px] font-normal !text-blue_gray-400">Wed</Text>
                <Text className="self-start text-center text-[6.26px] font-normal !text-blue_gray-400">Thu</Text>
                <Text className="h-[7px] w-[7px] self-start text-center text-[6.26px] font-normal !text-blue_gray-400">
                  Fri
                </Text>
                <Text className="self-start text-center text-[6.26px] font-normal !text-blue_gray-400">Sat</Text>
                <Text className="self-start text-center text-[6.26px] font-normal !text-blue_gray-400">Sun</Text>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
