import MovieInfoComponent from "@/components/movieInfo/MovieInfoComponent";
import { movieService } from "@/services/movie.service";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import styles from './MovieInfoPage.module.css';
import MovieVideoComponent from "@/components/movieVideo/movieVideoComponent";

const MovieInfoPage = async ({params: {id}}: Params) => {

   let movie = await movieService.getMoviesById(+id)
    
   return (
       <section className={styles.movie_info_container}>
            <MovieInfoComponent movie={movie}/>
            <MovieVideoComponent id={id}/>
       </section>
   );
};

export default MovieInfoPage;