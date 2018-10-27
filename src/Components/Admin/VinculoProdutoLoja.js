import React, { Component } from 'react';
import Menu from '../Menu';
import axios from 'axios';

class VinculoProdutoLoja extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="tela">
                    <h2>Vincular produtos com lojas</h2>
                </div>
            </div>
        )
    }
}

export default VinculoProdutoLoja