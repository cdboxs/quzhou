<template>
  <div id="special">
    <Bheader :btitle="title"></Bheader>
    <div class="contentBody">
       <div v-html="content"></div>
			 <div class="Report" @click="goReport">{{buttontitle}}</div>
    </div>
  </div>
</template>
<script>
import Bheader from "../components/Bheader";

export default {
  name: "Sinfo",
  data() {
    return {
        content:'',
				title:'',
				formid:'',
				buttontitle:''
    };
  },
  components: {
    Bheader
  },
  created(){
   
  },
  methods:{
      goReport(){
				this.$router.push({
					path:'/report',
					query:{
						formid:this.formid,
						buttontitle:this.buttontitle
					}
				})
			}
    
  },
  mounted(){
    let t=new this.T();
		t.onlyBheader();
		window.onresize=function(){	t.onlyBheader();}
      this.content=JSON.parse(this.$route.query.sData).content;
			this.title=JSON.parse(this.$route.query.sData).title;
			this.formid=JSON.parse(this.$route.query.sData).formId;
			this.buttontitle=JSON.parse(this.$route.query.sData).buttontitle

  }
};
</script>
<style scoped>
.contentBody{
    overflow-y:auto; 
		
}
.contentBody div{
  padding:20px 20px 132px 20px;
  box-sizing: border-box;
	
}
.contentBody .Report{
	width: 100%;
	height: 100px;
	background:#1b71c8 ;
	line-height: 100px;
	text-align: center;
	padding:0;
	color: #fff;
	font-size: 36px;
	position: fixed;bottom:0;left:0;z-index: 9999;
}
</style>


