import React, { useEffect, useState } from "react";

export const convertToRoman = (numero) => {
  let num = parseInt(numero);
  if (isNaN(num) || num < 1 || num > 3999) {
    alert("Por favor, insira um número entre 1 e 3999.");
    return;
  }

  const romanNumerals = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  const decimalValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  let result = "";
  let i = 12;
  while (num > 0) {
    let quotient = Math.floor(num / decimalValues[i]);
    num %= decimalValues[i];
    while (quotient > 0) {
      result += romanNumerals[i];
      quotient--;
    }
    i--;
  }
  return result;
};
function NumberToRoman({ value }) {
  console.log(value);
  return <div>{value}</div>;
}

export default NumberToRoman;
