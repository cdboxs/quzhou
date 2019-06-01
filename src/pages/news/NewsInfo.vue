<template>
	<div class="newsinfo">
		<div class="bheader">
			<span class="iconfont iconback" @click="close"></span>
			<h2>信息公开</h2>
		</div>
		<div class="newtitle">
			<div class="newthead">
				<h2>{{newsinfo.title?newsinfo.title:''}}</h2>
				<img src="../../assets/image/jiandu.png" @click="gohome">
			</div>
			<p>
			<span>访问量:{{newsinfo.visited?newsinfo.visited:''}}</span>
			<span>
				时间：
			{{newsinfo.publishDate?newsinfo.publishDate.split(' ')[0].split('-')[0]:''}}年
			{{newsinfo.publishDate?newsinfo.publishDate.split(' ')[0].split('-')[1]:''}}月
			{{newsinfo.publishDate?newsinfo.publishDate.split(' ')[0].split('-')[2]:''}}日
			</span>
			</p>
		</div>
		<div class="wrapBody" v-html="newsinfo.content">
			123
		</div>
	</div>
</template>

<script>
	export default {

		name: "NewsInfo",
		data() {
			return {
				title: '',
				viewH: '',
				viewB: '',
				
			}
		},
		props: ['newsinfo'],
		components: {

		},
		computed:{
			
		},
		methods: {
			close() {
				document.querySelector('.newsinfo').style.left = "100%"
			},
			gohome(){
				this.$router.push({
					path:'/'
				});
			}
			
		},
		created() {
			
		},
		mounted() {		
			let H = document.documentElement.clientHeight;
			let bheader = document.querySelector('.bheader').clientHeight;
			let newtitle = document.querySelector('.newtitle').clientHeight;
			document.querySelector('.wrapBody').style.height = H - bheader - newtitle + 'px'

		}
	}
</script>

<style scoped>
	.newsinfo {

		width: 100%;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 100%;
		z-index: 9999;
		transition: all 0.5s ease-in-out;
	}

	.wrapBody {
		overflow-y: auto;
		padding: 20px;
		box-sizing: border-box;
		background: #fff;
		
	}
	.wrapBody img,.wrapBody p{
		width: 100%;
	}
	.newtitle {
		width: 100%;
		height: 150px;
		overflow: hidden;
		background:#fff;
		border-bottom: 1px solid #ddd;/*no*/
	}
	.newtitle p{
		width: 100%;
		padding:10px 20px;
		box-sizing: border-box;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}
	.newthead{
		width:100%;
		height: 100px;
		padding:10px 20px;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}
	.newthead h2{
		width:80%;
		font-size: 30px;
		padding-left:15px;
		box-sizing: border-box;
		border-left:4px solid #1b71c8;/*no*/
	}
	.newthead img{
		display: block;
		width:83px;
		height:83px;
	}
	.bheader {
		width: 100%;
		height: 112px;
		background: #1b71c8;
		display: flex;
		flex-flow: row;
		justify-content: space-around;
		align-items: center;
		overflow: hidden;
		position: relative;
	}

	.iconfont {
		display: flex;
		height: 100%;
		font-size: 64px;
		color: #FFFFFF;
		flex-flow: row;
		justify-content: flex-start;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0px;
	}

	.bheader h2 {
		width: 100%;
		color: #fff;
		font-size: 32px;
		padding-left: 76px;
		box-sizing: border-box;
	}

</style>
