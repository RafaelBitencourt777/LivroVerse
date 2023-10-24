import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import voltar from '../../assets/img/setavoltar.png';
import mais from '../../assets/img/mais-quant.png';
import menos from '../../assets/img/menos-quant.png';

export default function ConfirmPed() {

    return (
        <div className='ConfirmPed'>

            <Cabecalho/>

            <div className='ap-meio'>

                <a href='/previsualizaçao'>

                    <img src={voltar} alt=''/>
                
                </a>

                <div className='ap-quadro'>

                    <div className='ap-esquerda'>

                        <div className='mini-titulos'>

                            <h3>Produto</h3>

                            <div className='titulo-trio'>

                                <h3>Quantidade</h3>
                                <h3>Entrega</h3>
                                <h3>Preço</h3>

                            </div>

                        </div>

                        <div className='ap-equadrinho'>

                            <div className='Livro'></div>

                            <div className='bookname'>

                                <h1>Nome do Livro</h1>

                                <p>Vendido e entregue por:<br/>LivroVerse</p>

                            </div>

                            <div className='ap-inp'>

                                <img src={menos} alt='' />

                                <input type='number'/>

                                <img className='mais' src={mais} alt='' />

                            </div>

                            <p>A agendar</p>

                            <h2>Preço</h2>

                        </div>

                        <h2>Calcule o Frete</h2>

                        <div className='ap-frete'>

                            <input/>

                            <button>OK</button>

                        </div>

                    </div>

                    <div className='ap-direita'>

                        <div className='ap-dquadrinho'>

                            <h1>Resumo do Pedido</h1>

                            <div className='pdt-vl'>

                                <h2>x prduto</h2>

                                <h2>Preço</h2>

                            </div>

                            <div className='ap-dfrete'>

                                <h2>Frete</h2>

                                <h2 className='grt'>Grátis</h2>

                            </div>

                            <hr></hr>

                            <div className='ap-total'>

                                <h1>Total</h1>

                                <h1>Preço</h1>

                            </div>

                            <h2>R$3,54 Off <br/>Pagando <br/>por PIX</h2>

                            <button>Fazer Pedido</button>

                        </div>

                    </div>

                </div>

            </div>

            <Rodape/>

        </div>

    )
}