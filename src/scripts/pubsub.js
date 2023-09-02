const PubSub = {
  events: {},

  subscribe(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },

  publish(eventName, data) {
    if (!this.events[eventName]) return;
    this.events[eventName].forEach((fn) => fn(data));
  },

  removeAllEvents(){
    for (const eventName in this.events) {
      delete this.events[eventName];
    }
  }
};

export default PubSub