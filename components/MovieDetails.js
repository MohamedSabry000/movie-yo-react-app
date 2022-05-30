import React, { Component } from 'react';
import Link from "next/link";

class MovieDetails extends Component {

    shorten_desc = (text, maxlength) => {
        return text.length >= maxlength ? text.substr(0, maxlength) + '...' : text;
    }

    render() {

        const { movie, GenreName } = this.props;
        const post_image = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;
        let stars_fill = [];
        let stars_empty = [];
        for (let i = 0; i < Math.round(movie.vote_average / 2); i++) stars_fill.push('&#9733;');
        for (let i = 0; i < 5 - Math.round(movie.vote_average / 2); i++) stars_empty.push('&#9734;');



        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                        <img className="card-img-top" src={post_image} alt={movie.original_title} />
                    <div className="card-body">
                        <h4 className="card-title">
                            <Link href="/movies/[id]" as={`/movies/${movie.id}`} >
                                {movie.original_title}
                            </Link>
                        </h4>
                        <hr />
                        <div className="movie-genre">{GenreName.map((genre,index)=> <span key={genre.id}>{index!==0?',':''} {genre.name}</span>)}</div>
                        <p className="card-text">{this.shorten_desc(movie.overview, 200)}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            {stars_fill.map((s, id) => <span key={id}>&#9733;</span>)}
                            {stars_empty.map((s, id) => <span key={id}>&#9734;</span>)}
                        </small>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;

