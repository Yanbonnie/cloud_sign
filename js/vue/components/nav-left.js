define(['jquery','$vue','$vueRouter'],function($,Vue,VueRouter){	
	
	var exports = {
		template: `
			<nav class="nav-left" v-navClick>
				<div class="logo">
					<span>logo</span>
				</div>
				<div class="info">
					<span></span>
					<h3>张三</h3>
					<p>数安时代股份有限公司</p>
				</div>
				<ul class="ul">
					<li v-for="(item,index) in navData" :class="[item.activeClass,item.show ? 'heightAuto' : ' ']">
						<router-link to="/index" v-if="index === 0"  @click="mouseEnter(index)"><i :class="item.iconClass"></i>{{item.title}}<i class="icon icon-angle-right" ></i></router-link>
						<a class="li-link" v-else href="javascript:;"  ><i :class="item.iconClass"></i>{{item.title}}<i :class="[item.show ? 'icon-angle-down' : 'icon-angle-right','icon']"></i></a>
						<dl>
							<dt v-for="(item,index2) in item.childData">
								<router-link  :to="item.path">{{item.title}}</router-link>
							</dt>
						</dl>
					</li>
				</ul>
			</nav>
		`,
		data(){
			return{
				navData:[{
					title:"首页",
					iconClass:'icon-bank',
					show:false,
					activeClass:'',
					path:'/index'
				},{
					title:'我的文档',
					iconClass:'icon-paste',
					activeClass:'',
					show:false,
					childData:[
						{
							title:'文档列表',
							path:'/file'
						},{
							title:'草稿箱',
							path:'/drafts'
						}
					]
				},{
					title:'我的账户',
					iconClass:'icon-user',
					activeClass:'',
					show:false,
					childData:[
						{
							title:'账户列表',
							path:'/file'
						},{
							title:'草稿箱',
							path:'/drafts'
						}
					]
				},{
					title:'通讯录',
					iconClass:'icon-file-word',
					activeClass:'',
					show:false,
					childData:[
						{
							title:'通讯列表',
							path:'/file'
						},{
							title:'草稿箱',
							path:'/drafts'
						}
					]
				}
				]
			}
		},
		directives:{
			navClick:{
				inserted:function(el){
					console.log(el)
					var obj = $(el);
					var aLi = obj.find('.li-link');
					aLi.on('click',function(ev){
						//alert(123)
						
						$(this).siblings('dl').slideToggle();
					})
					
				}
			}
		},
		props:{
			name:{
				type:"string"
			}
		},
		methods:{
			mouseEnter:function(index){
				//console.log(this.$router)
				for(var i = 0;i<this.navData.length;i++){
					if(i == index){
						this.navData[index].show = !this.navData[index].show;
						//console.log(this.navData[index].show)
						
						if(i == 0){
							var active = this.navData[index].show == true ? 'currentActive' : 'currentActive';
						}else{
							var active = this.navData[index].show == true ? 'active' : '';
						}
						this.navData[i].activeClass=active;
						
					}else{
						this.navData[i].show=false;
						
						if(i == 0 && this.$router.history.current.path == '/index'){
							this.navData[i].activeClass='currentActive';
						}else{
							this.navData[i].activeClass='';
						}
					}
				}
			}
		},
		watch:{
			'$route'(to,from){
				console.log(to)
				console.log(from)
				var path = to.path.split('/')[1];
				if(path !== 'index'){
					this.navData[0].activeClass='';
				}
			}
		},
		mounted:function(){
			//console.log(this.$route.params)
			//console.log(this.$router)
			if(this.$router.history.current.path == '/index'){
				this.navData[0].activeClass='currentActive';
			}else{
				this.navData[0].activeClass='';
			}

		
		}
		
	};
	
	return exports;
})