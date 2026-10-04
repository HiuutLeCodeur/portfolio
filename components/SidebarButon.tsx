import React from "react";

type SidebarButonProps = {
  icon: string;
};

const SidebarButon = ({ ...props }: SidebarButonProps) => {
  return (
    <div className="flex rounded-full border-amber-50 border-2 bg-amber-50 hover:scale-95 hover:cursor-pointer">
      <img className="p-1" src={props.icon} alt="sidebar" />
    </div>
  );
};

export default SidebarButon;
