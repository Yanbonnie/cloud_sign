define(['$vue'],function(Vue){	
	
	var LoadingComponent = {
		data(){},	
		props:{
			color:{
				type:"string"
			}
		},
		template: `
			<div>
				<h3 :style="{background:color}">加载中...</h3>
			</div>
		`
		
	};
	
	var loading = {
		install:function(Vue){
			Vue.component('loading',LoadingComponent);
		}
	}
	return loading;
})