import './App.css';
import Head from './components/Head';
import Screen from './components/Screen';
import Button from './components/Buttons';
import { useState, useRef } from 'react';
function App() {
 const [state, setState]=useState<{inputs:string[];operator:string;id:number}>({inputs:['0','0'],operator:'',id:0})
 const [screenValue, setScrenValue]=useState<string>('0') 
 const [id, setId]=useState<number>(0) 
 const idRef=useRef(0)

 if(state.inputs[id]===''){
  const updatedInputs=[...state.inputs]
  updatedInputs[id]= '0'
  setState((prevState)=>({...prevState, inputs:updatedInputs}))

}
  return (
    <div className=' bg-theme-1-toggle-bg w-full flex justify-center min-h-[100vh]  items-center'>
      <div className='max-w-[90%] md:max-w-[60%] lmd:max-w-[30%] mx-auto grid grid-rows-layout gap-5 '>
     <Head/>
     <Screen idRef={idRef} setId={setId} screenValue={screenValue} setScreenValue={setScrenValue} setState={setState} state={state} inputs={state.inputs} operator={state.operator} />
     <Button idRef={idRef} setId={setId} screenValue={screenValue} setScreenValue={setScrenValue} setState={setState} state={state} inputs={state.inputs} operator={state.operator}/>
     </div>
    </div>
     
    
    
  );
}

export default App;
