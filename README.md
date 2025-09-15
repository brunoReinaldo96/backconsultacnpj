# Consulta CNPJ API

Este projeto é uma API simples em Node.js + Express que permite consultar informações de empresas a partir do CNPJ, utilizando a API pública da ReceitaWS.

## Tecnologias utilizadas
- Node.js
- Express
- CORS
- node-fetch

## Instalação

Clone o repositório e instale as dependências:

git clone https://github.com/seu-usuario/seu-repositorio.git  
cd seu-repositorio  
npm install  

## Como executar

Inicie o servidor com:

node index.js  

O servidor rodará em:  
http://localhost:4000  

## Rotas disponíveis

GET /cnpj/:cnpj  
Consulta informações de um CNPJ.  

Exemplo de requisição:  
GET http://localhost:4000/cnpj/00000000000191  

Exemplo de resposta:  
{
  "razao_social": "EMPRESA EXEMPLO LTDA",
  "nome_fantasia": "EMPRESA EXEMPLO",
  "cnpj": "00.000.000/0001-91",
  "inscricao_estadual": "123456789",
  "logradouro": "Rua Exemplo",
  "numero": "100",
  "bairro": "Centro",
  "municipio": "São Paulo",
  "uf": "SP",
  "cep": "01000-000",
  "telefone": "(11) 1234-5678",
  "email": "contato@empresa.com",
  "cnae_principal": "62.01-1-00",
  "atividade_principal": "Desenvolvimento de programas de computador sob encomenda",
  "atividades_secundarias": "62.09-1-00 - Suporte técnico, manutenção e outros serviços em TI"
}

## Observações
- O ReceitaWS possui limite de requisições gratuitas por dia.  
- Informe um CNPJ válido (14 dígitos).  
- Caso o CNPJ não seja encontrado, a API retornará um erro.  

---

Desenvolvido para fins de estudo e prática com Node.js e APIs.
