class DataApi {
  constructor(data) {
    this.data = data;
  }
  mapDataToObj(data) {
    return data.reduce((mappedValues, currentValue) => {
      mappedValues[currentValue.id] = currentValue;
      return mappedValues;
    }, {});
  }
  getArticles() {
    const data = this.mapDataToObj(this.data.articles);
    return data;
  }
  getAuthors() {
    const data = this.mapDataToObj(this.data.authors);
    return data;
  }
}

export default DataApi;
