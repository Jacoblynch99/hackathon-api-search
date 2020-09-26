import React from "react"

export default function DisplayArticleCard(props) {
  const { sortParam } = props.state
  let display
  if (sortParam === "title") {
    display = (
      <li>
        <h2>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </h2>
        Points: <span id="points">{props.points}</span>
        <br></br>
        Date Created: <span id="date">{props.date}</span>
        <br></br>
        Author: <span id="author">{props.author}</span>
        <br></br>
        <hr></hr>
      </li>
    )
  } else if (sortParam === "creation-date") {
    display = (
      <li>
        <h3 id="date">{props.date}</h3>
        <h2>
          <a href={props.url}>{props.title}</a>
        </h2>
        Points: <span id="points">{props.points}</span>
        <br></br>
        Author: <span id="author">{props.author}</span>
        <br></br>
        <hr></hr>
      </li>
    )
  } else if (sortParam === "tag") {
    display = (
      <li>
        <h2>
          <a href={props.url}>{props.title}</a>
        </h2>
        Tags: <span id="tags">[{props.tags.map((x) => x).join(", ")}]</span>
        <br></br>
        Date Created: <span id="date">{props.date}</span>
        <br></br>
        Points: <span id="points">{props.points}</span>
        <br></br>
        Author: <span id="author">{props.author}</span>
        <br></br>
        <hr></hr>
      </li>
    )
  } else if (sortParam === "author") {
    display = (
      <li>
        <h2>
          <a href={props.url}>{props.title}</a>
        </h2>
        <h3>
          Author: <span id="author">{props.author}</span>
        </h3>
        Tags: <span id="tags">[{props.tags.map((x) => x).join(", ")}]</span>
        <br></br>
        Date Created: <span id="date">{props.date}</span>
        <br></br>
        Points: <span id="points">{props.points}</span>
        <br></br>
        <hr></hr>
      </li>
    )
  }
  return <div>{display}</div>
}
