import React,{useState} from 'react';
import Error from '../Error';
const Formulario = ({obtenerSerie}) => {

    const[serie, guardarSerie]= useState('');
    const[error, guardarError]= useState(false);

    //validar Datos
    const enviarNumero = e => {
        e.preventDefault();
        if (isNaN(serie)) {
            guardarError(true);
            return;
        }else if (serie < 1){
            guardarError(true);
            return;
        }
        guardarError(false);

        //enviamos el numero al componente principal
        obtenerSerie(serie);
    }
    return (  
        <form onSubmit={enviarNumero}>
            { error ? <Error mensaje="El dato ingresado debe ser numerico y mayor a 1" /> : null }

            <input type="text" value={serie} onChange={e => guardarSerie(e.target.value)} placeholder="ingrese un numero"/>
            <input type="submit"/>
        </form>
    );
}
 
export default Formulario;