import conexao from "./connection.js";

// Função para inserir um novo cliente no banco de dados.
export async function inserirCliente(cliente) {
    try {
        // Verifica se todos os campos obrigatórios foram fornecidos.
        if (!cliente.nm_cliente || !cliente.ds_telefone || !cliente.ds_email || !cliente.ds_cpf || !cliente.ds_senha) {
            throw new Error('Todos os campos são obrigatórios.');
        }

        // Verifica se o e-mail fornecido é válido.
        if (!validaremail(cliente.ds_email)) {
            throw new Error('O e-mail informado não é válido.');
        }

        // Verifica se o campo id_assinatura está presente e é um número válido.
        if (!cliente.id_assinatura || !/^\d+$/.test(cliente.id_assinatura)) {
            throw new Error('ID de assinatura inválido. Verifique o valor inserido.');
        }
        
        

        // Cria uma consulta SQL para inserir o cliente com a assinatura.
        const sql = `INSERT INTO TB_Cliente
            (id_assinatura, nm_cliente, ds_telefone, ds_email, ds_cpf, ds_senha)
            VALUES (?, ?, ?, ?, ?, ?)`;

        // Executa a consulta e insere o cliente no banco de dados.
        const resp = await conexao.query(sql, [
            cliente.id_assinatura,
            cliente.nm_cliente,
            cliente.ds_telefone,
            cliente.ds_email,
            cliente.ds_cpf,
            cliente.ds_senha
        ]);

        const dados = resp[0];
        return dados;
    } catch (error) {
        console.error('Erro ao inserir cliente:', error.message);
        throw error;
    }
}


// Função para validar o formato de um e-mail.
function validaremail(email) {
    const email1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email1.test(email);
}

// Função para realizar o login do cliente.
export async function realizarLogin(email, senha) {
    try {
        // Verifica se o e-mail e a senha foram fornecidos.
        if (!email || !senha) {
            throw new Error('Email e senha são obrigatórios.');
        }

        // Cria uma consulta SQL para buscar o cliente com base no e-mail.
        const sql = `SELECT * FROM TB_Cliente WHERE ds_email = ?`;
        const [rows] = await conexao.query(sql, [email]);

        // Verifica se o cliente foi encontrado no banco de dados.
        if (rows.length === 0) {
            throw new Error('Cliente não encontrado.');
        }

        const cliente = rows[0];

        // Verifica se a senha fornecida corresponde à senha do cliente.
        if (senha !== cliente.ds_senha) {
            throw new Error('Senha incorreta.');
        }

        return cliente;
    } catch (error) {
        console.error('Erro ao realizar o login:', error.message);
        throw error;
    }
}

// Função para trocar a senha do cliente.
export async function trocarSenha(idCliente, senhaAntiga, novaSenha) {
    try {
        // Obtém o cliente com base no ID.
        const cliente = await obterClientePorId(idCliente);

        // Verifica se o cliente foi encontrado.
        if (!cliente) {
            throw new Error('Cliente não encontrado.');
        }

        // Verifica se a senha antiga corresponde à senha atual do cliente.
        if (senhaAntiga !== cliente.ds_senha) {
            throw new Error('Senha antiga incorreta.');
        }

        // Verifica o tamanho da nova senha.
        if (novaSenha.length < 8) {
            throw new Error('A senha nova deve ter no mínimo 8 caracteres');
        }

        // Cria uma consulta SQL para atualizar a senha do cliente.
        const sql = `UPDATE TB_Cliente SET ds_senha = ? WHERE id_cliente = ?`;
        const resp = await conexao.query(sql, [novaSenha, idCliente]);

        // Verifica se a senha foi atualizada com sucesso.
        if (resp.affectedRows === 0) {
            throw new Error('Falha ao atualizar a senha.');
        }

        return { message: 'Senha atualizada com sucesso.' };
    } catch (error) {
        console.error('Erro ao trocar a senha:', error.message);
        throw error;
    }
}
export default{trocarSenha,realizarLogin,validaremail,inserirCliente};