import React from "react";
import { socialLinks } from "../../data";
const SocialLinks = ({ href, icon, itemClass }) => {
  return (
    <li
      style={{
        paddingTop: "10px",
      }}
    >
      <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLinks;
