#!/usr/bin/env node

const [,, ... args] = process.argv


if (args.length != 2) {
  console.log("Uage error, must provide: <src> <dst>")
  process.exit(1)
}

console.log(`src: ${args[0]}`)
console.log(`dst: ${args[1]}`)

var fs = require('fs'),
  gm = require('gm');


src_path=args[0]
dst_path=args[1]


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
  if (!fs.existsSync(dst_path)) {
    fs.mkdirSync(dst_path);
    console.log("making dir ", dst_path);
  }
  files.forEach((file) => {
    console.log("  "+dst_path+"/"+sizeplan.prefix+file);
    do_resize(src_path+"/"+file, dst_path+"/"+sizeplan.prefix+file, sizeplan.width);
  });
});





// do_resize("image.jpg", resize.width, resize.prefix);
