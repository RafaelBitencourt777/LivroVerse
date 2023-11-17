import './assinatura.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import voltar from '../../assets/img/setavoltar.png';
import heart from '../../assets/img/corasao.png';


export default function Assinatura() {

    return (
        <div className='assinatura'>
                <Cabecalho/>
            
            <div className='quase-tudo'>
                <div className='bcima'>
                <a href='/'>
                        <img src={voltar} alt='' />
                    </a>
                    <h1>Favoritos</h1>
                </div>               
            </div>
        </div>
    )
}
