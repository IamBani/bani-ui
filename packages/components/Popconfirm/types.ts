import type { IconProps } from "../Icon/types";
import type { ButtonType } from "../Button/types";

export interface PopconfirmProps {
  title: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonType?: ButtonType;
  cancelButtonType?: ButtonType;
  icon?: IconProps["icon"];
  iconColor?: IconProps["color"];
  hideIcon?: boolean;
  hideAfter?: number;
  width?: number | string;
}

export interface PopconfirmEmits {
  (e: "confirm", value: MouseEvent): void;
  (e: "cancel", value: MouseEvent): void;
}
