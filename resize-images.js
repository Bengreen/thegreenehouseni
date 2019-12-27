#!/usr/bin/env node


console.log("Got here");

var fs = require('fs')
  , gm = require('gm');

gm('image.jpg')
 .resize(240)
 .write('image_thmb.png', function (err) {
  if (!err) console.log('done');
  if(err) console.log("ERROR", err);
});
