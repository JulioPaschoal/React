import { Hedaer } from "../../components/Header";
import './styles.css';
import background from "../../assets/github.png";

function App() {
  return (
    <div className="app">
      <Hedaer />
      <div className="container">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <input name="usuario" placeholder="@username" />
          <button>Buscas</button>
        </div>
      </div>
      <div className="perfil">
          <img src="https://avatars.githubusercontent.com/u/17685764?s=96&v=4" className="profile" alt="Imagem Perfil" />
          <div>
            <h3>JULIO PASCHOAL</h3>
            <p> Descrição</p>
          </div>
        </div>
    </div>
  );
}
export default App;
