import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="25" height="19" viewBox="0 0 25 19" {...props}>
      <defs>
        <linearGradient id="linear-gradient" x1="0.244" y1="0.38" x2="0.571" y2="0.895" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#55b7ff"/>
          <stop offset="1" stopColor="#3037da"/>
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="0.086" y1="0.78" x2="0.57" y2="1" xlinkHref="#linear-gradient"/>
      </defs>
      <g id="Group_495" data-name="Group 495" transform="translate(-5 -106)">
        <path id="Polygon_108" data-name="Polygon 108" d="M5.639,1.457a1,1,0,0,1,1.722,0l4.748,8.034A1,1,0,0,1,11.248,11h-9.5A1,1,0,0,1,.892,9.491Z" transform="translate(17 112)" opacity="0.4" fill="url(#linear-gradient)"/>
        <rect id="Rectangle_773" data-name="Rectangle 773" width="5.5" height="5.5" rx="2.75" transform="translate(17.5 106)" fill="url(#linear-gradient-2)"/>
        <path id="Polygon_107" data-name="Polygon 107" d="M8.627,1.562a1,1,0,0,1,1.746,0l7.8,13.95A1,1,0,0,1,17.3,17H1.7a1,1,0,0,1-.873-1.488Z" transform="translate(5 108)" fill="url(#linear-gradient-2)"/>
      </g>
    </Svg>
  );
};

export default Icon;