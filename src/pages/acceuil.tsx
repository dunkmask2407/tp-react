import React from "react";
import AcceuilHeader from "../components/Home/home";
import Affiche from "../components/display";
import Banniere from "../components/Home/banniere";
import Categorie from "../components/Home/categorie";
import Lastjob from "../components/widgets/lastjob";
import Footer from "../components/widgets/footer";
import Recomjob from "../components/Home/job";

export default function Home() {
  return (
    <>
      <div className="w-full bg-white-A700">

        <AcceuilHeader className="relative h-[794px] bg-gray-50" />

        <Banniere className="flex flex-col items-center justify-center gap-[37px] bg-white-A700 py-12 md:py-5" />

        <Categorie className="flex flex-col items-center gap-[41px] bg-white-A700 pt-[72px] md:pt-5" />

        <Affiche className="flex items-center justify-center bg-white-A700 py-[72px] md:py-5" />

        <Recomjob className="flex flex-col items-center gap-[41px] bg-white-A700 pb-[72px] md:pb-5" />

        <Lastjob className="relative h-[877px] bg-cover bg-no-repeat pt-[72px] md:pt-5" />

        <Footer className="flex flex-col items-center gap-20 bg-gray-900 py-10 md:gap-[60px] sm:gap-10 sm:py-5" />
      </div>
    </>
  );
}
