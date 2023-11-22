import './index.scss';

import CabecalhoAdm from '../../components/cabecalhoAdm';
import ldir from '../../assets/img/ldir.png';

export default function PedFin() {

    return(

        <div className='PedFin'>

            <CabecalhoAdm/>

            <div className='Meio'>

                <div className='cima'>

                    <h1>Pedidos finalizados</h1>

                </div>

                <div className='baixo'>

                    <div className='esquerda'>

                        <h2>Filtrar por:</h2>

                        <h1>Data:</h1>

                        <div className='cinza'>

                            <div className='row'>

                                <h1>De:</h1>

                                <input type='data' />

                            </div>

                            <div className='row'>

                                <h1>Até:</h1>

                                <input type='data' />

                            </div>

                        </div>

                        <h1>Quantidade:</h1>

                        <div className='cinza2'>

                            <div className='row2'>

                                <input type='checkbox' />

                                <p>1 item</p>

                            </div>

                            <div className='row2'>

                                <input type='checkbox' />

                                <p>2 itens</p>

                            </div>

                            <div className='row2'>

                                <input type='checkbox' />

                                <p>3 ou mais itens</p>

                            </div>

                        </div>

                        <h1>Valor do Produto:</h1>

                        <div className='cinza'>

                            <div className='row'>

                                <h1>De:</h1>

                                <input type='data' />

                            </div>

                            <div className='row'>

                                <h1>Até:</h1>

                                <input type='data' />

                            </div>

                        </div>

                    </div>

                    <div className='direita'>

                        <div className='d-row'>

                            <div className='card'>

                                <div className='livro'></div>

                                <div className='text'>

                                    <h3>Data: xx/xx/xx</h3>

                                    <h3>Valor: xx,xx</h3>

                                    <h3>Quantidade:</h3>

                                    <h3>x</h3>

                                </div>

                            </div>

                            <div className='card'>

                                <div className='livro'></div>

                                <div className='text'>

                                    <h3>Data: xx/xx/xx</h3>

                                    <h3>Valor: xx,xx</h3>

                                    <h3>Quantidade:</h3>

                                    <h3>x</h3>

                                </div>

                            </div>

                        </div>

                        <img src={ldir} alt='' />

                        <div className='d-row'>

                            <div className='card'>

                                <div className='livro'></div>

                                <div className='text'>

                                    <h3>Data: xx/xx/xx</h3>

                                    <h3>Valor: xx,xx</h3>

                                    <h3>Quantidade:</h3>

                                    <h3>x</h3>

                                </div>

                            </div>

                            <div className='card'>

                                <div className='livro'></div>

                                <div className='text'>

                                    <h3>Data: xx/xx/xx</h3>

                                    <h3>Valor: xx,xx</h3>

                                    <h3>Quantidade:</h3>

                                    <h3>x</h3>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}