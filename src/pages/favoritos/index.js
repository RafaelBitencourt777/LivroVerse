import './index.scss';

import Cabecalho from '../../components/cabecalho';
import voltar from '../../assets/img/setavoltar.png';
import heart from '../../assets/img/corasao.png';

export default function Favoritos() {

    return (
        <div className='Fav'>

            <Cabecalho/>

            <div className='f-meio'>

                <div className='m-cima'>
                    <img src={voltar} alt='' />
                    <h1>Favoritos</h1>
                </div>

                <div className='quadro'>

                    <div className='f-cards'>
                        
                        <div className='f-card'>

                            <img src={heart} alt='' />

                            <div className='livro'></div>

                            <h3>Nome do Livro</h3>

                            <button>Comprar</button>

                        </div>

                        <div className='f-card'>

                            <img src={heart} alt='' />

                            <div className='livro'></div>

                            <h3>Nome do Livro</h3>

                            <button>Comprar</button>

                        </div>

                        <div className='f-card'>

                            <img src={heart} alt='' />

                            <div className='livro'></div>

                            <h3>Nome do Livro</h3>

                            <button>Comprar</button>

                        </div>

                        <div className='f-card'>

                            <img src={heart} alt='' />

                            <div className='livro'></div>

                            <h3>Nome do Livro</h3>

                            <button>Comprar</button>

                        </div>

                        <div className='f-card'>

                            <img src={heart} alt='' />

                            <div className='livro'></div>

                            <h3>Nome do Livro</h3>

                            <button>Comprar</button>

                        </div>

                        <div className='f-card'>

                            <img src={heart} alt='' />

                            <div className='livro'></div>

                            <h3>Nome do Livro</h3>

                            <button>Comprar</button>

                        </div>

                        <div className='f-card'>

                            <img src={heart} alt='' />

                            <div className='livro'></div>

                            <h3>Nome do Livro</h3>

                            <button>Comprar</button>

                        </div>

                        <div className='f-card'>

                            <img src={heart} alt='' />

                            <div className='livro'></div>

                            <h3>Nome do Livro</h3>

                            <button>Comprar</button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}