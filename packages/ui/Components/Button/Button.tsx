import Link from "next/link";
import { CSSProperties, HTMLAttributes, ReactElement } from "react";
// import { AiFillPlusCircle } from 'react-icons/ai'

export const Button = ({
  text = "Button",
  // icon = <AiFillPlusCircle className='h-4 w-4 text-white mr-4' />,
  padding = "px-6 py-1",
  disable = false,
  colors = `text-white ${disable ? "bg-primary/70" : "bg-primary"}`,
  margin = "",
  className = "",
  type = "button",
  href = null,
  children,
  style,
  onClick,
}: Partial<ButtonType>) => {
  const cls = `${colors} ${padding} ${margin}  rounded-md flex justify-center items-center gap-1 ${className}`;
  return (
    // if don't want a icon pass icon prop as null, if you want a any other icon pass that. Default icon is plus circle
    // Default text color is also white and bg color is primary color, we can pass any class we want
    // if it's need to redirect to a link just pass the link as href props
    href ? (
      <Link href={href}>
        <a className={cls}>
          {/* {icon} */}
          {text}
        </a>
      </Link>
    ) : (
      <button
        onClick={onClick}
        className={cls}
        type={type}
        disabled={disable}
        style={style}
      >
        {/* {icon} */}
        {text}
        {children}
      </button>
    )
  );
};

interface ButtonType extends HTMLAttributes<ButtonType> {
  text: string;
  icon?: ReactElement | null;
  padding?: string;
  colors: string;
  margin?: string;
  className?: string;
  href?: string | null;
  disable: any;
  children: ReactElement | null;
  type?: "submit" | "reset" | "button";
  style?: CSSProperties;
  onClick: () => void;
}
