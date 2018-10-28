import React, { Component } from 'react';
import Menu from '../Menu';
import axios from 'axios';

class PesquisaProduto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            codigo: '',
            descricao: '',
            cep: '',
            produtosEncontrados: []
        }
    }

    handleChangeCodigo(event) {
        this.setState({ codigo: event.target.value });
    }

    handleChangeDescricao(event) {
        this.setState({ descricao: event.target.value });
    }

    handleChangeCep(event) {
        this.setState({ cep: event.target.value });
    }

    pesquisarProduto = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/cliente/produtoloja/`);

            await this.setState({ produtosEncontrados: response.data });
        } catch (error) {
            //console.error(error);
        }
    }

    renderPesquisa() {
        return (
            <div className="container">
                <label>Código do produto</label>
                <input type="text" id="codigo" value={this.state.codigo} onChange={this.handleChangeCodigo.bind(this)} name="codigo" placeholder="Código" />

                <label>Descrição do produto</label>
                <input type="text" id="descricao" value={this.state.descricao} onChange={this.handleChangeDescricao.bind(this)} name="descricao" placeholder="Descrição" />

                <label>CEP</label>
                <input type="text" id="cep" value={this.state.cep} onChange={this.handleChangeCep.bind(this)} name="cep" placeholder="CEP" />

                <button onClick={this.pesquisarProduto} className="btn info">Pesquisar produto</button>
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