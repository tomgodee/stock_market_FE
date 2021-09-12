import pingService from '../../services/ping';

jest.mock('../../services/ping/ping');

describe('ping', () => {
  afterEach(() => jest.restoreAllMocks());
  it('pings successfully', () => {
    pingService.ping.mockImplementation(() => Promise.resolve('pong'));

    return pingService.ping().then((data: any) => {
      expect(data).toEqual('pong');
    });
  });

  it('pings unsuccessfully', async () => {
    const errorMessage = 'something is wrong!!!';
    pingService.ping.mockImplementation(() => Promise.reject(new Error(errorMessage)));

    await expect(pingService.ping()).rejects.toThrow(errorMessage);
  });
});
