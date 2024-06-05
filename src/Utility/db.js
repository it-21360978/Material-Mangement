
const mongoose = require('mongoose');




const DB_URL ="mongodb+srv://gihan:gihan@demodb.kfheuoa.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.log('Db Connection Error', error);
  });

