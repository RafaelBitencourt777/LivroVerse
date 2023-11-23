import './index.scss';

import CabecalhoAdm from '../../components/cabecalhoAdm';

export default function Produtos() {

    return (

        <div className='Produtos'>

            <CabecalhoAdm/>

            <div className='Meio'>

                <div className='cima'>

                    <h1>Produtos</h1>

                </div>

                <div className='baixo'>

                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome do Produto</th>
                                <th>ID Pedido</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {map(item => 
                                <tr>
                                    <th>{item.id}</th>
                                    <th>{item.nome}</th>
                                    <th>{item.IDpedido}</th>
                                    <th>{item.preco}</th>
                                    <th>{item.quantidade}</th>
                                </tr>
                                )}
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    
    )
}