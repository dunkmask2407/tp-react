import React from "react";
import { Img, Text, Button, Heading, CheckBox } from ".";

export default function Resultx({
  industry = "Industry",
  companysize = "Company Size",
  alljobs = "All Jobs",
  showingseventyt = "Showing 73 results",
  sortby = "Sort by:",
  mostrelevant = "Most relevant",
  p7jobs = "7 Jobs",
  komodo = "Stripe",
  description = "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools...",
  business = "Business",
  paymentGateway = "Payment gateway",
  p7jobs1 = "7 Jobs",
  komodo1 = "Truebill",
  komodoisan = "Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...",
  business1 = "Business",
  p7jobs2 = "7 Jobs",
  komodo2 = "Square",
  komodoisan1 = "Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.",
  business2 = "Business",
  blockchain = "Blockchain",
  p7jobs3 = "7 Jobs",
  komodo3 = "Coinbase",
  description1 = "Coinbase is a digital currency wallet and platform where merchants and consumers can transact with new digital currencies.",
  business3 = "Business",
  blockchain1 = "Blockchain",
  p7jobs4 = "7 Jobs",
  komodo4 = "Robinhood",
  komodoisan2 = "Robinhood is lowering barriers, removing fees, and providing greater access to financial information.",
  business4 = "Business",
  p7jobs5 = "7 Jobs",
  komodoOne = "Kraken",
  komodoisanOne = "Based in San Francisco, Kraken is the world’s largest global bitcoin exchange in euro volume and liquidity.",
  business5 = "Business",
  blockchain2 = "Blockchain",
  p7jobs6 = "7 Jobs",
  komodo5 = "Revolut",
  komodoisan3 = "When Revolut was founded in 2015, we had a vision to build a sustainable, digital alternative to traditional big banks.",
  business6 = "Business",
  p7jobs7 = "7 Jobs",
  komodoone1 = "Divvy",
  komodoisanone1 = "Divvy is a secure financial platform for businesses to manage payments and subscriptions.",
  business7 = "Business",
  blockchain3 = "Blockchain",
  one = "1",
  two = "2",
  three = "3",
  prop = "•••",
  ten = "10",
  ...props
}: result) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center pt-[70px] pb-[72px] md:py-5 bg-white-A700`}
    >
      <div className="container-xs flex items-start justify-between gap-5 pl-2.5 md:flex-col md:p-5">
        <div className="flex w-[17%] flex-col gap-10 md:w-full">
          <div className="flex flex-col gap-5">
            <div className="flex self-start">
              <Heading size="2xl" as="h6">
                {industry}
              </Heading>
            </div>
            <div className="flex flex-col gap-5">
              <CheckBox
                name="Advertising Checkbox"
                label="Advertising (43)"
                id="AdvertisingCheckbox"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="Business Service Checkbox"
                label="Business Service (4)"
                id="BusinessServiceCheckbox"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="Blockchain Checkbox"
                label="Blockchain (5)"
                id="BlockchainCheckbox"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="Cloud Checkbox"
                label="Cloud (15)"
                id="CloudCheckbox"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="Consumer Tech Checkbox"
                label="Consumer Tech (5)"
                id="ConsumerTechCheckbox"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="Education Checkbox"
                label="Education (34)"
                id="EducationCheckbox"
                className="gap-4 px-px py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="Fintech Checkbox"
                label="Fintech (45)"
                id="FintechCheckbox"
                className="gap-4 px-px py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="Gaming Checkbox"
                label="Gaming (33)"
                id="GamingCheckbox"
                className="gap-4 px-px py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="Food Beverage Checkbox"
                label="Food & Beverage (5)"
                id="FoodBeverageCheckbox"
                className="gap-4 px-px py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="Healthcare Checkbox"
                label="Healthcare (3)"
                id="HealthcareCheckbox"
                className="gap-4 px-px py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="Hosting Checkbox"
                label="Hostinng (5)"
                id="HostingCheckbox"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="Media Checkbox"
                label="Media (4)"
                id="MediaCheckbox"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="flex">
              <Heading size="2xl" as="h6">
                {companysize}
              </Heading>
            </div>
            <div className="flex w-[85%] flex-col gap-5 md:w-full">
              <CheckBox
                name="1-50 Checkbox"
                label="1-50 (25)"
                id="Checkbox5"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="51-150 Checkbox"
                label="51-150 (57)"
                id="Checkbox4"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="151-250 Checkbox"
                label="151-250 (45)"
                id="Checkbox3"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="251-500 Checkbox"
                label="251-500 (4)"
                id="Checkbox2"
                className="py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="501-1000 Checkbox"
                label="501-1000 (43)"
                id="Checkbox1"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
              <CheckBox
                name="1000+ Checkbox"
                label="1000 - above (23)"
                id="Checkbox"
                className="gap-4 py-1 text-base text-blue_gray-700"
              />
            </div>
          </div>
        </div>
        <div className="flex w-[78%] flex-col items-center gap-8 md:w-full">
          <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
            <div className="flex flex-col items-start gap-[7px]">
              <Heading size="2xl" as="h2">
                {alljobs}
              </Heading>
              <Text as="p" className="!text-blue_gray-900">
                {showingseventyt}
              </Text>
            </div>
            <div className="flex items-center gap-[22px]">
              <div className="flex items-start gap-3">
                <Text as="p">{sortby}</Text>
                <div className="flex items-center gap-2 pb-[5px]">
                  <Text as="p" className="self-start !font-medium !text-blue_gray-900">
                    {mostrelevant}
                  </Text>
                  <Img
                    src="images/img_arrow_down_indigo_a700.svg"
                    alt="sort arrow"
                    className="h-[16px] w-[16px] self-end"
                  />
                </div>
              </div>
              <div className="h-[32px] w-px bg-gray-900_19" />
              <div className="flex items-center gap-6 pl-2">
                <Img src="images/img_icon.svg" alt="view icon" className="h-[24px] w-[24px]" />
                <Button color="indigo_A700_0f" size="lg" className="w-[40px] rounded">
                  <Img src="images/img_user.svg" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 self-stretch">
            <div className="grid flex-1 grid-cols-2 justify-center gap-8 md:grid-cols-1">
              <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <a href="/about">
                  <div className="flex items-start justify-between gap-5">
                    <Img
                      src="images/img_stripe_logo_dp4f5yykm.png"
                      alt="stripe logo"
                      className="h-[80px] w-[80px] object-cover"
                    />
                    <Button color="gray_50" shape="square" className="min-w-[75px]">
                      {p7jobs}
                    </Button>
                  </div>
                  <div className="flex flex-col items-start gap-3.5">
                    <Heading as="h4">{komodo}</Heading>
                    <Text size="2xl" as="p" className="w-full leading-[160%] !text-blue_gray-700">
                      {description}
                    </Text>
                  </div>
                  <div className="flex gap-4">
                    <Button color="teal_300" variant="outline" shape="round" className="min-w-[83px] font-semibold">
                      {business}
                    </Button>
                    <Button color="indigo_A700_19" shape="round" className="min-w-[145px] font-semibold">
                      {paymentGateway}
                    </Button>
                  </div>
                </a>
              </div>
              <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="flex items-start justify-between gap-5 self-stretch">
                  <Img
                    src="images/img_truebill_logo_v2krsyvgz.png"
                    alt="truebill logo"
                    className="h-[80px] w-[80px] object-cover"
                  />
                  <Button color="gray_50" shape="square" className="min-w-[75px]">
                    {p7jobs1}
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-[15px] self-stretch">
                  <Heading as="h4">{komodo1}</Heading>
                  <Text size="2xl" as="p" className="w-full leading-[160%] !text-blue_gray-700">
                    {komodoisan}
                  </Text>
                </div>
                <Button color="teal_300" variant="outline" shape="round" className="min-w-[83px] font-semibold">
                  {business1}
                </Button>
              </div>
              <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="flex items-start justify-between gap-5">
                  <Img
                    src="images/img_square_logo_xvh9oc2it.png"
                    alt="square"
                    className="h-[80px] w-[80px] object-cover"
                  />
                  <Button color="gray_50" shape="square" className="min-w-[75px]">
                    {p7jobs2}
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-3.5">
                  <Heading as="h4">{komodo2}</Heading>
                  <Text size="2xl" as="p" className="w-full leading-[160%] !text-blue_gray-700">
                    {komodoisan1}
                  </Text>
                </div>
                <div className="flex gap-4">
                  <Button color="teal_300" variant="outline" shape="round" className="min-w-[83px] font-semibold">
                    {business2}
                  </Button>
                  <Button color="yellow_700" variant="outline" shape="round" className="min-w-[97px] font-semibold">
                    {blockchain}
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="flex items-start justify-between gap-5">
                  <Img
                    src="images/img_ey9yojwxeaub1op.png"
                    alt="coinbase"
                    className="h-[88px] w-[88px] rounded-[50%]"
                  />
                  <Button color="gray_50" shape="square" className="min-w-[75px]">
                    {p7jobs3}
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <Heading as="h4">{komodo3}</Heading>
                  <Text size="2xl" as="p" className="w-full leading-[160%] !text-blue_gray-700">
                    {description1}
                  </Text>
                </div>
                <div className="flex gap-4">
                  <Button color="teal_300" variant="outline" shape="round" className="min-w-[83px] font-semibold">
                    {business3}
                  </Button>
                  <Button color="yellow_700" variant="outline" shape="round" className="min-w-[97px] font-semibold">
                    {blockchain1}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 gap-8 md:flex-col">
              <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="flex items-start justify-between gap-5 self-stretch">
                  <Img
                    src="images/img_dzjpswtd_400x400.png"
                    alt="robinhood logo"
                    className="h-[88px] w-[88px] object-cover"
                  />
                  <Button color="gray_50" shape="square" className="min-w-[75px]">
                    {p7jobs4}
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-[15px] self-stretch">
                  <Heading as="h4">{komodo4}</Heading>
                  <Text size="2xl" as="p" className="w-full leading-[160%] !text-blue_gray-700">
                    {komodoisan2}
                  </Text>
                </div>
                <Button color="teal_300" variant="outline" shape="round" className="min-w-[83px] font-semibold">
                  {business4}
                </Button>
              </div>
              <div className="flex w-full flex-col gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="flex items-start justify-between gap-5">
                  <Img
                    src="images/img_1548817766621.png"
                    alt="kraken logo"
                    className="h-[80px] w-[80px] object-cover"
                  />
                  <Button color="gray_50" shape="square" className="min-w-[75px]">
                    {p7jobs5}
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                  <Heading as="h4">{komodoOne}</Heading>
                  <Text size="2xl" as="p" className="w-full leading-[160%] !text-blue_gray-700">
                    {komodoisanOne}
                  </Text>
                </div>
                <div className="flex gap-4">
                  <Button color="teal_300" variant="outline" shape="round" className="min-w-[83px] font-semibold">
                    {business5}
                  </Button>
                  <Button color="yellow_700" variant="outline" shape="round" className="min-w-[97px] font-semibold">
                    {blockchain2}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 gap-8 md:flex-col">
              <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="flex items-start justify-between gap-5 self-stretch">
                  <Img
                    src="images/img_bvboaeet_400x400_88x88.png"
                    alt="bvboaeet"
                    className="h-[88px] w-[88px] rounded-[50%]"
                  />
                  <Button color="gray_50" shape="square" className="min-w-[75px]">
                    {p7jobs6}
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-[15px] self-stretch">
                  <Heading as="h4">{komodo5}</Heading>
                  <Text size="2xl" as="p" className="w-full leading-[160%] !text-blue_gray-700">
                    {komodoisan3}
                  </Text>
                </div>
                <Button color="teal_300" variant="outline" shape="round" className="min-w-[83px] font-semibold">
                  {business6}
                </Button>
              </div>
              <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="flex items-start justify-between gap-5">
                  <div className="w-[22%]">
                    <Img
                      src="images/img_divvy_logo_f0rwkqp73.png"
                      alt="divvylogo"
                      className="h-[80px] w-[80px] rounded-[50%]"
                    />
                  </div>
                  <Button color="gray_50" shape="square" className="min-w-[75px]">
                    {p7jobs7}
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-3.5">
                  <Heading as="h4">{komodoone1}</Heading>
                  <Text size="2xl" as="p" className="w-full leading-[160%] !text-blue_gray-700">
                    {komodoisanone1}
                  </Text>
                </div>
                <div className="flex gap-4">
                  <Button color="teal_300" variant="outline" shape="round" className="min-w-[83px] font-semibold">
                    {business7}
                  </Button>
                  <Button color="yellow_700" variant="outline" shape="round" className="min-w-[97px] font-semibold">
                    {blockchain3}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[31%] items-start justify-between gap-5 md:w-full">
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
                <Text className="text-center !font-inter text-base font-semibold !text-blue_gray-700">{two}</Text>
              </div>
              <div className="flex w-full flex-col items-center rounded-lg p-3">
                <Text className="text-center !font-inter text-base font-semibold !text-blue_gray-700">{three}</Text>
              </div>
              <div className="flex w-full flex-col items-center rounded-lg p-3">
                <Text className="text-center !font-inter text-base font-semibold !text-blue_gray-700">{prop}</Text>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg p-3">
                <Text className="text-center !font-inter text-base font-semibold !text-blue_gray-700">{ten}</Text>
              </div>
            </div>
            <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[24px] w-[25px] sm:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
