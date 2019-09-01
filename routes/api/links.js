const express = require('express');
const router = express.Router();

///// LINK MODEL /////
const Link = require('../../models/Link');

// ROUTE: GET api/links
// DESC: GET ALL LINKS
// ACCESS: PUBLIC
router.get('/', (req, res) => {
  Link.find()
    .sort({ date: -1 })
    .then(links => res.json(links));
});

// ROUTE: POST api/links
// DESC: ADD A LINK
// ACCESS: PUBLIC
router.post('/', (req, res) => {
  const newLink = new Link({
    name: req.body.name,
    url: req.body.url
  });

  newLink.save().then(link => res.json(link));
});

// ROUTE: DELETE api/links/:id
// DESC: DELETE A LINK
// ACCESS: PUBLIC
router.delete('/:id', (req, res) => {
  Link.findById(req.params.id)
    .then(link => link.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
