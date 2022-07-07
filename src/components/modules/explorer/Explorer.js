import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchArticles,
  selectArticles,
} from '../../../store/articles/articlesSlice'
import './Explorer.scss'

export function Explorer() {
  const articles = useSelector(selectArticles)
  const dispatch = useDispatch()

  const articleList =
    articles.length > 0 ? (
      articles.map((article, index) => <li key={index}>{article.title}</li>)
    ) : (
      <p>No Articles</p>
    )

  return (
    <div>
      <div className="row">
        <button
          className="button"
          aria-label="Fetch articles"
          onClick={() => dispatch(fetchArticles())}
        >
          Fetch articles
        </button>
        <ul>{articleList}</ul>
      </div>
    </div>
  )
}
