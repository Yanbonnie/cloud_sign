// JavaScript Document
require(["../config"], function() {
	
	require(['$vue', 'item', 'css!../css/detail'], function($Vue,item) {
		
		var app = new $Vue({
			el: '#app',
			data: {
				msg: 'hello vue'
			},
			components:{
				item
			}
		});
		
	});
}) 