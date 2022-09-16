class StateApi {
  constructor(data) {
    this.data = {
      articles: this.mapDataToObj(data.articles),
      authors: this.mapDataToObj(data.authors),
      searchTerm: "",
      timestamp: new Date(),
    };
    this.subscribers = {};
    this.lastSubscriptionId = 0;
  }
  mapDataToObj(data) {
    return data.reduce((mappedValues, currentValue) => {
      mappedValues[currentValue.id] = currentValue;
      return mappedValues;
    }, {});
  }
  authorLookup = (authorId) => this.data.authors[authorId];
  getState = () => this.data;

  subscribe = (cb) => {
    this.lastSubscriptionId++;
    this.subscribers[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };
  unsubscribe = () => {
    delete this.subscribers[this.lastSubscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscribers).forEach((cb) => cb());
  };

  mergeState = (stateChange) => {
    this.data = { ...this.data, ...stateChange };
    this.notifySubscribers();
  };

  doSearch = (searchTerm) => {
    this.mergeState({ searchTerm });
  };

  updateTimestamp = () => {
    setTimeout(() => {
      this.mergeState({ timestamp: new Date() });
    }, 1000);
  };
}

export default StateApi;
