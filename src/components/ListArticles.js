import React from 'react'
import DisplayArticleCard from './DisplayArticleCard'
import _ from 'lodash';

export default function ListArticles(props) {
  return (
    <ul>
      {props.article.map((item) => {
        if (item.url) {
          return (        
            <DisplayArticleCard 
              title={item.title} 
              url={item.url} 
              points={item.points} 
              date={item.created_at} 
              author={item.author} 
              key={_.uniqueId()} 
            />
          )
        }
      })}
    </ul>
  )  
}