<template>
  <div id="special">
    <Header></Header>
    <div class="contentBody">
        <ul>
            <li v-for="(item,index) in orderspecialList" :key="index" @click="goInfo(item)">
                <span class="iconfont icontianping"></span>
                <h2>{{item.title}}</h2>
            </li>

        </ul>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Spcial",
  data() {
    return {
        specialList:[]
    };
  },
  components: {
    Header,
    Footer
  },
  computed:{
      orderspecialList(){
          return this.specialList.reverse();
      }
  },
  methods:{
      getSpecialList(){
        this.axios.get('/applet/getSpecialList?limit=300&offset=0').then(res=>{
            if(res.status==200){
                this.specialList=res.data.rows
            }
            
        });
      },
      goInfo(getData){
          this.$router.push({
              path:'/sinfo', 
              query:{sData:JSON.stringify(getData)}
            })
           
      }
  },
  mounted(){
      let t=new this.T();
	  t.viewH();
	  window.onresize=function(){t.viewH()}
      this.getSpecialList();
       
  }
};
</script>
<style scoped>
.contentBody{
    overflow-y:auto; 
}
.contentBody ul li{
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    background: #eee;
    padding:10px;
    margin:20px 0;
}
.contentBody ul li .iconfont{
    font-size: 72px;
    color:#8a8a8a;
}
.contentBody ul li h2{
    font-size: 32px;
    font-weight:300;
    margin-left:40px;
}
</style>


