import './index.scss';

import logo from '../../assets/img/logo.png';
import lupa from '../../assets/img/lupa.png';
import coracao from '../../assets/img/coracao.png';
import user from '../../assets/img/user.png';
import carrinho from '../../assets/img/carrinho.png';

function Cabecalho() {
  return (
    <div className="Cabecalho">
        <img src={logo} alt='' />

        <div className='barrapesquisa'>
            <img className='lupa' src={lupa} alt=''/>
            <input placeholder='O que você está buscando?'/>
        </div>
        <div className='trilogia'>
            <img src={carrinho} alt=''/>
            <img src={coracao} alt=''/>
            <img src={user} alt=''/>
        </div>
    </div>
  );
}

export default Cabecalho;
