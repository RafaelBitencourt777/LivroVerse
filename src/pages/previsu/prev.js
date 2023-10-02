import './prev.scss';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import coracao from '../../assets/img/coracao (2).png';
import estrela from '../../assets/img/estrelaamarelo.png';
import estrelac from '../../assets/img/estrelacinza.png';
import livro from '../../assets/img/iconlivrofis.png';
import pdf from '../../assets/img/pdf.png';
import kind from '../../assets/img/kindle.png';
import voltar from '../../assets/img/setavoltar.png';

export default function Prev() {

    return(
        <div className='Prev'>
            <Cabecalho/>

            <div className='Meio'>
                <div className='quad'>
                    <img className='volta' src={voltar} alt=''/>
                    <div className='imagem-texto'>
                        
                        <div className='img' alt='aqui seria a imagem do livro'></div>

                        <div className='direita'>
                            <div className='titulo-e-heart'>
                                <div className='textos'>
                                    <h3>Lorem Ipsum</h3>
                                    <h4>Por <label>Lorem Ipsum</label> </h4>
                                </div>
                                <img className='heart' src={coracao} alt=''/>
                            </div>
                            <div className='avaliaçao'>
                                <p><b>Avaliações:</b></p>
                                <div className='estrelas'>
                                    <img src={estrela} alt=''/>
                                    <img src={estrela} alt=''/>
                                    <img src={estrela} alt=''/>
                                    <img src={estrela} alt=''/>
                                    <img src={estrelac} alt=''/>
                                </div>
                            </div>

                            <div className='desc'>
                                <h3><b>Descrição:</b></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit dolor, commodo at enim in, imperdiet pretium leo. Fusce mollis ac ex hendrerit tempor. Donec laoreet leo non dui mattis, eu euismod est blandit. Suspendisse potenti. Nunc pretium scelerisque enim luctus vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dignissim mauris nibh, nec porta sem aliquam sed. </p>
                            </div>
                            
                            <div className='botoes'>
                                <button className='fis'>
                                    <img src={livro} alt=''/>
                                    <div className='b-textos'>
                                        <p>Modelo Físico</p>
                                        <h5><b>Preço</b></h5>
                                    </div>
                                </button>
                                <button className='pdf'>
                                    <img src={pdf} alt=''/>
                                    <div className='b-textos'>
                                        <p>Modelo PDF</p>
                                        <h5><b>Preço</b></h5>
                                    </div>
                                </button>
                    
                                <button className='kind'>
                                    <img src={kind} alt=''/>
                                    <div className='b-textos'>
                                        <p>Modelo Kindle</p>
                                        <h5><b>Preço</b></h5>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Rodape/>
        </div>
    );
}