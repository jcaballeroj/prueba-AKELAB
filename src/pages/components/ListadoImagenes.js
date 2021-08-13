import React from 'react';
import Cards from './Cards';

const ListadoImagenes = ({datos,url}) => {
    return ( 
        <div className="col-12 p-5 row">
            {datos.map(item => (
                <Cards 
                    key={item.id}
                    item={item}
                    url={url}
                />
            ))}
        </div>
     );
}
 
export default ListadoImagenes;