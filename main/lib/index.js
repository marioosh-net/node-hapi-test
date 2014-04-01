console.log(__dirname);
exports.register = function(plugin, options, next) {
	plugin.route([
        {method: 'GET', path: '/static2/{path*}', handler: {directory: {path: __dirname+'/static'}}},
        {method: 'GET', path: '/static3/{path*}', handler: {directory: {path: '/lib/static'}}} // Ok on Win32
    ]);
	return next();
}