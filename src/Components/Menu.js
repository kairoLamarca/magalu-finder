import React, { Component } from 'react';
import '../Public/magalu-finder.css';
import { Link } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Administrativo</a>
                        <div class="dropdown-content">
                            <a href="#">Cadastro de lojas</a>
                            <a href="#">Cadastro de produtos</a>
                            <a href="#">Vincular produtos com lojas</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Cliente</a>
                        <div class="dropdown-content">
                            <a href="#">Pesquisar Produto</a>
                        </div>
                    </li>
                    <li><Link to="/">Sobre</Link></li>
                </ul>
            </div>
        );
    }
}

export default App;
