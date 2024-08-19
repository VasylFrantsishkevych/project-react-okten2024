import { movieService } from "@/services/movie.service";
import GenreBadgeComponent from "../genreBadge/GenreBadgeComponent";
import styles from './Genres.module.css';

const GenresComponent = async () => {

   const {genres} = await movieService.getGenres();
   
   return (
      <div className={styles.genres_list}>
         {
            genres.map(genre => <GenreBadgeComponent key={genre.id} genre={genre}/>)
         }
      </div>
   );
};

export default GenresComponent;