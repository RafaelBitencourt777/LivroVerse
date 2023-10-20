import './index.scss';

import Cabecalho from '../../components/cabecalho/index.js';
import Rodape from '../../components/rodape/index.js';
import caminho from '../../assets/img/a-caminho.png';
import entregue from '../../assets/img/entregue.png';
import pagconfirm from '../../assets/img/pag-confirm.png';
import pedsep from '../../assets/img/ped-em-sep.png';
import pedrealiz from '../../assets/img/ped-realiz.png';
import pedtrnsp from '../../assets/img/ped-transp.png';
import verificar from '../../assets/img/verificar.png';
import voltar from '../../assets/img/setavoltar.png';
import StarRating from '../avlstars/star';


export default function AcompPedido(){
    return(


        <div className='AcompPedido'>

            <Cabecalho/>

            <div className='Meio'>

                <div className='a-quadro'>

                    <div className='a-cima'>

                        <a href='previsualizaçao'>
                            <img alt='' src={voltar} />
                        </a>

                        <div className='a-text'>

                            <h1>Seu pedido está a caminho!</h1>

                            <p>Estamos muito felizes com a sua escolha. Aproveite bastante seu produto e esperamos te ver novamente em breve.<br/><br/>Conte conosco!
                            </p>

                        </div>

                    </div>

                    <div className='a-baixo'>

                        <div className='a-esquerda'>

                            <p>Previsão de entrega: 13/06/2023</p>

                            <div className='img-livro'>

                            </div>

                        </div>

                        <div className='a-direita'>

                            <div className='a-text-g'>

                                <div className='a-titulo'>

                                    <h1>Nome do Livro</h1>

                                    <h2>Por <label>Autor do Livro</label></h2>

                                </div>

                                <h1>Preço</h1>

                            </div>

                            <div className='avl-uni'>

                                <div className='avl'>

                                    <h3>Avaliações:</h3>
                                    <StarRating/>

                                </div>

                                <div className='unid'>

                                    <h3>Unidades:</h3>
                                    <h3>1</h3>

                                </div>

                            </div>

                            <div className='caminho'>

                                <div className='status'>

                                    <h3>Pedido <br/> Realizado</h3>

                                    <img className='a-i' src={pedrealiz} alt='' />

                                    <img className='v' src={verificar} alt='' />

                                    <hr></hr>

                                    <p>20/05</p>

                                </div>

                                <div className='status'>

                                    <h3>Pagamento <br/> Confirmado</h3>

                                    <img className='a-i' src={pagconfirm} alt='' />

                                    <img className='v' src={verificar} alt='' />

                                    <hr></hr>

                                    <p>20/05</p>

                                </div>

                                <div className='status-2'>

                                    <h3>Pedido em <br/> Separação</h3>

                                    <img className='a-i' src={pedsep} alt='' />

                                    <img className='v' src={verificar} alt='' />

                                    <hr></hr>

                                    <p>21/05</p>

                                </div>

                                <div className='status-2'>

                                    <h3>Pedido na <br/> Transportadora</h3>

                                    <img className='a-i' src={pedtrnsp} alt='' />

                                    <img className='v' src={verificar} alt='' />

                                    <hr></hr>

                                    <p>24/05</p>

                                </div>

                                <div className='status-3'>

                                    <h3>A caminho</h3>

                                    <img className='a-i' src={caminho} alt='' />

                                    <img className='v' src={verificar} alt='' />

                                    <hr></hr>

                                    <p>26/05</p>

                                </div>

                                <div className='status-4'>

                                    <h3>Pedido <br/> Entregue</h3>

                                    <img className='a-i' src={entregue} alt='' />

                                    <img className='v' src={verificar} alt='' />

                                    <hr></hr>

                                    <p>29/05</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Rodape/>

        </div>
    )
}