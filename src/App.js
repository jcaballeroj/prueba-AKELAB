import React,{Fragment,useState} from 'react';
import Formulario from './components/secuenciaFibonacci/Formulario';
import Secuencia from './components/secuenciaFibonacci/SecuanciaFibonacci';

import FormulariAkelab from './components/secuenciaAke/Formulario';
import SecuenciaAkelab from './components/secuenciaAke/SecuenciaAkelab';
function App() {

  const[dato, obtenerDato] = useState('');
  const[series, obtenerSerie] = useState('');

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1>Serie Fibonacci Ejercicio N°1</h1>
              <Formulario
                obtenerDato={obtenerDato}
              />
              {dato ? <Secuencia dato={dato}/> : null}
          </div>

          <div className="col-sm-6">
            <h1>Serie de Numeros Ejercicio N°2</h1>
            <p>reemplazar los número múltiplos de 3 por la palabra AKE y los números múltiplos de 5 por la palabra LAB.</p>

            <FormulariAkelab
              obtenerSerie={obtenerSerie}
            />
            { series ? <SecuenciaAkelab series={series} /> : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
