import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="navbar">
        <a class="home" href="/">Inicio</a>
        <a href="">Contato</a>
        <a href="">Localização</a>
        <a href="">Teste</a>
    </div>  

    <div className="card">
      
      <div className="titulo">
        Vingadores
      </div>

      <img className="imagem" src="https://img.ibxk.com.br/2018/11/29/29161447396167.jpg"></img>

      <a className="sinopse">
      Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.
      </a>

      <a className="acessar" href="">Acessar</a>

    </div>
   
    </div>
  );
}

export default App;
