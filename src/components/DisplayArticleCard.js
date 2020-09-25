import React from 'react'

const DisplayArticleCard = (props) => {
  return ( 
    <li>
      <a href={props.url}>
        {props.title}
      </a>
      <p>{props.points}</p>
      <p>{props.date}</p>
      <p>{props.author}</p>
    </li>
   );
}
 
export default DisplayArticleCard;