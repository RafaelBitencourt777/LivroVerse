import 'dotenv/config';
import Express from 'express';
import cors from 'cors';

import admEndpoints from './controller/admController.js';
import clienteEndpoints from './controller/clienteController.js';
import produtoEndpoints from './controller/ProdutoController.js';

const servidor = Express();
servidor.use(cors());
servidor.use(Express.json());

servidor.use('/adm', admEndpoints); // Use um nome de rota exclusivo
servidor.use('/cliente', clienteEndpoints); // Use um nome de rota exclusivo
servidor.use('/produto', produtoEndpoints); // Use um nome de rota exclusivo

servidor.listen(process.env.PORT, () => console.log('API SUBIU!!!! AEEEEEEEEEE'));
