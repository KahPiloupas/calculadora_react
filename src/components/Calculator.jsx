import React, { useState } from "react";
import "./styles.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
  const [waitingForNumber, setWaitingForNumber] = useState(false);
  const [shouldClearNumber, setShouldClearNumber] = useState(false);

  function inputNum(event) {
    const input = event.target.value;
    if (Number(num) + Number(input) > 999999999 && !waitingForNumber) {
      return;
    }

    if (waitingForNumber || num === 0 || shouldClearNumber) {
      setNum(input);
    } else {
      setNum(num + input);
    }
    setWaitingForNumber(false);
    setShouldClearNumber(false);
  }

  function clear() {
    setNum(0);
  }

  function porcentagem() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function handleOperator(event) {
    const operatorInput = event.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setWaitingForNumber(true);
  }

  function calcular() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    }
    if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    }
    if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    }
    if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
    setShouldClearNumber(true);
    console.log("calculou!!!!");
  }
  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="container">
          <Box m={12} />
          <h1 className="resultado">{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentagem}>%</button>
          <button className="orange" onClick={handleOperator} value="/">
            /
          </button>
          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={handleOperator} value="X">
            X
          </button>
          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={handleOperator} value="-">
            -
          </button>
          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={handleOperator} value="+">
            +
          </button>
          <button className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNum} value={"."}>
            ,
          </button>
          <button className="gray" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className="orange" onClick={calcular}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
