import React from "react";
import Affiche from "../Home/affiche"
import { Text, Img, Button, Slider, Heading } from "..";
import AliceCarousel, { EventObject } from "react-alice-carousel";

export default function Filter({
  companiesby = "Companies by Category",
  resultscounter = "24 Results",
  pentagramTwo = "Pentagram",
  p3jobs = "3 Jobs",
  pentagram = "Wolff Olins",
  p3jobs1 = "3 Jobs",
  pentagram1 = "Clay",
  p3jobs2 = "3 Jobs",
  pentagram2 = "MediaMonks",
  p3jobs3 = "3 Jobs",
  pentagram3 = "Packer",
  p3jobs4 = "3 Jobs",
  pentagram4 = "Square",
  p3jobs5 = "3 Jobs",
  pentagram5 = "Divy",
  p3jobs6 = "3 Jobs",
  pentagram6 = "WebFlow",
  p3jobs7 = "3 Jobs",
  viewmore = "View more Design companies",
  design = "Design",
  designOne = "Fintech",
  designTwo = "Hosting",
  designThree = "Business Service",
  design1 = "Developer",
  designtext = "Design",
  financetext = "Fintech",
  webtext = "Hosting",
  businesstext = "Business Service",
  engineeringtext = "Developer",
  ...props
}: Ifilter) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <div {...props}>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[1095px] w-full items-center justify-center bg-[url(/images/img_landing_page_latest.svg)] bg-cover bg-no-repeat py-[72px] md:h-auto md:py-5">
        <div className="container-xs flex flex-col items-start gap-[266px] md:gap-[199px] md:p-5 sm:gap-[133px]">
          <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
            {companiesby}
          </Text>
          <div className="flex flex-col gap-6 self-stretch">
            <div className="flex items-start gap-4">
              <Button className="h-[56px] w-[56px] rounded-[28px] bg-white-A700 px-4">
                <Img src="images/img_icon.svg" />
              </Button>
              <Text className="mt-[11px] !font-clashdisplayvariable text-2xl font-semibold !text-gray-900 md:text-[22px]">
                {resultscounter}
              </Text>
            </div>
            <div className="grid grid-cols-4 gap-8 md:grid-cols-2 sm:grid-cols-1">
              <div className="flex w-full flex-col items-center gap-[30px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <Img
                  src="images/img_aaoodj22_400x400.png"
                  alt="pentagram"
                  className="h-[88px] w-[88px] rounded-[50%]"
                />
                <div className="flex flex-col items-center gap-[13px]">
                  <Text className="text-center !font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
                    {pentagramTwo}
                  </Text>
                  <Button className="h-[34px] min-w-[76px] bg-gray-50 px-2.5 text-base text-indigo-A700">
                    {p3jobs}
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-7 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <Img
                  src="images/img_82dbhut_400x400.png"
                  alt="82dbhut400x400"
                  className="h-[88px] w-[88px] rounded-[50%]"
                />
                <div className="flex flex-col items-center gap-4">
                  <Text className="text-center !font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
                    {pentagram}
                  </Text>
                  <Button className="h-[34px] min-w-[76px] bg-gray-50 px-2.5 text-base text-indigo-A700">
                    {p3jobs1}
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[30px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <Img src="images/img_kyk0sl2a_400x400.png" alt="kyk0sl2a" className="h-[88px] w-[88px] rounded-[50%]" />
                <div className="flex w-[34%] flex-col items-center gap-3.5 md:w-full">
                  <Text className="text-center !font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
                    {pentagram1}
                  </Text>
                  <Button className="h-[34px] w-full bg-gray-50 px-2.5 text-base text-indigo-A700">{p3jobs2}</Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[29px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <Img src="images/img_images_1.png" alt="imagesone" className="h-[88px] w-[88px] rounded-[50%]" />
                <div className="flex flex-col items-center gap-[15px]">
                  <Text className="text-center !font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
                    {pentagram2}
                  </Text>
                  <Button className="h-[34px] min-w-[76px] bg-gray-50 px-2.5 text-base text-indigo-A700">
                    {p3jobs3}
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[29px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <Img src="images/img_user.svg" alt="companylogo" className="h-[88px] w-[88px]" />
                <div className="flex w-[38%] flex-col items-center gap-[15px] md:w-full">
                  <Text className="text-center !font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
                    {pentagram3}
                  </Text>
                  <Button className="h-[34px] w-full bg-gray-50 px-2.5 text-base text-indigo-A700">{p3jobs4}</Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[30px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="w-[39%] md:w-full">
                  <Img
                    src="images/img_square_logo_xvh9oc2it.png"
                    alt="squarelogo"
                    className="h-[80px] w-[80px] object-cover"
                  />
                </div>
                <div className="flex w-[39%] flex-col items-center gap-3.5 md:w-full">
                  <Text className="text-center !font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
                    {pentagram4}
                  </Text>
                  <Button className="h-[34px] w-full bg-gray-50 px-2.5 text-base text-indigo-A700">{p3jobs5}</Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[30px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="w-[39%] md:w-full">
                  <Img
                    src="images/img_divvy_logo_f0rwkqp73.png"
                    alt="divvylogo"
                    className="h-[80px] w-[80px] rounded-[50%]"
                  />
                </div>
                <div className="flex w-[34%] flex-col items-center gap-3.5 md:w-full">
                  <Text className="text-center !font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
                    {pentagram5}
                  </Text>
                  <Button className="h-[34px] w-full bg-gray-50 px-2.5 text-base text-indigo-A700">{p3jobs6}</Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[29px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="w-[39%] md:w-full">
                  <Img
                    src="images/img_tg7mrqk2_400x400_79x79.png"
                    alt="tg7mrqktwo"
                    className="h-[79px] w-[79px] object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-[15px]">
                  <Text className="text-center !font-clashdisplayvariable text-2xl font-semibold !text-blue_gray-900 md:text-[22px]">
                    {pentagram6}
                  </Text>
                  <Button className="h-[34px] min-w-[76px] bg-gray-50 px-2.5 text-base text-indigo-A700">
                    {p3jobs7}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Text className="text-center text-base font-semibold !text-indigo-A700">{viewmore}</Text>
              <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[10%] ml-40 w-full md:relative md:flex-col">
      <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e: EventObject) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex w-full max-w-[1316px] md:flex-col md:p-5">
                <div className="flex w-[23%] flex-col items-start gap-[33px] border border-solid border-gray-300 bg-indigo-A700 px-8 pb-[29px] pt-8 md:w-full sm:p-5">
                  <Img src="images/img_icon_white_a700.svg" alt="design icon" className="h-[48px] w-[48px]" />
                  <Heading as="h4" className="!text-white-A700">
                    {designtext}
                  </Heading>
                </div>
                <div className="ml-8 flex w-[23%] flex-col items-start gap-[31px] border border-solid border-gray-300 bg-white-A700 px-8 pb-[31px] pt-8 md:ml-0 md:w-full sm:p-5">
                  <Img src="images/img_icon_indigo_a700_48x48.svg" alt="fintech icon" className="h-[48px] w-[48px]" />
                  <Heading as="h4">{financetext}</Heading>
                </div>
                <div className="ml-8 flex w-[23%] flex-col items-start gap-[33px] border border-solid border-gray-300 bg-white-A700 px-8 pb-[29px] pt-8 md:ml-0 md:w-full sm:p-5">
                  <Img src="images/img_icon_48x48.svg" alt="hosting icon" className="h-[48px] w-[48px]" />
                  <Heading as="h4">{webtext}</Heading>
                </div>
                <div className="ml-8 flex items-center md:ml-0">
                  <div className="flex flex-col items-start gap-[30px] border border-solid border-gray-300 bg-white-A700 p-8 sm:p-5">
                    <Img src="images/img_icon_1.svg" alt="business service icon" className="h-[48px] w-[48px]" />
                    <Heading as="h4">{businesstext}</Heading>
                  </div>
                  <Button size="3xl" shape="square" className="relative ml-[-23px] w-[48px] shadow-xs">
                    <Img src="images/img_arrow_left_white_a700.svg" />
                  </Button>
                </div>
                <div className="ml-[7px] flex flex-col items-start gap-[33px] border border-solid border-gray-300 bg-white-A700 px-8 pb-[30px] pt-8 md:ml-0 sm:p-5">
                  <Img src="images/img_icon_2.svg" alt="developer icon" className="h-[48px] w-[48px]" />
                  <Heading as="h4">{engineeringtext}</Heading>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      {/*<Affiche className="flex items-center justify-center bg-white-A700 py-[72px] md:py-5" />*/}
      </div>
    </div>
  );
}
