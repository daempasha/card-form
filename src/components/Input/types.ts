import { UseFormRegister, FieldValues } from "react-hook-form";

interface Validation {
    [key: string]: any;
    required?: boolean;
    pattern?: {
        value: RegExp
        message: string;
    } | RegExp
}

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    register: UseFormRegister<FieldValues>
    isError?: boolean;
    validation?: Validation
};