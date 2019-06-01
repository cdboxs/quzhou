<template>
	<div class="footer">
		
		<figure v-for="(item,index) in nav" :key="index"   @click="navStatus($event,index,item.navPath)">
			<span :class="item.className" ></span>
			<figcaption>{{item.navName}}</figcaption>
		</figure>
	</div>
</template>

<script>
	export default {
		name: "Footer",
		data() {
			return {
				nav:[
					{
						navPath:'/',
						className:'iconfont iconhome',
						navName:'日常监督'
					},
					{
						navPath:'/news',
						className:'iconfont iconhome',
						navName:'信息公开'
					},
					{
						navPath:'/special',
						className:'iconfont iconhome',
						navName:'专项监督'
					},
					{
						navPath:'/about',
						className:'iconfont iconlianxiwomen',
						navName:'关于我们'
					}
				]
			}
		},
		watch:{
			newnav(n,o){
				console.log(n);
			}
		},
		methods:{
			navStatus(e,index,getpath){
				this.$router.push({path:getpath});
				let getFigure=document.querySelectorAll('figure')
				// getFigure.forEach(item=>{
				// 	if(index==0){
				// 		getFigure[0].querySelector('span').className='iconfont iconhome '
				// 	}
				// 	if(index==1){
				// 		
				// 		getFigure[1].querySelector('span').className='iconfont iconhome '
				// 	}
				// 	if(index==2){
				// 		getFigure[2].querySelector('span').className='iconfont iconhome '
				// 	}
				// 	if(index==3){
				// 		getFigure[3].querySelector('span').className='iconfont iconlianxiwomen '
				// 	}
				// 	item.querySelector('span').classList.remove('active')
				// })
				if(index==0){
					getFigure[0].querySelector('span').className='iconfont iconhome active'
				}
				if(index==1){
					getFigure[1].querySelector('span').className='iconfont iconhome active'
				}
				if(index==2){
					getFigure[2].querySelector('span').className='iconfont iconhome active'
				}
				if(index==3){
					this.nav[3].className="iconfont iconlianxiwomen active"
					//getFigure[3].querySelector('span').className='iconfont iconlianxiwomen active'
				}
				
			}
		},
		mounted() {
			let getFigure=document.querySelectorAll('figure')[0];
			getFigure.querySelector('span').classList.add('active')
			getFigure.querySelector('figcaption').classList.add('activeColor')
		}
	}
</script>

<style scoped>
.footer{
	width: 100%;
	height: 55px;/*no*/
	background: #eee;
	border-top:1px solid #ddd;/*no*/
	display: flex;
	flex-flow: row;
	justify-content: space-around;
	align-items: center;
	overflow: hidden;
}
.footer figure{
	width:25%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: center;
	overflow: hidden;
}
.footer img{
	display: block;
	width: 48px;
	height: 48px;
}
.footer figcaption{
	width: 100%;
	text-align: center;
}
.iconfont{
	font-size: 64px;
	color:#8a8a8a;
}
.active{
	font-size: 64px;
	color:#1b71c8;
}
.activeColor{
	color:#1b71c8;
}
</style>
