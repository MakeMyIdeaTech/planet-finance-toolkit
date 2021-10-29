import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 25">
      <defs>
        <linearGradient id="linear-gradient" x1="0.914" y1="0.747" x2="0.315" y2="1.861" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#55b7ff"/>
          <stop offset="1" stopColor="#3037da"/>
        </linearGradient>
      </defs>
      <g id="Group_497" data-name="Group 497" transform="translate(30) rotate(90)">
        <rect id="Rectangle_1525" data-name="Rectangle 1525" width="30" height="7" rx="3.5" transform="translate(0 30) rotate(-90)" opacity="0.4" fill="url(#linear-gradient)"/>
        <rect id="Rectangle_1526" data-name="Rectangle 1526" width="15.6" height="7" rx="3.5" transform="translate(18 30) rotate(-90)" fill="url(#linear-gradient)"/>
        <rect id="Rectangle_1527" data-name="Rectangle 1527" width="26.4" height="7" rx="3.5" transform="translate(9 30) rotate(-90)" fill="url(#linear-gradient)"/>
      </g>
    </Svg>
  );
};

export default Icon;