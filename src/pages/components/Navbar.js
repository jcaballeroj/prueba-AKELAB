import React from 'react';
import '../index.css';
//imagenes
import SearchIcon from '../img/Vector.png'
import FilterIcon from '../img/Filter Icon.png';
import ArrowIcon from '../img/Arrow Icon.png';
const Navbar = ({generos,onClickCheckbox}) => {
    return ( 
        
        <nav className="navbar navbar-expand-sm">
            <form className="form-inline my-2 my-lg-0">
                <div className="searchbar">
                    <input className="search_input" type="text" name="" placeholder="Search..." />
                    <p className="search_icon"> <img src={SearchIcon} alt=""/> </p>
                </div>
            </form>
            

            <div className="" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto list-items">
                    <li className="nav-item dropdown content-genero">
                        <a className="nav-link filter dropdown-toggle ml-2 " href="{#}" id="navbarDropdown"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >
                            <img src={FilterIcon} alt="" />
                        </a>
                        <div className="dropdown-menu genero" >
                            <div className="cuadrado"></div> 
                            <p className="ml-3 text-dark bold">Genero</p>
                            {generos.map((item) => (
                                <>
                                   <div key={item.id}>
                                        <label  className="dropdown-item label" >
                                            <input type="checkbox" value={item.state} onClick={(e)=>onClickCheckbox(e,item)}/>
                                            {item.name}
                                        </label>
                                   </div>
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