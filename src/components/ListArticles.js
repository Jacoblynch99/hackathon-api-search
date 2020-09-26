import React from "react"
import DisplayArticleCard from "./DisplayArticleCard"

export default function ListArticles(props) {
  const { articles } = props.state
  return (
    <ul>
      {articles.map((x) => {
        return (
          <DisplayArticleCard
            articles={x}
            title={x.title}
            url={x.url}
            points={x.points}
            author={x.author}
            date={x.created_at.slice(0, 10)}
            tags={x._tags}
            state={props.state}
            authorHandler={props.authorHandler}
          />
        )
      })}
    </ul>
  )
}
