"use client";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export type ComponentRef = {
  //   clearAndFocus: () => void;
  value: any;
  scrollIntoView?: () => void;
};
type FieldProps = {
  type: "text" | "search";
  ref?: any;
};

const Input: React.FC<React.PropsWithChildren<FieldProps>> = forwardRef<
  ComponentRef,
  FieldProps
>(({ type = "text" }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      value: inputRef.current!.value,
      //   scrollIntoView: () => {
      //     inputRef.current?.scrollIntoView();
      //   },
      // inputRef.current;
      //   clearAndFocus: () => {
      //     if (inputRef.current) {
      //     }
      //   },
    };
  });

  const clear = () => {
    inputRef.current!.value = "";
  };
  
  return (
    <div
      className={`border inline-flex px-2 group rounded-md focus-within:border-zinc-400 transition-all duration-150`}
    >
      <input type={type} className="outline-none " ref={inputRef} />

      <span
        className="p-1.5 opacity-0 group-focus-within:opacity-100"
        onClick={() => clear()}
      >
        X
      </span>
    </div>
  );
});

export default Input;
