import { FETCH_MOVIE, FETCH_GENRE } from "./constants";
import _ from "lodash";
import MovieDB from "../pages/api/MovieDB";

export const fetchMovie = () => async(dispatch) => {
    const response = await MovieDB.get('/movie/550');

    dispatch({
        type: FETCH_MOVIE,
        payload: response
    })
}

export const fetchGenre = id => dispatch => _fetchGenre(id, dispatch);

const _fetchGenre = _.memoize(async (id, dispatch) => {
  const response = await MovieDB.get(`/genre/movie/list`);

  dispatch( {
    type: FETCH_USER,
    payload: response.genre.find(g => g.id === id),
  });
})

export const getMovies = (page) => {
  return new Promise(async(resolve, reject) => {
    const response = await MovieDB.get(`/discover/movie`, {params: { page: page }});
    resolve(response.data);
    reject("Can't Fetch Data!")
  })
}

export const getGenres = () => {
  return new Promise(async(resolve, reject) => {
    const response = await await MovieDB.get(`/genre/movie/list`);
    resolve(response.data.genres);
    reject("Can't Fetch Data!")
  })
}

export const getMovieById = (id) => {
  return new Promise(async(resolve, reject) => {
    const response = await await MovieDB.get(`/movie/${id}`);
    resolve(response.data);
    reject("Can't Fetch Data!")
  })
}