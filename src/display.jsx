import './App.css'

function Display({displayValue}){
    return (
        <input id='Text-box' type="text" value={displayValue} readOnly/>        
    )
}
export default Display;