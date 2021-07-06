  const express = require('express');
  const exphbs = require('express-handlebars');
  const hbs = exphbs.create({});
  const path = require('path');
  const routes = require('./controllers');
  const {Recipe} = require('./models/');
  const session = require('express-session');
  const sequelize = require('./config/connection');
  const SequelizeStore = require('connect-session-sequelize')(session.Store);
  const multer = require('multer');
const { REFUSED } = require('dns');
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
        console.log(req.body.name)
        console.log("hello")
        await Recipe.create({
          name:req.body.name,
          ingredients:req.body.ingredients,
          instructions:req.body.instructions,
          image:file,
          user_id:req.session.user_id
        });
        console.log(req.body);
        console.log(req.file.filename);
        res.render('cookbook',{ 
          fileData:req.body,
          file: `uploads/${req.file.filename}`
        })
    }) 
      } catch (err) {
        res.status(400).json(err);
      }
    })

  app.post('/:id', async(req,res)=>{
    let fileChanged = true;  
    upload(req,res,async(err) =>{
        let file1;
        if(req.file != null){
          console.log("this one " + req.body.image);
          file1 = `uploads/${req.file.filename}`
          fileChanged = true;
        }
        else{
          console.log("this second " + req.body.image);
          fileChanged = false;
          file1 = req.body.image;
        }

      Recipe.update(
        {
          // All the fields you can update and the data attached to the request body.
          name: req.body.name,
          ingredients: req.body.ingredients,
          instructions: req.body.instructions,
          image: file1
        },
        {
          // Gets the books based on the isbn given in the request parameters
          where: {
            id: req.params.id,
          },
        }

      )
        console.log("hello")
      if(fileChanged === true){
        res.render('cookbook',{ 
          fileData:req.body,
          file: `uploads/${req.file.filename}`
        })
      }

      else{
        console.log("late night codin");
        console.log("file1" + file1);
        res.render('cookbook',{ 
          fileData:req.body,
          file: file1
        })
      }


    })

  })

  // made this change
  app.engine("handlebars",exphbs({
      runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
      },
    })
  );
    
  // app.engine('handlebars', hbs.engine);



  app.set('view engine', 'handlebars');
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(routes);
  // Starts the server to begin listening
  sequelize.sync({ force: false }).then(() => {
      app.listen(PORT, () => console.log('Now listening'));
    });
