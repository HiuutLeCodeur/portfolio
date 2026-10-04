"use client";
import React from "react";

type NetworkLinkProps = {
  logo: string;
  link: string;
};

const NetworkLink = ({ ...props }: NetworkLinkProps) => {
  return (
    <div
      className="cursor-pointer hover:scale-95 ml-7"
      onClick={() => window.open(props.link, "_blank", "noopener,noreferrer")}
    >
      <img className="w-10" src={props.logo} alt="logo" />
    </div>
  );
};

export default NetworkLink;
