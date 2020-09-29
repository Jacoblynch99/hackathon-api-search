import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ListArticles from "./components/ListArticles";
import SearchForm from "./components/SearchForm";

class App extends Component {
  state = {
    articles: [],
    input: "",
    sortParam: "title",
  };

  allStoriesFetch = () => {
    return axios
      .get(
        `https://hn.algolia.com/api/v1/search?query=${this.state.input}&tags=story`
      )
      .then((res) => {
        const articles = res.data.hits;
        this.setState({ articles });
      });
  };

  tagFetch = () => {
    return axios
      .get(`https://hn.algolia.com/api/v1/search?&tags=${this.state.input}`)
      .then((res) => {
        const articles = res.data.hits;
        this.setState({ articles });
      });
  };

  dateFetch = () => {
    return axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?query=${this.state.input}&tags=story`
      )
      .then((res) => {
        const articles = res.data.hits;
        this.setState({ articles });
      });
  };

  authorFetch = () => {
    return axios
      .get(
        `https://hn.algolia.com/api/v1/search?tags=story,author_${this.state.input}`
      )
      .then((res) => {
        const articles = res.data.hits;
        this.setState({ articles });
      });
  };

  authorSpanFetch = (spanValue) => {
    return axios
      .get(
        `https://hn.algolia.com/api/v1/search?tags=story,author_${spanValue}`
      )
      .then((res) => {
        const articles = res.data.hits;
        this.setState({ articles });
      });
  };

  onInput = (input) => {
    this.setState({ input });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    const param = this.state.sortParam;
    e.preventDefault();
    if (param === "title") {
      this.allStoriesFetch();
    } else if (param === "creation-date") {
      this.dateFetch();
    } else if (param === "tag") {
      this.allStoriesFetch();
    } else if (param === "author") {
      this.authorFetch();
    }
  };

  selectHandleChange = async (e) => {
    await this.setState({ sortParam: e.target.value });
    this.handleSubmit(e);
  };

  authorHandler = (spanValue) => {
    this.authorSpanFetch(spanValue);
  };

  componentDidMount() {
    this.allStoriesFetch();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={require("./hacker-news-logo.jpg")}
            className="App-logo"
            alt="HN"
          />
          <SearchForm
            onInput={this.onInput}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            state={this.state}
            selectHandleChange={this.selectHandleChange}
          />
          <ListArticles state={this.state} authorHandler={this.authorHandler} />
        </header>
      </div>
    );
  }
}

export default App;
