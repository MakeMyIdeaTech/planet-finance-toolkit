import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg  width="25" height="23.148" viewBox="0 0 25 23.148" {...props}>
        <defs>
          <linearGradient id="linear-gradient" x1="0.534" y1="0.878" x2="0.032" y2="0.619" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#3037da"/>
            <stop offset="1" stopColor="#55b7ff"/>
          </linearGradient>
          <linearGradient id="linear-gradient-2" x1="1.187" y1="-0.128" x2="0.5" y2="0.728" xlinkHref="#linear-gradient"/>
          <linearGradient id="linear-gradient-3" x1="1" y1="0.225" x2="0.147" y2="0.898" xlinkHref="#linear-gradient"/>
        </defs>
        <g id="Group_496" data-name="Group 496" transform="translate(-93 -181.229)">
          <rect id="Rectangle_822" data-name="Rectangle 822" width="23.148" height="23.148" rx="11.574" transform="translate(93.926 181.229)" opacity="0.4" fill="url(#linear-gradient)"/>
          <rect id="Rectangle_823" data-name="Rectangle 823" width="4.63" height="12.037" rx="2.315" transform="translate(105.037 187.71) rotate(90)" fill="url(#linear-gradient-2)"/>
          <rect id="Rectangle_824" data-name="Rectangle 824" width="4.63" height="12.037" rx="2.315" transform="translate(118 193.266) rotate(90)" fill="url(#linear-gradient-3)"/>
        </g>
      </Svg>
  );
};

export default Icon;
