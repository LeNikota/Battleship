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

  removeAllEvents() {
    const eventNames = Object.keys(this.events);
    eventNames.forEach((eventName) => {
      delete this.events[eventName];
    });
  },
};

export default PubSub;
