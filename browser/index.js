var reconnect = require('reconnect')
var reloader = require('client-reloader')

window.addEventListener('load', function () {
  var buttons = {
    play : id('play'),
    pause : id('pause'),
    start : id('start'),
    record : id('record'),
    load : id('load')
  }

  Object.keys(buttons).forEach(function (name) {
    buttons[name].addEventListener('click', function (ev) {
      console.log(name)
    })
  })

  reconnect(reloader(function (stream) {
    stream.on('data', console.log.bind(console))
  })).connect('/stream')
})

function id (idx) {
  return document.getElementById(idx)
}
