import "../Technews/Technews.css";
import ArticalCards from "../ArticalCards/ArticalCard";
import { useState } from "react";
import { API_KEY, BASE_URL } from "../../utils/NewsApi";

function Technews() {
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

  return (
    <>
      <header className="tech__header">
        <h1 className="tech__header_text">Find The Latest News</h1>
        <div className="tech__searchbar">
          <input
            className="tech__searchbar_input"
            id="techsearch-form"
            type="input"
            placeholder="Search for the latest Tech News"
            name="keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="tech__searchbar_button"
            type="submit"
            onClick={() => {
              fetchNews();
            }}
          >
            Search
          </button>
        </div>
      </header>

      <ArticalCards
        query={query}
        articles={articles}
        loading={loading}
        error={error}
      />
    </>
  );
}

export default Technews;
