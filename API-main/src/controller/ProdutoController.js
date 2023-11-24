import { Router } from 'express';
import produtoRepository from '../repository/produtoRepository.js';
import multer from 'multer';

const {
  alterarImagem,
  cadastrarProduto,
  pesquisarProdutos,
  alterarProdutoPorID,
  consultarProdutoPorID,
  removerProdutoPorID,
  listarLivros
} = produtoRepository;

const endpoints = Router();
const upload = multer({dest: 'storages/capaslivros'});

endpoints.get('/landing-page', async (req, resp) => {
  try {
    const produtos = await produtosParaLandingPage();

    if (produtos.length === 0) {
      resp.status(404).send({ erro: 'Nenhum produto encontrado para a landing page.' });
    } else {
      resp.status(200).json(produtos);
    }
  } catch (error) {
    resp.status(500).send({ erro: 'Ocorreu um erro ao obter dados para a landing page.' + error.message });
  }
});


endpoints.put('/produto/:id/imagem', upload.single('capalivros'), async (req, resp) => {
  try { 
      const {id}= req.params;
      const imagem = req.file.path;

   const resultadoAlteracao = await alterarImagem(id, imagem);

    resp.status(200).send({
      mensagem: 'Imagem do livro alterada com sucesso!',
      resultado: resultadoAlteracao,
    });
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});


endpoints.post('/produto/cadastrar', async (req, resp) => {
  try {
    const {
      id_categoria,
      id_avaliacao,
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

    const produtoParaCadastrar = {
      id_categoria,
      id_avaliacao,
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
    };

    const produtoId = await cadastrarProduto(produtoParaCadastrar);

    resp.status(201).send({ id: produtoId, mensagem: 'Produto cadastrado com sucesso.' });
  } catch (error) {
    resp.status(500).send({ erro: 'Ocorreu um erro ao cadastrar o produto.' + error.message });
  }
});

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

endpoints.get('/produtos', async (req, res) => {
  try {
    const livros = await listarLivros(); 
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).send({ erro: 'Ocorreu um erro ao listar os livros.' + error.message });
  }
});