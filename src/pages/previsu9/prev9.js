import './prev.scss';
import React, { useState } from 'react';
import culpa from '../../assets/img/culpa.jpg';
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

export default function Prev9() {
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
                        <img src={culpa} alt="Imagem do livro" />
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
                            <h3>A Culpa é das Estrelas</h3>
                            <h4>Por <label>John Green</label></h4>
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
                                <p> Uma emocionante história de amor entre dois adolescentes com câncer, Hazel Grace Lancaster e Augustus Waters, que buscam compreender o significado da vida e da mortalidade.</p>
                            </div>
                            
                            <div className='botoes'>

                                <a className='botaos' href='/pagamento'>
                                    <button className='fis'>
                                        <img src={livro} alt=''/>
                                        <div className='b-textos'>
                                            <p>Modelo Físico</p>
                                            <h5><b>Preço:R$ 36,10</b></h5>
                                        </div>
                                    </button>
                                </a>

                                <a className='botaos' href='/pagamento'>
                                    <button className='pdf'>
                                        <img src={pdf} alt=''/>
                                        <div className='b-textos'>
                                            <p>Modelo PDF</p>
                                            <h5><b>Preço: R$ 36,10</b></h5>
                                        </div>
                                    </button>
                                </a>
                    
                                <a className='botaos' href='/pagamento'>
                                    <button className='kind'>
                                        <img src={kind} alt=''/>
                                        <div className='b-textos'>
                                            <p>Modelo Kindle</p>
                                            <h5><b>Preço: R$ 36,10</b></h5>
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