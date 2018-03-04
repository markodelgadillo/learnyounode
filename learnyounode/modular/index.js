const fileReturn = require('./module')
const directory = process.argv[2]
const extension = process.argv[3]

fileReturn(directory, extension, function(err, data) {
  if (err) {
    throw err
  }
  console.log(data.join('\n'))
})
