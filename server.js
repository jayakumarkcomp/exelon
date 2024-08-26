const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jayakumarkcomp:exelon@cluster0.z9oli.mongodb.net/cities-api')

app.use(express.json());

const routes = require('./routes');
app.use('/api', routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});