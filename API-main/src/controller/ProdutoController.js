import { Router } from 'express';
import produtoRepository from '../repository/produtoRepository.js';

const {
  cadastrarProduto,
  pesquisarProdutos,
  alterarProdutoPorID,
  consultarProdutoPorID,
  removerProdutoPorID
} = produtoRepository;

const endpoints = Router();

endpoints.put('/produto/alterar/:id', async (req, resp) => {
  try {
    const { id } = req.params;
    const {
      nm_produto,
      vl_preco_fis,
      ds_desc,
      vl_preco_pdf,
      vl_preco_kindle,
      vl_preco_promocional,
      bt_destaque,
      bt_promocao,
      bt_disponivel,
      qtd_estoque,
      bl_favorito,
    } = req.body;

    await alterarProdutoPorID(id, {
      nm_produto,
      vl_preco_fis,
      ds_desc,
      vl_preco_pdf,
      vl_preco_kindle,
      vl_preco_promocional,
      bt_destaque,
      bt_promocao,
      bt_disponivel,
      qtd_estoque,
      bl_favorito,
    });

    resp.status(200).send('Produto alterado com sucesso.');
  } catch (error) {
    resp.status(500).send({ erro: 'Ocorreu um erro ao alterar o produto.' + error.message  });
  }
});

endpoints.get('/produto/consultar/:id', async (req, resp) => {
  try {
    const { id } = req.params;
    const produto = await consultarProdutoPorID(id);

    if (!produto) {
      resp.status(404).send({ erro: 'Produto não encontrado.' });
    } else {
      resp.status(200).send(produto);
    }
  } catch (error) {
    resp.status(500).send({ erro: 'Ocorreu um erro ao consultar o produto.' + error.message  });
  }
});

endpoints.delete('/produto/remover/:id', async (req, resp) => {
  try {
    const { id } = req.params;
    const resultado = await removerProdutoPorID(id);

    if (resultado) {
      resp.status(200).send('Produto removido com sucesso.');
    } else {
      resp.status(404).send({ erro: 'Produto não encontrado.' });
    }
  } catch (error) {
    resp.status(500).send({ erro: 'Ocorreu um erro ao remover o produto.'  + error.message });
  }
});

endpoints.get('/produto/pesquisar', async (req, resp) => {
  try {
    const { pesquisa } = req.query;

    if (!pesquisa) {
      resp.status(400).send('Nenhum termo de pesquisa fornecido.');
      return;
    }

    const resultados = await pesquisarProdutos(pesquisa);

    if (resultados.length === 0) {
      resp.status(404).send({ erro: 'Nenhum produto encontrado para a pesquisa.' + error.message  });
    } else {
      resp.status(200).json(resultados);
    }
  } catch (error) {
    resp.status(500).send({ erro: 'Ocorreu um erro ao realizar a pesquisa.' + error.message  });
  }
});

export default endpoints;

