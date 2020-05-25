
'use strict';

module.exports={
	jobs:1,
	srvQueueSize:10000,
	mongodb:'mongodb://tianzhaoruixiang:27017/gearman',
	worker:{
		servers:[{'host':'tianzhaoruixiang'}]
	},
	client:{
		servers:[{'host':'tianzhaoruixiang'}],
		loadBalancing: 'RoundRobin'
	},
	retry:2
};
