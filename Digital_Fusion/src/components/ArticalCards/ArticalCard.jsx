// import React, { useState } from 'react';
// const [articles, setArticles] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(null);
function ArticalCards() {
  return (
    <>
      <div className="artical__card_section">
        <div className="artical__card">
          <img src="" className="artical__card_image" />
          <div className="artical__card_content">
            <h1 className="artical__card_date"></h1>
            <h2 className="arrtical__card_title"></h2>
            <p className="artical__card_description"></p>
            <p className="artical__card_source"></p>
          </div>
        </div>
      </div>
    </>
  );
}
// export default ArticalCards;
// const ArticleCard = ({ article }) => (
//     <div className="article-card">
//         <img src={article.urlToImage} alt={article.title} />
//         <h3>{article.title}</h3>
//         <p>{article.description}</p>
//         <div>Source: {article.source.name}</div>
//         <div>Date: {new Date(article.publishedAt).toLocaleDateString()}</div>
//     </div>
// );
export default ArticalCards;
