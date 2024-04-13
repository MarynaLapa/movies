import { Link } from "react-router-dom";

import './MovieCard.css'

interface MovieCardProps {
    id: number;
    title: string;
    overview: string;
    popularity: number;
}

export function MovieCard({ id, title, overview, popularity }: MovieCardProps) {

  return (
      <div className="Movie-card">
        <Link to={`/movies/${id}`}>
            {title}
        </Link>
        <p>{overview}</p>
        <p>{popularity}</p>
    </div>
  )
}
