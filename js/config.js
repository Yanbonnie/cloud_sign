require.config({
    baseUrl: './js',
    paths: {
        $vue: 'vue/vue.min',
		$vueRouter:'vue/vue-router',
		index: 'pages/index',
		
		//lib
		jquery:'lib/jquery.min',
		//路由文件
		routerConfig:'vue/routerConfig',
		
		//vue配置文件
		vueConfig:'vue/vueConfig',
		//公共组件
		loading:'vue/components/loading',
		// 组件
		navLeft:'vue/components/nav-left',  //左导航
		indexCom:'vue/components/index',    //首页
		fileCom:'vue/components/myfile',       //我的文档页面
		draftsCom:'vue/components/drafts'         //草稿箱
    },
	map: {
		'*': {
			'css': 'css.min' // or whatever the path to require-css is
		}
	}
//	shim: {
//		detail: {
//			deps: [
//				'css!../index.css'
//			]
//		},
//		'detail': ['css!../css/detail']
//	}
});
