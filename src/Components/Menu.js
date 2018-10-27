import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className="dropdown">
                        <a href="#" className="dropbtn">Administrativo</a>
                        <div className="dropdown-content">
                            <Link to="/CadastroLojas">Cadastro de lojas</Link>
                            <Link to="/CadastroProdutos">Cadastro de produtos</Link>
                            <a href="#">Vincular produtos com lojas</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropbtn">Cliente</a>
                        <div className="dropdown-content">
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
