import { useContext } from "react";
import { appState } from "../../App";

export default function Button() {
  const data = useContext(appState);

  return (
    <div className="controls">
      <div className="del">
        <button
          className="all"
          onClick={() =>
            data.dispatch({
              type: "removeAll",
            })
          }
        >
          ac
        </button>
        <button
          className="delOne"
          onClick={() =>
            data.dispatch({
              type: "deleteCurValDigit",
            })
          }
        >
          del
        </button>
      </div>
      <div className="numerals">
        <button
          type="button"
          className="number one"
          onClick={() =>
            data.dispatch({
              type: "addCurValDigit",
              payload: "1",
            })
          }
        >
          1
        </button>
        <button
          type="button"
          className="number two"
          onClick={() =>
            data.dispatch({
              type: "addCurValDigit",
              payload: "2",
            })
          }
        >
          2
        </button>
        <button
          type="button"
          className="number three"
          onClick={() =>
            data.dispatch({
              type: "addCurValDigit",
              payload: "3",
            })
          }
        >
          3
        </button>
        <button
          className="operands add"
          onClick={() =>
            data.dispatch({
              type: "operandAdd",
              payload: "+",
            })
          }
        >
          +
        </button>
        <button
          type="button"
          className="number four"
          onClick={() =>
            data.dispatch({
              type: "addCurValDigit",
              payload: "4",
            })
          }
        >
          4
        </button>
        <button
          type="button"
          className="number five"
          onClick={() =>
            data.dispatch({
              type: "addCurValDigit",
              payload: "5",
            })
          }
        >
          5
        </button>
        <button
          type="button"
          className="number six"
          onClick={() =>
            data.dispatch({
              type: "addCurValDigit",
              payload: "6",
            })
          }
        >
          6
        </button>
        <button
          className="operands subtract"
          onClick={() =>
            data.dispatch({
              type: "operandAdd",
              payload: "-",
            })
          }
        >
          -
        </button>
        <button
          type="button"
          className="number seven"
          onClick={() =>
            data.dispatch({
              type: "addCurValDigit",
              payload: "7",
            })
          }
        >
          7
        </button>
        <button
          type="button"
          className="number eight"
          onClick={() =>
            data.dispatch({
              type: "addCurValDigit",
              payload: "8",
            })
          }
        >
          8
        </button>
        <button
          type="button"
          className="number nine"
          onClick={() =>
            data.dispatch({
              type: "addCurValDigit",
              payload: "9",
            })
          }
        >
          9
        </button>
        <button
          className="operands multiply"
          onClick={() =>
            data.dispatch({
              type: "operandAdd",
              payload: "x",
            })
          }
        >
          x
        </button>
        <button
          className="eval"
          onClick={() => data.dispatch({ type: "evaluate" })}
        >
          =
        </button>
        <button
          type="button"
          className="number zero"
          onClick={() =>
            data.dispatch({
              type: "addCurValDigit",
              payload: "0",
            })
          }
        >
          0
        </button>
        <button
          className="point"
          onClick={() =>
            data.dispatch({
              type: "decimalAdded",
              payload: ".",
            })
          }
        >
          .
        </button>
        <button
          className="operands divide"
          onClick={() =>
            data.dispatch({
              type: "operandAdd",
              payload: "÷",
            })
          }
        >
          ÷
        </button>
      </div>
    </div>
  );
}
