/* Modules */
import React from 'react'

/* Components */
import Noticia from "./Noticia";

const ListNews = ({news}) => {
  return (
    <div className="row">
      {news.map(noticia => (
        <Noticia
          key={noticia.url}
          noticia={noticia}
        />
      ))}
    </div>
  );
}
 
export default ListNews;