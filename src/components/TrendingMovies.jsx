import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class TrendingMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
      error: null
    };
  }

  fetchMovies = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=e3ed6b7&s=pixar"
      );
      const data = await response.json();

      if (data.Response === "True") {
        this.state.movies = data.Search;
      } else {
        throw new Error("No movies found");
      }
    } catch (error) {
      this.state.error = "An error occurred while fetching data";
    } finally {
      this.state.loading = false;
    }

    this.forceUpdate();
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <Container>
        <h4 className="text-white  fs-1 mt-4">Trending Now</h4>
        <Row xs={1} sm={2} md={3} lg={4} xl={6}>
          {movies.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID} className="mb-2 text-center px-1">
              <Card className="movie-card">
                <div className="card-img-container">
                  <Card.Img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="movie-img"
                  />
                </div>
                <Card.Body className="p-2">
                  <Card.Title className="text-white">{movie.Title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default TrendingMovies;
