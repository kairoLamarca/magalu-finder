import React, { Component } from 'react';
import Menu from '../Menu';
import axios from 'axios';

class CadastroLojas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            novaLoja: false,
            lojasCadastradas: [],
            filial: '',
            descricao: '',
            cep: '',
            cidade: '',
            estado: '',
            endereco: '',
            bairro: '',
            numero: ''
        }    
    }

    handleChangeFilial(event) {
        this.setState({ filial: event.target.value });
    }

    handleChangeDescricao(event) {
        this.setState({ descricao: event.target.value });
    }

    handleChangeCep(event) {
        this.setState({ cep: event.target.value });
    }

    handleChangeCidade(event) {
        this.setState({ cidade: event.target.value });
    }

    handleChangeEstado(event) {
        this.setState({ estado: event.target.value });
    }

    handleChangeEndereco(event) {
        this.setState({ endereco: event.target.value });
    }

    handleChangeBairro(event) {
        this.setState({ bairro: event.target.value });
    }

    handleChangeNumero(event) {
        this.setState({ numero: event.target.value });
    }

    componentDidMount() {
        this.buscarLojas();
    }

    buscarLojas = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/admin/loja/`);

            await this.setState({ lojasCadastradas: response.data });
        } catch (error) {
            //console.error(error);
        }
    }

    deleteLoja = async () => {
        try {
            const response = await axios.delete(`http://localhost:4000/admin/loja/${this.state.filial}`);

            this.setState({ msgErro: '', msgSucesso: response.data.mensagem });
        } catch (error) {
            this.setState({ msgErro: 'Não foi possível excluir a loja pois possui produtos vinculados a ela', msgSucesso: '' });
        }
    }

    gravarLoja = async () => {
        try {

        } catch (error) {
            this.setState({ msgErro: 'Não foi possível cadastrar a loja', msgSucesso: '' });
        }
    }

    novaLoja() {
        this.setState({ novaLoja: true });
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

    renderCadastro() {
        if (this.state.novaLoja) {
            return (
                <div className="container">
                    <form action="/action_page.php">
                        <label>Filial</label>
                        <input type="text" id="filial" value={this.state.filial} onChange={this.handleChangeFilial.bind(this)} name="filial" placeholder="Filial" />

                        <label>Descrição</label>
                        <input type="text" id="descricao" value={this.state.descricao} onChange={this.handleChangeDescricao.bind(this)} name="descricao" placeholder="Descrição" />

                        <label>CEP</label>
                        <input type="text" id="cep" value={this.state.cep} onChange={this.handleChangeCep.bind(this)} name="cep" placeholder="CEP" />

                        <label>Cidade</label>
                        <input type="text" id="cidade" value={this.state.cidade} onChange={this.handleChangeCidade.bind(this)} name="cidade" placeholder="Cidade" />

                        <label>Estado</label>
                        <select id="estado" value={this.state.estado} onChange={this.handleChangeEstado.bind(this)} name="estado">
                            <option value="">Selecione</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AM">Amazonas</option>
                            <option value="AP">Amapá</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="PR">Paraná</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SE">Sergipe</option>
                            <option value="SP">São Paulo</option>
                            <option value="TO">Tocantins</option>
                        </select>

                        <label>Endereço</label>
                        <input type="text" id="endereco" value={this.state.endereco} onChange={this.handleChangeEndereco.bind(this)} name="endereco" placeholder="Endereço" />

                        <label>Bairro</label>
                        <input type="text" id="bairro" value={this.state.bairro} onChange={this.handleChangeBairro.bind(this)} name="bairro" placeholder="Bairro" />

                        <label>Número</label>
                        <input type="text" id="numero" value={this.state.numero} onChange={this.handleChangeNumero.bind(this)} name="numero" placeholder="Número" />

                        <button onClick={this.gravarLoja} className="btn success">Gravar</button>
                    </form>
                </div>
            );
        }
        else {
            return (
                <div>
                    <button onClick={this.novaLoja.bind(this)} className="btn info">Nova Loja</button>
                    <ListarLojas items={this.state.lojasCadastradas} _handleDelete={this.delete.bind(this)} _handleUpdate={this.update.bind(this)} />
                </div>
            );
        }
    }

    async delete(filial) {
        console.log(filial);

        await this.setState({ filial: filial });

        await this.deleteLoja();

        await this.buscarLojas();
    }

    async update(filial) {
        console.log(filial);

        await this.setState({ filial: filial });

        this.buscarLojas();
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="tela">
                    {this.renderMensagens()}
                    <h2>Cadastro de Lojas</h2>
                    {this.renderCadastro()}
                </div>
            </div>
        )
    }
}

class ListarLojas extends Component {

    _handleDelete(filial) {
        this.props._handleDelete(filial);
    }

    _handleUpdate(filial) {
        this.props._handleUpdate(filial);
    }

    render() {
        return (
            <table>
                <tr>
                    <th>Filial</th>
                    <th>Descrição</th>
                    <th>CEP</th>
                    <th></th>
                    <th></th>
                </tr>
                {this.props.items.map(item => (
                    <tr key={item.filial}>
                        <td>{item.filial}</td>
                        <td>{item.descricao}</td>
                        <td>{item.cep}</td>
                        <td><button className="btnTable info" onClick={this._handleUpdate.bind(this, item.update)}>Alterar</button></td>
                        <td><button className="btnTable danger" onClick={this._handleDelete.bind(this, item.filial)}>Excluir</button></td>
                    </tr>
                ))}
            </table>
        );
    }
}

export default CadastroLojas;