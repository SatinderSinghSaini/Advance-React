import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = (props) => {
  const { articles, articleActions } = props;
  const { authorLookup } = articleActions;
  return (
    <div>
      {Object.values(articles).map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          authorLookup={authorLookup}
        />
      ))}
    </div>
  );
};

export default ArticleList;
