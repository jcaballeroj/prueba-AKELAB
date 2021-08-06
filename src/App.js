import React,{Fragment,useState} from 'react';
import Formulario from './components/Formulario';
import Secuencia from './components/SecuanciaFibonacci';
function App() {

  const[dato, obtenerDato] = useState('');

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center">Serie Fibonacci</h1>
        <Formulario
          obtenerDato={obtenerDato}
        />
        {dato ? <Secuencia dato={dato}/> : null}
      </div>
    </Fragment>
  );
}

export default App;
