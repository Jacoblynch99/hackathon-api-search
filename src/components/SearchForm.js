import React from "react"

export default class SearchForm extends React.Component {
  render() {
    const { state, handleChange, handleSubmit, selectHandleChange } = this.props
    return (
      <div>
        <label for="articles">Search By: </label>

        <select onChange={selectHandleChange} name="articles" id="articles">
          <option value="title">Title</option>
          <option value="tag">Tag</option>
          <option value="author">Author</option>
          <option value="creation-date">Date Created</option>
        </select>

        <form onSubmit={handleSubmit}>
          <label>
            Enter Search:{" "}
            <input type="text" value={state.input} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
