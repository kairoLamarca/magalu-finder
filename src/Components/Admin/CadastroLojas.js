import React, { Component } from 'react';
import Menu from '../Menu';

class CadastroLojas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            novaLoja: false
        }

        this.novaLoja = this.novaLoja.bind(this);
    }

    componentDidMount() {

    }

    novaLoja() {
        this.setState({ novaLoja: true });
    }

    renderCadastro() {
        if (this.state.novaLoja) {
            return (
                <div class="container">
                    <form action="/action_page.php">
                        <label for="filial">Filial</label>
                        <input type="text" id="filial" name="filial" placeholder="Filial" />

                        <label for="descricao">Descrição</label>
                        <input type="text" id="descricao" name="descricao" placeholder="Descrição" />

                        <label for="cep">CEP</label>
                        <input type="text" id="cep" name="cep" placeholder="CEP" />

                        <label for="cidade">Cidade</label>
                        <input type="text" id="cidade" name="cidade" placeholder="Cidade" />

                        <label for="estado">Estado</label>
                        <select id="estado" name="estado">
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

                        <label for="endereco">Endereço</label>
                        <input type="text" id="endereco" name="endereco" placeholder="Endereço" />

                        <label for="bairro">Bairro</label>
                        <input type="text" id="bairro" name="bairro" placeholder="Bairro" />

                        <label for="numero">Número</label>
                        <input type="text" id="numero" name="numero" placeholder="Número" />

                        <input type="submit" value="Gravar" />
                    </form>
                </div>
            );
        }
        else {
            return (
                <div>
                    <button onClick={this.novaLoja} class="btn info">Nova Loja</button>
                    <table>
                        <tr>
                            <th>Filial</th>
                            <th>Descrição</th>
                            <th>CEP</th>
                            <th>A</th>
                            <th>E</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td><button class="btnTable info">Alterar</button></td>
                            <td><button class="btnTable info">Excluir</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td><button class="btnTable info">Alterar</button></td>
                            <td><button class="btnTable info">Excluir</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td><button class="btnTable info">Alterar</button></td>
                            <td><button class="btnTable info">Excluir</button></td>
                        </tr>
                    </table>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Menu />
                <div class="tela">
                    <h2>Cadastro de Lojas</h2>
                    {this.renderCadastro()}
                </div>
            </div>
        )
    }
}

export default CadastroLojas;
