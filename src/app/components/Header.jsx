"use client";

import CatMobileIcon from "../assets/cat.mobile.svg";
import CatCafeMobileIcon from "../assets/catcafe.mobile.svg";
import CatDesktopIcon from "../assets/cat.desktop.svg";
import CatCafeDesktopIcon from "../assets/catcafe.desktop.svg";
import UpElement from "../assets/up.element.svg";
import BackArrowIcon from "../assets/backarrow.svg";
import { usePathname } from "next/navigation";
import routes from "@/routes";

export default function Header() {
  const isReservationSuccessful =
    usePathname() === routes.reservationSuccessful;
  return (
    <header className="row">
      <div
        className={`d-flex ${
          isReservationSuccessful ? "" : "d-xl-none"
        } justify-content-center  gap-2 py-4 position-relative`}
      >
        {!isReservationSuccessful && (
          <div className="d-flex justify-content-center  back-arrow-icon">
            <BackArrowIcon />
            <span className="d-none d-xl-block">Voltar</span>
          </div>
        )}
        <CatMobileIcon />
        <CatCafeMobileIcon />
      </div>
      {!isReservationSuccessful && (
        <div className="d-none d-xl-flex justify-content-end  w-100 position-relative -mt-38 ">
          <UpElement />
          <div className="position-absolute mt-38 p-4">
            <CatDesktopIcon />
            <CatCafeDesktopIcon />
          </div>
        </div>
      )}
    </header>
  );
}
