import PubSub from '../pubsub';

describe('pubsub', () => {
  beforeEach(() => {
    mockFn1 = jest.fn((data) => `Hello ${data}`);
    mockFn2 = jest.fn((data) => `Great ${data}`);
  });
  afterEach(() => {
    PubSub.removeAllEvents();
  });

  it('should subscribe to an event and publish data to subscribers', () => {
    PubSub.subscribe('update', mockFn1);
    PubSub.publish('update', 'world');

    expect(mockFn1).toHaveReturnedWith('Hello world');
    expect(mockFn2).not.toBeCalled();
  });

  it('should handle multiple subscribers for an event', () => {
    PubSub.subscribe('update', mockFn1);
    PubSub.subscribe('update', mockFn2);

    PubSub.publish('update', 'world');

    expect(mockFn1).toHaveReturnedWith('Hello world');
    expect(mockFn2).toHaveReturnedWith('Great world');
  });

  it('should not publish data to subscribers if no subscribers are present', () => {
    PubSub.publish('update', null);

    expect(mockFn1).not.toBeCalled();
    expect(mockFn2).not.toBeCalled();
  });

  it('should remove all events when removeAllEvents is called', () => {
    PubSub.subscribe('update', mockFn1);
    PubSub.subscribe('another update', mockFn2);

    PubSub.removeAllEvents();

    PubSub.publish('update', null);
    PubSub.publish('another update', null);

    expect(mockFn1).not.toBeCalled();
    expect(mockFn2).not.toBeCalled();
  });
});
