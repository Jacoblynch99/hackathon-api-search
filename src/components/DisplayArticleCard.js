import React from "react"

export default function DisplayArticleCard(props) {
  return (
    <li>
      <a href={props.url}>{props.title}</a>
      
      
      <br></br>
      Points:{" "}
      <span id="points">{props.points}</span>
      
      
      <br></br>
      Date Created:{" "} 
      <span id="date">{props.date}</span>
      
      <br></br>
      Author:{" "}
      <span id="author">{props.author}</span>
      
      
      <br></br>
    </li>
  )
}
