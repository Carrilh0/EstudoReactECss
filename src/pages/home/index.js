import React, {Component} from 'react';
import Header from '../../components/header';


import './style.css';

class Home extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            titulo: 'Vingadores Guerra Infinita',
            imagemLink: 'https://img.ibxk.com.br/2018/11/29/29161447396167.jpg',
            sinopse: 'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.'
        }
        this.trocar = this.trocar.bind(this);
    }

    trocar(){
        var state = this.state;
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            let random = Math.floor( Math.random() * 7);
            var filme = (json[random]);
            state.titulo = filme.nome;
            state.sinopse = filme.sinopse;
            state.imagemLink = filme.foto;
            this.setState(state);
        });
    }

    render(){
        return(
            <div className="App">
                <Header/>
                    
                <div className="card">
                
                <div className="titulo">
                    {this.state.titulo}
                </div>

                <img className="imagem" src={this.state.imagemLink}></img>

                <a className="sinopse">
                    {this.state.sinopse}
                </a>

                <a className="acessar">Acessar</a>

                </div>
            
                <a className="refresh" onClick={this.trocar}>Refresh</a>

            </div>
        );
    }
}

export default Home;
