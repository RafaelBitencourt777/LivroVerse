import React, { useState, useEffect } from 'react';
import './landing.scss';
import Cabecalho from '../../components/cabecalho/index.js';
import Rodape from '../../components/rodape/index.js';
import lesq from '../../assets/img/lesq.png';
import ldir from '../../assets/img/ldir.png';
import estrelas from '../../assets/img/estrelas5.png';
import axios from 'axios';
import oftesq from '../../assets/img/oftesq.png';
import oftdir from '../../assets/img/oftdir.png';
import ad1 from '../../assets/img/1banneroferta.png';
import ad2 from '../../assets/img/2banneroferta.png';
import ad3 from '../../assets/img/3banneroferta.png';

function App() {
  const [livros, setLivros] = useState([]);
  const [currentAd, setCurrentAd] = useState(1);

  useEffect(() => {
    axios.get('http://129.148.42.252:5018/landing-page')
      .then(response => setLivros(response.data))
      .catch(error => console.error('Erro ao obter os livros:', error));
  }, []);

  const renderizarLivros = () => {
    return livros.map(livro => (
      <div className="card" key={livro.id}>
        <a href={`/previsualizacao/${livro.id}`}>
          <div className="imagem">
            <img src={livro.imagem} alt={`Capa de ${livro.nome}`} />
          </div>
          <img src={estrelas} alt={`Avaliação: ${livro.avaliacao}`} />
          <h4>{livro.nome}</h4>
          <h2>{`R$ ${livro.preco.toFixed(2)}`}</h2>
        </a>
      </div>
    ));
  };

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
              
              <img src="" alt="" />
            </div>

            <div className="Ofertap">
              
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div className="MaisVen">
          <h1>Mais vendidos</h1>

          <div className="cards">
            <img className="lesq" src={lesq} alt="" />

            {Array.isArray(livros) && livros.length > 0 ? renderizarLivros() : null}

            <div className="card"></div>

            <img className="ldir" src={ldir} alt="" />
          </div>
        </div>

        <div className="MaisVen">
          <h1>Mais bem avaliados de: Mistério</h1>

          <div className="cards">
            <img className="lesq" src={lesq} alt="" />

            {Array.isArray(livros) && livros.length > 0 ? renderizarLivros() : null}

            <div className="card"></div>

            <img className="ldir" src={ldir} alt="" />
          </div>
        </div>

        <div className="MaisVen">
          <h1>Mais bem avaliados de: Terror</h1>

          <div className="cards">
            <img className="lesq" src={lesq} alt="" />

            {Array.isArray(livros) && livros.length > 0 ? renderizarLivros() : null}

            <div className="card"></div>

            <img className="ldir" src={ldir} alt="" />
          </div>
        </div>

        <div className="MaisVen">
          <h1>Livros para te ajudar a refletir</h1>

          <div className="cards">
            <img className="lesq" src={lesq} alt="" />

            {Array.isArray(livros) && livros.length > 0 ? renderizarLivros() : null}

            <div className="card"></div>

            <img className="ldir" src={ldir} alt="" />
          </div>
        </div>

      </div>

      <Rodape />
    </div>
  );
}

export default App;
