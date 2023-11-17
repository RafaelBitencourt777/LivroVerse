import conexao from "./connection.js"; 

export async function alterarImagem(idFilme, novaImagem) {
  try {
    const comando = `UPDATE tb_produto_img SET img_produto   = ? WHERE id_produto = ?`;
    const resposta = await con.query(comando, [novaImagem, idFilme]);
    return resposta.affectedRows;
  } catch (error) {
    throw new Error(`Erro ao alterar a imagem do filme: ${error.message}`);
  }
}


// Função para cadastrar um produto.
async function cadastrarProduto(produto) {
  try {
    const sql = 'INSERT INTO tb_produto (id_categoria, id_avaliacao, nm_produto, vl_preco_fis, ds_desc, vl_preco_pdf, vl_preco_kindle, vl_preco_promocional, bt_destaque, bt_promocao, bt_disponivel, qtd_estoque, bl_favorito) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      produto.id_categoria,
      produto.id_avaliacao,
      produto.nm_produto,
      produto.vl_preco_fis,
      produto.ds_desc,
      produto.vl_preco_pdf,
      produto.vl_preco_kindle,
      produto.vl_preco_promocional,
      produto.bt_destaque,
      produto.bt_promocao,
      produto.bt_disponivel,
      produto.qtd_estoque,
      produto.bl_favorito
    ];

    const [result] = await conexao.query(sql, values);
    return result.insertId; // Retorna o ID do produto cadastrado.
  } catch (error) {
    throw error;
  }
}

// Função para alterar um produto por ID.
async function alterarProdutoPorID(id, novosDados) {
  try {
    const sql = 'UPDATE tb_produto SET ? WHERE id_produto = ?';
    const [result] = await conexao.query(sql, [novosDados, id]);
    return result.affectedRows > 0; // Retorna true se algum registro foi atualizado.
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
    return result.affectedRows > 0; // Retorna true se algum registro foi removido.
  } catch (error) {
    throw error;
  }
}
async function pesquisarProdutos(pesquisa) {
  try {
    const sql = 'SELECT * FROM tb_produto WHERE nm_produto LIKE ?';
    const [rows] = await conexao.query(sql, [`%${pesquisa}%`]);
    return rows;
  } catch (error) {
    throw error;
  }
}

export default { alterarImagem,cadastrarProduto, pesquisarProdutos,alterarProdutoPorID, consultarProdutoPorID, removerProdutoPorID };
