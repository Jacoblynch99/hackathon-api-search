import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import axios from "axios"
import ListArticles from "./components/ListArticles"
import SearchForm from "./components/SearchForm"

class App extends Component {
  state = {
    articles: [],
    input: "",
    sortParam: "title",
  }

  axiosFetch = () => {
    return axios
      .get(
        `http://hn.algolia.com/api/v1/search?query=${this.state.input}&tags=story`
      )
      .then((res) => {
        const articles = res.data.hits
        this.setState({ articles })
      })
  }

  tagFetch = () => {
    return axios
      .get(`http://hn.algolia.com/api/v1/search?&tags=${this.state.input}`)
      .then((res) => {
        const articles = res.data.hits
        this.setState({ articles })
      })
  }

  dateFetch = () => {
    return axios
      .get(
        `http://hn.algolia.com/api/v1/search_by_date?query=${this.state.input}&tags=story`
      )
      .then((res) => {
        const articles = res.data.hits
        this.setState({ articles })
      })
  }

  authorFetch = () => {
    return axios
      .get(
        `http://hn.algolia.com/api/v1/search?tags=story,author_${this.state.input}`
      )
      .then((res) => {
        const articles = res.data.hits
        this.setState({ articles })
      })
  }

  onInput = (input) => {
    this.setState({ input })
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = (e) => {
    const param = this.state.sortParam
    e.preventDefault()
    if (param === "title") {
      this.axiosFetch()
    } else if (param === "creation-date") {
      this.dateFetch()
    } else if (param === "tag") {
      this.axiosFetch()
    } else if (param === "author") {
      this.authorFetch()
    }
  }

  selectHandleChange = async (e) => {
    await this.setState({ sortParam: e.target.value })
    this.handleSubmit(e)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.axiosFetch}>Generate articles</button>
          <SearchForm
            onInput={this.onInput}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            state={this.state}
            selectHandleChange={this.selectHandleChange}
          />
          <ListArticles state={this.state} />
        </header>
      </div>
    )
  }
}

export default App
