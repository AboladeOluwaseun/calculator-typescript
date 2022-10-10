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
   
}

const Screen = ({inputs, operator, idRef, screenValue}: Props) => {
    
    return (
        <>
           <div className=' bg-theme-1-main-bg rounded-lg px-3 relative text-white text-[2rem] flex justify-center items-center'>
               <p className='absolute right-2 '>{screenValue}</p> 
            </div> 
        </>
    )
}

export default Screen
