
'use strict';

module.exports = (ctx, next) => {
	const $ = ctx.$;

	const data = {
		uri: ctx.options.uri,
		title: $('title').text()
	}
	console.log(data);
	
	ctx.tasks = $('p.Page > a').map(function(){
		return {opt:$(this).attr('href'), next:'list'};
	}).get();

	ctx.tasks = tasks;

	console.log(tasks);
	
	return next();
};
