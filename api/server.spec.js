const request = require('supertest');

const server = require('./server.js');

describe('server.js', function() {
  describe('check env var', function() {
    it('should set env to testing', function() {
      expect(process.env.DB_ENV).toBe('testing');
    });
  });
});

describe('GET /', function() {
  it('should return 200 OK', function() {
    // always return async code
    return request(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe('GET /api/users', () => {
  it('should return 401 OK', async () => {
    const res = await request(server).get('/api/users');
    expect(res.statusCode).toEqual(401);
  });

  it('should return shall not pass!', async () => {
    const res = await request(server).get('/api/users');
    expect(res.body.you).toBe('shall not pass!');
  });
});

describe('Post /api/auth/login', () => {
  it('should check that jokes response is an array', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({
        username: 'johnsnow',
        password: 'password1234'
      });
    const token = res.body.token;
    const jokesRes = await request(server)
      .get('/api/jokes')
      .set('authorization', token);
    expect(Array.isArray(jokesRes.body)).toBe(true);
  });
});
