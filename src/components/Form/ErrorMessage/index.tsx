
export const ErrorMessage: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({ children }) => {
    return (<p className="text-sm text-red-600">{children}</p>)
}