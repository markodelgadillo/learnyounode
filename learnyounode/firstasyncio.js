var fs = require('fs')

fs.readFile(process.argv[2], function(err, data) {
  if (err) {
    throw err
  }
  let str = data.toString()

  let arr = str.match(/\n/g) || []

  console.log(arr.length)
})
