import { useRouter } from "next/router";
import { getMovieById } from "../../actions";
import NavBar from "../../components/NavBar";

const Movie = (props) => {

    const router = useRouter();
    const { id } = router.query;
    const { movie } = props

    const post_image = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`;

    return (
        <div className="movie-details-id">
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{movie.title}</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="lead">{movie.overview}</p>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Head</th>
                                        <th scope="col">Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Release Date:</th>
                                        <td>{movie.release_date}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Vote Average:</th>
                                        <td>{movie.vote_average}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Status:</th>
                                        <td>{movie.status}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Genres:</th>
                                        <td colSpan="2">
                                            {
                                                movie.genres.map(g => <p key={g.id}>{g.name}</p>)
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="col-md-6">
                            <img src={post_image + movie.poster_path} className="img-fluid" alt="Responsive image" />
                        </div>
                    </div>
                    <h4>Production Companies:</h4>
                    <div className="row" style={{marginTop: "18px"}}>
                        {movie.production_companies.map(company => {
                            return (
                                <div className="col-md-3" key={company.id}>
                                    <div className="card" style={{ width: "100%" }}>
                                        <img className="card-img-top" src={post_image + company.logo_path} alt="Card image cap" style={{height: "251px"}}/>
                                        <div className="card-body">
                                            <p className="card-text">{company.name}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                    <hr className="my-4" />
                    {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p> */}
                </div>
            </div>
        </div>
    )
}

Movie.getInitialProps = async (context) => {
    const { id } = context.query
    const movie = await getMovieById(id);
    return { movie }
}

export default Movie;