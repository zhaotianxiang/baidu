
'use strict';

module.exports = (ctx, next) => {
	const $ = ctx.$;

	const data = {
		uri: ctx.opt.uri,
		title: $('title').text()
	};
	console.log(data);
	
	let tasks = $('a').map(function(){
		return {opt:{uri:encodeURI($(this).attr('href'))}, next:'home'};
	}).get();

	tasks = tasks.filter(task=>{
		if(task.opt.uri) {
			if(task.opt.uri.match(/ /) || task.opt.uri.match(/music/)) {
				return false;
			}
			return task.opt.uri.match(/http/);
		}
		return false;
	});
	
	ctx.tasks = tasks;
	return next();
};
