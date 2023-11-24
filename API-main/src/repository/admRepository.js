import conexao from "./connection.js";

export async function realizarLoginAdm(email, senha) {
  try {
    if (!email || !senha) {
      throw new Error('Email e senha são obrigatórios.');
    }

    const sql = `SELECT * FROM TB_Administrador WHERE ds_email = ?`;
    const [rows] = await conexao.query(sql, [email]);

    if (rows.length === 0) {
      throw new Error('Administrador não encontrado.');
    }

    const adm = rows[0];

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
    if (!nome || !email || !senha) {
      throw new Error('Nome, email e senha são obrigatórios.');
    }

    const emailExistente = await verificarEmailExistente(email);
    if (emailExistente) {
      throw new Error('Email já cadastrado. Tente outro.');
    }

    const sql = `INSERT INTO TB_Administrador (nm_administrador, ds_email, ds_senha) VALUES (?, ?, ?)`;
    const result = await conexao.query(sql, [nome, email, senha]);

    if (result.affectedRows === 1) {
      const novoAdministrador = {
        id_administrador: result.insertId,
        nm_administrador: nome,
        ds_email: email
      };

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


  
  export default { realizarLoginAdm, criarContaAdm,  };