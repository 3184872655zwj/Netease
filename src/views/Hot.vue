<template>
<div>
    <div class="rby">热个屁</div>
    <ul class="hot">
       <li v-for="m in arr" :key="m.id">
           <div class="left">
               <div>{{m.name}}</div>
               <p>{{m.song.artists[0].name}}-{{m.name}}</p>
           </div>
            <div class="right">
                <span>播放</span>
            </div>
       </li>
    </ul>
</div>
    
</template>
<script>
export default {
    name:'Hot',
    components:{
        
    },
    data(){
        return {
            arr:[]
        }
    },
    beforeRouteEnter(to,from,next){//路由守卫，路由进入之前获取数据
       next(vm=>{
            vm.$http.get('/personalized/newsong').then(data=>{//获取最新音乐列表
            console.log(data);
            vm.arr=data.data.result;
            });
        });
    },
}
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .rby{
        line-height: 100px;
        background:orange;
        color: white;
        font-size: 20px;
    }
    .hot{
        li{
            line-height: 30px;
            border-bottom: 1px solid #ccc;
            overflow: hidden;
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


