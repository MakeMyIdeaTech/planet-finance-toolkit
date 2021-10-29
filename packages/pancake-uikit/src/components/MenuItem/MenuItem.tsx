import React from "react";
import { Link } from "react-router-dom";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { MenuItemProps, MenuItemType } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  type = MenuItemType.INTERNAL_LINK,
  ...props
}) => {
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      {type === MenuItemType.EXTERNAL_LINK && 
        <StyledMenuItem as="a" href={href} target="_blank" rel="noopener noreferrer" $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
          {children}
        </StyledMenuItem>
      } 
      {
        type === MenuItemType.INTERNAL_LINK && (
          <StyledMenuItem as={Link} to={{pathname:`${href}`}} $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
            {children}
          </StyledMenuItem>
        )
      }
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
