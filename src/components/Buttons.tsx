import Buttons from '../../src/assets/Data/Data'
import {Props} from './Screen'
// interface Props {
    
// }

const Button = (props: Props) => {
    const handleClick=(button:{name:string, type:string})=>{
        if(props.screenDisplay.includes('.')&&button.name==='.'){
            return
        }
        if(props.screenDisplay==='0' && button.name=== '0'){
            props.setScreenDisplay('0')
        }
        if (props.screenDisplay==='0' && button.type==='symbol'){
            props.setScreenDisplay('0')
        }
        if(props.screenDisplay==='0' && button.type=== 'number'){
            props.setScreenDisplay(button.name)
            localStorage.setItem('screenValue', button.name)
        }
        if( props.screenDisplay!=='0' && button.type==='number'|| button.type==='dot'){
            props.setScreenDisplay(props.screenDisplay+button.name)
            localStorage.setItem('screenValue', props.screenDisplay)
        }
        if(button.type==='symbol'){
            localStorage.setItem('operation',button.name )
        }
        if(localStorage.getItem('screenValue') && button.type==='number'){
            const screenValue=Number(localStorage.getItem('screenValue'))
            const operation = localStorage.getItem('operation') 
            if(operation==='+'){
                const totalScreenValueNumber= props.setScreenDisplay(screenValue + Number(button.name) )
                const screenValueString=totalScreenValueNumber.toString()
                console.log(screenValueString)
               
            }
        }
        localStorage.clear()
    }
    

    const buttonsDiaplay=Buttons.map((button,index)=>{
        return <div key={index}  onClick={()=>{handleClick(button)}} className={`bg-white ${(button.name==='RESET'||button.name==='DEL')&&'bg-theme-1-key '} ${button.name==='='&&'bg-theme-1-toggle-key'} rounded-lg my-2 mx-2 text-center text-[1.3rem] p-3 ${button.name==='RESET'||button.name==='='? 'w-[43%]':'w-[4.1rem]'}`}>{button.name}</div>
    })
    return (
        <>
        <div>
        <div className='bg-theme-1-main-bg flex flex-wrap rounded-lg items-center justify-center  py-2'>
               {buttonsDiaplay} 
            </div>

        </div>
       
        
           
        </>
    )
}

export default Button
