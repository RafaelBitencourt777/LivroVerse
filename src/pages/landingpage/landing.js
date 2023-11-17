import React, { useState, useEffect } from 'react';
import './landing.scss';
import Cabecalho from '../../components/cabecalho/index.js';
import Rodape from '../../components/rodape/index.js';
import oftesq from '../../assets/img/oftesq.png';
import oftdir from '../../assets/img/oftdir.png';
import estrelas from '../../assets/img/estrelas5.png';
import lesq from '../../assets/img/lesq.png';
import ldir from '../../assets/img/ldir.png';
import ad1 from '../../assets/img/1banneroferta.png';
import ad2 from '../../assets/img/2banneroferta.png';
import ad3 from '../../assets/img/3banneroferta.png';



const apiUrl = '/http://129.148.42.252:5018/';
function App() {
  const [currentAd, setCurrentAd] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd === 3 ? 1 : prevAd + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (direction) => {
    clearInterval();
    if (direction === 'left') {
      setCurrentAd(currentAd === 1 ? 3 : currentAd - 1);
    } else {
      setCurrentAd(currentAd === 3 ? 1 : currentAd + 1);
    }
  };

  const handleIndicatorClick = (indicator) => {
    clearInterval(); 
    setCurrentAd(indicator);
  };

  return (
    <div className="App">
      <Cabecalho />

      <div className="Centro">
        <div className="Ofertas">
          <div className="Ofertag">
            <img alt='' className="ofertin" src={currentAd === 1 ? ad1 : currentAd === 2 ? ad2 : ad3} />
            <img alt='' className="esquerda-o" src={oftesq} onClick={() => handleArrowClick('left')} />
            <img alt='' className="direita-o" src={oftdir} onClick={() => handleArrowClick('right')} />

            <div className="bolinhas">
              <div
                className={`bolinha ${currentAd === 1 ? 'ativa' : ''}`}
                onClick={() => handleIndicatorClick(1)}
              ></div>
              <div
                className={`bolinha ${currentAd === 2 ? 'ativa' : ''}`}
                onClick={() => handleIndicatorClick(2)}
              ></div>
              <div
                className={`bolinha ${currentAd === 3 ? 'ativa' : ''}`}
                onClick={() => handleIndicatorClick(3)}
              ></div>
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
          <h1>LivroVerse Black Week: Até 80% de desconto em vários livros</h1>

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
          <h1>Mais vendidos</h1>

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
          <h1>Livros para te ajudar a refletir</h1>

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