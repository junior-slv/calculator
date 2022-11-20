import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="calculator">
        <div id='display' className="div1">SADASD</div>
        <button id='clear' className='div2'>AC</button>
        <button id='tipo' className='div3'>+/-</button>
        <button id='porcentagem' className='div4'>%</button>
        <button id='divisao' className='div5'>/</button>
        <button id='sete' className='div6'>7</button>
        <button id='oite' className='div7'>8</button>
        <button id='nove' className='div8'>9</button>
        <button id='multiplicar' className='div9'>X</button>
        <button id='quatro' className='div10'>4</button>
        <button id='cinco' className='div11'>5</button>
        <button id='seis' className='div12'>6</button>
        <button id='menos' className='div13'>-</button>
        <button id='um' className='div14'>1</button>
        <button id='dois' className='div15'>2</button>
        <button id='tres' className='div16'>3</button>
        <button id='mais' className='div17'>+</button>
        <button id='zero' className='div18'>0</button>
        <button id='virgula' className='div19'>.</button>
        <button id='igual' className='div20'>=</button>
      </div>
    </div>
  );

}
const display = document.getElementById("display")
const clear = document.getElementById("clear")
const tipo = document.getElementById("tipo")
const porcentagem = document.getElementById("porcentagem")
const divisao = document.getElementById("divisao")
const sete = document.getElementById("sete")
const oito = document.getElementById("oito")
const nove = document.getElementById("nove")
const multiplicar = document.getElementById("multiplicar")
const quatro = document.getElementById("quatro")
const cinco = document.getElementById("cinco")
const seis = document.getElementById("seis")
const menos = document.getElementById("menos")
const um = document.getElementById("um")
const dois = document.getElementById("dois")
const tres = document.getElementById("tres")
const mais = document.getElementById("mais")
const zero = document.getElementById("zero")
const virgula = document.getElementById("virgula")
const igual = document.getElementById("igual")
export default App;
