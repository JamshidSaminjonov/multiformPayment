import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../constants/data";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col w-100 mt-20">
        <div>
          <img className="w-24 mt-10" src={logo} alt="yuq" />
          <p className="font-black text-white text-4xl mt-5">Ilm markazi</p>
          <p className="font-normal text-white text-xl mb-7">
            Rus tili onlayn maktabi
          </p>
        </div>
        <aside className=" flex items-start justify-start flex-row justify-between  bg-white rounded-lg  ">
          {data.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col  items-center  leading-4 p-5 "
              >
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "hsl(0, 0%, 100%)" : "#2E9AF9",
                    background: isActive ? "#2E9AF9" : "transparent",
                    border: isActive ? "none" : "2px solid hsl(229, 24%, 87%)",
                    fontWeight: "900",
                    fontSize: "5rem",
                    padding: "35px 5px 0px 18px",
                    overflow: "hidden",
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "50%",
                  })}
                  to={item.linkTo}
                >
                  {item.id}
                </NavLink>
                <div>
                  <p className="hidden sm:block text-sm text-black font-[500] tracking-wider">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
