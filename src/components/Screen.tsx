import React from 'react'

export interface Props {
    screenDisplay:string;
    setScreenDisplay:Function
}

const Screen = (props: Props) => {
    
    return (
        <>
           <div className=' bg-theme-1-main-bg rounded-lg px-3 relative text-white text-[2rem] flex justify-center items-center'>
               <p className='absolute right-2 '>{props.screenDisplay}</p> 
            </div> 
        </>
    )
}

export default Screen
