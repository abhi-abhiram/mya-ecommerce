import React from 'react'
interface ButtonProps{
    type?:'button'|'submit'|undefined
    children?:React.ReactNode
    onClick?:()=>void
    disabled?:boolean
}
const Button:React.FC<ButtonProps>=(
    {
        type,
        children,
        onClick,
        disabled
    }
)=>{
    return(
        <button 
        onClick={onClick}
        disabled={disabled}
        type={type}
        className='
        bg-[#ED1C94]
        w-[159px]
        h-[49px]
        rounded-full
        '


        >
            {children}
        </button>
    )
}
export default Button