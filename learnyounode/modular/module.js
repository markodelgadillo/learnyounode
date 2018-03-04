// Write a program that prints a list of files
// in a given directory filtered by
// the extensions
const fs = require('fs')
const path = require('path')

function fileReturn(directory, extension, callback) {
  fs.readdir(directory, function(err, list) {
    if (err) {
      return callback(err)
    }
    let result = []
    // Read the list
    for (i = 0; i < list.length; i++) {
      if (extension === path.extname(list[i]).slice(1)) result.push(list[i])
    }
    callback(null, result)
  })
}

module.exports = fileReturn
