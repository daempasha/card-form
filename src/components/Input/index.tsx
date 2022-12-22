import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ className, ...inputProps }) => {
    return (
        <input className={`border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400 ${className}`} {...inputProps} />
    )
}

export default Input;