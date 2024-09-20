"use client";
import React from "react";
import style from "./navbar.module.css";
import useNavbar from "./navbar.hook";
import { MENU_LIST } from "./navbar.utils";

const Navbar = () => {
  const { handleMenu } = useNavbar();
  return (
    <div className={style.container}>
      <div className="list">
        <div>
          <div onClick={() => handleMenu("/")}>Logo</div>
          {MENU_LIST.map((res, index) => (
            <div key={index} onClick={() => handleMenu(res.route)}>
              {res.label}
            </div>
          ))}
        </div>
        <div>*</div>
      </div>
    </div>
  );
};

export default Navbar;
