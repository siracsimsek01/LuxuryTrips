export const PrimaryButton = ({ children, onClick, className }) => {
    return (
        <button className={`uppercase text-black text-base font-normal tracking-wide rounded-full border border-white ${className}`} onClick={onClick}>{children}</button>
    )
}