import React, { ComponentProps, ReactNode } from "react";
import { Icon, IconProps } from "@iconify/react";
import { RootProps } from "./TextInput";

function ButtonSubmit(props: RootProps) {
  return (
    <button
      className={`inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-md ${props.className}  text-white bg-teal-500 transition-colors hover:bg-teal-300 focus:ring-2 focus:ring-white`}
      type="submit"
    >
      {props.children}
    </button>
  );
}

interface ButtonIndexProsp extends RootProps {
  isModelcar: boolean;
}

function ButtonsIndex({ isModelcar, children }: ButtonIndexProsp) {
  return (
    <button
      className={
        isModelcar
          ? "-mb-px border-b border-current p-4 text-cyan-500"
          : "-mb-px border-b border- p-4 hover:text-cyan-500"
      }
    >
      {children}
    </button>
  );
}

interface TextButtonProps {
  text: string;
  className?: string;
}

function ButtonText({ text, className }: TextButtonProps) {
  return (
    <>
      <span className={`text-lg font-medium mx-1 px-2 ${className} `}>
        {" "}
        {text}{" "}
      </span>
    </>
  );
}

interface ButtonIconProps extends IconProps {}

function ButtonIcon(props: ButtonIconProps) {
  return <Icon {...props} />;
}

export const Buttons = {
  Index: ButtonsIndex,
  Icon: ButtonIcon,
  Text: ButtonText,
  Submit: ButtonSubmit,
};
