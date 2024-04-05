import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StyledConverterParaRomano } from "./style";

const Convert = (props) => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(false);
  const [newValue, setNewValue] = useState(0);

  const receberValor = (valor) => {
    const value = valor.target.value;
    setNumber(value);
  };
  const clearInput = () => {
    setNumber('');
  }
  return (
    <StyledConverterParaRomano>
      <div className="container">
        <div className="content">
          <h1 className="title">Conversor de números para numeros romanos</h1>
          <div className="box">
            <input
              className="numberInput"
              placeholder="Insira um numero"
              type="number"
              onChange={receberValor}
              value={number}
            ></input>
            <button
              className="button"
              onClick={(props) => {
                setNewValue(number);
                setVisible(true);
                clearInput();
              }}
            >
              Enviar
            </button>
          </div>
          {visible && <h1 className="value">{newValue}</h1>}
        </div>
      </div>
    </StyledConverterParaRomano>
  );
};
export default Convert;
