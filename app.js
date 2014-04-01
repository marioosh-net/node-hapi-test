var Hapi = require('hapi');
var config = {
    port: 3001
}
var server = new Hapi.Server('0.0.0.0', config.port, {cors: true});
console.log(__dirname);
server.route({method: 'GET', path: '/static/{path*}', handler: {directory: {path: __dirname+'/static'}}});

server.pack.require('./main', { config: config }, function (err) {
    if(err) {
        throw err;
    }
    server.start(function(){
        console.log('server started, listening on port '+config.port);
        console.log('routes:');
        server.table().forEach(function(v){
            console.log(v.settings.method.toUpperCase()+": "+v.settings.path);  
        });
    });        
});
