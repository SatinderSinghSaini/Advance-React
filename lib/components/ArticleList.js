import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = (props) => {
  const { articles, authorLookup } = props;
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
