import React, { Component } from 'react';
import MovieDetails from './MovieDetails';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();  }
    render() {

        const {getMoviesPage, page, totalPages, movies, getGenreName} = this.props;
        console.log(totalPages);
        return (
            <div ref={this.wrapper} className="row">

                {movies.length !== 0?
                    movies.map((movie) => {
                        return <MovieDetails key={movie.id} movie={movie} GenreName={getGenreName(movie.genre_ids)}/>
                    }): null
                }
                <div className="col-lg-12 col-md-12 mb-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={() => page>1 ? getMoviesPage(page-1):null} type="button" className="btn btn-secondary">Left</button>
                        <button type="button" disabled className="btn btn-secondary">Middle</button>
                        <button onClick={() => page<totalPages ? getMoviesPage(page+1):null} type="button" className="btn btn-secondary">Right</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieList;