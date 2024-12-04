# Frontend - Gerenciador de Eventos (React)

## Descrição
Este projeto é a interface frontend para um gerenciador de eventos, onde os usuários podem criar e listar eventos.

## Tecnologias Utilizadas
- React.js
- Axios (para fazer requisições HTTP)
- Material UI (para estilização)

## Como Rodar o Frontend
1. Clone este repositório.
2. Navegue até a pasta do frontend.
3. Execute o comando abaixo para instalar as dependências:
    ```bash
    npm install
    ```
4. Execute o comando abaixo para rodar o servidor de desenvolvimento:
    ```bash
    npm start
    ```
5. O frontend estará rodando em `http://localhost:3000`.

## Funcionalidades
- Criar novos eventos através de um formulário.
- Listar todos os eventos cadastrados.

## Requisição ao Backend
O frontend se comunica com o backend (Spring Boot) utilizando as APIs definidas:
- **POST /events**: Envia os dados para criar um evento.
- **GET /events**: Recupera a lista de eventos.

## Estilização
O projeto utiliza o **Material UI** para tornar a interface mais agradável.