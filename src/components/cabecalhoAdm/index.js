import './index.scss';

import user from '../../assets/img/useradm.png';
import logo from '../../assets/img/logo.png';

export default function CabecalhoAdm() {

    return(

        <div className='CabecalhoAdm'>

            <div className='cabadm-esq'>

                <img src={user} alt='' />

                <h2>Sr.</h2>

            </div>

            <div className='cabadm-dir'>

                <img src={logo} alt='' />

            </div>

        </div>

    )
}