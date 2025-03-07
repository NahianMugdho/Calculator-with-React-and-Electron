// Code for Calculator component

import { useState, useEffect, useCallback } from "react";
const allowedValues = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "+", "-", "/", "*", "**", "=", ".", "C",
  "Enter", "Backspace", "Delete",
];
const Calculator = () => {
  const [expression, setExpression] = useState("");
  const calculateExpression = useCallback((value) => {
    if (value === "C") {
      setExpression("");
    } else if (value === "=" || value === "Enter") {
      try {
        setExpression(Function(`return ${expression}`)().toString());
      } catch {
        setExpression("Error");
      }
    } else if (value === "Delete" || value === "Backspace") {
      setExpression((prev) => prev.slice(0, -1));
    } else {
      setExpression((prev) => prev + value);
    }
  }, [expression]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (allowedValues.includes(e.key)) {
        calculateExpression(e.key);
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expression, calculateExpression]);
  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="w-80 p-5 bg-base-100 shadow-lg rounded-lg text-3xl">
        {/* Display */}
        <div className="mb-3 p-3 bg-neutral text-neutral-content text-right text-3xl rounded-md">
          {expression || "0"}
        </div>
        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-2 text-3xl">
          {["C", "%", "Backspace", "/"].map((val) => (
            <button
              key={val}
              className="btn btn-outline btn-primary text-3xl"
              onClick={() => calculateExpression(val)}
            >
              {val === "Backspace" ? "⌫" : val}
            </button>
          ))}
          {[7, 8, 9, "*"].map((val) => (
            <button key={val} className="btn btn-accent text-3xl" onClick={() => calculateExpression(val.toString())}>
              {val}
            </button>
          ))}
          {[4, 5, 6, "+"].map((val) => (
            <button key={val} className="btn btn-accent text-3xl" onClick={() => calculateExpression(val.toString())}>
              {val}
            </button>
          ))}
          {[1, 2, 3, "-"].map((val) => (
            <button key={val} className="btn btn-accent text-3xl" onClick={() => calculateExpression(val.toString())}>
              {val}
            </button>
          ))}
            <button className="btn btn-secondary text-3xl" onClick={() => calculateExpression("**")}>^</button>
            <button className="btn btn-accent text-3xl" onClick={() => calculateExpression("0")}>0</button>
            <button className="btn btn-accent text-3xl" onClick={() => calculateExpression(".")}>.</button>
            <button className="btn btn-success text-3xl" onClick={() => calculateExpression("=")}>=</button>
        </div>
        </div>
        </div>
    );
}
export default Calculator;