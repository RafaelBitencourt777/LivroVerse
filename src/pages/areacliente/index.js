import './index.scss';
import Cabecalho from '../../components/cabecalho';
import lesq from '../../assets/img/lesq.png'

export default function Areacliente (){

    return(
        <div>
            {Cabecalho}
            <div>
                <button> {lesq} </button>
            </div>
        </div>
    )
        
}