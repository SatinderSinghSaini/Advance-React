import React from "react";
const testRender = require("react-test-renderer");
import ArticleList from "../ArticleList";

describe("ArticleList", () => {
  const mockAuthor = {
    id: "d85577ea34ae50f2dac5347b5219aa23",
    firstName: "Andrew",
    lastName: "Clark",
    website: "https://twitter.com/acdlite",
  };
  const mockArticles = {
    "95c12a8f6c88953ca8f8a39da25546e6": {
      id: "95c12a8f6c88953ca8f8a39da25546e6",
      title: "Introducing React's Error Code System",
      date: "Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)",
      authorId: "2c6aa2cfe3449467d329fa17d6ea230f",
      body: "Building a better developer experience has been one of the things that React deeply cares about, and a crucial part of it is to detect anti-patterns/potential errors early and provide helpful error messages when things (may) go wrong. However, most of these only exist in development mode; in production, we avoid having extra expensive assertions and sending down full error messages in order to reduce the number of bytes sent over the wire.",
    },
    "85c12a8f6c88953ca8f8a39da25546e6": {
      id: "85c12a8f6c88953ca8f8a39da25546e6",
      title: "Introducing React's Error Code System 2",
      date: "Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)",
      authorId: "2c6aa2cfe3449467d329fa17d6ea230f",
      body: "Building a better developer experience has been one of the things that React deeply cares about, and a crucial part of it is to detect anti-patterns/potential errors early and provide helpful error messages when things (may) go wrong. However, most of these only exist in development mode; in production, we avoid having extra expensive assertions and sending down full error messages in order to reduce the number of bytes sent over the wire.",
    },
  };
  const testProps = {
    articles: mockArticles,
    articleActions: {
      authorLookup: jest.fn(() => mockAuthor),
    },
  };
  it("test snapshot of ArticleList", () => {
    const render = testRender.create(<ArticleList {...testProps} />);
    const tree = render.toJSON();
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});
