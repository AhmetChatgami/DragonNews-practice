import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="justify-center items-center flex-col flex my-5">
      <img src={logo} alt="" />

      <div className="py-3 flex-1 text-center">
        <p className="text-accent">Journalism With Fear & Dor</p>

        <p className="text-xl">{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
      </div>
    </div>
  );
};

export default Header;
