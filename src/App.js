import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import ListArticles from './components/ListArticles'
import SearchForm from './components/SearchForm'

class App extends Component {
  state = {
    articles: [],
    input: 'licorice'
  }

axiosFetch = () => {
  return axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.input}`)
  .then(res => {
    const allArticles = res.data.hits
    // this.setState({ articles: allArticles })
  })
}

onInput = (input) => {
  this.setState({ input })
}

handleChange = (event) => {
  this.setState({value: event.target.value})
}

handleSubmit = (event) => {
  alert('test' + this.state.value)
  event.preventDefault()
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={this.axiosFetch}>Generate articles</button>
        <ListArticles article={this.state.articles}/>
        <SearchForm onInput={this.onInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state}/>
      </header>
    </div>
    )
  }
}

export default App
