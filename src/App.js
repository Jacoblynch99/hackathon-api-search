import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import ListArticles from './components/ListArticles'
import SearchForm from './components/SearchForm'

class App extends Component {
  state = {
    articles: [1,2,3],
    input: 'licorice'
  }

axiosFetch = () => {
  return axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.input}`)
  .then(res => {
    const allArticles = res.data
    this.setState({ articles: allArticles })
  })
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={this.axiosFetch}>Generate articles</button>
        <ListArticles article={this.state.articles}/>
        <SearchForm />
      </header>
    </div>
    )
  }
}

export default App
