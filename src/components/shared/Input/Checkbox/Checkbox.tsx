import React from "react";
import type { CheckboxProps } from "./Checkbox.types";

const Checkbox = (props: CheckboxProps) => {
  const { name, label, register } = props;

  return (
    <div className="flex flex-row align-center gap-2">
      <input
        {...register(name)}
        type="checkbox"
        className="w-[16px]"
        name={name}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
