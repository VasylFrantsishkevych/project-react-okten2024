import Image from 'next/image';
import React, { FC } from 'react'
import styles from './PosterPreview.module.css';

type IProps = {
   sizeImage: string;
   poster_path: string;
   alt: string;
   width: number;
   height: number;
}

const PosterPreviewComponent: FC<IProps> = ({sizeImage, poster_path, alt, width, height}) => {
  return (
    <div className={styles.movie_image}>
      <Image
        src={`${process.env.IMAGE_URL}${sizeImage}${poster_path}`} 
        alt={alt} 
        width={width}
        height={height}
      />
    </div>
  )
}



export default PosterPreviewComponent;