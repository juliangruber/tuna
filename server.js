var http = require('http')
var ecstatic = require('ecstatic')(__dirname + '/static')
var server = http.createServer(ecstatic)
server.listen(9000)

var shoe = require('shoe')
var reloader = require('client-reloader')
shoe(reloader(function (stream) {
  stream.write('test')
})).install(server, '/stream')
