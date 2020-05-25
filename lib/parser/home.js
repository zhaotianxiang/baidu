
'use strict';

module.exports = (ctx, next) => {
	const $ = ctx.$;
	
	ctx.tasks = $('p.Page > a').map(function(){
		return {opt:$(this).attr('href'), next:'list'};
	}).get();
	
	return next();
};
