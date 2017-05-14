define(['$vue','$vueRouter','routerConfig'],function(Vue,VueRouter,VueConfig){
	
	var router = new VueRouter({
	  	routes:VueConfig, // （缩写）相当于 routes: routes
		//mode: 'history', 					//切换路径模式，变成history模式
		scrollBehavior: () => ({ y: 0 }) 	//滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	})
	
	var exports = {
		init:init,
		router:router,
		Vue:Vue
	}
	
	function init(){
		
		Vue.use(VueRouter);		
		
		
	}
	return exports;
})