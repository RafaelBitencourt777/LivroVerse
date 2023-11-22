import { Router } from 'express';
import { realizarLoginAdm } from '../repository/admRepository.js';

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
