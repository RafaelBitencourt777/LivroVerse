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

export default endpoints;
