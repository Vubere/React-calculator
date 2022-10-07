import { useContext } from "react";
import { appState } from "../../App";

export default function Display() {
  const { calculatorState } = useContext(appState);
  const curVal = calculatorState.curVal=="Math Error"?calculatorState.curVal:commaAdder(calculatorState.curVal)
  const prevVal = commaAdder(calculatorState.prevVal)

  return (
    <>
      <div className="display">
        <div className="prevValue">{prevVal}</div>
        <div className="curValue">{curVal}</div>
        <div className="operand">{calculatorState.operand.type}</div>
      </div>
    </>
  );
}

function commaAdder(digit){
  if(digit.includes('.')){
    let i = digit.indexOf(".") ;
    return commaAdder(digit.slice(0, i))+digit.slice(i, digit.length)
  }
  if(digit.length<4) return digit
  return commaAdder(digit.slice(0, digit.length-3)) + ',' + digit.slice(digit.length-3, digit.length) 
}