import './App.css';
import Head from './components/Head';
import Screen from './components/Screen';
import Button from './components/Buttons';
import { useState } from 'react';
function App() {
 const [screenDisplay, setScreenDisplay]=useState<string>('0')
  return (
    <div className=' bg-theme-1-toggle-bg w-full flex justify-center min-h-[100vh]  items-center'>
      <div className='max-w-[90%] md:max-w-[60%] lmd:max-w-[30%] mx-auto grid grid-rows-layout gap-5 '>
     <Head/>
     <Screen screenDisplay={screenDisplay} setScreenDisplay={setScreenDisplay}/>
     <Button screenDisplay={screenDisplay} setScreenDisplay={setScreenDisplay}/>
     </div>
    </div>
     
    
    
  );
}

export default App;
