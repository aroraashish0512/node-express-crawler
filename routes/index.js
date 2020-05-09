var express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('fs');
const URL = "site_url";

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  request(URL, function (err, resp, body) {
    if(err)
    {
        console.log(err, "error occured while hitting URL");
    }
    else
    {
        // console.log(body);
       res.render('index', { title: 'Express', data: body });
    }
  });
});

module.exports = router;
