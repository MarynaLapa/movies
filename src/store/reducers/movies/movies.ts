import { Action, Reducer } from 'redux';

export interface Movie {
    id: number;
    title: string;
    popularity: number;
    overview: string;
}

interface MoviesState {
    top: Movie[]
}

const initialState: MoviesState = {
    top: [
        {
            id: 1,
            title: "Inception",
            popularity: 98,
            overview: "Dreams..." 
        },
        {
            id: 2,
            title: "The GodFather",
            popularity: 97,
            overview: "GodFather..."
        },
        {
            id: 3,
            title: "The Dark Kninght",
            popularity: 96.5,
            overview: "Batman..."
        },
        {
            id: 4,
            title: "The GodFather Part II",
            popularity: 96,
            overview: "Part II..."
        }
    ]
}

const moviesReducer : Reducer<MoviesState, Action> = (state, action) => {
    return initialState;
}

export default moviesReducer;