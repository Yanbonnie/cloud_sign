// JavaScript Document
require(["../config"], function() {
	
	
	require(['jquery','vueConfig','navLeft'],function($,vueConfig,navLeft) {	
		console.log($)
		vueConfig.init();
		
		var app = new vueConfig.Vue({
			el: '#app',
			router:vueConfig.router,
			data: {
				msg: 'hello vue',
				abc: 'indexitem',
				headerShow:'true'
			},
			components:{
				navleft:navLeft
			},
			mounted:function(){
				console.log(this.$router);
			},
			watch:{
				'$route'(to,from){
					console.log(to)
					console.log(from)
					var path = to.path.split('/')[1];
					if(path == 'detail'){
						this.headerShow = true;
					}
					if(path == 'news'){
						this.headerShow = false;
					}
				}
			}
		});
		
	});
}) 
//
//require(["../config"], function() {
//	
//	
//	require(['$vue','$vueRouter','routerConfig','navLeft'],function($Vue,vueRouter,routes,navLeft) {	
//		
//		$Vue.use(vueRouter);
//		//$Vue.use(loading);
//		
//		var router = new vueRouter({
//		  	routes:routes, // （缩写）相当于 routes: routes
//			//mode: 'history', 					//切换路径模式，变成history模式
//			scrollBehavior: () => ({ y: 0 }) 	//滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
//		})
//		//console.log(router)
//		
//		var app = new $Vue({
//			el: '#app',
//			router:router,
//			data: {
//				msg: 'hello vue',
//				abc: 'indexitem',
//				headerShow:'true'
//			},
//			components:{
//				headercom:headercom,
//				navleft:navLeft
//			},
//			watch:{
//				'$route'(to,from){
//					console.log(to)
//					console.log(from)
//					var path = to.path.split('/')[1];
//					if(path == 'detail'){
//						this.headerShow = true;
//					}
//					if(path == 'news'){
//						this.headerShow = false;
//					}
//				}
//			}
//		});
//		
//	});
//}) 