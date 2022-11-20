import React, { useState } from 'react';
import './App.css';



const App = () => {
  const [display, setDisplay] = useState();
  return (
    <div className="container">
      <div className="calculator">
        <div id='display' className="div1">{resultado}</div>
        <input value='AC' type='button' id='clear' className='div2'/>
        <input value='+/-' type='button' id='tipo' className='div3'/>
        <input value='%' type='button' id='porcentagem' className='div4'/>
        <input value='/' type='button' id='divisao' className='div5'/>
        <input value={7} type='button' id='sete' className='div6'/>
        <input value={8} type='button' id='oite' className='div7'/>
        <input value={9} type='button' id='nove' className='div8'/>
        <input value='x' type='button' id='multiplicar' className='div9'/>
        <input value={4} type='button' id='quatro' className='div10'/>
        <input value={5} type='button' id='cinco' className='div11'/>
        <input value={6} type='button' id='seis' className='div12'/>
        <input value='-' type='button' id='menos' className='div13'/>
        <input value={1} type='button' id='um' className='div14'/>
        <input value={2} type='button' id='dois' className='div15'/>
        <input value={3} type='button' id='tres' className='div16'/>
        <input value='+' type='button' id='mais' className='div17'/>
        <input value={0} type='button' id='zero' className='div18'/>
        <input value=',' type='button' id='virgula' className='div19'/>
        <input value='=' type='button' id='igual' className='div20'/>
      </div>
    </div>
  );

}
// const display:any = document.getElementById("display")

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
var resultado:any
const handleChange = () => {
    

    
}
export default App;
