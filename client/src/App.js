import "./App.css";
import { BrowserRouter, Route } from "react-router-dom"; //agregado
import LandingPage from "./componentes/LandingPage"; //agregado
import Home from "./componentes/Home";
import PokemonCreate from "./componentes/PokemonCreate";
import Details from "./componentes/details";
import axios from "axios";
axios.defaults.baseURL="http://localhost:3001/"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     

      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/post">
        <PokemonCreate />
      </Route>

      <Route path="/detail/:id">
        <Details />
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
