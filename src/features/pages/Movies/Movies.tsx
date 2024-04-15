import { connect } from "react-redux"
import { Movie } from "../../../store/reducers/movies/movies"
import { RootState } from "../../../store/store"
import { MovieCard } from "../../MovieCard/MovieCard"

import '../../../index.scss'
import style from './Movies.module.scss'

interface MoviesProps {
    movies: Movie[]
}

function Movies({ movies }: MoviesProps) {
    
    return (
        <section>
            <div className="container">
                <h1 className={style.title}>Movies</h1>
                <ul className={style.list}>
                    {movies.map((movie) =>
                        <li key={movie.id} className={style.item}>
                            <MovieCard
                                id={movie.id}
                                title={movie.title}
                                overview={movie.overview}
                                popularity={movie.popularity}
                            />
                        </li>)}
                </ul>
            </div>
        </section>
        
  )
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top
})

const connector = connect(mapStateToProps)

export default connector(Movies)