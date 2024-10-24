// import React, { useEffect, useState } from "react";
// import { API_KEY, BASE_URL } from "../../utils/NewsApi";
import "../ArticalCards/ArticleCard.css";

const ArticleCards = ({ loading, error, articles }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div>
      <h1 className="article__searchResults">Search Results</h1>
      <form onSubmit={handleSearch}></form>

      {loading && <div>Loading...</div>}
      {error && <div>Error fetching news: {error.message}</div>}
      <div className="article__cardContainer">
        {articles
          .filter((article) => {
            return article.content !== "[Removed]";
          })
          .map((article, articleId) => (
            <div className="article__card" key={articleId}>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="article__image"
                />
              )}
              <h2 className="article__title">{article.title}</h2>
              <p className="article__paragraph">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article__link"
              >
                Read more
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ArticleCards;
