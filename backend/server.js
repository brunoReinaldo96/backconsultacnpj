import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/cnpj/:cnpj", async (req, res) => {
    const cnpj = req.params.cnpj.replace(/\D/g, "");

    if (cnpj.length !== 14) {
        return res.status(400).json({ error: "CNPJ inválido" });
    }

    try {
        const response = await fetch(
            `https://www.receitaws.com.br/v1/cnpj/${cnpj}`
        );

        if (!response.ok) {
            return res.status(404).json({ error: "CNPJ não encontrado" });
        }

        const data = await response.json();

        if (data.status === "ERROR") {
            return res.status(404).json({ error: "CNPJ não encontrado" });
        }

        // Formata os dados para o front-end
        // Formata os dados para o front-end
        const dadosFormatados = {
            razao_social: data.nome,
            nome_fantasia: data.fantasia,
            cnpj: data.cnpj,
            inscricao_estadual:
                data.inscricoes_estaduais
                    ?.map((i) => i.inscricao_estadual)
                    .join(", ") || "Não disponível",
            logradouro: data.logradouro,
            numero: data.numero,
            bairro: data.bairro,
            municipio: data.municipio,
            uf: data.uf,
            cep:
                data.cep?.replace(/^(\d{5})(\d{3})$/, "$1-$2") ||
                "Não disponível", // ✅ Aqui!
            telefone: data.telefone || "Não informado",
            email: data.email || "Não informado",
            cnae_principal:
                data.atividade_principal?.[0]?.code || "Não disponível",
            atividade_principal:
                data.atividade_principal?.[0]?.text || "Não disponível",
            atividades_secundarias:
                data.atividades_secundarias
                    ?.map((a) => `${a.code} - ${a.text}`)
                    .join("; ") || "Não disponível",
        };

        res.json(dadosFormatados);
    } catch (error) {
        console.error("Erro ao consultar ReceitaWS:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
