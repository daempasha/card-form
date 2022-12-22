import { HTMLProps } from "react";
import { UseFormWatch, FieldValues } from "react-hook-form"

export interface CardFrontProps extends HTMLProps<HTMLDivElement> {
    watch: UseFormWatch<FieldValues>;
}