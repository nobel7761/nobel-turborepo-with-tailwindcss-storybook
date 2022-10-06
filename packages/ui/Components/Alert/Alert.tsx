import * as React from "react";
import { AlertProps } from "./Alert.types";

// try husky 2
export const Alert = (props: AlertProps) => {
  return (
    <div
      className={`${props.textColor} ${props.backgroundColor} ${props.className}`}
    >
      {props.text}
    </div>
  );
};
