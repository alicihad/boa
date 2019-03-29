import * as React from "react";
import { ComponentBaseProps, ComponentBase } from "@kuveytturk/boa-base";

export interface MenuItemProps extends ComponentBaseProps {
  allProperties?: object;
  checked?: boolean;
  classes?: object;
  disabled?: boolean;
  isAddedDrawer?: boolean;
  leftIcon?: React.ReactElement<any>;
  leftIconStyle?: object;
  onTouchTap?(event: object): void;
  primaryText?: React.ReactNode;
  primaryTextPadding?: any;
  rightIcon?: React.ReactElement<any>;
  rightIconStyle?: object;
  secondaryText?: React.ReactNode;
  value?: any;
}

export default class MenuItem extends ComponentBase<MenuItemProps> {
  handleClose(): any;
  onTouchTap(event: any): any;
}
