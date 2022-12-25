
const LinkButton: React.FC<React.HTMLProps<HTMLButtonElement>> = ({ ...buttonProps }) => {
    return (
        <button {...buttonProps} className="text-indigo-600 underline underline-offset-4" type="button">Fill form</button>

    )
}

export default LinkButton;