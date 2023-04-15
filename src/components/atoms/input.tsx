import { css } from "@emotion/css";

// A way to extend the set of props for a standard HMTL Tag (i.e. <input>)
export interface InputProps extends React.ComponentProps<"input"> {
  labelText?: string;
}

export const Input: React.FunctionComponent<InputProps> = ({
  labelText,
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
      <input {...inputProps}></input>
    </div>
  );
};