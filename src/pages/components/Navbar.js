import React,{useState} from 'react';
import '../index.css';
//imagenes
import SearchIcon from '../img/Vector.png'
import FilterIcon from '../img/Filter Icon.png';
import ArrowIcon from '../img/Arrow Icon.png';
const Navbar = ({generos}) => {

    const[consulta, setConsulta] = useState("");
    const obtenerGenero = (e) =>{
        e.stopPropagation();
    }
    return ( 
        
        <nav className="navbar navbar-expand-lg">
            <form className="form-inline my-2 my-lg-0">
                <div className="searchbar">
                    <input className="search_input" type="text" name="" placeholder="Search..."  value={consulta} onChange={e => setConsulta(e.target.value)}/>
                    <p className="search_icon"> <img src={SearchIcon} alt=""/> </p>
                </div>
            </form>
            

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown content-genero">
                        <a className="nav-link filter dropdown-toggle ml-2 " href="{#}" id="navbarDropdown"  data-toggle="dropdown" >
                            <img src={FilterIcon} alt="" />
                        </a>
                        <div className="dropdown-menu genero" >
                            <div className="cuadrado"></div> 
                           <p className="ml-3 text-dark bold">Genero</p>
                            {generos.map((item) => (
                                <>
                                    <label className="dropdown-item label" onClick={obtenerGenero}>
                                        <input type="checkbox" value={item.id}/>
                                        {item.name}
                                    </label>
                                </>
                            ))}
                        </div>
                    </li>
                    <li className="nav-item dropdown content-ordenar">
                        <a className="nav-link dropdown-toggle item-order text-dark" href="{#}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ordenar <img src={ArrowIcon} alt=""  className="ml-2"/>
                        </a>
                        <div className="dropdown-menu ordenar">
                            <div className="cuadrado2"></div> 
                            <p className="ml-3 text-dark bold">Fecha</p>
                                <spam className="dropdown-item">Nuevas - Antiguas</spam>
                                <spam className="dropdown-item">Antiguas - Nuevas</spam>
                            <div className="dropdown-divider"></div>
                                <p className="ml-3 text-dark bold">Calificacion</p>
                                <spam className="dropdown-item">0 - 10 puntos</spam>
                                <spam className="dropdown-item">10 - 0 puntos</spam>
                        </div>
                    </li>
                </ul>
            </div>

        </nav>

     );
}
 
export default Navbar;