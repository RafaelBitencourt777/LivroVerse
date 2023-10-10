import conexao from "./connection.js"; 



// Função para cadastrar um produto.
async function cadastrarProduto(produto) {
  try {
    const sql = 'INSERT INTO tb_produto SET ?';
    const [result] = await conexao.query(sql, produto);
    return result[0].insertId; // Retorna o ID do produto cadastrado.
  } catch (error) {
    throw error;
  }
}

// Função para alterar um produto por ID.
async function alterarProdutoPorID(id, novosDados) {
  try {
    const sql = 'UPDATE tb_produto SET ? WHERE id_produto = ?';
    const [result] = await conexao.query(sql, [novosDados, id]);
    return result[0].affectedRows > 0; // Retorna true se algum registro foi atualizado.
  } catch (error) {
    throw error;
  }
}

// Função para consultar um produto por ID.
async function consultarProdutoPorID(id) {
  try {
    const sql = 'SELECT * FROM tb_produto WHERE id_produto = ?';
    const [rows] = await conexao.query(sql, id);

    if (rows.length === 0) {
      return null; // Produto não encontrado.
    }

    return rows[0]; // Retorna o primeiro resultado.
  } catch (error) {
    throw error;
  }
}

// Função para remover um produto por ID.
async function removerProdutoPorID(id) {
  try {
    const sql = 'DELETE FROM tb_produto WHERE id_produto = ?';
    const [result] = await conexao.query(sql, id);
    return result[0].affectedRows > 0; // Retorna true se algum registro foi removido.
  } catch (error) {
    throw error;
  }
}

export { cadastrarProduto, alterarProdutoPorID, consultarProdutoPorID, removerProdutoPorID };
