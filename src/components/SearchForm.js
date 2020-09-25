import React from 'react'


export default class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="articles">Search By:</label>

        <select onChange={this.props.handleChange} value={this.props.value} name="articles" id="articles">
          <option value="tag">Tag</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="creation-date">Date Created</option>
        </select>
        
        <form onSubmit={this.props.handleSubmit} onChange={this.props.onInput}>
          <label>
            Enter Search:
            <input type="text"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
