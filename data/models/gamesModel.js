const db = require('../dbConfig');


module.exports = {
  getGames,
  addGame
}



function getGames() {
  return db('games')
}

async function addGame(game) {
  const [id] = await db('games').insert(game, 'id')

  return db('games').where({id}).first();


}