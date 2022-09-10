import React from "react";

const ArticleItem = (props) => {
  const { authorLookup, article } = props;
  const author = authorLookup(article.authorId);
  return (
    <div>
      <div>{article.title}</div>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div>{article.date}</div>
      <div>{article.body}</div>
    </div>
  );
};

export default ArticleItem;
