import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <div className="alert alert-warning" role="alert">
            <strong>{mensaje}</strong>
        </div>
    );
}
 
export default Error;