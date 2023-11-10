import './index.scss';

import user from '../../assets/img/useradm.png';

export default function CadastrarProd() {

    return(

        <div className='CadastrarProd'>

            <img className='cad-user' src={user} alt='' />

            <div className='cadp-quad'>

                <h1>Adicione um novo produto</h1>

                <div className='inps1'>

                    <input className='Cad-name' type='text' placeholder='Nome do Produto'></input>

                    <input className='Cad-quant' type='number' placeholder='Quantidade'></input>

                </div>

                <div className='inps2'>

                    <input type='number' placeholder='Código'></input>

                    <input type='number' placeholder='Estoque'></input>

                    <input type='number' placeholder='Preço'></input>

                </div>

                <div className='inps3'>

                    <input type='text' placeholder='Descrição do Produto'></input>

                    <div className='inp-pe'>

                        <input type='text' placeholder='Gênero do Produto'></input>

                        <input placeholder='Imagem do Produto'></input>

                    </div>

                </div>

                <button>Cadastrar Produto</button>

            </div>

        </div>

    )
}