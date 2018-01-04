var lsb = require('./index')
lsb.ablauf2JSON('examples/ablaufplan.col', function (err, json) {
  if (err) {
    console.error(err)
  } else {
    console.log(json)
  }
})
