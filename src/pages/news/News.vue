<template>
	<div id="news">
		<components :is="infotemplate" :newsinfo="newsinfo"></components>
		<Header></Header>
		<div class="menulist">
			<div class="swiper-container gallery-thumbs">
				<div class="swiper-wrapper" id="gallery-thumbs">
					<div class="swiper-slide" v-for="item in menulist" :key="item.id" style="width: 100px;" @click="menuGetList(item.id)">{{item.model}}</div>
				</div>

			</div>
			<div id="search">
				<input type="text" placeholder="请输入搜索内容" v-model="searchVal" @input="getSerachData" />
				<span @click="clearInput">取消</span>
			</div>
		</div>
		<!-- Swiper -->
		<div class="contentBody">

			<div class="swiper-container gallery-top">
				<div class="swiper-wrapper" id="gallery-top">

					<div class="swiper-slide" v-for="item in menulist">

						<template v-for="item in substrNewlist">
							<template v-if="item.thumbnailSize">

								<div class="img_no" v-if="item.thumbnailSize==0" @click="goNewsInfo(item.id)">
									<h2>{{item.title}} </h2>
									<p><span>{{item.source?item.source:'浏览量：'+item.visited}}</span><span>{{item.publishDate}}</span></p>
								</div>
								<figure v-else-if="item.thumbnailSize==1" class="img_one" @click="goNewsInfo(item.id)">
									<img v-for="im in item.thumbnail" :src="im.url">
									<figcaption>
										<h2 style="height:36px;">{{item.title}} </h2>
										<p><span>{{item.source?item.source:'浏览量：'+item.visited}}</span><span>{{item.publishDate}}</span></p>
									</figcaption>
								</figure>
								<div class="img_two" v-else-if="item.thumbnailSize>0 && item.thumbnailSize<=3" @click="goNewsInfo(item.id)">
									<h2>{{item.title}} </h2>
									<ul>
										<li v-for="im in item.thumbnail"><img :src="im.url" alt=""></li>
									</ul>
									<p><span>{{item.source?item.source:'浏览量：'+item.visited}}</span><span>{{item.publishDate}}</span></p>
								</div>
							</template>
							<template v-else>
								<div class="img_no" @click="goNewsInfo(item.id)">
									<h2>{{item.title}} </h2>
									<p><span>{{item.source?item.source:'浏览量：'+item.visited}}</span><span>{{item.publishDate}}</span></p>
								</div>
							</template>

						</template>
					</div>

				</div>
				<!-- Add Arrows -->

			</div>


		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	
	import Swiper from 'swiper';
	import Header from "../components/Header";
	import Footer from "../components/Footer";
	import Newsinfo from "./NewsInfo.vue";
	export default {
		name: "News",
		data() {
			let that = this;
			return {
				menulist: [],
				newlist: [],
				tabindex: 1,
				classType: '',
				searchVal: '',
				infotemplate: Newsinfo,
				newsid: '',
				newsinfo: {}

			}
		},
		components: {
			Header,
			Footer,
			Newsinfo

		},
		computed: {
			substrNewlist() {
				let res = this.newlist;
				for (let i = 0; i < res.length; i++) {
					if (res[i].title.length >= 20) {
						res[i].title = res[i].title.substring(0, 20) + '...';
					}
					res[i].publishDate = res[i].publishDate.split(' ')[0].split('-')[0] + '年' + res[i].publishDate.split(' ')[0].split(
						'-')[1] + '月' + res[i].publishDate.split(' ')[0].split('-')[2] + '日';
					if (res[i].thumbnailSize > 0) {
						res[i].thumbnail.forEach(e => {
							e.url = 'http://www.hebquzhoujcw.gov.cn' + e.url;
						})
					}
				}
				return this.newlist;
			}
		},
		beforeCreate() {
				
			console.log(window);
		},
		created() {
		
		},
		methods: {
			goNewsInfo(getid) {
				setTimeout(function() {
					document.querySelector('.newsinfo').style.left = "0"
				}, 500)

				this.axios.get('/applet/get' + this.classType + '/' + getid).then(res => {
					console.log(res);
					if (res.status == 200) {
						this.newsinfo = res.data;
					}
				});

			},
			getData() {



			},
			getSerachData() {
				this.axios.get('/applet/getColumnDatas?columnName='+this.classType+'&title=' + this.searchVal).then(res => {

					if (res.status == 200) {
						this.newlist = res.data.rows
					}
				})
			},
			clearInput() {
				this.searchVal = '';
				this.menuGetList(this.classType);
			},
			//分类点击切换获取数据列表
			menuGetList(menuType) {
				let that = this;
				this.searchVal = '';
				this.classType = menuType;
				this.axios.get('/applet/getColumnDatas?columnName=' + menuType).then(res => {
					//console.log(res.data);
					if (res.status == 200) {
						this.newlist = res.data.rows


					}

				})
			},
			//滑动切换获取数据列表
			getAppColumns() {
				let that = this;

				that.axios.get('/applet/getAppColumns').then(res => {
					if (res.status == 200) {
						that.menulist = res.data;
						that.$nextTick(function() {
							var galleryThumbs = new Swiper('.gallery-thumbs', {
								spaceBetween: 10,
								slidesPerView: 4,
								freeMode: true,
								loopedSlides: 5, //looped slides should be the same
								watchSlidesVisibility: true,
								watchSlidesProgress: true,

							});
							var galleryTop = new Swiper('.gallery-top', {
								spaceBetween: 10,
								loopedSlides: 5, //looped slides should be the same
								on: {

									slideChange: function(types) {
										this.searchVal = '';
										that.classType = res.data[this.activeIndex].id
										that.menuGetList(res.data[this.activeIndex].id);
									}
								},
								thumbs: {
									swiper: galleryThumbs,
								},
							});
						})
					}
				});
			}
		},
		mounted() {
			var that = this;
			let header = document.querySelector('.header').offsetHeight;
			let footer = document.querySelector('.footer').offsetHeight;
			let menulist=document.querySelector('.menulist').offsetHeight;
			document.querySelector('.contentBody').style.height=window.innerHeight-55-56-menulist+'px'
			document.querySelector('#gallery-top').style.height = document.querySelector('.contentBody').style.height
			document.querySelector('.gallery-top').style.height = document.querySelector('.contentBody').style.height
			window.onresize = () => {
				let header = document.querySelector('.header').offsetHeight;
				let footer = document.querySelector('.footer').offsetHeight;
				let menulist=document.querySelector('.menulist').offsetHeight;
				document.querySelector('.contentBody').style.height=window.innerHeight-55-56-menulist+'px'
				document.querySelector('#gallery-top').style.height = document.querySelector('.contentBody').style.height
				document.querySelector('.gallery-top').style.height = document.querySelector('.contentBody').style.height
				
			}
			//分类数据与新闻列表数据
			that.menuGetList('all')
			this.getAppColumns();


		},
		updated() {
			let that = this;

		}

	};
</script>
<style scoped="scoped">
	.contentBody {
		overflow-y: auto;
	}

	.menulist {
		width: 100%;
		height: 158px;
	}

	.swiper-container {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	.gallery-thumbs .swiper-slide,
	.gallery-thumbs .swiper-wrapper {
		line-height: 80px;
		text-align: center;
		font-size: 32px;
	}

	.gallery-top {
		width: 100%;
		overflow-y: auto;
	}

	#search {
		width: 100%;
		height: 76px;
		background: #ddd;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		box-sizing: border-box;

	}

	#search input {
		width: 100%;
		height: 48px;
		outline: none;
		background: #fff;
		border: 0;
		padding: 0 20px;
		box-sizing: border-box;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;

	}

	#search span {
		display: block;
		width: 76px;
		height: 48px;
		text-align: center;
		line-height: 48px;
		outline: none;
		color: #fff;
		background: #1b71c8;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.gallery-thumbs {
		height: 80px;
		box-sizing: border-box;

	}

	.gallery-thumbs .swiper-slide {
		height: 100%;

	}

	.gallery-thumbs .swiper-slide-thumb-active {
		color: #1b71c8;
	}

	.img_no,
	.img_one,
	.img_two {
		padding: 20px 30px;
		box-sizing: border-box;
		border-bottom: 1px solid #ddd;
		/*no*/
	}

	#gallery-top h2 {
		font-size: 28px;
	}

	.img_no p,
	.img_one p,
	.img_two p {
		margin-top: 25px;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;
		font-size: 24px;
	}

	.img_one {
		width: 100%;
		display: flex;
		flex-flow: row;
		justify-content: flex-start;
		align-items: center;
	}


	.img_one img {
		display: block;
		width: 75px;
		/*no*/
		height: 75px;
		/*no*/
		margin: 0 20px 0 0;
		border: 7px solid #ddd;
		border-radius: 5px;
	}

	.img_two ul {
		width: 100%;
		display: flex;
		flex-flow: row;
		justify-content: flex-start;
		align-items: center;
	}

	.img_two li img {
		display: block;
		width: 75px;
		/*no*/
		height: 75px;
		/*no*/
		margin: 20px 20px 20px 0;
		border: 7px solid #ddd;
		border-radius: 5px;
	}
</style>
