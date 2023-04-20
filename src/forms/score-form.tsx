import { FC } from "react";
import { Scale } from "../components/molecules/scale";
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "../components/atoms/input";
import { css } from "@emotion/css";

interface ScoreFormProps {
  onSubmit(data: FieldValues): void;
}

export const ScoreForm: FC<ScoreFormProps> = ({ onSubmit }) => {
  const { handleSubmit, register, watch } = useForm();

  const scaleClass = css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const scaleOptions = ["trivial", "minor", "normal", "major"];

  const dueDates = [
    "N/A",
    "end of the month",
    "end of sprint",
    "end of week",
    "tomorrow",
    "today",
    "blocks release",
  ];

  const impactResult = watch("impact");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={scaleClass}>
        <Scale
          name="impact"
          register={register}
          options={scaleOptions}
          labelText="Impact"
        />
        <span className="">{impactResult}</span>
      </div>

      <Scale
        name="effort"
        register={register}
        options={Array.from(Array(6), (_, x) => x.toString())}
        onChange={(val) => console.log(val)}
        labelText="Effort"
      />
      <Scale
        name="dueDate"
        register={register}
        options={dueDates}
        labelText="Due Date"
      />
      <Input name="scoreFormSubmit" type="submit" />
    </form>
  );
};
