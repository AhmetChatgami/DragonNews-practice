import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="justify-center items-center flex-col flex">
      <img src={logo} alt="" />

      <div className="py-3">
        <p className="text-accent">Journalism With Fear & Dor</p>

        <p>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
      </div>
    </div>
  );
};

export default Header;
