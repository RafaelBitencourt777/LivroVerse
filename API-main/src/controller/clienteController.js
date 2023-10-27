import { Router } from 'express';
import {
  inserirCliente,
  realizarLogin,
} from '../repository/clienteRepository.js';

const endpoints = Router();

endpoints.post('/cliente/cadastro', async (req, resp) => {
  let cliente = req.body;

  try {
    let dados = await inserirCliente(cliente);
    resp.send(dados);
  } catch (error) {
    resp.status(400).send(error.message);
  }
});

endpoints.post('/cliente/login', async (req, resp) => {
  try {
    const { ds_email, ds_senha } = req.body;

    const cliente = await realizarLogin(ds_email, ds_senha);

    resp.status(200).send(cliente);
  } catch (error) {
    resp.status(401).send({ erro: 'Credenciais inválidas.'  + error.message });
  }
});

export default endpoints;
