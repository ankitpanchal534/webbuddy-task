import React from "react";
interface ITooltip {
  content: React.ReactNode | React.ReactElement;
  children?: React.ReactNode;
}
export const Tooltip = ({ content, children }: ITooltip) => {
  return (
    <div className="relative flex flex-row items-center group">
      {children}
      <div className="bottom-full mb-2 hidden group-hover:block whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
        {content}
      </div>
    </div>
  );
};
