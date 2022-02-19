import React from "react";
import { useFetch } from "../hooks/useFetch";

// home styles
import "./Home.css";

const Home = () => {
  const { data: articles, error } = useFetch("http://localhost:3000/articles");
  return (
    <div className="home">
      <h2>Articles</h2>
      {error && (
        <div>
          <h3>{error}</h3>
        </div>
      )}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
