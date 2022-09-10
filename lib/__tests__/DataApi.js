import DataApi from "../DataApi";
import { data } from "../testData.json";

const api = new DataApi(data);

describe("DataApi", () => {
  it("expose data articles", () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    expect(articles[articleId].id).toBe(articleId);
  });
  it("expose data authors", () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    expect(authors[authorId].id).toBe(authorId);
  });
});
