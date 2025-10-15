import './App.css'

function ButtonContainer({onButtonClick}){
    let buttonName=['AC','C','.','%','+','1','2','3','-','4','5','6','/','7','8','9','*','0','00','='];
    return(
        <div>
        {buttonName.map((buttonName)=>(
            <button onClick={()=>onButtonClick(buttonName)} className='Button-Main'>{buttonName}</button>
        ))}
      {/* <button id='white' onClick={onButtonClick}>C</button>
      <button onClick={onButtonClick}>.</button>
      <button id='method' onClick={onButtonClick}>%</button>
      <button id='method' onClick={onButtonClick}>+</button><br />
      <button onClick={()=>onButtonClick()}>1</button>
      <button onClick={onButtonClick}>2</button>
      <button onClick={onButtonClick}>3</button>
      <button id='method'>-</button><br />
      <button onClick={onButtonClick}>4</button>
      <button onClick={onButtonClick}>5</button>
      <button onClick={onButtonClick}>6</button>
      <button id='method' onClick={onButtonClick}>/</button><br />
      <button onClick={onButtonClick}>7</button>
      <button onClick={onButtonClick}>8</button>
      <button onClick={onButtonClick}>9</button>
      <button id='method' onClick={onButtonClick}>*</button><br />
      <button onClick={onButtonClick}>0</button>
      <button onClick={onButtonClick}>00</button>
      <button className='equal' onClick={onButtonClick}>=</button> */}
      
      </div>
      
    )
}
export default ButtonContainer