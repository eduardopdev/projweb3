## Sobre o Trabalho

O presente trabalho foi feito em 2021 para a disciplina de Sistemas Web 3. O objetivo era colocar em práticas conhecimentos adquiridos ao longo do curso de Sistemas de Informação, especialmente envolvendo estudos de Sistemas Web.

O projeto de sistema consiste em implementar uma API Restful com CRUD. As tecnologias utilizadas foram:

- Node.js
- MongoDB (Atlas)

<hr />

## Instalando o sistema

Clone o repositório

    git clone https://github.com/eduardopdev/projweb3.git

Navegue até a pasta do repositório

    cd projweb3

Instale todas as dependências

    npm install express nodemon mongoose
 
Para conectar ao seu banco de dados Mongo, troque o DB_USER e DB_PASSWORD no arquivo [dbConnection.js](https://github.com/eduardopdev/projweb3/blob/main/config/dbConnection.js). Em moongose.connect(), coloque o endereço de conexão com seu banco de dados Atlas.
    
Execute o projeto

    npm start

<hr />

## Contribuição

O presente trabalho foi desenvolvidos pelos alunos Eduardo Pereira e Matheus Ritton.
