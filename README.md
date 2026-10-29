# Marcion
# 🌱 Marcion | AgroPedidos

### Sistema de gerenciamento de pedidos e produtos para vendedores de campo

O **Marcion**, com identidade visual **AgroPedidos**, é um projeto de desenvolvimento de software voltado à gestão de pedidos comerciais, produtos e clientes, com foco em empresas que trabalham com vendedores externos.

O projeto surgiu a partir da observação de uma dificuldade real: vendedores de campo que ainda utilizam papel para registrar pedidos, tornando o processo de organização, consulta e transferência das informações mais trabalhoso.

A proposta é desenvolver uma solução que centralize essas informações, facilite o gerenciamento comercial e, futuramente, permita que vendedores realizem pedidos pelo celular, mesmo sem conexão com a internet.

## 🎯 Objetivo do projeto

Desenvolver uma aplicação que permita:

- Cadastrar e gerenciar produtos.
- Cadastrar e consultar clientes.
- Registrar pedidos com múltiplos produtos.
- Calcular automaticamente os valores dos pedidos.
- Centralizar as informações comerciais em um sistema web.
- Futuramente, integrar um aplicativo mobile para vendedores externos.

Além de resolver um problema real, o projeto tem como objetivo aplicar conhecimentos de desenvolvimento **Full Stack**, modelagem de banco de dados, APIs REST e arquitetura de software.

## 🛠️ Tecnologias utilizadas

### Backend
- C#
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- Swagger / OpenAPI
- API REST
- DTOs (Data Transfer Objects)

### Frontend
- React
- TypeScript
- Vite
- HTML5
- CSS3

### Ferramentas
- Git e GitHub
- Visual Studio Code

## ⚙️ Funcionalidades

### ✅ Backend — MVP desenvolvido

**Gerenciamento de produtos**
- Cadastro de novos produtos.
- Listagem e consulta por identificador.
- Atualização de informações.
- Exclusão de produtos.
- Armazenamento de preço unitário e estoque.

**Gerenciamento de clientes**
- Cadastro de clientes.
- Consulta de informações.
- Atualização cadastral.
- Exclusão de clientes.
- Registro de dados de contato e endereço.

**Gerenciamento de pedidos**
- Criação de pedidos vinculados a clientes.
- Inclusão de múltiplos produtos em um pedido.
- Verificação da existência de clientes e produtos.
- Cálculo automático do subtotal de cada item.
- Cálculo do valor total do pedido.
- Registro da data de criação.
- Consulta, atualização e exclusão de pedidos.

### 🚧 Frontend — Em desenvolvimento

O frontend está sendo desenvolvido com React e TypeScript, com uma interface voltada à organização e à facilidade de utilização.

Funcionalidades e telas em desenvolvimento:

- Navegação por barra lateral.
- Página de gerenciamento de produtos.
- Pesquisa e filtragem de produtos.
- Componentes interativos de listagem.
- Interface para clientes e pedidos.
- Integração com os endpoints da API.

## 🏗️ Estrutura e arquitetura

A aplicação está sendo desenvolvida com separação entre frontend, backend e banco de dados.

**Frontend (React + TypeScript)**

Responsável pela interface e pelas interações com o usuário.

↓

**Backend (ASP.NET Core Web API)**

Responsável por receber requisições, aplicar validações, processar pedidos e disponibilizar dados por meio de endpoints REST.

↓

**Entity Framework Core**

Responsável pelo mapeamento das entidades e pela comunicação com o banco de dados.

↓

**SQL Server**

Responsável pela persistência dos produtos, clientes, pedidos e itens.

## 🗃️ Modelagem do banco de dados

O sistema utiliza quatro entidades principais:

| Entidade | Responsabilidade |
|---|---|
| Produto | Armazena produtos, preços e estoque. |
| Cliente | Armazena informações cadastrais dos clientes. |
| Pedido | Registra o cliente, a data e o valor total da compra. |
| ItemPedido | Relaciona produtos aos pedidos, registrando quantidade, preço e subtotal. |

Um cliente pode possuir vários pedidos, e cada pedido pode conter diversos itens.

A entidade `ItemPedido` permite registrar os produtos associados a cada pedido e seus respectivos valores.

## 🔄 Exemplo de funcionamento

O processo de criação de um pedido na API segue as seguintes etapas:

1. O sistema recebe uma solicitação contendo o cliente e os produtos escolhidos.
2. A API verifica se o cliente e os produtos existem.
3. Os itens do pedido são montados com suas quantidades e preços unitários.
4. O subtotal de cada item é calculado.
5. O valor total do pedido é obtido pela soma dos subtotais.
6. O pedido e seus itens são persistidos no banco de dados.
7. A API retorna os dados do pedido criado.

## 🗺️ Roadmap

- [x] Modelagem inicial do banco de dados.
- [x] Criação da API REST.
- [x] CRUD de produtos.
- [x] CRUD de clientes.
- [x] CRUD de pedidos.
- [x] Cálculo automático dos valores dos pedidos.
- [x] Documentação e testes de endpoints com Swagger.
- [ ] Finalização da interface web.
- [ ] Integração do frontend com a API.
- [ ] Implementação de autenticação com JWT.
- [ ] Desenvolvimento do aplicativo mobile com React Native.
- [ ] Armazenamento local para funcionamento offline.
- [ ] Sincronização de pedidos entre aplicativo e sistema central.

## 📱 Visão futura

A proposta de longo prazo é dividir o sistema em duas aplicações integradas:

**1. Programa Central (Web)**

Utilizado pela empresa para cadastrar produtos, administrar clientes e gerenciar os pedidos recebidos.

**2. Aplicativo do Vendedor (Mobile)**

Utilizado pelos vendedores externos para consultar produtos, selecionar clientes e registrar pedidos durante suas visitas.

Um dos objetivos principais é permitir o funcionamento offline, armazenando os pedidos localmente e sincronizando-os com o sistema central quando houver conexão com a internet.

## 📚 Aprendizados

O desenvolvimento do Marcion tem proporcionado experiências práticas com:

- Construção de APIs REST utilizando ASP.NET Core.
- Modelagem de entidades e relacionamentos.
- Persistência de dados com Entity Framework Core.
- Utilização de migrations.
- Criação e utilização de DTOs.
- Validação de dados e regras de negócio.
- Manipulação de listas e relacionamentos entre entidades.
- Desenvolvimento de interfaces com React e TypeScript.
- Gerenciamento de estado e renderização dinâmica de componentes.
- Versionamento de código utilizando Git e GitHub.

## 📌 Status do projeto

**Em desenvolvimento.**

O MVP do backend foi concluído. Atualmente, o desenvolvimento está concentrado na construção do frontend web e na preparação da integração entre a interface e a API.

O projeto está sendo desenvolvido de forma incremental, com melhorias e novas funcionalidades planejadas para as próximas etapas.

---

**Desenvolvido por Arthur Naves**

Estudante de Sistemas de Informação, com foco em desenvolvimento de software e aprendizado prático de tecnologias Full Stack.

**GitHub:** https://github.com/ArthurNavex
