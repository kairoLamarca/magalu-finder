import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className="dropdown">
                        <Link className="dropbtn" to="/">Administrativo</Link>
                        <div className="dropdown-content">
                            <Link to="/CadastroLojas">Cadastro de lojas</Link>
                            <Link to="/CadastroProdutos">Cadastro de produtos</Link>
                            <Link to="/VinculoProdutoLoja">Vincular produtos com lojas</Link>
                        </div>
                    </li>
                    <li className="dropdown">
                        <Link className="dropbtn" to="/">Cliente</Link>
                        <div className="dropdown-content">
                            <Link to="/PesquisaProduto">Pesquisar Produto</Link>
                        </div>
                    </li>
                    <li><Link to="/">Sobre</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
