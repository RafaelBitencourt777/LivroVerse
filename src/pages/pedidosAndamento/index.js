import './index.scss';

import CabecalhoAdm from '../../components/cabecalhoAdm';
import ldir from '../../assets/img/ldir.png';
import pedrealiz from '../../assets/img/ped-realiz.png';
import pagconfirm from '../../assets/img/pag-confirm.png';
import pedemsep from '../../assets/img/ped-em-sep.png';
import pedtransp from '../../assets/img/ped-transp.png';

export default function PedidosAndamento() {

    return (

        <div className='PedidosAndamento'>

            <CabecalhoAdm/>

            <div className='Meio'>

                <div className='cima'>

                    <h1>Pedidos em Andamento</h1>

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

                            <a href='/detalhes-pedidos-andamento'>

                                <div className='card'>

                                    <div className='livro'></div>

                                    <div className='text'>

                                        <h3>Status:</h3>

                                        <h2>Pedido em Separação</h2>

                                        <img src={pedemsep} alt='' />

                                    </div>

                                </div>

                            </a>

                            <a href='/detalhes-pedidos-andamento'>

                                <div className='card'>

                                    <div className='livro'></div>

                                    <div className='text'>

                                        <h3>Status:</h3>

                                        <h2>Pedido na Transportadora</h2>

                                        <img src={pedtransp} alt='' />

                                    </div>

                                </div>

                            </a>

                        </div>

                        <img src={ldir} alt='' />

                        <div className='d-row'>

                            <a href='/detalhes-pedidos-andamento'>

                                <div className='card'>

                                    <div className='livro'></div>

                                    <div className='text'>

                                        <h3>Status:</h3>

                                        <h2>Pedido realizado</h2>

                                        <img src={pedrealiz} alt='' />

                                    </div>

                                </div>

                            </a>

                            <a href='/detalhes-pedidos-andamento'>

                                <div className='card'>

                                    <div className='livro'></div>

                                    <div className='text'>

                                        <h3>Status:</h3>

                                        <h2>Pagamento Confirmado</h2>

                                        <img src={pagconfirm} alt='' />

                                    </div>

                                </div>

                            </a>

                        </div>

                    </div>

                </div>

            </div>


        </div>

    )
}