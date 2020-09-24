import React from 'react'
import DisplayArticleCard from './DisplayArticleCard'

export default function ListArticles(props) {
  return (
    <ul>
      {props.article.map((item) => {
        return <DisplayArticleCard article={item} />
      })}
    </ul>
  )  
}