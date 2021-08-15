import React,{Fragment} from 'react';

const Cards = ({item,url}) => {
    const {poster_path,title,overview,vote_average,genre_ids,release_date} = item;
    return ( 
        <Fragment>
            <div className="content">
                <h5 className="img-title">{title}</h5>
               <div className="content-movie">
                <div className="content-image">
                        <img src={url+poster_path} alt={title} className="image"/>
                    </div>
                    <div className="content-description">
                        <p className="text-movie">{overview}</p>
                        <div className="content-footer">
                            <p className="card-text"><b>Titutlo:</b> {title}</p>
                            <p className="card-text"><b>Calificacion:</b> {vote_average} </p>
                            <p className="card-text"><b>Genero:</b> {genre_ids}</p>
                            <p className="card-text"><b>Fecha de Realizacion:</b> {release_date}</p>      
                        </div>
                    </div>
                    
               </div>
              
            </div>
      </Fragment>

     );
}
 
export default Cards;