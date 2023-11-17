import './landing.scss';

import { useRef } from 'react';
import Cabecalho from '../../components/cabecalho/index.js';
import Rodape from '../../components/rodape/index.js';
import oftesq from '../../assets/img/oftesq.png';
import oftdir from '../../assets/img/oftdir.png';
import estrelas from '../../assets/img/estrelas5.png';
import lesq from '../../assets/img/lesq.png';
import ldir from '../../assets/img/ldir.png'; 

function App() {
  
  return (
    <div className="App">
      <Cabecalho/>

      <div className="Centro">

        <div className="Ofertas">
          <div className="Ofertag">
            <img className="esquerda-o" src={oftesq} alt=""/>
            <img className="direita-o" src={oftdir} alt=""/>

            <div className="bolinhas">
              <div className="bolinha1"></div>
              <div className="bolinha2"></div>
              <div className="bolinha3"></div>
            </div>
          </div>

          <div className="Ofertasp">
            <div className="Ofertap">
              <img src="" alt=""/>
            </div>

            <div className="Ofertap">
              <img src="" alt=""/>
            </div>
          </div>
        </div>

        <div className="MaisVen">
          <h1>Mais Vendidos</h1>

          <div className="cards">
            <img className="lesq" src={lesq} alt="" />

            <div className="card">

            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">

            </div>

            <img className="ldir" src={ldir} alt=""/>
          </div>
        </div>

        <div className="MaisVen">
          <h1>Mais bem avaliados de: Romance</h1>

          <div className="cards">
            <img className="lesq" src={lesq} alt="" />

            <div className="card">

            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">

            </div>

            <img className="ldir" src={ldir} alt=""/>
          </div>
        </div>

        <div className="MaisVen">
          <h1>Mais bem avaliados de: Mistério</h1>

          <div className="cards">
            <img className="lesq" src={lesq} alt=""/>

            <div className="card">

            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">

            </div>

            <img className="ldir" src={ldir} alt=""/>
          </div>
        </div>

        <div className="MaisVen">
          <h1>Mais bem avaliados de: Terror</h1>

          <div className="cards">
            <img className="lesq" src={lesq} alt=""/>

            <div className="card">

            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">

            </div>

            <img className="ldir" src={ldir} alt=""/>
          </div>
        </div>

        <div className="MaisVen">
          <h1>Livros para comemorar o mês das crianças</h1>

          <div className="cards">
            <img className="lesq" src={lesq} alt=""/>

            <div className="card">

            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
              <div className="imagem"></div>

              <img src={estrelas} alt=""/>

              <h4>Nome do livro</h4>

              <h2>Preço do livro</h2>
              </a>
            </div>

            <div className="card">

            </div>

            <img className="ldir" src={ldir} alt=""/>
          </div>
        </div>

      </div>

      <Rodape/>
    </div>
  );
}

export default App;