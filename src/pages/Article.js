import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

// styles
import "./Article.css";

const Article = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/articles/${id}`;
  const { data: article, error } = useFetch(url);
  const history = useHistory();

  // redirect the user
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]);

  return (
    <div>
      {error && (
        <div>
          <h3>404 Error</h3>
          <p>{error}</p>
        </div>
      )}
      {article && (
        <div className="article-section">
          <h2>{article.title}</h2>
          <h4>article by - {article.author}</h4>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};

export default Article;
