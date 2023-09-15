import './index.scss';

import insta from '../../assets/img/insta.png';
import face from '../../assets/img/face.png';
import ttk from '../../assets/img/ttk.png';
import logor from '../../assets/img/livrosolo.png';

export default function Rodape() {


    return (
        <div className="Rodape">
            <div class="cima">
                <div class="esquerda">
                    <h3>REDES SOCIAIS:</h3>

                    <div class="insta">
                        <img src={insta} alt="" />
                        <p>Instagram: @livroverseoficial</p>
                    </div>

                    <div class="face">
                        <img src={face} alt="" />
                        <p>Facebook: LivroVerse</p>
                    </div>

                    <div class="ttk">
                        <img src={ttk} alt="" />
                        <p>TikTok: LivroVerseOfc</p>
                    </div>

                </div>

                <div class="centro">
                    <img src={logor} />

                    <h8>LivroVerse © - Todos os direitos reservados</h8>
                </div>

                <div class="direita">
                <div class="política">
                        Política de Vendas, Trocas e Privacidade<br/>
                        Termos e condições de compra<br/>
                        Fale conosco
                </div>
                </div>

                <h8 class="baixo">Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.</h8>
            </div>
        </div>  
    );
  }