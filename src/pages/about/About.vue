<template>
    <div id="home">
        <Header v-on:showVideoStatus="showVideo"></Header>
		<div class="contentBody">
			<header>
				<img src="../../assets/image/china.png" alt="" class="china">
			</header>
			<dl>
				<dt>联系我们</dt>
				<dd>单位名称：曲周县纪委监委</dd>
				<dd>办公电话：<a href="tel:0310-8858500">0310-8858500</a></dd>
				<dd>邮政编码：057250</dd>
				<dd>联系地址：曲周县人民东路99号</dd>
			</dl>
		</div>
		<Footer></Footer>
    </div>
</template>
<script>
import Header from '@/pages/components/Header';
import Footer from '@/pages/components/Footer.vue'

export default {
    name:'Home',
    data(){
		return{
			
		}
	},
    components:{
        Header,
		Footer
    },
    methods:{
        showVideo(e){
            alert(e);
        }
    },
	mounted() {
		let t=new this.T();
		t.viewH();
		window.onresize=function(){t.viewH()}
		document.querySelector('.china').style.left=(window.innerWidth-document.querySelector('.china').clientWidth)/2+'px';
	}
}
</script>
<style scoped>
.contentBody header{
	width:100%;
	height: 180px;
	background: #1b71c8;
	position: relative;
}
.contentBody header img{
	display: block;
	width: 156px;
	height: 156px;
	position: absolute;bottom:-32px;;
}
.contentBody dl{
	width:90%;
	margin:100px auto 0;
	padding:40px;
	box-sizing: border-box;
	border-radius: 10px;
	border:1px solid #ddd;/*no*/
}
.contentBody dl dt{
	font-size: 32px;
	text-align: center;
	margin-bottom: 60px;
}
.contentBody dl dd{
	font-size: 32px;
	line-height: 90px;
}
.contentBody dl dd a{
	color:#000;
}
</style>


