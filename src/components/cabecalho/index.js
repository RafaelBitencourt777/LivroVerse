import './index.scss';
import { Link, NavLink } from 'react-router-dom'; 

import carrinho from '../../assets/img/carrinho.png';
import coracao from '../../assets/img/coracao.png';
import logo from '../../assets/img/logo.png';
import lupa from '../../assets/img/lupa.png';
import user from '../../assets/img/user.png';

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
        <Link to="/favoritos" className="link-padrao"> 
          <img src={coracao} alt=''/>
        </Link>
        <NavLink to="/cliente" className="link-padrao"> 
          <img src={user} alt=''/>
        </NavLink>
      </div>
    </div>
  );
}

export default Cabecalho;
