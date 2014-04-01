exports.register = function(plugin, options, next) {
	plugin.route([
        {method: 'GET', path: '/static2/{path*}', handler: {directory: {path: __dirname+'/static'}}}
    ]);
	return next();
}

