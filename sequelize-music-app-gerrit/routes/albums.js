const express = require('express');
const router = express.Router();
const db = require('../models');

// Get all Albums
router.get('/', function (req, res, next) {
  db.Album.findAll()
    .then((results) => {
      res.json(results)
    })
});

// Get all Albums by Artist
router.get('/artists/:id', function (req, res, next) {
  db.Artist.findByPk(req.params.id)
    .then((Artist) => {
      return Artist.getAlbums()
    }).then((results) => {
      res.json(results);
    });
});

// Add an Album
router.post('/artists/:id', (req, res) => {
  db.Album.create({
    Album_Name: req.body.name,
    Year: req.body.year,
    Artist_ID: req.params.id
  })
    .then((result) => {
      res.send(result);
    })
});

// Update an Album
router.put('/artists/:id', (req, res) => {
  db.Album.update({
    Album_Name: req.body.name,
    Year: req.body.year,
    Artist_ID: req.params.id
  },
  { where: { id: req.params.id }})
    .then(() => {
      db.Album.findByPk(req.params.id)
        .then((result) => {
        res.json(result)
    })
    })
});

// Delete Album
router.delete('/artists/:artist_id/albums/:album_id', (req, res) => {
  db.Album.destroy({
    where: { Artist_ID: req.params.artist_id, id: req.params.album_id }
  })
    .then(() => {
      db.Album.findAll()
        .then((results) => {
        res.json(results)
    })
    })
});

module.exports = router;