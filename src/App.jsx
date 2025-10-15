import './App.css'
import Display from './display'
import ButtonContainer from './buttonConatiner'
import { useState } from 'react'

function App() {
  let [calVal,setCalVal] = useState("");
  let onButtonClick =(buttonText)=>{
    if (buttonText==='AC'){
    setCalVal("")
  }else if (buttonText==='='){
    const result = eval(calVal);
    setCalVal(result);
  }else if(buttonText==='C'){
    setCalVal("")
  }else { 
    const newDisplayValue=calVal+buttonText;
    setCalVal(newDisplayValue);
  }
  }
return (
    <div id='Main'>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  )
}
export default App