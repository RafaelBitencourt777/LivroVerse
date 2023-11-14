import React, { useState } from 'react';
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import voltar from '../../assets/img/setavoltar.png';
import mais from '../../assets/img/mais-quant.png';
import menos from '../../assets/img/menos-quant.png';

export default function ConfirmPed() {
    const [cep, setCep] = useState('');

    const handleCepChange = (event) => {
        let value = event.target.value;
        value = value.replace(/\D/g, ''); 
        if (value.length > 8) {
            value = value.substr(0, 8); 
        }
        if (value.length > 5) {
            value = `${value.substr(0, 5)}-${value.substr(5, 3)}`; 
        }
        setCep(value);
    };
    

    return (
        <div className='ConfirmPed'>
            <Cabecalho />
            <div className='ap-meio'>
                <a href='/pagamento'>
                    <img src={voltar} alt='' />
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

                                <p>Vendido e entregue por:<br/><label className='emp'>LivroVerse</label></p>

                            </div>

                            <div className='ap-inp'>

                                <img className='menos' src={menos} alt='' />

                                <input type='number'/>

                                <img className='mais' src={mais} alt='' />

                            </div>

                            <p>A agendar</p>

                            <h2>Preço</h2>

                            </div>
                            <h2>Calcule o Frete</h2>
                        <div className='ap-frete'>
                            <input
                                placeholder='Digite seu CEP'
                                value={cep}
                                onChange={handleCepChange}
                            />
                            <button>OK</button>
                        </div>
                    </div>
                    <div className='ap-direita'>

                        <div className='ap-dquadrinho'>

                            <h1>Resumo do Pedido</h1>

                            <div className='ap-r'>

                                <h2>x prduto</h2>

                                <h2>Preço</h2>

                            </div>

                            <div className='ap-r'>

                                <h2>Frete</h2>

                                <h2 className='grt'>Grátis</h2>

                            </div>

                            <hr></hr>

                            <div className='ap-total'>

                                <h1>Total</h1>

                                <h1>Preço</h1>

                            </div>

                            <h2>R$3,54 Off <br/>Pagando <br/>por PIX</h2>

                            <a className='botaos' href='/acompanhar'>
                                <button className='f-p'>Fazer Pedido</button>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <Rodape/>

        </div>

    )
}