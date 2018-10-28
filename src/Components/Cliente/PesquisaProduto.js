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
            let response = [];
            if (this.state.codigo && this.state.cep) {
                response = await axios.get(`http://localhost:4000/cliente/produtoloja/codigo/cep/${this.state.codigo}/${this.state.cep}`);

                await this.setState({ produtosEncontrados: response.data });
            }
            else if (this.state.descricao && this.state.cep) {
                response = await axios.get(`http://localhost:4000/cliente/produtoloja/descricao/cep/${this.state.descricao}/${this.state.cep}`);

                await this.setState({ produtosEncontrados: response.data });
            }
            else {
                response = await axios.get(`http://localhost:4000/cliente/produtoloja/`);

                await this.setState({ produtosEncontrados: response.data });
            }
        } catch (error) {
            await this.setState({ produtosEncontrados: [] });
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

    renderListagem() {
        return (
            <div>
                <ListarProdutosLojas items={this.state.produtosEncontrados} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="tela">
                    <h2>Pesquisar Produto</h2>
                    {this.renderPesquisa()}
                    {this.renderListagem()}
                </div>
            </div>
        )
    }
}

class ListarProdutosLojas extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Código do Produto</th>
                        <th>Produto</th>
                        <th>Distância</th>
                        <th>Descrição</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map(item => (
                        <tr key={item.codigo_produto + item.loja}>
                            <td>{item.codigo_produto}</td>
                            <td>{item.produto}</td>
                            <td>{item.distancia}</td>
                            <td>{item.loja}</td>
                            <td>{item.cep}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default PesquisaProduto;