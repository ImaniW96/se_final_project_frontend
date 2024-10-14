import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../../utils/NewsApi";

const ArticalCards = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const getDates = () => {
    const today = new Date();
    const fromDate = new Date();
    fromDate.setDate(today.getDate() - 7);

    return {
      from: fromDate.toISOString().split("T")[0],
      to: today.toISOString().split("T")[0],
    };
  };

  useEffect(() => {
    const fetchNews = () => {
      const { from, to } = getDates();
      const url = `${BASE_URL}?q=${query}&from=${from}&to=${to}&pageSize=100&apiKey=${API_KEY}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Cannot fetch data: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setArticles(data.articles);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };

    if (query) {
      setLoading(true);
      fetchNews();
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div>
      <h1>Tech News</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for news"
          minLength={2}
          required
        />

        <button type="submit">Search</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>Error fetching news: {error.message}</div>}

      <div className="artical__card">
        {articles.map((article, articleId) => (
          <li key={articleId}>
            <h2>{article.title}</h2>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="artical__image"
              />
            )}
            <p className="artical__paragraph">{article.description}</p>
            <a href={article.url} target="_blank" className="artical__link">
              Read more
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ArticalCards;
