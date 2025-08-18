import React from 'react'

type Props = {
    // callback: () => void;
    text?: string;
    icon: React.ReactNode;
}

const SocialMediaBtn = ({ text, icon}: Props) => {
    console.log(!!text);
    
  return (
    <button className={`cursor-pointer w-full flex items-center ${!text ? 'justify-center py-4 px-2' : 'py-3 px-4'} gap-2 bg-[#1a1a1a] text-white rounded-md hover:bg-[#333] transition-colors duration-200`}>
        <div className={text ? '' : 'flex items-center justify-center text-center'}>
            {icon}
        </div>
        {text && 
            <p className='text-center w-full'>{text}</p>
        }
    </button>
  )
}

export default SocialMediaBtn