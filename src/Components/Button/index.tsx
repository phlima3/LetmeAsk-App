import { ButtonHTMLAttributes } from "react";
import "../Button/styles.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return <button className="button" {...props}></button>;
}
