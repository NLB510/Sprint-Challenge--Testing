const express = require('express');

const router = express.Router()

const db = require('../../data/models/gamesModel');


router.get('/', async (req, res) => {

  try {
    const games = await db.getGames();

    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({
      message: "There was an error with the database"
    })
  }

})


router.post('/', async(req, res) => {
  const {title, genre } = req.body

  if (!title || !genre) {
    return res.status(422).json({
      errorMessage: "Please include a title and genre"
    })
  } else {
    try {
      const newGame = await db.addGame(req.body)

      res.status(201).json({message: "Game added successfully", newGame })


    } catch (error) {
      res.status(500).json({message: "There was an error adding the game to the database"})
    }
  }

  
})


module.exports = router;