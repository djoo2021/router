import React ,{useState} from 'react'
import Show from './Show';
import MovieCard from './MovieCard'
import Search from './Search';

function Movies() {

    const [movie, setmovie] = useState(
        [ {id:1,title:"Film Site",postURL:"www.Film Site.com",img:'/images/01.jpg'},{id:2,title:"Avatar",postURL:"www.avatar.com",img:'/images/02.jpg'},
        {id:3,title:"Losangelos",postURL:"www.Losangelos.com",img:'/images/03.jpg'},{id:4,title:"Losangelos",postURL:"www.Losangelos.com",img:'/images/04.jpg'},
        {id:1,title:"Hopper",postURL:"www.Hopper.com",img:'/images/05.jpg'},{id:6,title:"The father",postURL:"www.The father.com",img:'/images/06.jpg'}
    ]) ;

    const filterMovie=(word)=>{
        const search=word.toLocaleLowerCase();
            const nfilter=  movie.filter(el=>el.title.toLocaleLowerCase().includes(search));
                 setmovie(nfilter);
                     }
                     return (
                     <div  className='row'>
                        <Search  FM={filterMovie}/>
                             <MovieCard  movie={movie}/>
                                  <Show  movie={movie}/>
                                     </div>
    )
}

export default Movies
