import conexao from "./connection.js";

// Função para realizar o login do administrador.
export async function realizarLoginAdm(email, senha) {
    try {
        // Verifica se o e-mail e a senha foram fornecidos.
        if (!email || !senha) {
            throw new Error('Email e senha são obrigatórios.');
        }

        // Cria uma consulta SQL para buscar o administrador com base no e-mail.
        const sql = `SELECT * FROM TB_Administrador WHERE ds_email = ?`;
        const [rows] = await conexao.query(sql, [email]);

        // Verifica se o administrador foi encontrado no banco de dados.
        if (rows.length === 0) {
            throw new Error('Administrador não encontrado.');
        }

        const adm = rows[0];

        // Verifica se a senha fornecida corresponde à senha do administrador.
        if (senha !== adm.ds_senha) {
            throw new Error('Senha incorreta.');
        }

        return adm;
    } catch (error) {
        console.error('Erro ao realizar o login do administrador:', error.message);
        throw error;
    }
}
export default {realizarLoginAdm}