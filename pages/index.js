import Head from 'next/head'
import _ from "lodash";

// import Script from 'next/script'
// import styles from '../styles/Home.module.scss'
import NavBar from "../components/NavBar";
import SideMenu from "../components/SideMenu";
import CarouselComponent from '../components/CarouselComponent';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';
import MovieDB from "./api/MovieDB";
import { getMovies, getGenres } from '../actions';
import React from 'react';

class Home extends React.Component {

  state = {
    movies: [],
    genres: [],
    page: 1,
    totalPages: 1,
    error: false,
    errorMessage: '',
    category: '',
    categoryId: null
  }

  componentDidMount = () => {
    this._getMovies(this.state.page);
    this._getGenres();
  }

  _getMovies = (page) => getMovies(page)
    .then(movies => this.setState({ movies: movies.results, page: movies.page, totalPages: movies.total_pages, error: false }))
    .catch(err => this.setState({ error: true, errorMessage: err }))
  _getGenres = () => getGenres()
    .then(genres => this.setState({ genres: genres, error: false }))
    .catch(err => this.setState({ error: true, errorMessage: err }))

  changeCategory = (cat, id) => {
    this.setState({ category: cat, categoryId: id });
  }

  filterMovies = (movies=this.state.movies, catId=this.state.categoryId) => {
    return movies.filter(movie =>
      (movie.genre_ids && catId)? movie.genre_ids.includes(catId):movies
    )
  }

  getGenreName = (ids) =>  this.state.genres.filter(genre => ids.includes(genre.id))
  

  render = () => {
    console.log(this.state);
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>

        <NavBar />

        <div className="home-page">
          <div className="container">
            <div className="row">
              {this.state.error ?
                <div className="alert alert-warning" role="alert">
                  {this.state.errorMessage}
                </div>
                :
                <>
                  <div className="col-lg-3">
                    <SideMenu
                      genres={this.state.genres}
                      changeCategory={this.changeCategory}
                      activeCategory={this.state.category}
                      filterMovies={this.filterMovies}
                    />
                  </div>

                  <div className="col-lg-9">
                    <CarouselComponent slides={this.state.movies} />
                    <h5>{this.state.category? `Displaying ${this.state.category} Movies!`: ''}</h5>
                    <MovieList
                      getMoviesPage={this._getMovies}
                      getGenreName={this.getGenreName}
                      page={this.state.page}
                      totalPages={this.state.totalPages}
                      movies={this.filterMovies() || []} />
                  </div>
                </>
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home;
