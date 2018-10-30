# Magalu Finder

Aplicaçao em React para acessar a API magalu-finder-api através de administrador e cliente

## Proposta do projeto
#### Descrição do desafio
Você precisa comprar um presente para a sua namorada, porém nenhum
e-commerce entrega no prazo que você precisa. Sendo assim você precisa
descobrir quais lojas do Magalu , que tenham o produto que sua namorada tanto
deseja, estão mais próximas. Para resolver este problema ,você decide criar uma
solução: magalu-finder

#### Problema que o magalu-finder resolverá
Ajudar os clientes do Magalu a encontrarem as lojas mais próximas que possuem o
produto desejado.

#### Funcionalidade 1: Gestor de lojas
Como administrador do magalu-finder, gostaria de registrar lojas do Magalu para ajudar os clientes encontrarem as lojas mais próximas
#### Detalhes:
 * As lojas devem ter uma descrição, um código (Número da filial) e um CEP

#### Funcionalidade 2: Gestor de produtos vendidos por lojas
Como administrador do magalu-finder
Gostaria de registrar os produtos que cada uma das lojas vendem no momento para ajudar os clientes a saberem qual loja vende o produto desejado
#### Detalhes:
* Os produtos vendidos em cada loja devem ter Código do produto, Descrição e Valor de venda

#### Funcionalidade 3: Prover lojas mais próximas que
possuem o produto
Como cliente do magalu-finder, gostaria de saber quais lojas, que tenham o produto que procuro, estão mais próximas, para que consiga receber meu produto rapidamente em mãos
#### Detalhes:
* O cliente deve fornecer o código ou a descrição do produto e sua posição geográfica ou CEP para conseguir pesquisar
* A pesquisa deve retornar lojas que estão mais próximas do cliente,
ordenadas em ordem crescente
* Deve ser possível visualizar as seguintes informações na pesquisa:
Descrições das lojas, códigos das lojas, preço do produto procurado e a
distância, em quilômetros, do cliente

## Instalação

### Dependências
Todas as dependências estão referenciadas no package.json

Para executar a aplicação localmente, execute os seguintes comandos na pasta do projeto:

``` javascript
> npm install
> npm start
```
A aplicação estará rodando em [http://localhost:3000]

A API deverá estar rodando em [http://localhost:4000]

## Telas

### Administrativo > CadastroLojas
#### Cadastro de Lojas
![tela](https://raw.githubusercontent.com/kairoLamarca/magalu-finder/master/public/screenshots/adm_cadastro_lojas.png)

Ao clicar no botão **Nova Loja** abre o formulário para preencher os dados
![novaLoja](https://raw.githubusercontent.com/kairoLamarca/magalu-finder/master/public/screenshots/adm_cadastro_lojas_novaloja.png)

Clique no botão **Gravar** para salvar os dados informados
![gravar](https://raw.githubusercontent.com/kairoLamarca/magalu-finder/master/public/screenshots/adm_cadastro_lojas_gravar.png)

Os botões **Excluir** e **Alterar** existem para cada resgistro da tabela
Ao clicar em **Excluir**, apaga o registro respectivo à linha da tabela
Ao clicar em **Alterar**, abre a tela de cadastro com os dados respectivo à linha da tabela 

### Administrativo > CadastroProdutos
#### Cadastro de Produtos
![tela](https://raw.githubusercontent.com/kairoLamarca/magalu-finder/master/public/screenshots/adm_cadastro_produtos.png)

Ao clicar no botão **Novo Produto** abre o formulário para preencher os dados
![novoProduto](https://raw.githubusercontent.com/kairoLamarca/magalu-finder/master/public/screenshots/adm_cadastro_produtos_novoproduto.png)

Clique no botão **Gravar** para salvar os dados informados

Os botões **Excluir** e **Alterar** existem para cada resgistro da tabela
Ao clicar em **Excluir**, apaga o registro respectivo à linha da tabela
Ao clicar em **Alterar**, abre a tela de cadastro com os dados respectivo à linha da tabela 

### Administrativo > VinculoProdutoLoja
#### Vincular produtos com lojas
![tela](https://raw.githubusercontent.com/kairoLamarca/magalu-finder/master/public/screenshots/adm_vinculo.png)
Ao clicar em **Pesquisar produto**, será pesquisado produto de acordo com o código informado, para em seguida aparecer a tela de vínculo preenchida

![vincular](https://raw.githubusercontent.com/kairoLamarca/magalu-finder/master/public/screenshots/adm_vinculo_vincular.png)
Após slecionar a loja que será vinculada, clique em **Vincular produto** e será criado um novo vínculo

O botão **Excluir** existe para cada resgistro da tabela e ao clicar nele, apaga o registro respectivo à linha da tabela

### Cliente > PesquisaProduto
#### Pesquisar Produto