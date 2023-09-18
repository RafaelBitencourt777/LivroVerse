import './App.scss';
import fundolivros from '../assets/img/livros.png';
import googleLogo from '../assets/img/google-logo.png';
import facebookLogo from '../assets/img/facebook-logo.png';
import appleLogo from '../assets/img/apple-logo.png';

function App() {
  return (
    <div className='tudo'>
      <div className='fundo' style={{ backgroundImage: `url(${fundolivros})` }}>
        <div className='azulao'>
          <h3>Login</h3>
          <div className='input'>
            <label htmlFor="email">Email ou telefone</label>
            <input type="text" id="email" placeholder="Email ou telefone" />
          </div>
          <div className='input'>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Senha" />
            <a href="/recuperar-senha" className="forgot-password">Esqueci minha senha</a>
          </div>
          <button className="button-entrar" type="submit">Entrar</button>
          <div className="social-buttons">
            <button className="social-button google">
              <img src={googleLogo} alt="Google Logo" className="social-icon" />
              Continuar com o Google
            </button>
            <button className="social-button facebook">
              <img src={facebookLogo} alt="Facebook Logo" className="social-icon" />
              Continuar com o Facebook
            </button>
            <button className="social-button apple">
              <img src={appleLogo} alt="Apple Logo" className="social-icon" />
              Continuar com a Apple
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
