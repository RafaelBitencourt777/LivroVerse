import React from 'react';
import Cabecalho from '../../components/cabecalho/index.js';
import Rodape from '../../components/rodape/index.js';
import voltar from '../../assets/img/setavoltar.png';
import cesta from '../../assets/img/cesta1.png';
import boleto from '../../assets/img/Boleto.png';
import creditodebito from '../../assets/img/Cartao.png';
import pix from '../../assets/img/PIX.png';

import './pgto.scss';

export default function Pgto() {
  return (
      
      <div className="pgmt">
        <Cabecalho/>

        <div className='tudoacho'>
          <a href='./previsualizaçao'><img src={voltar} alt=''/></a>
          <div className='boxbranca'>
            <div className='formaspgto'>
              <img src={cesta} alt=''/>
              <h2>Formas de Pagamento</h2>
            </div>

            <div className='dados'>
              <div className='textinhos'>
              <p>Dados da compra:</p>
              <p>Endereço:</p>
              </div>
              <div className='caixascinza'>
                <div className='caixacnz1'>
                  <div className='textos'>
                    <div className='texto'>
                      <p>Total da compra</p>
                      <p>R$UNDEFINED</p>
                    </div>
                    <div className='texto'>
                      <p>Frete para UNDEFINED</p>
                      <p>R$UNDEFINED</p>
                    </div>
                    <div className='texto'>
                      <p><b>Total</b></p>
                      <p><b>R$UNDEFINED</b></p>
                    </div>
                  </div>
                </div>
                <div className='caixacnz2'>
                  <p>Enviar: UNDEFINED</p>
                  <button className='trocarend'>Deseja trocar o endereço?</button>
                </div>
              </div>
              <div className='botõesbrabo'>

                    <div className='debitooo'>
                      <img src={creditodebito} alt=''/>
                      <div className='bt-txt'>
                      
                      <p>Cartão de crédito / Débito</p>
    
                      <b>Preço</b>
                      </div>
                    </div>

                    <button className='boleto'>
                      <img src={boleto} alt=''/>
                      <div className='bt-txt'>
                      <p>Boleto</p>
                      <h5><b>Preço</b></h5>
                      </div>
                    </button>

                    <button className='PIX'>
                      <img src={pix} alt=''/>
                      <div className='bt-txt'>
                      <p>Pix</p>
                      <h5><b>Preço</b></h5>
                      </div>
                    </button>
        
                </div>
            </div>
          </div>

        </div>
        <Rodape/>
        </div>
        )
    };