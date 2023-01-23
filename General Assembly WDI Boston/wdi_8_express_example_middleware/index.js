// the trivial middleware. does nothing.
function(req, res, next) {
	next();
}

// mount after body-parser. logs request bodies.
function(req, res, next) {
	if(req.body) {
		console.log(req.body);
	}

	next();
};

// counts incoming requests
(function() {
	var count = 0;

	return {
		middleware : function(req, res, next) {
			count++;

			next();
		},
		observer : function() {
			return count;
		}
	};
})().middleware;

// error-handling middleware. distinguished by its 4-argument signature.
function(err, req, res, next) {
	if(err) {
		res.sendStatus(err.status || 500);
	}
};
