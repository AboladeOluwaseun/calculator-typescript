import React, {  useState } from 'react'

interface Props {
    
}

const Head=({}: Props)=> {
    const [switchIndex, setSwitchIndex]=useState(0)
    const switchesArray:string[]=['one', 'two', 'three']

    const toggleButton= (index:number):void=>{
        if (index<switchesArray.length-1){
            setSwitchIndex(index+1)
        }
        if(index===switchesArray.length-1){
            setSwitchIndex(0)
        }
    }
    const switches=switchesArray.map((btn, index)=>{
        return <input key={index} onClick={()=>{toggleButton(index)}} className={` bg-theme-1-toggle-key  ${switchIndex===index ? 'opacity-100':'opacity-0'}  hover:cursor-pointer`} type="radio" name='toggle' id='one' />

    })
   
    return (
        <>
            <div className=' text-white flex items-end justify-between'>
                <p className=''>calc</p>
                <div className='flex items-end space-x-10 '>
                    <p className=' self-end text-[0.7rem]'>THEME</p>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-[0.7rem] space-x-2 flex justify-between'>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </div>
                        <div className=' bg-theme-1-main-bg h-[15px]  flex rounded-lg'>
                            {switches}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Head