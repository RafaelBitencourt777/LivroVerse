import './index.scss';

import user from '../../assets/img/useradm.png';
import logo from '../../assets/img/logo.png';
import gp from '../../assets/img/gerenciar-produtos.png';
import pedidos from '../../assets/img/pedidos.png';
import pc from '../../assets/img/produtos-cadastrados.png';
import relatorios from '../../assets/img/relatorios.png';

export default function PrincAdm() {

    return (

        <div className='PrincAdm'>

            <div className='adm-esquerda'>

                <div className='adm-ecima'>

                    <img src={user} alt='' />

                    <p>Olá Sr.</p>

                </div>

                <div className='adm-ebaixo'>

                    <button>Pedidos</button>

                    <button>Produtos</button>

                    <button>Adicionar Produtos</button>

                    <button>Usuários</button>

                    <button>Mensagens</button>

                    <button>Relatórios</button>

                    <button>Gerenciar Produtos</button>

                </div>

            </div>

            <div className='adm-direita'>

                <div className='adm-dcima'>

                    <img src={logo} alt='' />

                </div>

                <div className='adm-dbaixo'>

                    <div className='dois-quad'>

                        <div className='adm-quadrado'>

                            <h2>Pedidos</h2>

                            <img src={pedidos} alt='' />

                        </div>

                        <div className='adm-quadrado'>

                            <h2>Produtos Cadastrados</h2>

                            <img src={pc} alt='' />

                        </div>

                    </div>

                    <div className='dois-quad'>

                        <div className='adm-quadrado'>

                            <h2>Gerenciar Produtos</h2>

                            <img src={gp} alt='' />

                        </div>

                        <div className='adm-quadrado'>

                            <h2>Relatórios</h2>

                            <img src={relatorios} alt='' />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}