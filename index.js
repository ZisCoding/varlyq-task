const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const expressLayouts = require ('express-ejs-layouts');
const db = require('./config/mongoose');



//custom middleware
app.use('/file-upload',require('./config/customMiddleware').multer);


// setting the view engine and the views folder
app.set('view engine','ejs');
app.set('views','./views');

app.use(expressLayouts);

//setting the folder to serve static files 
app.use(express.static('./assets'));

// using body parser to get the users data
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', require('./routers/index'))

//extracting style and script from sub pages and putting it into the correct place in the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// setting up the server 
const port=8000;
app.listen(port,(err)=>{
    if(err){
        console.log("Error in starting server");
        return;
    }

    console.log(`server is running at port ${port}`);
})