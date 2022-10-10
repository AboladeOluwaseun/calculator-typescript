import React from 'react'
import  { Dispatch, SetStateAction } from 'react';
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export interface Props {
   inputs:string[];
   operator:string;
   idRef:React.MutableRefObject<number>
   setId:Dispatcher<number>
   setState:Dispatcher<{inputs:string[];operator:string;id:number}>
   state:{inputs:string[];operator:string;id:number}
   screenValue:string
   setScreenValue:Dispatcher<string>
   switchIndex:number
    setSwitchIndex:Dispatcher<number>
   
}

const Screen = ({inputs, operator, idRef, screenValue, switchIndex, setSwitchIndex }: Props) => {
    
    return (
        <>
           <div className={` bg-theme-1-main-bg ${switchIndex===1 && 'bg-theme-2-scr-bg'} ${switchIndex===2 && 'bg-theme-3-scr-bg'} rounded-lg px-3 relative text-white text-[2rem] ${switchIndex===1 && 'text-theme-2-text'} ${switchIndex===2 && 'text-theme-3-text-yellow'} flex justify-center items-center`}>
               <p className='absolute right-2 '>{screenValue}</p> 
            </div> 
        </>
    )
}

export default Screen
