import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';//agregado
import LandingPage from './componentes/LandingPage'; //agregado
import Home from './componentes/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/'componentes={LandingPage}/>
        <Route  path= '/home' componentes={Home}/>
      </Switch>
      <h1>Henry Pokemon</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
