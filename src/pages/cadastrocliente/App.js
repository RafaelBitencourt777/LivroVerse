import './App.scss';
import fundolivros from '../assets/img/livros.png';

function App() {
  return (
    <div className='tudo'>
      <div className='fundo' style={{ backgroundImage: `url(${fundolivros})` }}>
        <div className='azulao'>
          <h3>Cadastre-se</h3>
          <div className='input'>
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" id="nome" placeholder="Nome" />
          </div>

          <div className='input'>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Email" />
          </div>

          <div className='input'>
            <label htmlFor="confirmarEmail">Confirme o Email</label>
            <input type="text" id="confirmarEmail" placeholder="Confirmar Email" />
          </div>

          <div className='input'>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Senha" />
          </div>

          <div className='input'>
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input type="password" id="confirmarSenha" placeholder="Confirmar Senha"/>
          </div>
          <button className="button-criar" type="submit">Criar</button>
        </div>
        <div className="termos">
          <input type="checkbox" id="termosCheckbox" name="termos" />
          <label htmlFor="termosCheckbox">Li e aceito os termos de uso e os termos de privacidade</label>
        </div>
      </div>
    </div>
  );
}

export default App;
