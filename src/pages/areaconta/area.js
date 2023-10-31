import './area.scss';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import voltar from '../../assets/img/setavoltar.png';
import seta from '../../assets/img/seta-conta.png';
import livro from '../../assets/img/meuped-livro.png';
import endereco from '../../assets/img/endereço.png';
import seguraça from '../../assets/img/segurança.png';
import assinatura from '../../assets/img/assinatura.png';
import mais from '../../assets/img/mais-conta.png';
import semfoto from '../../assets/img/perfil-sem-foto.png';

export default function Conta() {

    return (
        
        <div className='Conta'>

            <Cabecalho/>

            <div className='cont-meio'>

                <a className='v' href='/'>
                    <img className='seta' src={voltar} alt='' />
                </a>

                <div className='cont-quadro'>

                    <div className='nível'>

                        <div className='text-nvl'>

                            <img src='' alt='' />

                            <h2>Você não possuí nível</h2>

                        </div>

                        <p>Clique aqui para ver todos os <br/> níveis e seus benefícios</p>

                    </div>

                    <div className='cont-user'>

                        <img className='conta-img' src={semfoto} alt='' />

                        <img className='conta-mais' src={mais} alt='' />

                        <h1>Você não possui uma conta</h1>

                        <h3>Crie sua conta</h3>

                        <h6>Clique aqui</h6>

                    </div>

                </div>

                <div className='quadrinhos'>

                    <div className='quadrinho'>

                        <img src={assinatura} alt='' />

                        <div className='cont-qtext'>

                            <h1>Assinatura</h1>

                            <p>Gerencie suas assinaturas.</p>

                        </div>

                        <img src={seta} alt='' />

                    </div>

                    <div className='quadrinho'>

                        <img src={seguraça} alt='' />

                        <div className='cont-qtext'>

                            <h1>Segurança</h1>

                            <p>Troque sua senha e verifique opções de privacidade.</p>

                        </div>

                        <img src={seta} alt='' />

                    </div>

                    <div className='quadrinho'>

                        <img src={endereco} alt='' />

                        <div className='cont-qtext'>

                            <h1>Endereço</h1>

                            <p>Verifique seus enderços salvos.</p>

                        </div>

                        <img src={seta} alt='' />

                    </div>

                    <div className='quadrinho'>

                        <img src={livro} alt='' />

                        <div className='cont-qtext'>

                            <h1>Meus Pedidos</h1>

                            <p>Verifique seus pedidos, tanto os já entregues quantoos os que estão sendo encaminhados</p>

                        </div>

                        <img src={seta} alt='' />

                    </div>

                </div>

            </div>

            <Rodape/>

        </div>
    )
}