import React,{Fragment,useEffect,useState} from 'react';
import Navbar from './components/Navbar';
import Listado from './components/ListadoImagenes';


import json from './Movies.json';
const Landing = () => {
    const[datos, setDatos] = useState([]);
    const[url,setUrl] = useState();
    const[generos,setGeneros] = useState([]);
    const[termino, guardarTermino] = useState('')

    useEffect(()=>{
        loading();
    },[]);

    const loading = () => {
        const dato = JSON.parse(JSON.stringify(json));
        setUrl(dato.images_url)
        let dataGeneros = dato.genres.map(item => {
            return {...item, state:false}
        })
        setGeneros(dataGeneros)
        setDatos(dato.results);
    }
    const changeStateGenders = (e,item) =>{
        //console.log(e, item);
        let newData = Array.from(generos).map(itm => {
            if(itm.id === item.id){
                return {...itm, state:e.target.checked}
            }else{
                return itm
            }
        });
        setGeneros(newData);
    }
  
    return ( 
        <Fragment>
                <Navbar
                    generos={generos}
                    onClickCheckbox={(e,item) => changeStateGenders(e,item)}
                    guardarTermino={guardarTermino}
                />            
            <Listado
                generos={generos}
                datos={datos}
                url={url}
                termino={termino}
            />
        </Fragment>
     );
}
 
export default Landing;