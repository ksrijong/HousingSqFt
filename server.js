//dependencies for each module used
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var dotenv = require('dotenv');
var pg = require('pg');
var app = express();

//client id and client secret here, taken from .env (which you need to create)
dotenv.load();

//connect to database
var conString = process.env.DATABASE_CONNECTION_URL;

var client = new pg.Client(conString);
client.connect(function(err) {
    if (err) {
        console.error('could not connect', err);
    } else {
        console.log("Successfully connected");
    }
});

//Configures the Template engine
app.engine('html', handlebars({ defaultLayout: 'layout', extname: '.html' }));
app.set("view engine", "html");
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat',
                  saveUninitialized: true,
                  resave: true}));

//set environment ports and start application
app.set('port', process.env.PORT || 3000);

//routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/list2013', function (req, res) {
  var sd = "'San Diego'";

  // client.query('SELECT "City" , AVG("Value") AS avg_value FROM cogs121_16_raw.zillow_zip_median_listing_price_all_homes_norm WHERE "Metro" = ' + sd + ' AND "Year" = 2013 GROUP BY "City"', function(err,dat) {
  //     res.json(dat.rows);
  // });

  client.query('SELECT "City" , AVG("Value") AS avg_value FROM cogs121_16_raw.zillow_zip_median_listing_price_per_sqft_all_homes_norm WHERE "Metro" = ' + sd + ' AND "Year" = 2013 GROUP BY "City"', function(err,dat) {
      res.json(dat.rows);
  });
  //return { delphidata: "No data present." }
});
app.get('/sold2013', function (req, res) {
  var sd = "'San Diego'";

  // client.query('SELECT "City" , AVG("Value") AS avg_value FROM cogs121_16_raw.zillow_zip_median_listing_price_all_homes_norm WHERE "Metro" = ' + sd + ' AND "Year" = 2013 GROUP BY "City"', function(err,dat) {
  //     res.json(dat.rows);
  // });

  client.query('SELECT "City" , AVG("Value") AS avg_value FROM cogs121_16_raw.zillow_zip_median_sold_price_per_sqft_all_homes_norm WHERE "Metro" = ' + sd + ' AND "Year" = 2013 GROUP BY "City"', function(err,dat) {
      res.json(dat.rows);
  });
  //return { delphidata: "No data present." }
});


http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
