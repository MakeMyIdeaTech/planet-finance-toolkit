import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white"
  },
  [variants.GRADIENT]: {
    backgroundColor: "primary",
    color: "white",
    background: "linear-gradient(270deg, rgb(48, 55, 218) 0%, rgb(85, 183, 255) 100%) 0% 0% no-repeat padding-box padding-box"
  },
  [variants.SECONDARY]: {
    backgroundColor: "#00000033",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    backdropFilter: "blur(50px)",
    color: "primary",
    ":disabled": {
      backgroundColor: "#000",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
    
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
};
