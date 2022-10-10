
import Buttons from '../../src/assets/Data/Data'
import {Props} from './Screen'
// interface Props {
    
// }

const Button = ({inputs, operator, idRef, setState, setId, switchIndex, state, screenValue, setScreenValue}: Props) => {
 
   const handleClick= (button:{name:string,type:string})=>{
    const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/
    const updatedInputs=[...inputs]
   
    if(regexp.test(inputs[idRef.current]+button.name)){
      if(inputs[idRef.current]!=='0'   && button.name!=='0'){
        updatedInputs[idRef.current]= button.name
        setState((prevState)=>({...prevState, inputs:updatedInputs}))
        setScreenValue(updatedInputs[idRef.current])
        
      }
      
      if(inputs[idRef.current]==='0' && button.name==='0'){
          setState((prevState)=>({...prevState, inputs:updatedInputs}))
          setScreenValue('0')
          
          return
        }
       
        if(inputs[idRef.current]==='0'  && button.name!=='0'){
          updatedInputs[idRef.current]= button.name
          setState((prevState)=>({...prevState, inputs:updatedInputs}))
          setScreenValue(updatedInputs[idRef.current])
          
        } else{
          updatedInputs[idRef.current]= inputs[idRef.current]+=button.name
          setState((prevState)=>({...prevState, inputs:updatedInputs}))
          setScreenValue(updatedInputs[idRef.current])
         
        }
      }
      if(button.name==='RESET'){
       
        updatedInputs[idRef.current]= '0'
        setState((prevState)=>({...prevState, inputs:updatedInputs}))
        setScreenValue(updatedInputs[idRef.current])
      }
      if(button.name==='DEL'){
       
        updatedInputs[idRef.current] = updatedInputs[idRef.current].slice(0,-1)
        setState((prevState)=>({...prevState, inputs:updatedInputs}))
        setScreenValue(updatedInputs[idRef.current])
      }
      if(button.type==='symbol'){
        idRef.current++
        let newOperator:string
        switch(button.name){
          case '+':
          case '-':
          case '/':
              newOperator = button.name;
              break;
          case 'x':
            newOperator = '*';
      }
      console.log(updatedInputs, idRef.current, operator)
      setState((prevState)=>({...prevState, operator:newOperator}))
      }
      if(button.name==='='){
        let calculation:number=0
        if(operator==='+'){
           calculation = Number(inputs[0]) +  Number(inputs[1])
        }
        if(operator==='-'){
           calculation = Number(inputs[0]) -  Number(inputs[1])
        }
        if(operator==='/'){
           calculation = Number(inputs[0]) /  Number(inputs[1])
        }
        if(operator==='*'){
           calculation = Number(inputs[0]) *  Number(inputs[1])
        }
        setState((prevState)=>({...prevState, operator:''}))
           updatedInputs[1]=''
           updatedInputs[0]=calculation.toString()
           setState((prevState)=>({...prevState, inputs:updatedInputs}))
          setScreenValue(updatedInputs[0])
          idRef.current=0
        console.log(updatedInputs, idRef.current, operator)
      }
   }
 

    const buttonsDiaplay=Buttons.map((button,index)=>{
        return <div key={index}  onClick={()=>handleClick(button)} className={`bg-white  ${switchIndex===2 && ' bg-theme-3-violet-key text-theme-3-text-yellow } }'} ${(button.name==='RESET'||button.name==='DEL') && `${switchIndex===2 && ' bg-theme-3-violet-key-shadow text-white'} ${switchIndex===1 && ' bg-theme-2-key text-white'} ${switchIndex===0 && ' bg-theme-2-key text-white'}`} ${button.name==='='&& `bg-theme-1-toggle-key ${switchIndex===1 && 'bg-theme-2-toggle-key'}`} rounded-lg my-2 mx-2 text-center text-[1.3rem] p-3 ${button.name==='RESET'||button.name==='='? 'w-[43%]':'w-[4.1rem]'} active:scale-50 cursor-pointer`}>{button.name}</div>
    })
    return (
        <>
        <div>
        <div className={`bg-theme-1-main-bg ${switchIndex ===1 && 'bg-theme-2-toggle-bg'} ${switchIndex ===2 && 'bg-theme-3-scr-bg'} flex flex-wrap rounded-lg items-center justify-center  py-2`}>
               {buttonsDiaplay} 
            </div>
        </div>
        </>
    )
}

export default Button
