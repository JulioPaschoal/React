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
          <input name="usuario" placeholder="@username"/>
          <button>Buscas</button>
        </div>
      </div>
    </div>
  );
}

export default App;
