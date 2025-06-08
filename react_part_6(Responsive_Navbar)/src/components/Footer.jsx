import React from "react";

// api
import FooterContact from "../API/FoterContact.json";

// icons
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
export default function Footer() {
  const iconMap = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <>
      <footer className="footer-section">
        <div className="container box-inner">
          {FooterContact.map((curdata) => {
            const { icon, title, details } = curdata;
            return (
              <div className="footer-contract">
                <div className="icon">{iconMap[icon]}</div>
                <div className="footer-contract-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </footer>
    </>
  );
}
