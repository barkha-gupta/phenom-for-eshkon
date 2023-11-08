"use client";
import Image from "next/image";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Hero = ({ role }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <section className="hero_container">
      <div className="hero_container-left">
        <div
          className="hero-dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered && <Dropdown />}
          {!isHovered && (
            <button className="hero-dropdown-container-btn">
              <span>
                <div>
                  <Image
                    className="dropdown-container-btn-span1-img"
                    src={role.imageUrl}
                    alt="role"
                    width={40}
                    height={40}
                  />
                </div>
              </span>
              <span> {role.title} </span>
              <span>
              <MdOutlineKeyboardArrowDown size={25}/>
              </span>
            </button>
          )}
        </div>
        <p className="hero-title">
          Phenom for <span className="colored-text">{role.title}</span>
        </p>
        <p className="short-des">{role.short_des}</p>
        <button className="book-btn"> Book a demo</button>
      </div>
      <div className="hero_container-right">
        <Image
          className="hero_container-right-img"
          src={role.imageUrl}
          alt="image used in button above"
          width={200}
          height={200}
        />
      </div>
      <div className="hero_container-bottom">
        <p className="long-des">{role.long_des}</p>
      </div>
    </section>
  );
};

export default Hero;
