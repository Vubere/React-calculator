import Display from "./components/display";
import Buttons from "./components/buttons";
import "./styles/index.css";
import { createContext, useReducer } from "react";

import appReducer from "./reducers/appReducer";

export const appState = createContext();

export const initialState = {
  curVal: '',
  curValType:'inputed',
  prevVal: '',
  operand: {
    active:false,
    type: ''
  },
  decimal: false,
  result: '',
};


function App() {
  const [calculatorState, dispatch] = useReducer(appReducer, initialState);
  return (
    <appState.Provider value={{calculatorState, dispatch: dispatch}}>
      <div className="App">
        <div className="calculator">
          <Display />
          <Buttons />
        </div>
      </div>
    </appState.Provider>
  );
}

export default App;
