import './redef.scss';
import fundolivros from '../../assets/img/fundolivros.png';


export default function Redef() {
  return (
    <div className='tudo'>
      <div className='fundo' style={{ backgroundImage: `url(${fundolivros})` }}>
        <div className='azulao'>
          <h3 className='cadas'>Redefinir Senha</h3>

          <div className='input'>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Email ou telefone" />
          </div>

          <div className='input'>
            <label htmlFor="confirmarEmail">Confirme o Email</label>
            <input type="text" id="confirmarEmail" placeholder="Confirmar Email" />
          </div>

          <div className='input'>
            <label htmlFor="senha"> Nova Senha</label>
            <input type="password" id="senha" placeholder=" Nova Senha" />
          </div>

          <div className='input'>
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input type="password" id="confirmarSenha" placeholder="Confirmar Senha"/>
          </div>

          <div class="g-recaptcha" data-sitekey="6LdKGFYoAAAAACuLNr_bDA7z5FiLv3B5NAP5A55M"></div>


          <button className="button-criar"> Redefinir Senha </button>

        </div>
        
        <div className="termos">
          <input type="checkbox" id="termosCheckbox" name="termos" />
          <label htmlFor="termosCheckbox">Li e aceito os termos de uso e os termos de privacidade</label>
        </div>
      </div>
    </div>
  );
}
