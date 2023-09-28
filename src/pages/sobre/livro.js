import './livro.scss';
import livrocima from '../../assets/img/livros-viajar-pelo-mundo-1 1.png';
import livroheart from '../../assets/img/amor-livro 1.png';
import Cabecalho from '../../components/cabecalho/index.js';
import Rodape from '../../components/rodape/index.js';

export default function Sobre() {
  return (
    <div className='tudo'>
      <Cabecalho />
      <img className='livrocim' src={livrocima} alt='' />
      <div className='meio'>
        <h4>A nossa e sua livraria possui o seu gênero de livro favorito, desde romance à aventura.</h4>
      </div>
      <div className='final'>
        <img className='livroh' src={livroheart} alt='' />
        <div className='textos'>
          <p className='titulo'><b> Um site para os Amantes de Literatura</b></p>
          <p>Diversos tipos de livros físicos, PDF e Kindle. Além de marca-páginas de variados estilos.</p>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
