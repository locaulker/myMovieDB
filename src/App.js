import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Movie from "./Movie"

class App extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=c1104b67d4a4c77cc42b34a4c561c8f3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    try {
      const res = await fetch(url)
      const movies = await res.json()

      this.setState({
        movies: movies.results
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      // console.log(this.state.movies),
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    )
  }
}

export default App
