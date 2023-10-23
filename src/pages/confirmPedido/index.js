import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import voltar from '../../assets/img/setavoltar.png';
import mais from '../../assets/img/mais-quant.png';
import menos from '../../assets/img/menos-quant.png';

export default function AcompPed () {

    return (

        <div className='AcomPed'>

            <Cabecalho/>

            <div className='ap-meio'>

                <img src={voltar} alt=''/>

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

                        <div className='quadrinho'>

                            <div className='Livro'></div>

                            <div className='bookname'>

                                <h1>Nome do Livro</h1>

                                <p>Vendido e entregue por:<br/>LivroVerse</p>

                            </div>

                            <input>
                            
                                <img src={menos} alt=''/>

                                <img src={mais} alt=''/>
                            
                            </input>

                        </div>

                    </div>

                    <div className='ap-direita'>



                    </div>

                </div>

            </div>

            <Rodape/>

        </div>

    )
}