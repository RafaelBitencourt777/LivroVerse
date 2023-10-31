import './my.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

export default function MyPed() {

    return (
        <div className='Ped'>
            <Cabecalho/>
        <div className='Meio'>

        <div className='quad'>
        <h1 className='MyPedss'>Meus pedidos</h1>


        <h4>Em Andamento</h4>
            <div className='quadrados-cima'>
                <div className='square'>
                    <div className='img' alt='aqui seria a imagem do livro'></div>
                    <div className='direita'>
                        <p>Status:</p>
                        <p>INDETERMINADO</p> 
                        <img className='nadainda' alt='status do bagos' /> 
                    </div>
                </div>
            
                <div className='square'>
                    <div className='img' alt='aqui seria a imagem do livro'></div>
                    <div className='direita'>
                        <p>Status:</p>
                        <p>INDETERMINADO</p> 
                        <img className='nadainda' alt='Imagem do livro' /> 
                    </div>
                </div>

                <div className='square'>
                    <div className='img' alt='aqui seria a imagem do livro'></div>
                    <div className='direita'>
                        <p>Status:</p>
                        <p>INDETERMINADO</p> 
                        <img className='nadainda' alt='Imagem do livro' /> 
                    </div>
                </div>
            </div>

            <h4>Concluídos</h4>
            <div className='quadrados-baixo'>
                <div className='square'>
                    <div className='img' alt='aqui seria a imagem do livro'></div>
                    <div className='direita'>
                        <p>Status:</p>
                        <p>INDETERMINADO</p> 
                        <img className='nadainda' alt='Imagem do livro' /> 
                    </div>
                </div>
            
                <div className='square'>
                    <div className='img' alt='aqui seria a imagem do livro'></div>
                    <div className='direita'>
                        <p>Status:</p>
                        <p>INDETERMINADO</p> 
                        <img className='nadainda' alt='Imagem do livro' /> 
                    </div>
                </div>

                <div className='square'>
                    <div className='img' alt='aqui seria a imagem do livro'></div>
                    <div className='direita'>
                        <p>Status:</p>
                        <p>INDETERMINADO</p> 
                        <img className='nadainda' alt='Imagem do livro' /> 
                    </div>
                </div>
            </div>
        
        
        
        
        
        </div>
        </div>
            <Rodape/>
        </div>
    )
}