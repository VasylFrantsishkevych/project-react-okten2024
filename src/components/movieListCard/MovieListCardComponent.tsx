import { IMovie } from '@/models';
import styles from './MovieListCardComponent.module.css';
import { FC } from 'react';
import Link from 'next/link';
import PosterPreviewComponent from '../poster/PosterPreviewComponent';

type IProps = {
   movie: IMovie;
}

const MovieListCardComponent: FC<IProps> = ({movie}) => {

   const {id, original_title, poster_path, vote_average, release_date} = movie;
   
   return (
       <div className={styles.movie_card}>
         <Link href={'/movie/' + id}>
            <PosterPreviewComponent sizeImage={'/w200'} poster_path={poster_path} alt={original_title} width={200} height={200}/>
            <div className={styles.rating}>
               {vote_average.toFixed(1)}
            </div>
            <div className={styles.movie_card_year}>
               {release_date?.split('-')[0]}
            </div>
         </Link>
       </div>
   );
};

export default MovieListCardComponent;