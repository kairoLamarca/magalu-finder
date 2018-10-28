import React, { Component } from 'react';
import Menu from '../Menu';
import axios from 'axios';

class VinculoProdutoLoja extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vincularProduto: false,
            produtosLojasCadastrados: [],
            codigo: '',
            id: ''
        }
    }

    handleChangeCodigo(event) {
        this.setState({ codigo: event.target.value });
    }

    componentDidMount() {
        this.buscarProdutosLojas();
    }

    buscarProdutosLojas = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/admin/produtoloja/`);

            await this.setState({ produtosLojasCadastrados: response.data });
        } catch (error) {
            //console.error(error);
        }
    }

    pesquisarProdutoPorCodigo = async () => {
        try {
            if (this.state.codigo) {
                const response = await axios.get(`http://localhost:4000/admin/produtoloja/${this.state.codigo}`);

                await this.setState({ produtosLojasCadastrados: response.data, vincularProduto: true });
            }
            else {
                this.setState({ msgErro: 'Preencha um código', msgSucesso: '', vincularProduto: false });
            }
        } catch (error) {
            this.setState({ msgErro: 'Nenhum produto foi encontrado', msgSucesso: '', vincularProduto: false });
        }
    }

    async delete(filial) {
        console.log(filial);

        await this.setState({ filial: filial });

        //await this.deleteLoja();

        await this.buscarProdutosLojas();
    }    

    renderPesquisa() {
        return (
            <div >
                <div className="container">
                    <label>Código do produto</label>
                    <input type="text" id="codigo" value={this.state.codigo} onChange={this.handleChangeCodigo.bind(this)} name="codigo" placeholder="Código" />

                    <button onClick={this.pesquisarProdutoPorCodigo} className="btn info">Pesquisar produto</button>
                </div>

            </div>
        );
    }

    renderVinculo() {
        if (this.state.vincularProduto) {
            return (
                <div>
                    Vincular Produto
                </div>
            )
        }
    }

    renderListagem() {
        return (
            <div>
                <ListarProdutosLojas items={this.state.produtosLojasCadastrados} _handleDelete={this.delete.bind(this)} />
            </div>
        )
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
                    {this.renderPesquisa()}
                    {this.renderVinculo()}
                    {this.renderListagem()}
                </div>
            </div>
        )
    }
}

class ListarProdutosLojas extends Component {

    _handleDelete(filial) {
        this.props._handleDelete(filial);
    }

    render() {
        return (
            <table>
                <tr>
                    <th>Código do Produto</th>
                    <th>Produto</th>
                    <th>Filial</th>
                    <th>Descrição</th>
                    <th></th>
                </tr>
                {this.props.items.map(item => (
                    <tr key={item.id}>
                        <td>{item.codigo_produto}</td>
                        <td>{item.produto}</td>
                        <td>{item.filial}</td>
                        <td>{item.loja}</td>
                        <td><button className="btnTable danger" onClick={this._handleDelete.bind(this, item.id)}>Excluir</button></td>
                    </tr>
                ))}
            </table>
        );
    }
}

export default VinculoProdutoLoja