import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StyledConverterParaRomano } from "./style";

const Convert = (props) => {
  const [number, setNumber] = useState(0);
  const [roman, setRoman] = useState('');
  const [visible, setVisible] = useState(false);
  const [newValue, setNewValue] = useState('0');

  const divisaoCompleta = (divisor, dividendo) => {
    return Math.floor(divisor / dividendo);
  }

  const receberValor = (valor) => {
    const value = valor.target.value;
    setNumber(value);
  };
  const converterRomano = (numer) => {
    let romano = [];
      if(numer > 3999){
        alert('Numero invalido, digite um numero de 1 a 3999!');
      }
      if(numer % 1000 >= 1){
        for(let i = 0; i < divisaoCompleta(numer, 1000); i++){
          romano.push('M');
          numer -= 1000;
        }
      }
      if(numer % 900 >= 1){
        romano.push('CM');
          numer -= 900;
      }
      if(numer % 500 >= 1){
        romano.push('D');
          numer -= 500;
      }
      if(numer % 400 >= 1){
        romano.push('CD');
        numer -= 400;
      }
      if(numer % 100 >= 1){
        for(let i = 0; i < divisaoCompleta(numer, 100); i++){
          romano.push('C');
          numer -= 100;
        }
      }
      if(numer % 90 >= 1){
        romano.push('XC');
        numer -= 90;
      }
      if(numer % 50 >= 1){
        romano.push('L');
        numer -= 50;
      }
      if(numer % 40 >= 1){
        romano.push('XL');
        numer -= 40;
      }
      if(numer % 10 >= 1){
        for(let i = 0; i < divisaoCompleta(numer, 10); i++){
          romano.push('X');
        numer -= 10;
      }
    }
      if(numer % 9 >= 1){
        romano.push('IX');
        numer -= 9;
      }
      if(numer % 5 >= 5){
        romano.push('V');
        numer -= 5;
      }
      if(numer % 4 >= 4){
        romano.push('IV');
        numer -= 4;
      }
      if(numer % 1 >= 1){
        for(let i = 0; i < divisaoCompleta(numer, 10); i++){
          romano.push('I');
          numer -= 1;
        }
      }
      return(romano.join(""));
  }
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
                setNewValue(converterRomano(number));
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
