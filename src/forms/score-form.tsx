import { FC } from "react";
import { Scale } from "../components/molecules/scale";
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "../components/atoms/input";

export const ScoreForm: FC = () => {

    const { handleSubmit, register } = useForm();

    const scaleOptions = [
        "trivial", 
        "minor", 
        "normal", 
        "major",
      ];
    
      const dueDates = [
        "N/A",
        "end of the month",
        "end of sprint",
        "end of week",
        "tomorrow",
        "today",
        "blocks release"
      ]

    const onSubmit = (data:FieldValues) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Scale name="impact"
            register={register} 
            options={scaleOptions} 
            labelText='Impact' 
            />
            <Scale name="effort"
            register={register}
            options={Array.from(Array(6), (_,x) => x.toString())} 
            labelText='Effort' 
            />
            <Scale name="dueDate"
            register={register}
            options={dueDates} 
            labelText='Due Date' 
            />
            <Input 
            register={register}
            name="scoreFormSubmit"
            type='submit' />
      </form>
    )
}