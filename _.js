var helper = {
	'handleError': handleError
	,'log': log
}

function handleError(err){
	if(err){
		throw err;
	}
}

function log(a){
	console.log(a);
}

module.exports = helper;