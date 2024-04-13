import { connect } from "react-redux"
import { Movie } from "../../store/reducers/movies/movies"
import { RootState } from "../../store/store"
import { MovieCard } from "../MovieCard/MovieCard"

import '../../index.css'
import './Movies.css'

interface MoviesProps {
    movies: Movie[]
}

function Movies({ movies }: MoviesProps) {
    
    return (
        <section>
            <div className="container">
                <h1 className="Movies-title">Movies</h1>
                <ul className="Movies-list">
                    {movies.map((movie) =>
                        <li key={movie.id} className="Movies-item">
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