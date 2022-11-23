import React from 'react'
import Article from './Article'

export default function ArticleList({ posts }) {

  const articlesArr = posts.map(post => (
   <Article key={post.id} {...post} />
  ))

  return (
    <main>
      {articlesArr}
    </main>
    
  )
}
