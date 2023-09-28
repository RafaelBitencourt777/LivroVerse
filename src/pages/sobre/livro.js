import './livro.scss';
import livrocima from '../../assets/img/livros-viajar-pelo-mundo-1 1.png';
import livroheart from '../../assets/img/amor-livro 1.png';


export default function Redef() {
  return (
    <div className='tudo'>
        <img className='livrocim' src={livrocima}/>
        <div className='meio'>
            <h4>A nossa e sua livraria possui o seu gênero de livro favorito, desde romance à aventura.
            </h4>
        </div>
        <div className='final'>
            <img src={livroheart}/>
            <div className='textos'>
            <p><b> Um site para os Amantes de Literatura</b></p>
            <p>Diversos tipos de livros físico, PDF e Kindle. Além de marca páginas de variados estilos.</p>
            </div>
        </div>
    </div>
  )
}