const FormLabel: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({ children }) => {
    return (<p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">{children}</p>)
}

export default FormLabel;