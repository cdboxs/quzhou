<template>
	<div id="home">
		<Header v-on:showVideoStatus="showVideo"></Header>
		<div class="contentBody">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in newbannerlist"><img :src="item.url" alt=""></div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<div class="Announcement">
				<dl @click="goAnnouncement">
					<dt>通告{{windowH}}</dt>
					<dd>
						<h2>曲周互联网+工作开展中...</h2>
						<span>查看更多</span>
					</dd>
				</dl>
			</div>
			<div class="Company">
				<div class="Lwrapper" ref="Lwrapper">
					<ul class="content">
						<li  v-for="(item,index) in Announcement"  :key="item.folderGroupID" ><a :href="'#s'+item.folderGroupID" >{{item.folderGroup}}</a></li>
						
					</ul>
				</div>
				<div class="Rwrapper" >
					<div  id="content">
						
						<dl v-for="(item,index) in Announcementsub" :id="'s'+item.folderGroupID" :key="item.folderGroupID">
						
							<dt>{{item.folderGroup}}</dt>
							<dd v-for="(citem,cid) in item.folders" :key="cid" @click="goChildList(citem.id)">{{citem.label}}</dd>
						
						</dl>
						
						
					</div>
				</div>
				
			</div>
			
		</div>

		<Footer></Footer>
	</div>
</template>
<script>
	import Swiper from 'swiper';
	import BScroll from 'better-scroll';
	import Header from '@/pages/components/Header';
	import Footer from '@/pages/components/Footer.vue'
	export default {
		name: 'Home',
		data() {
			return {
				bannerlist: [],
				Announcement:[],
				tg: {},
				windowH:''

			}
		},
		components: {
			Header,
			Footer
		},
		watch:{
			windowH(){
				return window.innerWidth
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			},
			newbannerlist() {
				this.bannerlist.map(res => {
					res.url = 'http://www.hebquzhoujcw.gov.cn/' + res.url
				})
				return this.bannerlist
			},
			Announcementsub(){
				this.Announcement.map(res=>{
					res.folders.map(t=>{
						if(t.label.length>5){
							t.label=t.label.substring(0,5)+'...';
						}else{
							t.label=t.label
						}
					})
				})
				return this.Announcement;
			}
		},
		methods: {
			
			//展示使用说明
			showVideo(e) {
				console.log(document.querySelector('#s01').scrollTop+'--'+document.querySelector('#s02').offsetTop)
				document.querySelector('.Rwrapper').scrollTop=200+'px'
			},
			//获取轮播图数据
			getBanner() {
				this.axios.get('/applet/getWheelPlayPhoto/1').then(res => {
					if (res.status == 200) {
						this.bannerlist = res.data.thumbnail
					}
					this.$nextTick(function() {
						var swiper = new Swiper('.swiper-container', {
							pagination: {
								el: '.swiper-pagination',
							},
						});
					})
				});
			},
			//获取通告数据
			getAnnouncement() {
				this.axios.get('/applet/getAppNotice/1').then(res => {
					if (res.status == 200) {
						this.tg = res.data
					}
				});
			},
			//跳转通告
			goAnnouncement() {

			},
			//获取分类及所属一级单位单位数据
			getAnnouncement(){
				this.axios.get('/applet/getFolderList').then(res=>{
					if(res.status==200){
						this.Announcement=res.data
					}
					console.log(res);
				})
			},
			
			goChildList(id){
				this.$router.push({
					path:'/childlist',
					query:{
						id:id
					}
				});
			}
			
		},
		mounted() {
			this.$nextTick(function(){
				window.onresize=function(){
					let swiper=document.querySelector('.swiper-container').offsetHeight;
					let Announcement=document.querySelector('.Announcement').offsetHeight;
					document.querySelector('.contentBody').style.height=window.innerHeight-55-56+'px'
					document.querySelector('.Company').style.height=contentBody-swiper-Announcement+'px'
					let contentBody=document.querySelector('.contentBody').offsetHeight;
					document.querySelector('.Rwrapper').style.height=contentBody-swiper-Announcement+'px'
					document.querySelector('.Lwrapper').style.height=contentBody-swiper-Announcement+'px'
				}
				document.querySelector('.contentBody').style.height=window.innerHeight-55-56+'px'
				let contentBody=document.querySelector('.contentBody').offsetHeight;
				let swiper=document.querySelector('.swiper-container').offsetHeight;
				let Announcement=document.querySelector('.Announcement').offsetHeight;
				document.querySelector('.Rwrapper').style.height=contentBody-swiper-Announcement+'px'
				document.querySelector('.Lwrapper').style.height=contentBody-swiper-Announcement+'px'
				setTimeout(()=>{
					this.scroll = new BScroll(this.$refs.Lwrapper, {click:true})
				},500)
				
				
			})
			
			this.getBanner();
			this.getAnnouncement();

		},
		updated() {


		}
	}

</script>
<style>
	.swiper-container {
		width: 100%;
		height: 160px;/*no*/
	}

	.swiper-container img {
		display: block;
		width: 100%;
	}
	
	.Announcement {
		width: 100%;
		height: 50px;/*no*/
		background: #fff;
		border-bottom: 1px solid #ddd;/*no*/
	}

	.Announcement dl {
		width: 100%;
		height: 50px;/*no*/
		padding: 0 10px;
		box-sizing: border-box;
		display: flex;
		flex-flow: row;
		justify-content: flex-start;
		align-items: center;
		background: url(../../assets/image/more.png) no-repeat right center;
		background-size: 48px;
	}

	.Announcement dl dt {
		width: 180px;
		height: 64px;
		line-height: 64px;
		padding-left: 64px;
		font-size: 36px;
		font-weight: 600;
		box-sizing: border-box;
		background: url(../../assets/image/notice.png) no-repeat left center;
	}

	.Announcement dl dd {
		width: 100%;
		height: 100px;
		padding: 0 40px 0 20px;
		box-sizing: border-box;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;

	}

	.Announcement dl dd h2 {
		font-weight: 300;
		font-size: 32px;
	}
	.Company{
		padding:0 20px;
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
	}
	.Company .Lwrapper{
		width: 40%;
		overflow: hidden;
	}
	.Company .Lwrapper ul li{
		width: 100%;
		padding:30px 0;
		text-align: center;
		background: #1b71c8;
		border-bottom: 1px solid #fff;/*no*/
	}
	.Company .Lwrapper ul li a{
		color: #fff;
		font-size: 32px;
	}
	.Rwrapper{
		width: 58%;
		overflow-y: auto;
		border:1px solid #ddd;
	}
	.Rwrapper dl{
		width: 100%;
		overflow: hidden;
	}
	.Rwrapper dl dt{
		width: 100%;
		height: 60px;
		line-height: 60px;
		color: #fff;
		padding:0 10px;
		font-size: 32px;
		box-sizing: border-box;
		background: #1b71c8;
	}
	.Rwrapper dl dd{
		width: 50%;
		height: 80px;
		line-height: 80px;
		color: #333;
		float: left;
		padding:0 20px;
		font-size: 30px;
		box-sizing: border-box;
		border-left:1px solid #ddd;/*no*/
		border-bottom:1px solid #ddd;/*no*/
		overflow: hidden;
	}
	.Rwrapper dl dd:last-child{
		border-right: 1px solid #ddd;/*no*/
	}
</style>
