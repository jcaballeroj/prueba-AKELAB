import React,{Fragment,useEffect,useState} from 'react';
import Navbar from './components/Navbar';
import Listado from './components/ListadoImagenes';


import json from './Movies.json';
const Landing = () => {
    const[datos, setDatos] = useState([])
    const[url,setUrl] = useState()
    const[generos,setGeneros] = useState([])

    const loading = () => {
        const dato = JSON.parse(JSON.stringify(json));
        setUrl(dato.images_url)
        setGeneros(dato.genres)
        setDatos(dato.results);
    }
    useEffect(()=>{
        loading();
    },[]);
    return ( 
        <Fragment>
            <div>
                <Navbar
                    key={generos}
                    generos={generos}
                />
                <Listado
                    datos={datos}
                    url={url}
                />
                </div>
        </Fragment>
     );
}
 
export default Landing;