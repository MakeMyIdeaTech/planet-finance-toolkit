import { BoxProps } from "../Box";
import { DropdownMenuItems } from "../DropdownMenu/types";
import { MenuItemType } from "../MenuItem/types";

export type MenuItemsType = {
  label: string;
  href: string;
  icon?: string;
  items?: DropdownMenuItems[];
  showOnMobile?: boolean;
  showItemsOnMobile?: boolean;
  type?: MenuItemType;
};

export interface MenuItemsProps extends BoxProps {
  items: MenuItemsType[];
  activeItem?: string;
  activeSubItem?: string;
}
