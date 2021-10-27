import { shadows } from "../../theme/base";
import { darkColors, lightColors } from "../../theme/colors";
import { TooltipTheme } from "./types";

export const light: TooltipTheme = {
  background:"#55B7FF",
  backgroundColor: "#55B7FF",
  text: darkColors.text,
  boxShadow: shadows.tooltip,
};

export const dark: TooltipTheme = {
  background: "#55B7FF",
  text: lightColors.text,
  boxShadow: shadows.tooltip,
  backgroundColor: "##55B7FF"
};
