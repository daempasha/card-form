import { UseFormRegister, FieldValues } from "react-hook-form";

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    register: UseFormRegister<FieldValues>
}