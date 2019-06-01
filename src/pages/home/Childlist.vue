<template>
	<div class="newsinfo">
		<div class="bheader">
			<span class="iconfont iconback" @click="goback"></span>
			<h2>{{title}}</h2>
		</div>

		<div class="wrapBody" >
			<ul>
				<li v-for="(item,index) in childlist" :key="item.folderGroupID" @click="gopingyi(item.id,item.label)">{{item.label}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {

		name: "Childlist",
		data() {
			return {
				title:'',
				childlist:''
				
			}
		},
		props: ['id'],
		components: {

		},
		computed:{
			
		},
		methods: {
			//获取一级单位-二级属单位数据
			getAnnouncementChild(){
			
				this.axios.get('/applet/getChildFolderList?parentId='+this.$route.query.id).then(res=>{
					console.log(res);
					this.title=res.data.folderGroup;
					this.childlist=res.data.folders
				});
			},
			goback(){
				this.$router.push({
					path:'/'
				});
			},
			gopingyi(id,name){
				this.$router.push({
					path: 'childinfo',
					query:{
						pyid:id,
						title:name
					}
				});
			}
			
		},
		created() {
			
		},
		mounted() {		
			let H = document.documentElement.clientHeight;
			let bheader = document.querySelector('.bheader').clientHeight;
			document.querySelector('.wrapBody').style.height = H - bheader + 'px'
			this.getAnnouncementChild();
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
		overflow-y: auto;
		box-sizing: border-box;
		background: #fff;
		
	}
	.wrapBody img,.wrapBody p{
		width: 100%;
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
	.wrapBody ul{
		width: 100%;
		
		overflow: hidden;
	}
	
	.wrapBody ul li{
		width: 50%;
		height: 80px;
		line-height: 80px;
		color: #333;
		float: left;
		padding:0 20px;
		font-size: 30px;
		margin-left:-1px;/*no*/
		box-sizing: border-box;
		border-left:1px solid #ddd;/*no*/
		border-bottom:1px solid #ddd;/*no*/
		overflow: hidden;
	}
	.wrapBody ul li:last-child{
		width: 50%;
		border-right:1px solid #ddd;/*no*/
	}

</style>
