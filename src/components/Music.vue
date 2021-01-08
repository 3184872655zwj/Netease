<template>
  <ul class="newMusicList">
    <router-link v-for="item in newMusiclist" :key="item.id" tag="li" to="/">
      <div class="left">
          <div>{{item.name}}</div>
          <p>{{item.song.artists[0].name}}-{{item.name}}</p>
      </div>
      <div class="right">
        <span>播放</span>
      </div>
    </router-link>
  </ul>
</template>
<script>
export default {
  name:"Music",
  props:{
    newMusiclist:Array
  }
}
</script>
<style lang="less" scoped>
.newMusicList{
   li{
       line-height: 30px;
       overflow: hidden;
       border-bottom: 1px solid #ccc;
       .left{
           float: left;
           padding: 5px;
           div{
               font-size: 17px;
               color: black;
               text-align: left;
           }
           p{
                font-size: 12px;
               color: #ccc;
           }
       }
       .right{
           width: 50px;
           margin-top: 10px;
           line-height: 50px;
           background: #ccc;
           float: right;
           
       }
   }
}
</style>

