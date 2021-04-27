import Formulario from './components/formulario';
import Props from "./components/bienvenida";
import Cards from "./components/cards";
import Image from "../src/images/logo192.png"
import Usuarios from './components/usuarios'
import Datos from "./components/datos"
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";

function App() {
  return (
      
      <Router>
        <div className="nav">
        <Link className="nav-link" to="/">Usuarios</Link>
      <Link className="nav-link" to="/cards">Tarjetas</Link>
      <Link className="nav-link" to="/bienvenida">Uso de Props</Link>
      <Link className="nav-link" to="/formulario">CRUD basico</Link>
        </div>
      

      <Switch>
        <Route exact path="/">
          <Usuarios />
          </Route>
          <Route path="/datos/:id">
          <Datos />
          </Route>
          <Route path="/cards">
          <Cards
            imagen={Image}
            titulo="What is Lorem Ipsum?" 
            texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </Route>
          <Route path="/bienvenida">
            <Props name="Jorge"/>
            <Props name="Azucena"/>
            <Props name="Flavia"/>
            <Props name="Victorino"/>
          </Route>
          <Route path="/formulario">
            <Formulario/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
