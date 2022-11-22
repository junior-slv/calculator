import React, { useState } from 'react';
import './App.css';



const App = () => {
  var resultado:any,valor1numero:any,valor2numero:number;
  const [valor1, setValor1] = useState (0)
  const [valor2, setValor2] = useState("")
  const [operador, setOperador] = useState("")
  const [display, setDisplay] = useState("");
  const [button1, setButton1] = useState("1");
  const [button2, setButton2] = useState("2");
  const [button3, setButton3] = useState("3");
  const [button4, setButton4] = useState("4");
  const [button5, setButton5] = useState("5");
  const [button6, setButton6] = useState("6");
  const [button7, setButton7] = useState("7");
  const [button8, setButton8] = useState("8");
  const [button9, setButton9] = useState("9");
  const [button0, setButton0] = useState("0");
  const [displayresultado, setDisplayresultado] = useState("");
  const somar = () =>{
    valor1numero = parseInt(display,10)
    setValor1(valor1numero)
    setOperador("+")
    setDisplay("")
}
const diminuir = () =>{
  valor1numero = parseInt(display,10)
  setValor1(valor1numero)
  setOperador("-")
  setDisplay("")
}
const multiplicar = () =>{
  valor1numero = parseInt(display,10)
  setValor1(valor1numero)
  setOperador("*")
  setDisplay("")
}
const dividir = () =>{
  valor1numero = parseInt(display,10)
  setValor1(valor1numero)
  setOperador("/")
  setDisplay("")
}
const porcentagem = () =>{
  valor1numero = parseInt(display,10)
  setValor1(valor1numero)
  setOperador("%")
  setDisplay("")
}
const limpar = () =>{
  setValor1(0)
  setValor2("")
  setOperador("")
  setDisplay("")
}
  const mostrarresultado = () => {
    valor2numero = parseInt(display,10)
    if (operador === "+"){
      resultado= valor1+valor2numero;
    }
    if (operador === "-"){
      resultado= (valor1-valor2numero);
    }
    if (operador === "*"){
      resultado= valor1*valor2numero;
    }
    if (operador === "/"){
      resultado= valor1/valor2numero;
    }
    if (operador === "%"){
      resultado= (valor2numero*valor1)/100;
    }
    resultado.toString();
    setDisplay(resultado);
  }
  return (
    <div className="container">
      <div className="calculator">
        <div  id='display' className="div1">{display}</div>
        <input value='AC' onClick={limpar}type='button' id='btn' className='div2'/>
        <input value='+/-' type='button' id='btn' className='div3'/>
        <input value='%' onClick={porcentagem}type='button' id='btn' className='div4'/>
        <input value='/' onClick={dividir} type='button' id='btn' className='div5'/>
        <input value={7} onClick={() => setDisplay(display + button7)} type='button' id='btn' className='div6'/>
        <input value={8} onClick={() => setDisplay(display + button8)} type='button' id='btn' className='div7'/>
        <input value={9} onClick={() => setDisplay(display + button9)} type='button' id='btn' className='div8'/>
        <input value='x' onClick={multiplicar} type='button' id='btn' className='div9'/>
        <input value={4} onClick={() => setDisplay(display + button4)} type='button' id='btn' className='div10'/>
        <input value={5} onClick={() => setDisplay(display + button5)} type='button' id='btn' className='div11'/>
        <input value={6} onClick={() => setDisplay(display + button6)} type='button' id='btn' className='div12'/>
        <input value='-' onClick={diminuir} type='button' id='btn' className='div13'/>
        <input value={1} onClick={() => setDisplay(display + button1)} type='button' id='btn' className='div14'/>
        <input value={2} onClick={() => setDisplay(display + button2)} type='button' id='btn' className='div15'/>
        <input value={3} onClick={() => setDisplay(display + button3)} type='button' id='btn' className='div16'/>
        <input value='+' onClick={somar}type='button' id='btn' className='div17'/>
        <input value={0} onClick={() => setDisplay(display + button0)} type='button' id='btn' className='div18'/>
        <input value=',' type='button' id='btn' className='div19'/>
        <input value='=' onClick={mostrarresultado} type='button' id='btn' className='div20'/>
      </div>
    </div>
  );

}

export default App;
