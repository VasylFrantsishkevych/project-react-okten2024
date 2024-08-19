import { movieService } from "@/services/movie.service";
import { FC } from "react";
import styles from './movieVideo.module.css';

type IProps = {
   id: string;
}

const MovieVideoComponent: FC<IProps> = async ({id}) => {

   const videosData = await movieService.getVideoById(+id)
   const videos = videosData.results.filter(video => video.name.includes('Official')) 
   
   return (
      <section className={styles.video}>
         <h2>Trailers</h2>
            {
                videos.map(video =>
                    <iframe
                        key={video.id}
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                )
            }
      </section>
   );
};

export default MovieVideoComponent;