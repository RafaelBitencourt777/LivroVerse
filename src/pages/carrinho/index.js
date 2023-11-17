import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import voltar from '../../assets/img/setavoltar.png';

export default function Carinho() {

    return (
    
    <div className='Carrinho'>
    
        <Cabecalho/>

        <div className='f-meio'>

            <div className='m-cima'>
                <a href='/'>
                    <img src={voltar} alt='' />
                </a>
                <h1>Carrinho</h1>
            </div>

            <div className='quadro'>

                <div className='f-cards'>
                    
                        <div className='f-card'>

                            <a href='/previsualizaçao'>

                                <div className='livro'></div>

                                <h3>Nome do Livro</h3>

                                <button>Comprar</button>

                            </a>

                        </div>

                        <div className='f-card'>

                            <a href='/previsualizaçao'>

                                <div className='livro'></div>

                                <h3>Nome do Livro</h3>

                                <button>Comprar</button>

                            </a>

                        </div>

                        <div className='f-card'>

                            <a href='/previsualizaçao'>

                                <div className='livro'></div>

                                <h3>Nome do Livro</h3>

                                <button>Comprar</button>

                            </a>

                        </div>

                        <div className='f-card'>

                            <a href='/previsualizaçao'>

                                <div className='livro'></div>

                                <h3>Nome do Livro</h3>

                                <button>Comprar</button>

                            </a>

                        </div>

                        <div className='f-card'>

                            <a href='/previsualizaçao'>
                                
                                <div className='livro'></div>

                                <h3>Nome do Livro</h3>

                                <button>Comprar</button>

                            </a>

                        </div>

                        <div className='f-card'>

                            <a href='/previsualizaçao'>

                                <div className='livro'></div>

                                <h3>Nome do Livro</h3>

                                <button>Comprar</button>

                            </a>

                        </div>

                        <div className='f-card'>

                            <a href='/previsualizaçao'>

                                <div className='livro'></div>

                                <h3>Nome do Livro</h3>

                                <button>Comprar</button>

                            </a>

                        </div>

                        <div className='f-card'>

                            <a href='/previsualizaçao'>
                                
                                <div className='livro'></div>

                                <h3>Nome do Livro</h3>

                                <button>Comprar</button>

                            </a>

                        </div>

                </div>

            </div>

        </div>

        <Rodape/>
    
    </div>

    )
}