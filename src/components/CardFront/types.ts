import { HTMLProps } from "react";

export interface CardFrontProps extends HTMLProps<HTMLDivElement> {
    number?: string;
    name?: string;
    expiryMonth?: string;
    expiryYear?: string;
}