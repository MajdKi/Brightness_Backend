
const db = require("./database/models/index")
const bodyParser = require('body-parser');
const ResponseModel = require('./models/response_model');
const express = require('express')
const cors = require('cors')

const app = express();
app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.json());
db.sequelize.sync().then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});




app.use('/api',require('./routers/apis/index'))



app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json(new ResponseModel({
      statusCode: err.status,
      error: err,
      message: err.message
    }).toJson());
  });

  app.listen(3300,console.log("connected"))