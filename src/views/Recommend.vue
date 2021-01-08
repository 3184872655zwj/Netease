<template>
  <div class="recommend">
      <Title>推荐歌单</Title>
      <ul class="recommendList">
        <router-link v-for="rem in recommendMusicList" :key="rem.id" to="/" tag="li">
        <div>
          <img :src="rem.picUrl" />
          <span>{{rem.playCount|formatNun}}</span>
        </div>
        <p>{{rem.name}}</p>
        </router-link>
      </ul>
      <Title>最新音乐</Title>
      <Music :newMusiclist="newMusiclist"></Music>
  </div>
</template>

<script>
import Title from '../components/Title'
import Music from '../components/Music'

export default {
  name: 'Recommend',
  components: {
    Title,
    Music
  },
  data(){
    return {
      recommendMusicList:[],
      newMusiclist:[],
    }
  },
  beforeRouteEnter(to,from,next){//路由守卫，路由进入之前获取数据
    next(vm=>{
        vm.$http.get('/personalized?limit=6').then(data=>{//获取推荐歌单
          // console.log(data);
          vm.recommendMusicList=data.data.result;
        });
        vm.$http.get('/personalized/newsong').then(data=>{//获取最新音乐列表
          // console.log(data);
          vm.newMusiclist=data.data.result;
        });
    });
        
  },
  filters:{//过滤器
    formatNun(value){
      return (value/10000).toFixed(1)+"万";
    }
  }
}
</script>

<style lang="less" scoped>
  ul.recommendList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
    width: 33%;

      div{
        position: relative;
        span{
          position: absolute;
          top: 2px;
          right: 3px;
          color: #fff;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
          font-size:10px
        }
      }
      p{
        font-size: 13px;
        text-align: left;
      }
    }
  }
</style>
