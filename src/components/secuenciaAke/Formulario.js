import React,{useState,Fragment} from 'react';
import Error from '../Error';
const Formulario = ({obtenerSerie,setError}) => {

    const[serie, guardarSerie]= useState('1');
    const[error, guardarError]= useState(false);

    //validar Datos
    const enviarNumero = e => {
        e.preventDefault();
        if (isNaN(serie)) {
            guardarError(true);
            setError(true);
            return;
        }else if (serie < 0){
            guardarError(true);
            setError(true);
            return;
        }
        setError(false);
        guardarError(false);

        //enviamos el numero al componente principal
        obtenerSerie(serie);
    }
    return (  
        <Fragment>
            <h1 className="text-center">Ejercicio 2 </h1>
            <p className="text-center">Secuencia de Numeros</p>
            <div className="container">
                <form onSubmit={enviarNumero} className="form-inline align-items-center justify-content-center">
                <div className="form-group">
                    <input type="text" value={serie} onChange={e => guardarSerie(e.target.value)} placeholder="ingrese un numero"/>
                    <input type="submit"/>
                </div>
            </form>
            { error ? <Error mensaje="El dato ingresado debe ser numerico y mayor a 1" /> : null }
            </div>
        </Fragment>
    );
}
 
export default Formulario;