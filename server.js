  const express = require('express');
  const exphbs = require('express-handlebars');
  const hbs = exphbs.create({});
  const path = require('path');
  const routes = require('./Controllers');
  const {Recipe} = require('./models/');
  const session = require('express-session');
  const sequelize = require('./config/connection');
  const SequelizeStore = require('connect-session-sequelize')(session.Store);
  const multer = require('multer');
  const app = express();
  const PORT = process.env.PORT || 3001;
  const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  app.use(session(sess));
  const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
      cb(null,file.originalname);
    }
  });
  const upload = multer({
    storage: storage,
  }).single('myImage');


  app.post('/upload', async(req,res) =>{
      try {
        
       upload(req,res,async(err) =>{
        const file=`uploads/${req.file.filename}`
        await Recipe.create({
          name:req.body.name,
          ingredients:req.body.ingredients,
          instructions:req.body.instructions,
          image:file

        });
        console.log(req.body);
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
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(routes);
  // Starts the server to begin listening
  sequelize.sync({ force: false }).then(() => {
      app.listen(PORT, () => console.log('Now listening'));
    });
