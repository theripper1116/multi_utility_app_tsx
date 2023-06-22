import React, { useState } from "react";

function Calculator() {
  const [keyNum, changeKeyNum] = useState("");
  const [operator, changeOperator] = useState("");
  const [firstNum, changeFirstNum] = useState();
  const [secondNum, changeSecondNum] = useState();

  const getNum = (event) => {
    changeKeyNum(keyNum.concat(event.target.value));
  };

  const calculate = () => {
    let arrayNum = keyNum.split("");
    let pos;
    for (let x in arrayNum) {
      if (
        arrayNum[x] === "/" ||
        arrayNum[x] === "*" ||
        arrayNum[x] === "+" ||
        arrayNum[x] === "-"
      ) {
        pos = x;
      }
    }
    changeOperator((arrayNum[pos]));
    changeFirstNum(parseInt(arrayNum.splice(0, pos).join("")));
    changeSecondNum(parseInt(arrayNum.splice(1).join("")));
    document.getElementById("result").innerHTML = eval(`${firstNum}${operator}${secondNum}`);
  };
  
  const clearScreen = () => {
    changeKeyNum("");
    document.getElementById("result").innerHTML = "";
  }
  return (
    <>
      <textarea
        className="container form-control my-5"
        placeholder={
          keyNum === "" ? "press on buttons to initiate calculation" : keyNum
        }
        id="floatingTextarea2"
        style={{ height: 100 }}
        disabled={true}
      ></textarea>
      <table className="container">
        <tbody>
          <tr>
            <td>
              <button onClick={getNum} value="1">
                1
              </button>
            </td>
            <td>
              <button onClick={getNum} value="2">
                2
              </button>
            </td>
            <td>
              <button onClick={getNum} value="3">
                3
              </button>
            </td>
            <td>
              <button onClick={clearScreen}>
                Clear
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={getNum} value="4">
                4
              </button>
            </td>
            <td>
              <button onClick={getNum} value="5">
                5
              </button>
            </td>
            <td>
              <button onClick={getNum} value="6">
                6
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={getNum} value="7">
                7
              </button>
            </td>
            <td>
              <button onClick={getNum} value="8">
                8
              </button>
            </td>
            <td>
              <button onClick={getNum} value="9">
                9
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={getNum} value="0">
                0
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="container my-5">
        <tbody>
          <tr>
            <td>
              <button className="mx-2" onClick={getNum} value="*">
                *
              </button>
              <button className="mx-2" onClick={getNum} value="+">
                +
              </button>
              <button className="mx-2" onClick={getNum} value="-">
                -
              </button>
              <button className="mx-2" onClick={getNum} value="/">
                /
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="mx-5" onClick={calculate}>
        Calculate
      </button>
      <div>
        <p id="result"></p>
      </div>
    </>
  );
}

export default Calculator;
