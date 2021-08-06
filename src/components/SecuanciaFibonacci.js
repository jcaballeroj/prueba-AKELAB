import React from 'react';

const SecuenciaFibonacci = ({dato}) => {
     //creamos un array para poder iterrar los datos y obtener la secuencia
     let secuencia = [1,1];
     for (let i = 2; i < dato; i++) {
         secuencia.push(secuencia[i-1] + secuencia[i-2]);
     }

    return ( 
        <p>la secuencia fibonacci es: {secuencia}</p>
     );
}
 
export default SecuenciaFibonacci;