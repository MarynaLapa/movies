import { Link } from "react-router-dom";

import style from './MovieCard.module.scss'

interface MovieCardProps {
    id: number;
    title: string;
    overview: string;
    popularity: number;
}

export function MovieCard({ id, title, overview, popularity }: MovieCardProps) {

  return (
     <Link to={`/movies/${id}`} className={style.card}>
      <img className={style.thumbnail} src="/movie-thumb.png" alt="Movie thumbmail" />
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.overview}>{overview}</p>
        <span className={style.popularity}>{popularity}%</span>
      </div>
    </Link>
  )
}
