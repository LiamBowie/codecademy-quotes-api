const express = require('express');
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');


quoteRouter = express.Router();

quoteRouter.get('/random', (req, res, next) => {
    res.send(getRandomElement(quotes));
})

module.exports = quoteRouter;