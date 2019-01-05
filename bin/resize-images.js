#!/usr/bin/env node

var fs = require('fs'),
  gm = require('gm');


src_path="orig_images";
dst_path="src/assets/images";


var files = fs.readdirSync(src_path)

resize = [
  {
    width: 345,
    prefix: "thmb345_",
  }
];


function do_resize(src, dst, width) {
  gm(src)
   .resize(width)
   .write(dst, function (err) {

    if(err) {
      console.log("ERROR", err);
    } else {
      console.log('thumbed '+src);
    }
  });
}

resize.forEach((sizeplan) => {
  console.log("resize_plan=", sizeplan);
  console.log("Thumbing files:");
  files.forEach((file) => {
    console.log("  "+dst_path+"/"+sizeplan.prefix+file);
    do_resize(src_path+"/"+file, dst_path+"/"+sizeplan.prefix+file, sizeplan.width);
  });
});





// do_resize("image.jpg", resize.width, resize.prefix);
