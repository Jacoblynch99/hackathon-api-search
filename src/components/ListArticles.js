import React from "react"
import DisplayArticleCard from "./DisplayArticleCard"

export default function ListArticles(props) {
  return (
    <ul>
      {props.articles.map((x) => {
        return (
          <DisplayArticleCard
            articles={x}
            title={x.title}
            url={x.url}
            points={x.points}
            author={x.author}
            date={x.created_at.slice(0, 10)}
          />
        )
      })}
    </ul>
  )
}