import React, { Component } from 'react';
import Menu from '../Menu';
import axios from 'axios';

class CadastroProdutos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            novoProduto: false,
            produtosCadastrados: [],
            id: '',
            codigo: '',
            descricao: '',
            valor: ''
        }
    }

    handleChangeCodigo(event) {
        this.setState({ codigo: event.target.value });
    }

    handleChangeDescricao(event) {
        this.setState({ descricao: event.target.value });
    }

    handleChangeValor(event) {
        this.setState({ valor: event.target.value });
    }

    novoProduto() {
        this.setState({ novoProduto: true });
    }

    renderCadastro() {
        if (this.state.novoProduto) {
            return (
                <div className="container">
                    <label>Código</label>
                    <input type="text" id="codigo" value={this.state.codigo} onChange={this.handleChangeCodigo.bind(this)} name="codigo" placeholder="Código" />

                    <label>Descrição</label>
                    <input type="text" id="descricao" value={this.state.descricao} onChange={this.handleChangeDescricao.bind(this)} name="descricao" placeholder="Descrição" />

                    <label>Valor</label>
                    <input type="text" id="valor" value={this.state.valor} onChange={this.handleChangeValor.bind(this)} name="valor" placeholder="Valor" />

                    <button onClick={this.gravarLoja} className="btn success">Gravar</button>
                </div>
            );
        }
        else {
            return (
                <div>
                    <button onClick={this.novoProduto.bind(this)} className="btn info">Novo Produto</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="tela">
                    <h2>Cadastro de Produtos</h2>
                    {this.renderCadastro()}
                </div>
            </div>
        )
    }
}

export default CadastroProdutos;