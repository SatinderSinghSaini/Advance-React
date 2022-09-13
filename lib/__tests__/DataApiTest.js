import SaveApi from "../DataApi";
import { data } from "../testData.json";

const api = new SaveApi(data);
const store = api.getState();

describe("DataApi", () => {
  it("expose data articles", () => {
    const articles = store.articles;
    const articleId = data.articles[0].id;
    expect(articles[articleId].id).toBe(articleId);
  });
  it("expose data authors", () => {
    const authors = store.authors;
    const authorId = data.authors[0].id;
    expect(authors[authorId].id).toBe(authorId);
  });
});
