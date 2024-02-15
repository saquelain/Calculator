import React, { useState } from "react";
import './Calculator.css';

function Calculator(){
    const [output, setOutput] = useState('0');

    const handleClick = (value) => {
        if(value==='='){
            try {
                const result = eval(output);
                setOutput(result.toString());
            } catch (error) {
                setOutput("Error");
            }
        }else if(value === 'AC'){
            setOutput('0');
        }else{
            setOutput((prevOutput) => prevOutput === "0" ? value : prevOutput + value);
        }
    }

    return (
        <div className="calculator">
            <div className="calculator__output">{output}</div>

            <div className="calculator__keys">
                <button className="calculator__key calculator__key--operator" onClick={() => handleClick("+")}>+</button>
                <button className="calculator__key calculator__key--operator" onClick={() => handleClick("-")}>-</button>
                <button className="calculator__key calculator__key--operator" onClick={() => handleClick("*")}>&times;</button>
                <button className="calculator__key calculator__key--operator" onClick={() => handleClick("/")}>÷</button>
                <button className="calculator__key" onClick={() => handleClick("7")}>7</button>
                <button className="calculator__key" onClick={() => handleClick("8")}>8</button>
                <button className="calculator__key" onClick={() => handleClick("9")}>9</button>
                <button className="calculator__key" onClick={() => handleClick("4")}>4</button>
                <button className="calculator__key" onClick={() => handleClick("5")}>5</button>
                <button className="calculator__key" onClick={() => handleClick("6")}>6</button>
                <button className="calculator__key" onClick={() => handleClick("1")}>1</button>
                <button className="calculator__key" onClick={() => handleClick("2")}>2</button>
                <button className="calculator__key" onClick={() => handleClick("3")}>3</button>
                <button className="calculator__key" onClick={() => handleClick("0")}>0</button>
                <button className="calculator__key" onClick={() => handleClick(".")}>.</button>
                <button className="calculator__key" onClick={() => handleClick("AC")}>AC</button>
                <button className="calculator__key calculator__key--enter" onClick={() => handleClick("=")}>=</button>
            </div>
        </div>
    );
}

export default Calculator;