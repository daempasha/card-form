import { HTMLProps } from "react";
import { UseFormWatch, FieldValues } from "react-hook-form"

export interface CardBackProps extends HTMLProps<HTMLDivElement> {
    cvc?: string
    watch: UseFormWatch<FieldValues>
}