import './index.scss';

export default function BarraLateral() {




    return(
        <div className='BarraLateral'>
            <div className='cima'>
                <div className='user'>
                    <img src='' alt=''/>
                </div>

                <div className='textos'>
                    <h2>Nome do user</h2>
                    <h5>Email do user</h5>
                    <h3>Sua conta está nível:</h3>
                    <h2>Nível da conta</h2>
                </div>
            </div>

            <div className='baixo'>
                <div>
                    <h2>Meus Pedidos</h2>
                </div>
                
                <div>
                    <h2>Minha Conta</h2>
                </div>
                
                <div>
                    <h2>Favoritos</h2>
                </div>
                
                <div>
                    <h2>Historico de navegação</h2>
                </div>
                
                <div>
                    <h2>Lista de Favoritos</h2>
                </div>

                <div>
                    <h2>Configurações</h2>
                </div>
            </div>
        </div>
    )
} 