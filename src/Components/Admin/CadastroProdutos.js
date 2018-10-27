import React, { Component } from 'react';
import Menu from '../Menu';
import axios from 'axios';

class CadastroProdutos extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="tela">
                    <h2>Cadastro de Produtos</h2>
                </div>
            </div>
        )
    }
}

export default CadastroProdutos;