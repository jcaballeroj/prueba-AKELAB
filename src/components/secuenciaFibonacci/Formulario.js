import React,{useState,Fragment} from 'react';
import Error from '../Error';
const Formulario = ({obtenerDato,setError}) => {

    const[numero, guardarNumero] = useState('');
    const[error, guardarError] = useState(false);

    //validar Datos
    const enviarDatos = e =>{
        e.preventDefault();
        if (isNaN(numero)) {
            guardarError(true);
            setError(true);
            return;
        }else if (numero < 1){
            guardarError(true);
            setError(true);
            return;
        }
        setError(false);
        guardarError(false);
        //pasamos el numero al componente principal
        obtenerDato(numero);
    }

    return ( 
        <Fragment>
            <h1 className="text-center">Ejercicio 1 </h1>
            <p className="text-center">secuencia Fibonacci</p>
            <div className="container ">
                <form onSubmit={enviarDatos} className="form-inline align-items-center justify-content-center">
                    <div className="form-group">
                        
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
                    </div>
                </form>
                { error ? <Error mensaje="El dato ingresado debe ser numerico y mayor a 1"/> : null}
            </div>
        </Fragment>
     );
}
 
export default Formulario;