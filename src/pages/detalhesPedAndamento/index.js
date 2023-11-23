import './index.scss';

import CabecalhoAdm from '../../components/cabecalhoAdm';
import caminho from '../../assets/img/a-caminho.png';
import entregue from '../../assets/img/entregue.png';
import pagconfirm from '../../assets/img/pag-confirm.png';
import pedsep from '../../assets/img/ped-em-sep.png';
import pedrealiz from '../../assets/img/ped-realiz.png';
import pedtrnsp from '../../assets/img/ped-transp.png';
import verificar from '../../assets/img/verificar-acomp.png';
import voltar from '../../assets/img/setavoltar.png';
import StarRating from '../avlstars/star';
import user from '../../assets/img/user-coala.png';

export default function DtlPedAnd() {

    return(

        <div className='DtlPedAnd'>

            <CabecalhoAdm/>

            <div className='Meio'>

                <div className='a-quadro'>

                    <div className='a-cima'>

                        <a href='pedidos-em-andamento'>
                            <img alt='' src={voltar} />
                        </a>

                        <div className='rowzin'>

                            <div className='a-text'>

                                <h1>Andamento do Pedido</h1>

                                <p>Aqui você verá o andamento do pedido selecionado, com base nas informações e ícones abaixo.<br/><br/>Conte conosco!
                                </p>

                            </div>

                            <div className='perfil'>

                                <img src={user} alt='' />
                                <p>Dados da conta do cliente</p>

                            </div>

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

                                    <p>xx/xx</p>

                                </div>

                                <div className='status-2'>

                                    <h3>Pedido em <br/> Separação</h3>

                                    <img className='a-i' src={pedsep} alt='' />

                                    <img className='v' src={verificar} alt='' />

                                    <hr></hr>

                                    <p>xx/xx</p>

                                </div>

                                <div className='status-2'>

                                    <h3>Pedido na <br/> Transportadora</h3>

                                    <img className='a-i' src={pedtrnsp} alt='' />

                                    <img className='v' src={verificar} alt='' />

                                    <hr></hr>

                                    <p>xx/xx</p>

                                </div>

                                <div className='status-3'>

                                    <h3>A caminho</h3>

                                    <img className='a-i' src={caminho} alt='' />

                                    <img className='v' src={verificar} alt='' />

                                    <hr></hr>

                                    <p>xx/xx</p>

                                </div>

                                <div className='status-4'>

                                    <h3>Pedido <br/> Entregue</h3>

                                    <img className='a-i' src={entregue} alt='' />

                                    <img className='v' src={verificar} alt='' />

                                    <hr></hr>

                                    <p>xx/xx</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}