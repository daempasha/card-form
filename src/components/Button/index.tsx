import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ className, ...buttonProps }) => {
    return (
        <button className={`text-white my-5 w-full rounded-md p-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-400 transition-all ease-out block ${className}`} {...buttonProps} />
    )
}

export default Button;