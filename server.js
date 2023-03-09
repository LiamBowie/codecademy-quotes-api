const express = require('express');
const { quotes } = require('./data');
const app = express();
const quoteRouter = require('./quotesApi');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use('/api/quotes', quoteRouter);

app.listen(PORT, () => {
    console.log('We are live!')
    console.log(quotes[2].id);
})
