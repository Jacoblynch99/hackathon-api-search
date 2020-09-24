import React from 'react'


export default class SearchForm extends React.Component {
  render() {
    const { articles, input } = this.props.state
    return (
      <div>
        <label for="articles">Search By:</label>

        <select name="articles" id="articles">
          <option value="title">Title</option>
          <option value="tag">Tag</option>
          <option value="author">Author</option>
          <option value="creation-date">Date Created</option>
        </select>
        
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Enter Search:
            <input type="text" value={input} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
