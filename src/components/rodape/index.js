import './index.scss';

import insta from '../../assets/img/insta.png';
import face from '../../assets/img/face.png';
import ttk from '../../assets/img/ttk.png';
import logor from '../../assets/img/livrosolo.png';
import arquivo from '../../assets/doc/PolíticaDeVendasLIVROVERSE.docx'

export default function Rodape() {


    return (
        <div className="Rodape">
            <div class="cima">
                <div class="esquerda">
                    <h3>REDES SOCIAIS:</h3>

                    <div class="rs">
                        <img src={insta} alt="" />
                        <p>Instagram: @livroverseoficial</p>
                    </div>

                    <div class="rs">
                        <img src={face} alt="" />
                        <p>Facebook: LivroVerse</p>
                    </div>

                    <div class="rs">
                        <img src={ttk} alt="" />
                        <p>TikTok: LivroVerseOfc</p>
                    </div>

                </div>

                <div class="centro">
                    <img src={logor} alt=""/>

                    <h8 className="agaoitocent" >LivroVerse © - Todos os direitos reservados</h8>
                </div>

                <div class="direita">
                    <a href={arquivo} download="PolíticaDeVendasLIVROVERSE.docx" className='aroda'>Política de Vendas, Trocas e Privacidade</a>
                    <a className='aroda'>Termos e condições de compra</a>
                    <a className='aroda'>Fale conosco</a>
                </div>

            </div>
            <div className="baixo">
                <h8 className="formaspgto">Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.</h8>
            </div>
        </div>  
    );
  }