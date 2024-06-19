'use client'

export const PrimaryButton = ({ children, onClick, className }) => {
    return (
        <button className={`uppercase text-black text-base font-normal tracking-wide rounded-full border border-white px-4 py-2 ${className}`} onClick={onClick}>{children}</button>
    )
}



const Buttons = ({ type, ...props}) => {
    switch(type) {
        case 'primary':
            return <PrimaryButton {...props} />
        default:
            return null;
    }
}

export default Buttons;