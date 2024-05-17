import React from "react";
import { Img, Text } from "..";

interface iapropos {
  className?: string;
  stripe?: string;
  button?: string;
  description?: string;
}

export default function Apropos({
  stripe = "Stripe",
  button = "Read more about Stripe",
  description = "Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.",
  ...props
}: iapropos) {
  return (
    <div {...props}>
      <div className="container-sm flex items-center justify-between gap-5 md:flex-col md:p-5">
        <div className="ml-2 flex w-[48%] flex-col gap-8 md:ml-0 md:w-full">
          <div className="flex w-[57%] items-center justify-between gap-5 md:w-full">
            <div className="w-[19%] self-start">
              <Img
                src="images/img_stripe_logo_dp4f5yykm.png"
                alt="stripelogo"
                className="h-[58px] w-[58px] object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <Text className="!font-clashdisplayvariable text-[32px] font-semibold !text-blue_gray-900 md:text-3xl sm:text-[28px]">
                {stripe}
              </Text>
              <div className="relative mt-[-2px] flex items-start gap-4">
                <a href="/profil">
                  <Text className="text-center text-base font-semibold !text-indigo-A700">{button}</Text>
                  <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
                </a>
              </div>
            </div>
          </div>
          <Text className="text-base font-normal leading-[160%] !text-blue_gray-700">{description}</Text>
        </div>
        <div className="flex w-[41%] justify-center gap-[19px] md:w-full sm:flex-col">
          <Img
            src="images/img_leon_wvh5grsmyay_unsplash.png"
            alt="leon"
            className="h-[276px] w-[67%] rounded object-cover sm:w-full"
          />
          <div className="flex w-[33%] flex-col gap-4 sm:w-full">
            <Img src="images/img_leon_6awftplgace_unsplash.png" alt="leon" className="h-[130px] rounded object-cover" />
            <div className="relative h-[130px] md:h-auto">
              <Img
                src="images/img_leon_ndz08c_zu0c_unsplash.png"
                alt="leonndz08c"
                className="h-[130px] w-full rounded object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[130px] w-full md:h-auto">
                <Img
                  src="images/img_leon_0k7ggia8lve_unsplash.png"
                  alt="leon"
                  className="h-[130px] w-full rounded object-cover"
                />
                <Img
                  src="images/img_leon_bzqu01v_g54_unsplash.png"
                  alt="leonbzqu01v"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[130px] w-full rounded object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
