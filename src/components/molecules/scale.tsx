import { useState, forwardRef } from "react";
import { Input, InputProps } from "../atoms/input";
import { useForm } from "react-hook-form";

interface ScaleProps extends InputProps {
  options: Array<string>;
}

export const Scale = forwardRef(function Scale(scaleProps: ScaleProps, ref) {
  const { options, ...inputProps } = scaleProps;

  return (
    <div>
      <Input
        {...inputProps}
        defaultValue={0}
        max={options.length - 1}
        min={0}
        step={1}
        type="range"
      />
    </div>
  );
});
