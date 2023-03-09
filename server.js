const express = require('express');
const app = express();
const quoteRouter = require('./quotesApi');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use('/api/quotes', quoteRouter);

app.listen(PORT, () => {
    console.log('We are live!')
})
