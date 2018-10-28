import React, { Component } from 'react';
import Menu from '../Menu';
import axios from 'axios';

class PesquisaProduto extends Component {

    renderPesquisa() {
        return (
            <div className="container">

            </div>
        );
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="tela">
                    <h2>Pesquisar Produto</h2>
                    {this.renderPesquisa()}
                </div>
            </div>
        )
    }
}

export default PesquisaProduto;