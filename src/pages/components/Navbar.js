import React from 'react';
import '../index.css';

//imagenes
import SearchIcon from '../img/Vector.png'
import FilterIcon from '../img/Filter Icon.png';
import ArrowIcon from '../img/Arrow Icon.png';
const Navbar = ({generos}) => {
    return ( 
        <nav className="navbar navbar-expand-lg">
            <form className="form-inline my-2 my-lg-0">
                <div className="searchbar">
                    <input className="search_input" type="text" name="" placeholder="Search..."/>
                    <a href="{#}" className="search_icon"> <img src={SearchIcon} alt=""/> </a>
                </div>
            </form>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
               
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle ml-2 " href="{#}" id="navbarDropdown"  data-toggle="dropdown" >
                            <img src={FilterIcon} alt="" />
                        </a>
                        <div className="dropdown-menu genero dropdown-menu-right " aria-labelledby="navbarDropdown">
                           <p className="ml-3 text-dark bold">Genero</p>
                            {generos.map((item) => (
                                <a className="dropdown-item" href={item.id}>{item.name}</a>
                            ))}
                            
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link order dropdown-toggle text-dark" href="{#}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ordenar <img src={ArrowIcon} alt=""  className="img-order ml-2"/>
                        </a>
                        <div className="dropdown-menu ">
                            <p className="ml-3 text-dark bold">Fecha</p>
                            <a className="dropdown-item" href="{#}">Nuevas Antiguas</a>
                            <a className="dropdown-item" href="{#}">Antiguas Nuevas</a>
                            <div className="dropdown-divider"></div>
                            <p className="ml-3 text-dark bold">Calificacion</p>
                            <a className="dropdown-item" href="{#}">0 - 10 puntos</a>
                            <a className="dropdown-item" href="{#}">10 - 0 puntos</a>
                            
                        </div>
                    </li>
                </ul>
            </div>

        </nav>

     );
}
 
export default Navbar;