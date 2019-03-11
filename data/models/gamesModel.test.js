const db = require('../dbConfig');

const Games = require('./gamesModel');


describe('Game Model', () => {
  afterEach(async () => {
    await db('games').truncate();
  })

  describe('getGames', () => {
    afterEach(async () => {
      await db('games').truncate();
    })

    it('should return empty array if no games in database', async () => {

      const games = await Games.getGames();

      console.log(games)
      expect(games).toEqual([])
    })

    it('should return an array of games if they exist on the database', async () => {
      await Games.addGame({ title: "NBA2k19", genre: "Sports", releaseYear: "2018" })
      await Games.addGame({ title: "Red Dead Redemption", genre: "RPG", releaseYear: "2018" })

      const games = await Games.getGames();

      expect(games).toHaveLength(2);


    })


  })


  describe('addGame', () => {
    afterEach(async () => {
      await db('games').truncate();
    })

    it('should insert a game to the database', async () => {
      const game = await Games.addGame({title: "NBA2k19", genre: "Sports", releaseYear: "2018"})

      expect(game.title).toBe('NBA2k19');
      expect(game.genre).toBe('Sports')
      expect(game.releaseYear).toBe(2018)
    })
    



  })


  



  

})