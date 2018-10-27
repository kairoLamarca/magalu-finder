import React, { Component } from 'react';
import Menu from '../Menu';
import axios from 'axios';

class VinculoProdutoLoja extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pesquisarProduto: true,
            produtosCadastrados: [],
            codigo: ''
        }
    }

    handleChangeCodigo(event) {
        this.setState({ codigo: event.target.value });
    }

    pesquisarProdutoPorCodigo = async () => {
        try {
            if (this.state.codigo) {
                const response = await axios.get(`http://localhost:4000/admin/produtoloja/${this.state.codigo}`);
                
                console.log(response);
            }
            else{
                this.setState({ msgErro: 'Preencha um código', msgSucesso: '' });
            }
            //await this.setState({ produtosCadastrados: response.data });
        } catch (error) {
            this.setState({ msgErro: 'Nenhum produto foi encontrado', msgSucesso: '' });
        }
    }

    renderCadastro() {
        if (this.state.pesquisarProduto) {
            return (
                <div className="container">
                    <label>Código do produto</label>
                    <input type="text" id="codigo" value={this.state.codigo} onChange={this.handleChangeCodigo.bind(this)} name="codigo" placeholder="Código" />

                    <button onClick={this.pesquisarProdutoPorCodigo} className="btn info">Pesquisar produto</button>
                </div>
            );
        }
        else {
            return (
                <div>
                    Vincular Produto
                </div>
            );
        }
    }

    renderMensagens() {
        if (this.state.msgErro) {
            return (
                <div className="alert">
                    {this.state.msgErro}
                </div>
            )
        } else if (this.state.msgSucesso) {
            return (
                <div className="alert success">
                    {this.state.msgSucesso}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="tela">
                {this.renderMensagens()}
                    <h2>Vincular produtos com lojas</h2>
                    {this.renderCadastro()}
                </div>
            </div>
        )
    }
}

export default VinculoProdutoLoja