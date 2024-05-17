import React from "react";
import Avantages from "../components/widgets/avantages";
import Lastjob from "../components/widgets/lastjob";
import Footer from "../components/widgets/footer";
import ProfileEnt from "../components/profil/status";
import ProfileEnt1 from "../components/profil/info";
import ProfileHeader from "../components/profil/profil";

export default function ProfilPage() {
  return (
    <>
      <div className="w-full bg-white-A700">

        <ProfileHeader className="flex flex-col items-center gap-11 bg-gray-50" />

        <ProfileEnt className="flex flex-col items-center gap-[75px] bg-white-A700 pt-[70px] md:gap-14 md:pt-5 sm:gap-[37px]" />

        <ProfileEnt1 className="mt-[7px] flex flex-col items-center rounded-lg bg-white-A700 px-14 pt-[70px] md:px-5 md:pt-5" />

        <Avantages className="mt-[7px] flex flex-col items-center justify-center gap-[25px] bg-white-A700 py-[70px] md:py-5" />

        <Lastjob
          latestjobs="Open Jobs"
          className="relative h-[877px] bg-cover bg-no-repeat pt-[72px] md:pt-5"
        />

        <Footer className="flex flex-col items-center gap-20 bg-gray-900 py-10 md:gap-[60px] sm:gap-10 sm:py-5" />
      </div>
    </>
  );
}
