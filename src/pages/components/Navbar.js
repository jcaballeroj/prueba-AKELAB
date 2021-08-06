import React from 'react';


//imagenes
import ArrowIcon from '../img/Arrow Icon.png';
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Nombre" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
               
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle ml-2 " href="{#}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-sliders"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <p className="ml-3">Genero</p>
                            
                            <a className="dropdown-item" href="{#}">Another action</a>
                            <a className="dropdown-item" href="{#}">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle ml-2 " href="{#}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ordenar<img src={ArrowIcon} alt='' className="card-img ml-2 icon-arrow" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="{#}">Action</a>
                            <a className="dropdown-item" href="{#}">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="{#}">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>

        </nav>

     );
}
 
export default Navbar;