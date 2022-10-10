import React, {  Dispatch, SetStateAction } from 'react'
type Dispatcher<S> = Dispatch<SetStateAction<S>>;
interface Props {
    switchIndex:number
    setSwitchIndex:Dispatcher<number>
}

const Head=({switchIndex, setSwitchIndex}: Props)=> {
    // const [switchIndex, setSwitchIndex]=useState(0)
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
                <p className={`${switchIndex ===1 && 'text-black' } ${switchIndex ===2 && 'text-theme-3-text-yellow' }`}>calc</p>
                <div className={`flex items-end space-x-10 ${switchIndex ===1 && 'text-black'} ${switchIndex ===2 && 'text-theme-3-text-yellow'} `}>
                    <p className={' self-end text-[0.7rem]'}>THEME</p>
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