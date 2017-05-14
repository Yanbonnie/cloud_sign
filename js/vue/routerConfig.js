define(['indexCom','fileCom','draftsCom'],function(indexCom,fileCom,draftsCom){		
		var routes = [
		  	{ 
				path: '/index',
				component: indexCom 
			},
			{ 
				path: '/file',
				component: fileCom 
			},
			{
				path: '/drafts',
				component: draftsCom 
			},
			{ 
				path: '/', 
				redirect: '/index' 
			},
			{ 
				path: '*', 
				redirect: '/index' 
			}
		]
		
		var exports = routes;
	
		return exports;

}) 