"use client";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { accordionData } from "@/data/data";
const Accordion = () => {
  return (
    <section className="acc_container">
      <div className="acc_container-row1">
        <p>
          Empower your employees to grow, fill critical skill gaps, and feel
          connected.
        </p>
      </div>
      <div className="acc_container-main">
        <div className="acc_container-main-left">
          {accordionData.map((data) => (
            <div key={data.id}>
              <div>
                <span>{data.heading}</span>
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
              <div></div>
            </div>
          ))}
        </div>

        <div className="acc_container-main-right">
          <Image
          className="acc_container-main-right-img"
            src="/images/p1.png"
            alt="screenshot"
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Accordion;
