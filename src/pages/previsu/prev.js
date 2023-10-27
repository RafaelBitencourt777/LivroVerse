import './prev.scss';
import React, { useState } from 'react';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import livro from '../../assets/img/iconlivrofis.png';
import pdf from '../../assets/img/pdf.png';
import kind from '../../assets/img/kindle.png';
import voltar from '../../assets/img/setavoltar.png';
import coracaoCurtido from '../../assets/img/corasao.png'; 
import coracaoNaoCurtido from '../../assets/img/coracao2.png'; 
import StarRating from '../avlstars/star';

export default function Prev() {
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
                        
                        <div className='img' alt='aqui seria a imagem do livro'></div>

                        <div className='direita'>
                        <div className='titulo-e-heart'>
                         <div className='textos'>
                            <h3>Lorem Ipsum</h3>
                            <h4>Por <label>Lorem Ipsum</label></h4>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit dolor, commodo at enim in, imperdiet pretium leo. Fusce mollis ac ex hendrerit tempor. Donec laoreet leo non dui mattis, eu euismod est blandit. Suspendisse potenti. Nunc pretium scelerisque enim luctus vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dignissim mauris nibh, nec porta sem aliquam sed. </p>
                            </div>
                            
                            <div className='botoes'>

                                <a className='botaos' href='/pagamento'>
                                    <button className='fis'>
                                        <img src={livro} alt=''/>
                                        <div className='b-textos'>
                                            <p>Modelo Físico</p>
                                            <h5><b>Preço</b></h5>
                                        </div>
                                    </button>
                                </a>

                                <a className='botaos' href='/pagamento'>
                                    <button className='pdf'>
                                        <img src={pdf} alt=''/>
                                        <div className='b-textos'>
                                            <p>Modelo PDF</p>
                                            <h5><b>Preço</b></h5>
                                        </div>
                                    </button>
                                </a>
                    
                                <a className='botaos' href='/pagamento'>
                                    <button className='kind'>
                                        <img src={kind} alt=''/>
                                        <div className='b-textos'>
                                            <p>Modelo Kindle</p>
                                            <h5><b>Preço</b></h5>
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