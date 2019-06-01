<template>
  <div id="app">
		<transition name="fate" mode="out-in">
    <router-view/>
		</transition>
    
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
html{
  font-size: 50px;
}
*{
  padding:0;
  margin:0;
}
a{
	text-decoration: none;
}
li{
	list-style: none;
}
#app {
  font-family:'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
.fate-enter-ative,.fate-leave-active{
	transition: opacity .3s; 
}
.fate-enter,.fate-leave-active{
	 opacity:0.3; 
}
</style>
