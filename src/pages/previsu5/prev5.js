import './prev.scss';
import React, { useState } from 'react';
import senhor from '../../assets/img/senhor.jpg';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import livro from '../../assets/img/iconlivrofis.png';
import pdf from '../../assets/img/pdf.png';
import kind from '../../assets/img/kindle.png';
import voltar from '../../assets/img/setavoltar.png';
import coracaoCurtido from '../../assets/img/corasao.png'; 
import coracaoNaoCurtido from '../../assets/img/coracao2.png'; 
import StarRating from '../avlstars/star';
import Carrinho from '../../assets/img/carrinho.png'

export default function Prev5() {
    const [curtido, setCurtido] = useState(false);
  
    const handleClickCurtir = () => {
      setCurtido(!curtido);
    };

    return(
        <div className='Prev'>
            <Cabecalho/>

            <div className='Meio'>
                <div className='quad'>
                    <a href='./'><img className='volta' src={voltar} alt=''/></a>
                    <div className='imagem-texto'>
                    <div className='car'>
                    <div className='img' alt='aqui seria a imagem do livro'>
                        <img src={senhor} alt="Imagem do livro" />
                    </div>
                        
                        <a className='botaofeio' href='/carrinho'>
                                    <button className='carro'>
                                        <img src={Carrinho} alt=''/>
                                        <div className='cartxt'>
                                            <p>Inserir no carrinho</p>
                                            <h5><b>(Apenas físico)</b></h5>
                                        </div>
                                    </button>
                                </a>
                        </div>
                        <div className='direita'>
                        <div className='titulo-e-heart'>
                         <div className='textos'>
                            <h3>O Senhor dos Anéis</h3>
                            <h4>Por <label>J.R.R. Tolkien</label></h4>
                        </div>
                        <img
                            className={`heart ${curtido ? 'curtido' : ''}`}
                            src={curtido ? coracaoCurtido : coracaoNaoCurtido}
                            alt='Coração'
                            onClick={handleClickCurtir}
                         />
                         </div>
                            <div className='avaliaçao'>
                                <p><b>Avaliações:</b></p>
                                <StarRating/>
                            </div>

                            <div className='desc'>
                                <h3><b>Descrição:</b></h3>
                                <p>Uma trilogia épica de fantasia que segue a jornada do hobbit Frodo Bolsón para destruir um anel maligno. Tolkien cria um mundo complexo e envolvente com diversas raças e mitologias.</p>
                            </div>
                            
                            <div className='botoes'>

                                <a className='botaos' href='/pagamento'>
                                    <button className='fis'>
                                        <img src={livro} alt=''/>
                                        <div className='b-textos'>
                                            <p>Modelo Físico</p>
                                            <h5><b>Preço:R$ 55,00</b></h5>
                                        </div>
                                    </button>
                                </a>

                                <a className='botaos' href='/pagamento'>
                                    <button className='pdf'>
                                        <img src={pdf} alt=''/>
                                        <div className='b-textos'>
                                            <p>Modelo PDF</p>
                                            <h5><b>Preço: R$ 55,00</b></h5>
                                        </div>
                                    </button>
                                </a>
                    
                                <a className='botaos' href='/pagamento'>
                                    <button className='kind'>
                                        <img src={kind} alt=''/>
                                        <div className='b-textos'>
                                            <p>Modelo Kindle</p>
                                            <h5><b>Preço: R$ 55,00</b></h5>
                                        </div>
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Rodape/>
        </div>
    );
}