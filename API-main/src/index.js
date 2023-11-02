import 'dotenv/config';
import Express from 'express';
import cors from 'cors';

import admEndpoints from './controller/admController.js';
import clienteEndpoints from './controller/clienteController.js';
import produtoEndpoints from './controller/ProdutoController.js';

const servidor = Express();
servidor.use(cors());
servidor.use(Express.json());


servidor.use(admEndpoints); 
servidor.use(clienteEndpoints); 
servidor.use(produtoEndpoints); 

servidor.listen(process.env.MYSQL_PORT, () => console.log('API SUBIU!!!! AEEEEEEEEEE'));

