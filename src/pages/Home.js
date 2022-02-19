import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

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
            <Link to={`/article/${article.id}`}>Read more...</Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
