import { FC, useState, forwardRef } from "react"
import { Input, InputProps } from "../atoms/input"

export interface ScaleProps extends InputProps {
    options: Array<string>
}

export const Scale = forwardRef(function Scale(scaleProps: ScaleProps, ref) {
    const { options, ...inputProps } = scaleProps;

    const [currentOption, setCurrentOption] = useState<string>(options[0]);

    return (
        <div>
            <Input 
                {...inputProps} 
                defaultValue={0}
                max={options.length - 1}
                min={0}
                onChange={(e) => setCurrentOption(options[parseInt(e.target.value)])}
                type="range" 
                />
            <p>{currentOption}</p>
        </div>
    )
});