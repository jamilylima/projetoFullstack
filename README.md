# projetoFullstack


# Sobre a aplicação

Foi desenvolvida durante a conclusão do módulo 6 do curso de desenvolvimento full stack da Kenzie Academy. A aplicação se propõe em um cadastro de clientes que poderá conter muitos contatos associados.

*É necessário cadastrar um usuário apenas por insomnia na rota /user, logar e assim cadastrar os clientes para a aplicação front end.*


# Features Back
-Cadastro e login de usúario
-Cadastro e login de clientes
-Cadastro de contatos 

# Features Front
-login Cliente
-Cadastro dos contatos
-Listar contatos



# Tecnologias Back

Node.js
Express
TypesORM
PostgreSQL
TypeScript


# Tecnologias Front

JavaScript
React


# Instalação e uso

Faça o fork do repositório e em seguida execute o comando git clone para clonar o projeto para seu dispositivo. Dentro da pasta do projeto, execute o comando abaixo para instalar todas as dependências da aplicação.

yarn install



# Utilizando um banco de dados local

É possível executar a aplicação localmente, utilizando um banco de dados PostgreSQL.

Para isto, basta editar o arquivo .env.example e alterar as linhas:

SECRET_KEY=
DATABASE_URL="postgres://<username>:<password>@<host>:<port>/<database>"
Em SECRET_KEY, insira os dados da secret key que pretende utilizar - é possível utilizar qualquer string como a secret key.

Em DATABASE_URL, substitua os dados username, password e database pelas informações do seu banco de dados PostgreSQL. Substitua host e port pelos valores de sua preferência. Exemplo:

SECRET_KEY=123456
DATABASE_URL="postgres://admin:1234@localhost:5432/dados"

Em seguida, altere o nome do arquivo de .env.example para .env. Para executar a aplicação, utilize o comando:

yarn dev



# Rotas

/POST /user cria um usuario de login
{
    "name": "teste"
	"email": "teste@mail.com",
	"password": "1234"
}


/POST /user - Loga um usuario retornando um token
{
	"email": "email1@mail.com",
	"password": "12341234"
}

-------------------------------------------------


/POST /cliente -Cadastro de clientes, Auth bearer token de user, apenas por insonmia
{
	"name":"spp",
	"email":"test@gmail.com",
	"password":"1234",
	"telefone":"9837265356"
}


/POST /cliente - Loga um cliente retornando um token 
{
    "name":"spp",
	"email":"test@gmail.com",
}

/GET /cliente - Lista todos os clientes 
/GET /cliente/:id - Lista  cliente por Id
/PATCH/cliente/:id - Atualiza clientes por Id

-------------------------------------------------


/POST /contatos/:clienteId - Cadastro de contatos, Auth bearer token 
{
	"name":"teste",
	"telefone":"9934774662"
	"email":"teste@kenzies.com"
}


/GET /contatos - Lista todos os contatos do cliente ,Auth bearer token 
/PATCH /contatos/:id Atualiza dados do contato, Auth bearer token 
/DELETE /contatos/:id Deleta os contatos Auth bearer token

