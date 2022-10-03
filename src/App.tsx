import './App.css';

function App() {
  const name:string ='seun'
  const age:number =19
  const isOnline:boolean = true

  const getName= (name:string):number=>{
    if (name='pedro'){
      return 20
    }else{
      return 10
    }
  }
  
  return (
    <div className="App">
      {name}
      {getName('1')}
    </div>
  );
}

export default App;
