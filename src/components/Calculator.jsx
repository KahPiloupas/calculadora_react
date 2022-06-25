/* eslint-disable default-case */
import React, { useState } from "react";
import "../global/styles.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
  const [num, setNum] = useState('0');
  const [oldnum, setOldNum] = useState('0');

  const [operator, setOperator] = useState();

  const [statusPonto, setStatusPonto] = useState(false);
  const [statusVisualizarOperador, setStatusVisualizarOperador] = useState(false);

  function inputNum(event) {
    let input = event.target.value;
    setStatusVisualizarOperador(false);
    
    if (num.length > 8) {
        return;
    }

    if (input === '.' && statusPonto === false) {
        input = ',';
        setStatusPonto(true);
    } else if (input === '.' && statusPonto) {
        input = '';
    }

    if (num === '0' && input !== ',') {
      setNum(input)
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum('0');
    setStatusPonto(false);
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
    setNum('0')
    setOldNum(num);
    setStatusVisualizarOperador(true);
    setStatusPonto(false);
  }

  function executar() {
    if (operator === "/") {
      setNum(calcular('/')*1);
    }
    if (operator === "X") {
      setNum(calcular('X')*1);
    }
    if (operator === "-") {
      setNum(calcular('-')*1);
    }
    if (operator === "+") {
      setNum(calcular('+')*1);
    }
  }

  function calcular (parametro) {
    switch (parametro) {
       case '/': return (Number(oldnum.replace(',', '.')) / Number(num.replace(',', '.')));
       case 'X': return (Number(oldnum.replace(',', '.')) * Number(num.replace(',', '.')));
       case '-': return (Number(oldnum.replace(',', '.')) - Number(num.replace(',', '.')));
       case '+': return (Number(oldnum.replace(',', '.')) + Number(num.replace(',', '.')));
    }
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="container">
          <Box m={5} />
          {!statusVisualizarOperador ? (
              <h1 className="resultado">
                {String(num).substr(0,9)}
              </h1> 
          ) : (
              <h1 className="resultado"> 
                {operator} 
              </h1> 
          )}
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
          <button className="orange" onClick={executar}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}