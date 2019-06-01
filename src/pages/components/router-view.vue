<template>
	<div class="router-view ">
		<div class="contentBody">
			<Bheader :btitle="title"></Bheader>
			<iframe :src="newurl" class="iframeH"></iframe>
			
		</div>
		
	</div>
</template>

<script>
	import Bheader from '@/pages/components/Bheader.vue'
	export default {
		name: "Routerview",
		props:['newurl','title'],
		data() {
			return {
				
			}
		},
		components:{
			Bheader
		},
		mounted() {
			document.querySelector('.iframeH').style.height=(document.documentElement.clientHeight-document.querySelector('.bheader').offsetHeight)+'px'
			document.querySelector('.contentBody').style.height=(document.documentElement.clientHeight)+'px'
		}
	}
</script>

<style scoped>
.router-view{
	width:100%;

}
.router-view iframe{
	display: block;
	width: 100%;
	border:0;

}
.contentBody{
	padding:0;
}
</style>
