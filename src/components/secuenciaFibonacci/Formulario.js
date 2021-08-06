import React,{useState} from 'react';
import Error from '../Error';
const Formulario = ({obtenerDato}) => {

    const[numero, guardarNumero] = useState('');
    const[error, guardarError] = useState(false);

    //validar Datos
    const enviarDatos = e =>{
        e.preventDefault();
        if (isNaN(numero)) {
            guardarError(true);
            return;
        }else if (numero < 1){
            guardarError(true);
            return;
        }
        guardarError(false);
        //pasamos el numero al componente principal
        obtenerDato(numero);
    }

    return ( 

        <form onSubmit={enviarDatos}    >
            
            <input
                type="text"
                placeholder="Ingrese un numero..."
                value={numero}
                onChange={e => guardarNumero(e.target.value)}
            />
            <input
                type="submit"
                value="Enviar"
            />
            { error ? <Error mensaje="El dato ingresado debe ser numerico y mayor a 1"/> : null}
        </form>
     );
}
 
export default Formulario;