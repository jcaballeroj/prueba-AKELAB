import React from 'react';
import Cards from './Cards';

const ListadoImagenes = ({datos,url}) => {
    return ( 
        <div className="content-cards">
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