import './loginadm.scss';

import user from '../../assets/img/useradm.png';
import iuser from '../../assets/img/iuseradm.png';
import cadeado from '../../assets/img/cadeadoadm.png';
import login from '../../assets/img/loginadm.png';

export default function Lgadm() {


    return (
        <div className='Loginadm'>
            <img className='imgg' src={user} alt=''/>
            
            <div className='quadro'>
                <div className='inputs'>
                    <input placeholder='Usuário'/>
                    <img src={iuser} alt=''/>
                </div>

                <div className='inputs'>
                    <input placeholder='Senha'/>
                    <img src={cadeado} alt=''/>
                </div>
                
                <div className='botao'>
                    <button>Login</button>
                    <img src={login} alt=''/>
                </div>
            </div>
        </div>
    )
}