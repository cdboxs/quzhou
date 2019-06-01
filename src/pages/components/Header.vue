<template>
    <div class="header">
        <div class="member"><img src="@/assets/image/login.png" alt=""></div>
        <div class="logo"><img src="@/assets/image/logo.png" alt=""></div>
        <div class="shuoming" @click="showvideo"><img src="@/assets/image/shuoming.png" alt=""></div>
    </div>
</template>
<script>
export default {
    name:'Header',
    data(){
        return {

        }
    },
    methods:{
        showvideo(){
            this.$emit('showVideoStatus','show');
        }
    }
}
</script>
<style scoped>
.header{
    width: 100%;
   height: 55px;/*no*/
    background:#1b71c8;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
	overflow: hidden;
}
.header .member{
    width: 78px;
    height: 78px;
}
.header .member img{
    display: block;
     width: 78px;
    height: 78px;
}
.header .logo{
    width: 400px;
    height: 60px;
}
.header .logo img{
    display: block;
    width: 400px;
    height: 60px;
}
.header .shuoming{
    width: 70px;
    height: 70px;
	border-radius: 50%;
	border:2px solid #fff;/*no*/
}
.header .shuoming img{
   width: 70px;
   height: 70px;
}
</style>


