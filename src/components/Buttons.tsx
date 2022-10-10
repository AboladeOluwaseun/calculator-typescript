
import Buttons from '../../src/assets/Data/Data'
import {Props} from './Screen'
// interface Props {
    
// }

const Button = ({inputs, operator, idRef, setState, setId, state, screenValue, setScreenValue}: Props) => {
 
   const handleClick= (button:{name:string,type:string})=>{
    const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/
    const updatedInputs=[...inputs]
    let i_d;
    if(regexp.test(inputs[idRef.current]+button.name)){
      if(inputs[0]!=='' && inputs[1]===''&& idRef.current===0 && operator==='' ){
        updatedInputs[0]=button.name
        setState((prevState)=>({...prevState, inputs:updatedInputs}))
        setScreenValue(updatedInputs[idRef.current])
        console.log('s')
        console.log(updatedInputs, idRef.current, operator)
        return
      }
      
      if(inputs[idRef.current]==='0' && button.name==='0'){
          setState((prevState)=>({...prevState, inputs:updatedInputs}))
          setScreenValue('0')
          // console.log(updatedInputs, idRef.current, operator)
          return
        }
       
        if(inputs[idRef.current]==='0'  && button.name!=='0'){
          updatedInputs[idRef.current]= button.name
          setState((prevState)=>({...prevState, inputs:updatedInputs}))
          setScreenValue(updatedInputs[idRef.current])
          // console.log(updatedInputs, idRef.current, operator)
        }

        if(inputs[idRef.current]!=='' && button.name!=='0'){
          updatedInputs[idRef.current]= inputs[idRef.current]+=button.name
          setState((prevState)=>({...prevState, inputs:updatedInputs}))
          setScreenValue(updatedInputs[idRef.current])
          // console.log(updatedInputs, idRef.current, operator)
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
              operator = '*';
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
        return <div key={index}  onClick={()=>handleClick(button)} className={`bg-white ${(button.name==='RESET'||button.name==='DEL')&&'bg-theme-1-key '} ${button.name==='='&&'bg-theme-1-toggle-key'} rounded-lg my-2 mx-2 text-center text-[1.3rem] p-3 ${button.name==='RESET'||button.name==='='? 'w-[43%]':'w-[4.1rem]'}`}>{button.name}</div>
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
