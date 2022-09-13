import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import StoreContext from "./StoreContext";

const ArticleItem = (props) => {
  const { article } = props;
  const store = useContext(StoreContext);
  const authorLookup = store.authorLookup;
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

ArticleItem.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default ArticleItem;
