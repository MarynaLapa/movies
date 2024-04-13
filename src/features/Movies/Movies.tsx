
import { connect } from "react-redux"
import { Movie } from "../../store/reducers/movies/movies"
import { RootState } from "../../store/store"

interface MoviesProps {
    movies: Movie[]
}

function Movies({ movies }: MoviesProps) {
    
    return (
        <div>
            <p>Movies</p>
            <ul>
                {movies.map((movie) =>
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <p>{movie.popularity}</p>
                    </li>)}
            </ul>
        </div>
  )
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top
})

const connector = connect(mapStateToProps)

export default connector(Movies)