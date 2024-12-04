import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import TVShowsSection from "./components/TVShowsSection";
import TrendingMovies from "./components/TrendingMovies";
import Batman from "./components/Batman";
import Ironman from "./components/Ironman";
import MyFooter from "./components/MyFooter";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="bg-dark">
      <Container>
        <Row>
          <MyNavbar />
          <Container>
            <TVShowsSection />
            <TrendingMovies />
            <Batman />
            <Ironman />
            <MyFooter />
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default App;
