import { useState } from "react"
import { Input, InputProps } from "../atoms/input"

export interface ScaleProps extends InputProps {
    options: Array<string>
}

export const Scale: React.FunctionComponent<ScaleProps> = ({
    options,
    ...inputProps
}) => {

    const [currentOption, setCurrentOption] = useState<string>(options[0]);

    return (
        <div>
            <Input 
                {...inputProps} 
                type="range" 
                min={0} 
                max={options.length - 1}
                defaultValue={0}
                onChange={(e) => setCurrentOption(options[e.target.value])}/>
            <p>{currentOption}</p>
        </div>
    )
}