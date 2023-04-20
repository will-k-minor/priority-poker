import { css } from "@emotion/css";
import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

// A way to extend the set of props for a standard HMTL Tag (i.e. <input>)
export interface InputProps extends React.ComponentProps<"input"> {
  labelText?: string;
  name: string;
  register?: UseFormRegister<FieldValues>;
}

export const Input: FC<InputProps> = ({
  labelText,
  name,
  register,
  ...inputProps
}) => {
  const styles = {
    container: css`
      display: flex;
      flex-direction: row;
    `,
  };

  return (
    <div className={styles.container}>
      {labelText && <label>{labelText}</label>}
      <input {...inputProps} {...(register && { ...register(name) })}></input>
    </div>
  );
};
