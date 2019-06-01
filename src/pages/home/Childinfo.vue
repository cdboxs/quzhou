<template>
	<div class="newsinfo">
		<div class="bheader">
			<span class="iconfont iconback" @click="goback"></span>
			<h2>{{title}}</h2>
		</div>

		<div class="wrapBody" >
			<iframe :src="urlsrc" class="iframeH"></iframe>
		</div>
	</div>
</template>

<script>
	export default {

		name: "Childinfo",
		data() {
			return {
				title:'',
				urlsrc:''
				
			}
		},
		components: {

		},
		computed:{
			
		},
		methods: {
			//获取一级单位-二级属单位数据http://www.hebquzhoujcw.gov.cn/applet/pingyi/37b38fad3cdc445ba0d45011b44beeee
			goback(){
				this.$router.go(-1)
			},
			
			
		},
		created() {
			
		},
		mounted() {	
			let H = document.documentElement.clientHeight;
			let bheader = document.querySelector('.bheader').clientHeight;
			document.querySelector('.wrapBody').style.height = H - bheader + 'px'
			document.querySelector('.iframeH').style.height = H - bheader + 'px'
			this.title=this.$route.query.title;
			this.urlsrc='http://www.hebquzhoujcw.gov.cn/applet/pingyi/'+this.$route.query.pyid
		}
	}
</script>

<style scoped>
	.newsinfo {

		width: 100%;
		overflow: hidden;
		transition: all 0.5s ease-in-out;
	}

	.wrapBody {
		display: block;
		
		box-sizing: border-box;
		background: #fff;
		
	}
	.iframeH{
		width:100%;
		border:0 none;
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
