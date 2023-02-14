const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./index');

// Read configuration from environment
const PORT = process.env.PORT;
const USER = process.env.USER
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
const DATABASE = process.env.DATABASE

const uri = `mongodb+srv://${USER}:${DATABASE_PASSWORD}@cluster0.ipiez12.mongodb.net/${DATABASE}?retryWrites=true&w=majority`

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then((con) => console.log('DB connection successful'));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} ...`);
});