import './index.scss';

import user from '../../assets/img/useradm.png';
import up from '../../assets/img/cadastrar-img.png';
import axios from 'axios';

export default function CadastrarProd() {

    return(

        <div className='CadastrarProd'>

            <img className='cad-user' src={user} alt='' />

            <div className='cadp-quad'>

                <h1>Adicione um novo produto</h1>

                <div className='inps1'>

                    <input className='Cad-name' type='text' placeholder='Nome do Produto'/>

                    <input className='Cad-quant' type='number' placeholder='Quantidade'/>

                </div>

                <div className='inps2'>

                    <input className='Cad-cod' type='number' placeholder='Código'/>

                    <input className='Cad-est' type='number' placeholder='Estoque'/>

                    <input className='Cad-preco' type='number' placeholder='Preço'/>

                </div>

                <div className='inps3'>

                    <input className='Cad-desc' type='text' placeholder='Descrição do Produto'/>

                    <div className='inp-pe'>

                        <input className='Cad-gen' type='text' placeholder='Gênero do Produto'/>

                        <input className='Cad-img' placeholder='Imagem do Produto'/>
                        
                        <img src={up} alt=''/>
                        
                    </div>

                </div>

                <button>Cadastrar Produto</button>

            </div>

        </div>

    )
}