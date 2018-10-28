import React, { Component } from 'react';
import Menu from '../Menu';
import axios from 'axios';

class VinculoProdutoLoja extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vincularProduto: false,
            produtosLojasCadastrados: [],
            LojasCadastradas: [],
            codigoPesquisa: '',
            id_produto: '',
            codigo: '',
            descricao: '',
            valor: '',
            filial: '',
            id_vinculo: ''
        }
    }

    handleChangeCodigoPesquisa(event) {
        this.setState({ codigoPesquisa: event.target.value });
    }

    handleChangeSelectLojas(event) {
        this.setState({ filial: event.target.value });
    }

    componentDidMount() {
        this.buscarProdutosLojas();
        this.buscarLojas();
    }

    buscarProdutosLojas = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/admin/produtoloja/`);

            await this.setState({ produtosLojasCadastrados: response.data });
        } catch (error) {
            //console.error(error);
        }
    }

    buscarLojas = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/admin/loja/`);

            await this.setState({ LojasCadastradas: response.data });
        } catch (error) {
            //console.error(error);
        }
    }

    pesquisarProdutoLojaPorCodigo = async () => {
        try {
            if (this.state.codigoPesquisa) {
                const response = await axios.get(`http://localhost:4000/admin/produtoloja/${this.state.codigoPesquisa}`);

                await this.setState({
                    produtosLojasCadastrados: response.data
                });
            }
            else {
                this.setState({ msgErro: 'Preencha um código', msgSucesso: '', vincularProduto: false });
            }
        } catch (error) {
            this.setState({ msgErro: '', msgSucesso: '', vincularProduto: false });
        }
    }

    pesquisarProdutoPorCodigo = async () => {
        try {
            if (this.state.codigoPesquisa) {
                const response = await axios.get(`http://localhost:4000/admin/produto/${this.state.codigoPesquisa}`);

                await this.setState({
                    vincularProduto: true,
                    codigo: response.data[0].codigo,
                    id_produto: response.data[0].id + '',
                    descricao: response.data[0].descricao,
                    valor: response.data[0].valor,
                    msgErro: '',
                    msgSucesso: ''
                });

                this.pesquisarProdutoLojaPorCodigo();
            }
            else {
                this.setState({ msgErro: 'Preencha um código', msgSucesso: '', vincularProduto: false });
            }
        } catch (error) {
            this.setState({ msgErro: 'Nenhum produto foi encontrado', msgSucesso: '', vincularProduto: false });
        }
    }

    async delete(id_vinculo) {
        console.log(id_vinculo);

        await this.setState({ id_vinculo: id_vinculo });

        await this.deleteVinculo();

        await this.buscarProdutosLojas();
    }

    deleteVinculo = async () => {
        try {
            const response = await axios.delete(`http://localhost:4000/admin/produtoloja/${this.state.id_vinculo}`);

            this.setState({ msgErro: '', msgSucesso: response.data.mensagem, id_vinculo: '' });
        } catch (error) {
            this.setState({ msgErro: 'Não foi possível excluir o vínculo', msgSucesso: '' });
        }
    }

    vincularProduto = async () => {
        if (this.state.filial) {
            try {                
                const response = await axios.post(`http://localhost:4000/admin/produtoloja/`, {
                    id_produto: this.state.id_produto,
                    filial: this.state.filial
                });

                await this.setState({
                    msgErro: '',
                    msgSucesso: response.data.mensagem,
                    id_produto: '',
                    filial: '',
                    vincularProduto: false
                });

                this.buscarProdutosLojas();
            }
            catch (error) {
                console.log(error)
                this.setState({ msgErro: 'Produto já vinculado com essa loja', msgSucesso: '' });
            }
        }
        else {
            this.setState({ msgErro: 'Selecione a loja antes vincular', msgSucesso: '' });
        }
    }

    renderPesquisa() {
        return (
            <div className="container">
                <label>Código do produto</label>
                <input type="text" id="codigo" value={this.state.codigoPesquisa} onChange={this.handleChangeCodigoPesquisa.bind(this)} name="codigo" placeholder="Código" />

                <button onClick={this.pesquisarProdutoPorCodigo} className="btn info">Pesquisar produto</button>
            </div>
        );
    }

    renderVinculo() {
        if (this.state.vincularProduto) {
            return (
                <div className="container">
                    <h2>Vincular Produto</h2>
                    <p>
                        <strong>Código: </strong> {this.state.codigo}
                    </p>
                    <p>
                        <strong>Descrição: </strong> {this.state.descricao}
                    </p>
                    <p>
                        <strong>Valor: </strong> {this.state.valor}
                    </p>
                    <strong>Selecione a loja para o vínculo:</strong>
                    <select onChange={this.handleChangeSelectLojas.bind(this)} value={this.state.filial}>
                        <option value="">Selecione</option>
                        {this.state.LojasCadastradas.map(item => (
                            <option key={item.filial} value={item.filial}>{item.descricao}</option>
                        ))}
                    </select>
                    <button onClick={this.vincularProduto} className="btn info">Vincular produto</button>
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

    _handleDelete(id_vinculo) {
        this.props._handleDelete(id_vinculo);
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