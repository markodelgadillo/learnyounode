// Process.argv starts at index 2
//

var fs = require('fs')
var path = require('path')
var ext = process.argv[3]
var directory = process.argv[2]

fs.readdir(directory, function(err, list) {
  if (err) {
    throw err
  }
  for (i = 0; i < list.length; i++) {
    if (ext === path.extname(list[i]).slice(1)) console.log(list[i])
  }
})
