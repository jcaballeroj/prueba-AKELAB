import React,{useEffect,useState} from 'react';
import Cards from './Cards';

const ListadoImagenes = ({datos,url,generos,termino}) => {
    const[generosids, setGenerosIds] = useState([]);
    useEffect(()=>{
        setIds();
    },[generos])

    const setIds = () => {
        let Data = generos.filter( itm => itm.state === true).map(gnid => gnid.id );
        setGenerosIds(Data);
        //console.log(Data);
    }
    return ( 
        <div className="content-cards">
            {termino ? datos.filter(item=> item.title.includes(termino)).map(item => (
                    <Cards 
                        key={item.id}
                        item={item}
                        url={url}
                        generos={generos.filter(gn => item.genre_ids.includes(gn.id))}
                    />
                )) :  generosids.length > 0 ? datos.filter(item => generosids.includes(item.genre_ids.map(i => i)[0])).map(item => (
                    <Cards 
                        key={item.id}
                        item={item}
                        url={url}
                        generos={generos.filter(gn => item.genre_ids.includes(gn.id))}
                    />
                ))
                : 
                datos.map(item => (
                <Cards 
                    key={item.id}
                    item={item}
                    url={url}
                    generos={generos.filter(gn => item.genre_ids.includes(gn.id))}
                />
            ))}
        </div>
     );
}
 
export default ListadoImagenes;