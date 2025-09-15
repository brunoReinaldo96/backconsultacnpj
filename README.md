# 🔍 Consulta CNPJ - API Node.js

Este projeto é uma API simples desenvolvida com **Node.js** e **Express** que permite consultar informações de empresas brasileiras a partir do número do CNPJ, utilizando a [API pública da ReceitaWS](https://www.receitaws.com.br/).

---

## 🚀 Como funciona

A API recebe um número de CNPJ via rota HTTP GET e retorna os dados formatados da empresa, como razão social, nome fantasia, endereço, contatos e atividades econômicas.

---

## 📦 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [node-fetch](https://www.npmjs.com/package/node-fetch)

---

## 📄 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/brunoReinaldo96/backconsultacnpj.git
   cd backconsultacnpj


- Instale as dependências:
npm install
- Inicie o servidor:
npm start
- O servidor será iniciado em http://localhost:4000
🔗 EndpointGET /cnpj/:cnpjConsulta os dados de uma empresa pelo CNPJ.Exemplo:GET http://localhost:4000/cnpj/12345678000195
Resposta:{
  "razao_social": "Empresa Exemplo LTDA",
  "nome_fantasia": "Exemplo",
  "cnpj": "12.345.678/0001-95",
  "inscricao_estadual": "123456789",
  "logradouro": "Rua Exemplo",
  "numero": "123",
  "bairro": "Centro",
  "municipio": "São Paulo",
  "uf": "SP",
  "cep": "12345-678",
  "telefone": "(11) 1234-5678",
  "email": "contato@exemplo.com",
  "cnae_principal": "62.01-5-01",
  "atividade_principal": "Desenvolvimento de programas de computador",
  "atividades_secundarias": "62.02-3-00 - Consultoria em tecnologia da informação"
}
⚠️ Observações- A API da ReceitaWS possui limites de requisição por IP.
- Certifique-se de que o CNPJ enviado possui 14 dígitos numéricos.
- Em caso de erro, a API retorna mensagens claras como CNPJ inválido, CNPJ não encontrado ou Erro interno no servidor.
🧑‍💻 AutorBruno Reinaldo
GitHub: @brunoReinaldo96📃 LicençaEste projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
---

Se quiser, posso adaptar esse README para incluir instruções de deploy no Vercel, Heroku ou Docker. Também posso criar a versão em inglês se for útil para você. Só dizer!

