<template>
	
	<div class="bheader">
		<span class="iconfont iconback" @click="goback"></span>
		<h2>{{btitle}}</h2>
	</div>
	
</template>

<script>
	export default{
		name:'Bheader',
		props:['btitle'],
		data(){
			return {
				
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			}
		},
		mounted() {
			console.log('btitle');
		}
	}
</script>

<style scoped>
	.bheader{
		width: 100%;
		height:112px;
		background:#1b71c8;
		display: flex;
		flex-flow: row;
		justify-content: space-around;
		align-items: center;
		overflow: hidden;
		position: relative;
	}
	.iconfont{
		display: flex;
		height: 100%;
		font-size: 64px;
		color: #FFFFFF;
		flex-flow: row;
		justify-content: flex-start;
		align-items: center;
		position: absolute;top:0;left:0px;
	}
	.bheader h2{
		width: 100%;
		color:#fff;
		font-size:32px;
		padding-left: 76px;
		box-sizing: border-box;
	}
	
	
</style>
