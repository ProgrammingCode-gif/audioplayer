import React from 'react'

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}

const FormInput = ({onChange, placeholder, type}: Props) => {
  return (
    <input 
        className='w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md border border-neutral-600 focus:outline-none focus:border-neutral-300 transition-colors duration-200'
        onChange={onChange} type={type} placeholder={placeholder} 
    />
  )
}

export default FormInput