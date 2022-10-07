import { initialState } from "../App";

const appReducer = (state, action) => {
  switch (action?.type) {
    case "addCurValDigit":
      return addCurValDigit(state, action);

    case "deleteCurValDigit":
      return del(state);

    case "removeAll":
      return initialState;

    case "operandAdd":
      return operandAdd(state, action);

    case "operandRemove":
      return {
        ...state,
        operand: { active: false, type: "none" },
      };

    case "decimalAdded":
      return state.decimal
        ? state
        : state.curVal.length == 0
        ? state
        :state.curValType=="result"?
        state
        : { ...state, decimal: true, curVal: state.curVal + action.payload };

    case "evaluate":
      return !state.operand.active || state.curVal == ""
        ? state
        : {
            ...state,
            curValType: "result",
            prevVal: "",
            operand: {
              active: false,
              type: "",
            },
            curVal: evaluate(state),
          };
    default:
      return state;
  }
};
function addCurValDigit(state, action) {
  if (state.curValType == "result") {
    return {
      ...state,
      curValType: "inputed",
      curVal: action.payload,
    };
  }
  return { ...state, curVal: state.curVal + action.payload };
}

function del(state) {
  if (state.curVal == "Math Error" || state.curValType == "result") {
    return {
      ...state,
      curVal: "",
      curValType: "inputed",
    };
  }
  if (state.curVal == "" && state.prevVal == "") {
    return state;
  }
  if (state.operand.active && state.curVal.length == 0) {
    return {
      ...state,
      prevVal: "",
      curVal: state.prevVal,
      operand: { active: false, type: "" },
    };
  }
  if (state.curVal.includes(".")) {
    if (
      state.curVal.slice(state.curVal.length - 1, state.curVal.length) == "."
    ) {
      return {
        ...state,
        curVal: state.curVal.slice(0, state.curVal.length - 1),
        decimal: false,
      };
    }
  }
  return state.curVal.length
    ? { ...state, curVal: state.curVal.slice(0, state.curVal.length - 1) }
    : state;
}

function operandAdd(state, action) {
  return (state.curVal == "" && state.prevVal == "") ||
    state.curVal == "Math Error"
    ? state
    : state.curVal == "0" && state.operand.type == "÷" && state.prevVal != 0
    ? { ...initialState, curVal: "Math Error", curValType: "result" }
    : state.prevVal.length && state.curVal == ""
    ? {
        ...state,
        operand: {
          ...state.operand,
          type: action.payload,
        },
      }
    : state.prevVal.length && state.curVal.length
    ? {
        ...state,
        prevVal: evaluate(state),
        curVal: "",
        operand: { ...state.operand, type: action.payload },
        decimal: false,
      }
    : {
        ...state,
        operand: { active: true, type: action.payload },
        prevVal: state.curVal,
        curVal: "",
        decimal: false,
      };
}

function evaluate(state) {
  if (state.curVal == "0" && state.operand.type == "÷") {
    return "Math Error";
  }
  switch (state.operand.type) {
    case "+":
      return `${Number(state.prevVal) + Number(state.curVal)}`;
    case "-":
      return `${Number(state.prevVal) - Number(state.curVal)}`;
    case "x":
      return `${Number(state.prevVal) * Number(state.curVal)}`;
    case "÷":
      return `${Number(state.prevVal) / Number(state.curVal)}`;
    default:
      return state;
  }
}

export default appReducer;
