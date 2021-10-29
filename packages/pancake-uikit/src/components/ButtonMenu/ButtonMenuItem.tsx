import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: ${({ theme, variant }) => (variant === variants.PRIMARY || variant === variants.GRADIENT ? theme.colors.transparent : theme.colors.transparent)};;
  color: ${({ theme, variant }) => (variant === variants.PRIMARY ? theme.colors.white : theme.colors.white)};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
  background: none !important;
  padding: 10px 20px;
  opacity: 0.4;
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  return <Button as={as} variant={variant} {...props} style={{ padding: "10px 20px"}} />;
};

export default ButtonMenuItem;
