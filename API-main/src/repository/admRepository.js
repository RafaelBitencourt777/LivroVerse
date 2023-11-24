import conexao from "./connection.js";

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
export async function criarContaAdm(nome, email, senha) {
    try {
        // Verifica se os dados obrigatórios foram fornecidos.
        if (!nome || !email || !senha) {
            throw new Error('Nome, email e senha são obrigatórios.');
        }

        // Verifica se o email já está registrado.
        const emailExistente = await verificarEmailExistente(email);
        if (emailExistente) {
            throw new Error('Email já cadastrado. Tente outro.');
        }

        // Insere o novo administrador no banco de dados.
        const sql = `INSERT INTO TB_Administrador (nm_administrador, ds_email, ds_senha) VALUES (?, ?, ?)`;
        const result = await conexao.query(sql, [nome, email, senha]);

        // Verifica se a inserção foi bem-sucedida.
        if (result.affectedRows === 1) {
            const novoAdministrador = {
                id_administrador: result.insertId,
                nm_administrador: nome,
                ds_email: email
            };

            // Não retorne a senha do administrador no objeto de retorno.
            delete novoAdministrador.ds_senha;

            return novoAdministrador;
        } else {
            throw new Error('Falha ao criar a conta de administrador.');
        }
    } catch (error) {
        console.error('Erro ao criar a conta de administrador:', error.message);
        throw error;
    }
}
async function verificarEmailExistente(email) {
    const sql = `SELECT COUNT(*) AS count FROM TB_Administrador WHERE ds_email = ?`;
    const [rows] = await conexao.query(sql, [email]);
    return rows[0].count > 0;
};
async function porra() {
    try {
      const sql = 'SELECT * FROM TB_Cliente';
      const [rows] = await conexao.query(sql);
      return rows;
    } catch (error) {
      throw ErrorMessage;
    }
};
export default {realizarLoginAdm , criarContaAdm, porra };