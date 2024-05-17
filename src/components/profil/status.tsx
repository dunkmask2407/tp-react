import React from "react";
import { Img, Heading, Text, Button } from "..";

const data = [
  { htmlfiveone: "images/img_image_2.png", htmlCounter: "HTML 5" },
  { htmlfiveone: "images/img_image_2_74x74.png", htmlCounter: "CSS 3" },
  { htmlfiveone: "images/img_image_2_1.png", htmlCounter: "JavaScript" },
  { htmlfiveone: "images/img_image_2_2.png", htmlCounter: "Ruby" },
  { htmlfiveone: "images/img_image_2_3.png", htmlCounter: "Mixpanel" },
  { htmlfiveone: "images/img_image_2_4.png", htmlCounter: "Framer" },
];

export default function Status({
  companyprofiletext = "Company Profile",
  descriptiontext = "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.",
  contacttext = "Contact",
  twitterbutton = "twitter.com/stripe",
  facebookbutton = "facebook.com/StripeHQ",
  linkedinbutton = "linkedin.com/company/stripe",
  techstack = "Tech stack",
  learnaboutthetext = "Learn about the technology and tools that Stripe uses. ",
  htmlcountertext = "HTML 5",
  csscountertext = "CSS 3",
  javascripttext = "JavaScript",
  rubytext = "Ruby",
  mixpaneltext = "Mixpanel",
  framertext = "Framer",
  viewtechstack = "View tech stack",
  officelocationtext = "Office Location",
  stripeofficestext = "Stripe offices spread across 20 countries",
  unitedstatestext = "United States",
  englandtext = "England",
  japantext = "Japan",
  australiatext = "Australia",
  chinatext = "China",
  viewcountries = "View countries",
  ...props
}: profil) {
  return (
    <div {...props}>
      <div className="container-sm flex items-start justify-between gap-5 md:flex-col md:p-5">
        <div className="ml-2 flex w-[63%] flex-col gap-10 md:ml-0 md:w-full">
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col items-start gap-[13px]">
              <Heading size="7xl" as="h2" className="!font-clashdisplayvariable">
                {companyprofiletext}
              </Heading>
              <Text as="p" className="w-full leading-[160%] !text-blue_gray-700">
                {descriptiontext}
              </Text>
            </div>
            <div className="flex flex-col items-start gap-[15px]">
              <Heading size="7xl" as="h2" className="!font-clashdisplayvariable">
                {contacttext}
              </Heading>
              <div className="flex gap-4">
                <Button
                  size="3xl"
                  shape="square"
                  color="undefined_undefined"
                  leftIcon={
                    <Img src="images/img_icon_indigo_a700_24x24.svg" alt="icon" className="h-[24px] w-[24px]" />
                  }
                  className="min-w-[204px] gap-4 font-medium"
                >
                  {twitterbutton}
                </Button>
                <Button
                  size="3xl"
                  shape="square"
                  color="undefined_undefined"
                  leftIcon={<Img src="images/img_icon_24x24.svg" alt="icon" className="h-[24px] w-[24px]" />}
                  className="min-w-[249px] gap-4 font-medium"
                >
                  {facebookbutton}
                </Button>
              </div>
              <Button
                size="3xl"
                shape="square"
                color="undefined_undefined"
                leftIcon={<Img src="images/img_icon_14.svg" alt="icon" className="h-[24px] w-[24px]" />}
                className="min-w-[292px] gap-4 font-medium"
              >
                {linkedinbutton}
              </Button>
            </div>
          </div>
          <div className="flex gap-3 md:flex-col">
            <Img
              src="images/img_leon_wvh5grsmyay_unsplash_606x478.png"
              alt="leon"
              className="h-[606px] w-[65%] object-cover md:w-full"
            />
            <div className="flex w-[35%] flex-col gap-3 md:w-full">
              <Img
                src="images/img_leon_6awftplgace_unsplash_194x262.png"
                alt="leon"
                className="h-[194px] object-cover"
              />
              <div className="flex flex-col gap-3">
                <Img
                  src="images/img_leon_bzqu01v_g54_unsplash_194x262.png"
                  alt="leonbzqu01v"
                  className="h-[194px] object-cover"
                />
                <Img
                  src="images/img_leon_ndz08c_zu0c_unsplash_194x262.png"
                  alt="leonndz08c"
                  className="h-[194px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[32%] flex-col gap-[37px] md:w-full">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-[15px] self-stretch">
              <Heading size="7xl" as="h2" className="!font-clashdisplayvariable">
                {techstack}
              </Heading>
              <Text as="p" className="w-full leading-[160%] !text-blue_gray-700">
                {learnaboutthetext}
              </Text>
            </div>
            <div className="flex w-[86%] flex-col gap-2 md:w-full">
              <div className="grid grid-cols-3 gap-[34px] p-3 md:grid-cols-2 sm:grid-cols-1">
                {data.map((d, index) => (
                  <div key={"gridhtmlfive" + index} className="flex w-full flex-col items-center gap-3">
                    <Img src={d.htmlfiveone} alt="html" className="h-[74px] w-full object-cover md:h-auto" />
                    <Text as="p" className="!text-blue_gray-900">
                      {d.htmlCounter}
                    </Text>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-4">
                <Heading as="h6" className="text-center !text-indigo-A700">
                  {viewtechstack}
                </Heading>
                <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
              </div>
            </div>
            <div className="h-px w-full self-stretch bg-gray-300" />
          </div>
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-[19px]">
              <Heading size="7xl" as="h2" className="!font-clashdisplayvariable">
                {officelocationtext}
              </Heading>
              <Text as="p" className="!text-blue_gray-700">
                {stripeofficestext}
              </Text>
            </div>
            <div className="flex w-[43%] flex-col items-start gap-4 md:w-full">
              <div className="flex items-start gap-3">
                <Img src="images/img_close_gray_50_01.svg" alt="close" className="h-[30px]" />
                <Heading as="h6" className="!text-black-900">
                  {unitedstatestext}
                </Heading>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex bg-gray-50_01">
                  <Img src="images/img_plus.svg" alt="plus" className="h-[30px] w-full md:h-auto" />
                </div>
                <Heading as="h6" className="!text-black-900">
                  {englandtext}
                </Heading>
              </div>
              <div className="flex items-center gap-3">
                <Img src="images/img_contrast.svg" alt="contrast" className="h-[30px]" />
                <Heading as="h6" className="!text-black-900">
                  {japantext}
                </Heading>
              </div>
              <div className="flex items-start gap-3">
                <Img src="images/img_close_indigo_700.svg" alt="close" className="h-[30px]" />
                <Heading as="h6" className="!text-black-900">
                  {australiatext}
                </Heading>
              </div>
              <div className="flex w-[60%] items-start gap-3 md:w-full">
                <div className="flex w-full bg-red-700 p-0.5">
                  <Img src="images/img_signal.svg" alt="signal" className="mb-[7px] h-[17px]" />
                </div>
                <Heading as="h6" className="!text-black-900">
                  {chinatext}
                </Heading>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Heading as="h6" className="text-center !text-indigo-A700">
                {viewcountries}
              </Heading>
              <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
            </div>
            <div className="h-px w-full self-stretch bg-gray-300" />
          </div>
        </div>
      </div>
      <div className="container-sm h-px bg-gray-300 md:p-5" />
    </div>
  );
}
