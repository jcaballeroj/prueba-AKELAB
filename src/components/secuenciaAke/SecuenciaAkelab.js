import React from 'react';

const SecuenciaAkelab = ({series}) => {
    let a = [];
    for (let i = 1; i < series; i++) {
        a.push(i);
    }
    let resultado = a.map(item => {
        if (item % 3 === 0) {
            return ' AKE ';
        } else if(item % 5 === 0){
            return ' LAB ';
        }else{
            return (item + " ") ;
        }
    });

    return ( 
        <p>{resultado}</p>
     );
}
 
export default SecuenciaAkelab;