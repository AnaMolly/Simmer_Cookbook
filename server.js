const express = require('express');
// Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const routes = require('./Controllers');
const sequelize = require('./config/connection');
const {Recipe} = require('./models/');
// const multer = require('multer');
// const app = express();

// const storage = multer.diskStorage({
//     destination: './public/uploads/',
//     filename: function(req, file, cb){
//       cb(null,file.originalname);
//    
 
// });
const multer = require('multer');
const app = express();


const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.originalname);
  }
});


const upload = multer({
  storage: storage,
  // limits:{fileSize: 1000000},
  // fileFilter: function(req, file, cb){
  //   checkFileType(file, cb);
  // }
 
}).single('myImage');

app.post('/upload', async(req,res) =>{
   
  //atabse create
    try {
    
     upload(req,res,async(err) =>{
      await Recipe.create(req.body);
      // res.send('test');
      // console.log(req.file);
      // console.log("465476576");
      console.log(req.body);
      // console.log("weoitrkdtjfh")
      console.log(req.file.filename);
      res.render('CookBook',{ 
        fileData:req.body,
        file: `uploads/${req.file.filename}`
      })
  }) 
   
    } catch (err) {
      res.status(400).json(err);
    }
        
  })



// Sets up the Express App


app.use(express.json());
app.use(express.urlencoded({ extended: true }));






const PORT = process.env.PORT || 2080;

app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  