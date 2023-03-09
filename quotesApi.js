const express = require('express');
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

quoteRouter = express.Router();

quoteRouter.get('/', (req, res, next) => {
    let returnedQuotes = []; 
    
    if (req.query.person) {
        returnedQuotes = quotes.filter(quote => quote.person === req.query.person);
        
        res.send({quotes: returnedQuotes});
    } else {
        returnedQuotes = quotes;
        res.send({quotes: returnedQuotes});
    }
})

quoteRouter.get('/random', (req, res, next) => {
    const quote = getRandomElement(quotes)
    res.send({quote: quote});
})

module.exports = quoteRouter;
