import React, { useState } from "react";
import cls from "classnames";
interface InputGroupProps{
    className?: string;
    type?:string;
    placeholder?:string;
    value:string;
    error: string | undefined;
    setValue: (str: string) => void;
}

const InputGroup:React.FC<InputGroupProps> = ({
    className= "", 
    type="text", 
    placeholder="",
    error,
    value,
    setValue
}) => {
    return(
        <div className={className}>
            <input type={type}
                placeholder={placeholder}
                className={cls({ "error_color": error })}
                value={value}
                onChange={(e) => setValue(e.target.value)} 
                />
            <p className="error_m">{error}</p>
        </div>
    )
}

export default InputGroup;
