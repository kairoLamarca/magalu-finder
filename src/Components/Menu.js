import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Administrativo</a>
                        <div class="dropdown-content">
                            <Link to="/CadastroLojas">Cadastro de lojas</Link>
                            <a href="#">Cadastro de produtos</a>
                            <a href="#">Vincular produtos com lojas</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Cliente</a>
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

export default Menu;
