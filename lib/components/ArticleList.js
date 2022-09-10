import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = (props) => {
  const { articles, authors } = props;
  return (
    <div>
      {Object.values(articles).map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          author={authors[article.authorId]}
        />
      ))}
    </div>
  );
};

export default ArticleList;
