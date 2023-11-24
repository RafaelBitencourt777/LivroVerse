import { Router } from 'express';
import { realizarLoginAdm, criarContaAdm, listar } from '../repository/admRepository.js';

const endpoints = Router();

endpoints.post('/adm/login', async (req, resp) => {
  try {
    const { ds_email, ds_senha } = req.body;
    const administrador = await realizarLoginAdm(ds_email, ds_senha);
    resp.status(200).send(administrador);
  } catch (error) {
    resp.status(401).send({ erro: 'Credenciais de administrador inválidas.' });
  }
});

endpoints.get('/adm/usuarios', async (req, resp) => {
  try {
    const usuarios = await listar();

    if (usuarios.length === 0) {
      resp.status(200).end();
    } else {
      resp.status(200).json(usuarios);
    }
  } catch (error) {
    resp.status(500).send({ erro: 'Ocorreu um erro ao obter a lista de usuários.' + error.message });
  }
});

endpoints.post('/adm/criar-conta', async (req, resp) => {
  try {
    const { nm_administrador, ds_email, ds_senha } = req.body;
    const novoAdministrador = await criarContaAdm(nm_administrador, ds_email, ds_senha);
    resp.status(201).send(novoAdministrador);
  } catch (error) {
    resp.status(400).send({ erro: error.message });
  }
});

export default endpoints;