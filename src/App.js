import React,{Fragment,useState} from 'react';
import Formulario from './components/secuenciaFibonacci/Formulario';
import Secuencia from './components/secuenciaFibonacci/SecuanciaFibonacci';

import FormulariAkelab from './components/secuenciaAke/Formulario';
import SecuenciaAkelab from './components/secuenciaAke/SecuenciaAkelab';

import Landing from './pages/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const[dato, obtenerDato] = useState('');
  const[series, obtenerSerie] = useState('');
  const[error, setError] = useState(false);
  return (
    <Fragment>
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <ul className="navbar-nav mr-auto" >
            <li className="nav-i mr-4">
              <Link to="/">Fibonacci</Link>
            </li>
            <li className="nav-i mr-4">
              <Link to="/akelab">Secuencia Akelab</Link>
            </li>
            <li className="nav-i">
              <Link to="/web">Dashboard</Link>
            </li>
          </ul>
        </nav>
        

        
        <Switch>
          <Route exact path="/">
            <Formulario
                  obtenerDato={obtenerDato}
                  setError={(e)=>setError(e)}
                />
                {dato && !error ? <Secuencia dato={dato}/> : null}
          </Route>
          <Route path="/akelab">
            <FormulariAkelab
                obtenerSerie={obtenerSerie}
                setError={(e)=>setError(e)}
              />
              { series && !error ? <SecuenciaAkelab series={series} /> : null}
          </Route>
          <Route path="/web">
            <Landing/>
          </Route>
        </Switch>
      </div>
    </Router>
    </Fragment>
  );
}

export default App;
