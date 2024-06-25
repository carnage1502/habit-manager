import React from "react";
import AppIcon from "../AppIcon";

const LogoName = () => {
  const defColor = "#387ADF";
  const bgColorObj = { backgroundColor: defColor };
  return (
    <div className="flex gap-2 items-center sm:justify-start justify-center">
      <span className="text-2xl font-light flex items-center gap-2">
        {/* icon */}
        <div style={bgColorObj} className="p-2 rounded-md">
          <AppIcon color="#ffffff" height="34" width="34" />
        </div>
        {/* app name */}
        <span style={{ color: "#387ADF" }} className="font-bold text-blue-500">
          Daily
        </span>
        <span className="font-light">Dash</span>
      </span>
    </div>
  );
};

export default LogoName;
