import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import ListArticles from './components/ListArticles'
import SearchForm from './components/SearchForm'

class App extends Component {
  state = {
    articles: [],
    input: '',
    value: ''
  }

axiosFetch = () => {
  return axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.input}&tags=story`)
  .then(res => {    
    const articles = res.data.hits
    this.setState({ articles })
  })
}

tagFetch = () => {
  return axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.input}&tags=story`)
  .then(res => {    
    const articles = res.data.hits
    this.setState({ articles })
  })
}

dateFetch = () => {
  return axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.input}&tags=story`)
  .then(res => {    
    const articles = res.data.hits
    this.setState({ articles })
  })
}

authorFetch = () => {
  return axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.input}&tags=story`)
  .then(res => {    
    const articles = res.data.hits
    this.setState({ articles })
  })
}

onInput = (input) => {
  this.setState({ input })
}

handleChange = (event) => {
  this.setState({ input: event.target.value, value: event.target.value })
}

handleSubmit = (event) => {
  event.preventDefault()
  this.axiosFetch()
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={this.axiosFetch}>Generate articles</button>
        <ListArticles articles={this.state.articles}/>
        <SearchForm onInput={this.onInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state}/>
      </header>
    </div>
    )
  }
}

export default App
