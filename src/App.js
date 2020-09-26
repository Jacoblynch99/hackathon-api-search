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
    value: 'tag'
  }

axiosFetch = () => {
  if (this.state.value === 'author') {
    return axios.get(`http://hn.algolia.com/api/v1/search?query=author_:${this.state.input}`)
    .then(res => {
      this.setState({ articles: res.data.hits })
    })
  }

  if (this.state.value === 'tag') {
    return axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.input}`)
    .then(res => {
      this.setState({ articles: res.data.hits })
    })
  }

  if (this.state.value === 'title') {
    return axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.input}`)
    .then(res => {
      this.setState({ articles: res.data.hits })
    })
  }

  if (this.state.value === 'creation-date') {
    return axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.input}`)
    .then(res => {
        this.setState({ articles: res.data.hits })
    })
  }
}

onInput = (event) => {
  this.setState({ input: event.target.value })
}

handleChange = (event) => {
  this.setState({value: event.target.value})
}

handleSubmit = (event) => {
  // alert('test ' + this.state.input)
  event.preventDefault()
  this.axiosFetch()
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchForm onInput={this.onInput} handleChange={(e) => this.handleChange(e)} handleSubmit={this.handleSubmit} state={this.state} value={this.state.value}/>
        <ListArticles article={this.state.articles}/>
      </header>
    </div>
    )
  }
}

export default App
