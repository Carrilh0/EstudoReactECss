import React, { Component } from 'react';
import './style.css';

class Header extends Component 
{
    render(){
        return(
            <div>
                <div className="navbar">
                    <a class="home" href="/">Inicio</a>
                    <a href="">Contato</a>
                    <a href="">Localização</a>
                    <a href="">Teste</a>
                </div>  
            </div>           
        );
    }
}

export default Header;