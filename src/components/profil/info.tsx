import React from "react";
import { Img, Text, Heading } from "..";

export default function Info({
  team = "Team",
  seeallfortyseve = "See all (47)",
  clestin = "Célestin Gardinier",
  ceocofounder = "CEO & Co-Founder",
  clestin1 = " Reynaud Colbert",
  ceocofounder1 = "Co-Founder",
  clestin2 = "Arienne Lyon",
  ceocofounder2 = "Managing Director",
  clestin3 = "Bernard Alexander",
  ceocofounder3 = "Managing Director",
  clestin4 = "Christine Jhonson",
  ceocofounder4 = "Managing Director",
  ...props
}: profile) {
  return (
    <div {...props}>
      <div className="container-sm">
        <div className="flex items-center justify-between gap-5">
          <Heading size="7xl" as="h2" className="ml-2 !font-clashdisplayvariable">
            {team}
          </Heading>
          <div className="flex">
            <Heading as="h6" className="self-start text-center !text-indigo-A700">
              {seeallfortyseve}
            </Heading>
          </div>
        </div>
        <div className="mt-2.5 flex gap-4 md:flex-col">
          <div className="ml-2 flex w-full flex-col items-center gap-4 rounded border border-solid border-gray-300 bg-white-A700 p-6 md:ml-0 sm:p-5">
            <Img src="images/img_avatar_80x80.png" alt="célestin" className="h-[80px] w-[80px] object-cover" />
            <div className="flex flex-col items-center justify-center gap-[13px]">
              <Heading size="3xl" as="h6" className="text-center">
                {clestin}
              </Heading>
              <Text as="p" className="text-center !text-blue_gray-400">
                {ceocofounder}
              </Text>
            </div>
            <div className="flex gap-3">
              <Img src="images/img_icon_blue_gray_700_24x24.svg" alt="ceo_cofounder" className="h-[24px] w-[24px]" />
              <Img src="images/img_icon_15.svg" alt="ceo_cofounder" className="h-[24px] w-[24px]" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 rounded border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
            <div className="w-[45%] bg-cyan-50 md:w-full md:p-5">
              <Img
                src="images/img_julian_wan_wnol.png"
                alt="julianwanwnol"
                className="h-[80px] w-[80px] rounded-[50%]"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-[11px] py-1 pl-1">
              <Heading size="3xl" as="h6" className="text-center">
                {clestin1}
              </Heading>
              <Text as="p" className="text-center !text-blue_gray-400">
                {ceocofounder1}
              </Text>
            </div>
            <div className="flex gap-3">
              <Img src="images/img_icon_blue_gray_700_24x24.svg" alt="icon" className="h-[24px] w-[24px]" />
              <Img src="images/img_icon_15.svg" alt="icon" className="h-[24px] w-[24px]" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 rounded border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
            <Img src="images/img_avatar_80x80.png" alt="avatar" className="h-[80px] w-[80px] object-cover" />
            <div className="flex flex-col items-center gap-[13px] py-1">
              <Heading size="3xl" as="h6" className="text-center">
                {clestin2}
              </Heading>
              <Text as="p" className="text-center !text-blue_gray-400">
                {ceocofounder2}
              </Text>
            </div>
            <div className="flex gap-3">
              <Img src="images/img_icon_blue_gray_700_24x24.svg" alt="icon" className="h-[24px] w-[24px]" />
              <Img src="images/img_icon_15.svg" alt="icon" className="h-[24px] w-[24px]" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 rounded border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
            <Img src="images/img_avatar_80x80.png" alt="avatar" className="h-[80px] w-[80px] object-cover" />
            <div className="flex flex-col items-center justify-center gap-[15px]">
              <Heading size="3xl" as="h6" className="text-center">
                {clestin3}
              </Heading>
              <Text as="p" className="text-center !text-blue_gray-400">
                {ceocofounder3}
              </Text>
            </div>
            <div className="flex gap-3">
              <Img src="images/img_icon_blue_gray_700_24x24.svg" alt="icon" className="h-[24px] w-[24px]" />
              <Img src="images/img_icon_15.svg" alt="icon" className="h-[24px] w-[24px]" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 rounded border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
            <Img src="images/img_avatar_80x80.png" alt="avatar" className="h-[80px] w-[80px] object-cover" />
            <div className="flex flex-col items-center justify-center gap-[15px]">
              <Heading size="3xl" as="h6" className="text-center">
                {clestin4}
              </Heading>
              <Text as="p" className="text-center !text-blue_gray-400">
                {ceocofounder4}
              </Text>
            </div>
            <div className="flex gap-3">
              <Img src="images/img_icon_blue_gray_700_24x24.svg" alt="icon" className="h-[24px] w-[24px]" />
              <Img src="images/img_icon_15.svg" alt="icon" className="h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
        <div className="mt-[75px] h-px bg-gray-300" />
      </div>
    </div>
  );
}
