class StateApi {
  constructor(data) {
    this.data = {
      articles: this.mapDataToObj(data.articles),
      authors: this.mapDataToObj(data.authors),
    };
  }
  mapDataToObj(data) {
    return data.reduce((mappedValues, currentValue) => {
      mappedValues[currentValue.id] = currentValue;
      return mappedValues;
    }, {});
  }
  authorLookup = (authorId) => this.data.authors[authorId];
  getState = () => this.data;
}

export default StateApi;
