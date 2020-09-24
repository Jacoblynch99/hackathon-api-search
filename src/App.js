import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListArticles from './components/ListArticles'

class App extends Component {
  state = {
    articles: []
  }

axiosFetch = () => {
  return axios.get('http://hn.algolia.com/api/v1/items/10')
  .then(res => {
    const allArticles = res.data.url;
    // console.log(allArticles)
    this.setState({ articles: allArticles});
  })
}
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={this.axiosFetch}>Generate articles</button>
        <ListArticles article={this.state.articles}/>
      </header>
    </div>
    );
  }
}

export default App;
