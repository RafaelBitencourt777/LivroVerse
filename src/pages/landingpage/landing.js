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
import harry from '../../assets/img/harry.jpg';
import gatsby from '../../assets/img/gatsby.jpg';
import culpa from '../../assets/img/culpa.jpg';
import dom from '../../assets/img/domquixote.jpg';
import livros from '../../assets/img/livros.png';
import senhor from '../../assets/img/senhor.jpg';
import principe from '../../assets/img/principe.jpg';
import codigo from '../../assets/img/codigo.jpg';
import anos from '../../assets/img/100anos.jpg';
import capital from '../../assets/img/1984.jpg';

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

            <div className="card"></div>

            <div className="card">
              <a href='/previsualizaçao'>
                <div className="imagem">
                  <img src={harry} alt="Harry Potter e a Pedra Filosofal" />
                </div>
                <img src={estrelas} alt="" />
                <h4>Harry Potter e a Pedra Filosofal</h4>
                <h2>R$ 39,90</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
                <div className="imagem">
                  <img src={anos} alt="Cem Anos de Solidão" />
                </div>
                <img src={estrelas} alt="" />
                <h4>Cem Anos de Solidão</h4>
                <h2>R$ 45,99</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
                <div className="imagem">
                  <img src={capital} alt="1984" />
                </div>
                <img src={estrelas} alt="" />
                <h4>1984</h4>
                <h2>R$ 32,50</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
                <div className="imagem">
                  <img src={gatsby} alt="O Grande Gatsby" />
                </div>
                <img src={estrelas} alt="" />
                <h4>O Grande Gatsby</h4>
                <h2>R$ 28,75</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
                <div className="imagem">
                  <img src={senhor} alt="O Senhor dos Anéis" />
                </div>
                <img src={estrelas} alt="" />
                <h4>O Senhor dos Anéis</h4>
                <h2>R$ 55,00</h2>
              </a>
            </div>

            <div className="card"></div>

            <img className="ldir" src={ldir} alt="" />
          </div>
        </div>

        <div className="MaisVen">
          <h1>Mais vendidos</h1>

          <div className="cards">
            <img className="lesq" src={lesq} alt="" />

            <div className="card"></div>

            <div className="card">
              <a href='/previsualizaçao'>
                <div className="imagem">
                  <img src={dom} alt="Dom Quixote" />
                </div>
                <img src={estrelas} alt="" />
                <h4>Dom Quixote</h4>
                <h2>R$ 34,25</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
                <div className="imagem">
                  <img src={principe} alt="O Pequeno Príncipe" />
                </div>
                <img src={estrelas} alt="" />
                <h4>O Pequeno Príncipe</h4>
                <h2>R$ 25,00</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
                <div className="imagem">
                  <img src={livros} alt="A Menina que Roubava Livros" />
                </div>
                <img src={estrelas} alt="" />
                <h4>A Menina que Roubava Livros</h4>
                <h2>R$ 33,45</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
                <div className="imagem">
                  <img src={culpa} alt="A Culpa é das Estrelas" />
                </div>
                <img src={estrelas} alt="" />
                <h4>A Culpa é das Estrelas</h4>
                <h2>R$ 36,10</h2>
              </a>
            </div>

            <div className="card">
              <a href='/previsualizaçao'>
                <div className="imagem">
                  <img src={codigo} alt="O Código Da Vinci" />
                </div>
                <img src={estrelas} alt="" />
                <h4>O Código Da Vinci</h4>
                <h2>R$ 34,50</h2>
              </a>
            </div>

            <div className="card"></div>

            <img className="ldir" src={ldir} alt="" />
          </div>
        </div>
      </div>

      <Rodape/>
    </div>
  );
}

export default App;
