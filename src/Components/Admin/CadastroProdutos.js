import React, { Component } from 'react';
import Menu from '../Menu';
import axios from 'axios';
import CurrencyInput from 'react-currency-input';

class CadastroProdutos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            novoProduto: false,
            produtosCadastrados: [],
            id: '',
            codigo: '',
            descricao: '',
            valor: '',
            alterarProduto: false
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
        console.log('teste', this.state.valor.replace(/\./g, '').replace(',', '.'))
    }

    novoProduto() {
        this.setState({ novoProduto: true, msgErro: '', msgSucesso: '' });
    }

    componentDidMount() {
        this.buscarProdutos();
    }

    buscarProdutos = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/admin/produto/`);

            await this.setState({ produtosCadastrados: response.data });
        } catch (error) {
            await this.setState({ produtosCadastrados: [] });
        }
    }

    buscarProdutoAlterar = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/admin/produto/${this.state.codigo}`);

            await this.setState(
                {
                    alterarProduto: true,
                    codigo: response.data[0].codigo,
                    descricao: response.data[0].descricao,
                    valor: response.data[0].valor.replace('.', ',')
                }
            );

        } catch (error) {
            await this.setState({ produtosCadastrados: [] });
        }
    }

    gravarProduto = async () => {
        try {
            const response = await axios.post(`http://localhost:4000/admin/produto/`, {
                codigo: this.state.codigo,
                descricao: this.state.descricao,
                valor: this.state.valor.replace(/\./g, '').replace(',', '.')
            });

            await this.setState({
                msgErro: '',
                msgSucesso: response.data.mensagem,
                novoProduto: false,
                codigo: '',
                descricao: '',
                valor: ''
            });

            await this.buscarProdutos();
        } catch (error) {
            this.setState({ msgErro: 'Não foi possível cadastrar o produto', msgSucesso: '' });
        }
    }

    alterarProduto = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/admin/produto/${this.state.id}`, {
                codigo: this.state.codigo,
                descricao: this.state.descricao,
                valor: this.state.valor.replace(/\./g, '').replace(',', '.')
            });

            await this.setState({
                msgErro: '',
                msgSucesso: response.data.mensagem,
                alterarProduto: false,
                codigo: '',
                descricao: '',
                valor: ''
            });

            await this.buscarProdutos();
        } catch (error) {
            this.setState({ msgErro: 'Não foi possível cadastrar o produto', msgSucesso: '' });
        }
    }

    gravar() {
        if (this.state.alterarProduto) {
            this.alterarProduto();
        }
        else {
            this.gravarProduto();
        }
    }

    deleteProduto = async () => {
        try {
            const response = await axios.delete(`http://localhost:4000/admin/produto/${this.state.id}`);

            this.setState({ msgErro: '', msgSucesso: response.data.mensagem });
        } catch (error) {
            this.setState({ msgErro: 'Não foi possível excluir a loja pois possui produtos vinculados a ela', msgSucesso: '' });
        }
    }

    renderCadastro() {
        if (this.state.novoProduto || this.state.alterarProduto) {
            return (
                <div className="container">
                    <label>Código</label>
                    <input type="text" id="codigo" value={this.state.codigo} onChange={this.handleChangeCodigo.bind(this)} name="codigo" placeholder="Código" />

                    <label>Descrição</label>
                    <input type="text" id="descricao" value={this.state.descricao} onChange={this.handleChangeDescricao.bind(this)} name="descricao" placeholder="Descrição" />

                    <label>Valor</label>
                    {/* <input type="text" id="valor" value={this.state.valor} onChange={this.handleChangeValor.bind(this)} name="valor" placeholder="Valor" /> */}
                    <CurrencyInput type="text" id="valor" mask="999.999,99" value={this.state.valor} onChangeEvent={this.handleChangeValor.bind(this)} name="valor" placeholder="Valor" decimalSeparator="," thousandSeparator="." />

                    <button onClick={this.gravar.bind(this)} className="btn success">Gravar</button>
                </div>
            );
        }
        else {
            return (
                <div>
                    <button onClick={this.novoProduto.bind(this)} className="btn info">Novo Produto</button>
                    <ListarProdutos items={this.state.produtosCadastrados} _handleDelete={this.delete.bind(this)} _handleUpdate={this.update.bind(this)} />
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

    async delete(id) {
        await this.setState({ id: id });

        await this.deleteProduto();

        await this.buscarProdutos();
    }

    async update(id, codigo) {
        await this.setState({ id: id, codigo: codigo, msgErro: '', msgSucesso: '' });

        await this.buscarProdutoAlterar();
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="tela">
                    {this.renderMensagens()}
                    <h2>Cadastro de Produtos</h2>
                    {this.renderCadastro()}
                </div>
            </div>
        )
    }
}

class ListarProdutos extends Component {

    _handleDelete(id) {
        this.props._handleDelete(id);
    }

    _handleUpdate(id, codigo) {
        this.props._handleUpdate(id, codigo);
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map(item => (
                        <tr key={item.id}>
                            <td>{item.codigo}</td>
                            <td>{item.descricao}</td>
                            <td>{item.valor}</td>
                            <td><button className="btnTable info" onClick={this._handleUpdate.bind(this, item.id, item.codigo)}>Alterar</button></td>
                            <td><button className="btnTable danger" onClick={this._handleDelete.bind(this, item.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default CadastroProdutos;