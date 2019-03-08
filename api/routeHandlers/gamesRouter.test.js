const request = require('supertest');

const server = require('../server');
const db = require('../../data/dbConfig');

describe('Games Router', () => {
  afterEach(async () => {
    await db('games').truncate();
  })

  describe('/api/games GET', () => {

    afterEach(async () => {
      await db('games').truncate();
    })

    it('should return with status 200', async ()=> {
      const res = await request(server).get('/api/games')

      expect(res.status).toBe(200);
    })

    it('should return an array', async () => {
      const res = await request(server).get('/api/games')

      expect(res.body).toEqual([]);
    })

  })

  describe('/api/games POST', () => {
    afterEach(async () => {
      await db('games').truncate();
    })

    it('should add a new game to the database', async () => {
      const res = await request(server).post('/api/games').send({ title: 'NBA2k19', genre: 'Sports', releaseYear: 2018 })
      expect(res.status).toBe(201);

    })

    it('should return status 422 if receiving bad data', async () => {
      const res = await request(server).post('/api/games').send({ genre: 'Sports', releaseYear: 2018 })
      expect(res.status).toBe(422)


    })


  })



})