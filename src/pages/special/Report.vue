<template>
	<div class="Report">
		<Routerview :newurl="url" :title="buttontitle"></Routerview>
	</div>
</template>

<script>
	import Routerview from '@/pages/components/router-view.vue'
	export default {
		name: "",
		data() {
			return {
				buttontitle:'专项监督',
				url:'http://www.hebquzhoujcw.gov.cn/applet/pingyi/special/'+this.$route.query.formid
			}
		},
		components:{
			Routerview
		},
		mounted(){
		  let t=new this.T();
			t.onlyBheader();
			window.onresize=function(){	t.onlyBheader();}			
		}
	}
</script>

<style scoped>
.contentBody{
    overflow-y:auto; 
		
}


</style>
