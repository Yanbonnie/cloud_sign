define([],function(){	
	
	var exports = {
		data(){},	
		props:{
			name:{
				type:"string"
			}
		},
		template: `
			<div>我是首页</div>
		`,
		mounted:function(){
			//console.log(this.$route.params)
		}
		
	};
	
	return exports;
})