import React from "react";
import { Img, Text } from "..";

interface banner {
  className?: string;
  companieswehelpedgrow?: string;
}

export default function Banniere({ companieswehelpedgrow = "Companies we helped grow", ...props }: banner) {
  return (
    <div {...props}>
      <div className="container-sm flex flex-col items-start px-2.5 md:p-5">
        <Text className="text-lg font-normal !text-gray-900_7f">{companieswehelpedgrow}</Text>
      </div>
      <Img className="container-sm h-[40px] md:h-auto md:p-5" src="images/img_featured_company.svg" alt="featured" />
    </div>
  );
}
