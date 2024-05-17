import React from "react";
import Filter from "../components/browse/filter";
import Footer from "../components/widgets/footer";
import RecomEnt from "../components/browse/enterprise";
import BroweHeader from "components/browse/browse";

export default function BrowsePage() {
  return (
    <>
   
      <div className="w-full bg-white-A700">
       
        <BroweHeader className="h-[514px] bg-cover bg-no-repeat pb-[65px] md:h-auto md:pb-5" />

        <RecomEnt className="flex flex-col items-center gap-8 bg-white-A700 pt-[72px] md:pt-5" />

        <Filter className="relative h-[1095px] overflow-auto" />

        <Footer className="flex flex-col items-center gap-20 bg-gray-900 py-10 md:gap-[60px] sm:gap-10 sm:py-5" />
      </div>
    </>
  );
}
