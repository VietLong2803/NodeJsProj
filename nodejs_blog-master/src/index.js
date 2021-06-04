const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const methodOverride = require('method-override')
const db = require('./config/db')
app.use(express.static(path.join(__dirname, 'public')));


//Connect to DB
db.connect();

//middle ware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'))
    //http logger
app.use(morgan('combined'));
//template engine
app.engine(
    'hbs',
    handlebars({
        extname: 'hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//RouteInit
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});