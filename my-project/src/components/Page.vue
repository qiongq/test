<template>
    <div id="page">
	    <span :class="['prev',{'disabled':currentPage == 1}]">&lt;</span>
        <!--当总页数小于四时-->
        <span 
            v-for="(num,index) in sumPage"
            :class="{'page-active':(index+1)==currentPage}"
            v-if="sumPage<=4"
            @click="toPage(index)"
        >{{num}}</span>
        <!--当页数等于5页时-->
        <!-- <div v-if="sumPage==5&&(currentPage)<4">
            <span class="page-active" @click="toPage(currentPage-1)">{{currentPage}}</span>
            <span @click="toPage(currentPage)">{{currentPage+1}}</span>
            <span @click="toPage(currentPage+1)">{{currentPage+2}}</span>
            <span @click="toPage(currentPage+2)">{{currentPage+3}}</span>            
            <span class="more">···</span>
            <span @click="toPage(sumPage-2)">{{sumPage-1}}</span>
            <span @click="toPage(sumPage-1)">{{sumPage}}</span>
        </div> -->
        <!--当总页数大于四页且选中页小于四时且总页数比当前页数大二-->
        <div v-if="sumPage>4&&(currentPage)<4">
            <span class="page-active">{{currentPage}}</span>
            <span>{{currentPage+1}}</span>
            <span>{{currentPage+2}}</span>
            <span>{{currentPage+3}}</span>            
            <span class="more">···</span>
            <span>{{sumPage}}</span>
        </div>
        <!--当总页数等于五页且选中页小于四时且总页数比当前页数大二-->

        <!-- <div v-if="sumPage>4&&(currentPage)>=4">
            <span class="page-active" @click="toPage(currentPage-4)">{{currentPage-3}}</span>
            <span @click="toPage(currentPage)">{{currentPage-2}}</span>
            <span class="more">···</span>
            <span @click="toPage(currentPage-1)">{{currentPage}}</span>
            <span @click="toPage(currentPage)">{{currentPage+1}}</span>
            <span class="more">···</span>
            <span @click="toPage(sumPage-2)">{{sumPage-1}}</span>
            <span @click="toPage(sumPage-1)">{{sumPage}}</span>
        </div> -->
        <span :class="['next',{'disabled':currentPage == sumPage}]">&gt;</span>
    </div>
</template>
<script>
export default {
  data() {
    return {
        currentPage:1,
        sumPage:5
    };
  },
  components: {},
  methods: {
    /* prevPage(){

    },
    nextPage(){

    } */
    toPage(index){
        this.currentPage = index+1;
    }
  },
  created() {
    
  }
};
</script>

<style scoped>
#page{
    width: 100%;
    height: 62px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
#page span{
    display: block;
    border-radius: 3px;
    margin: 19px 3px 0 3px;
    height: 22px;
    border: 1px solid #e1e1e1;
    padding: 0 15px;
    cursor: pointer;
    line-height: 22px;
}
#page .prev,
#page .next{
    width: 46px;
    padding: 0 !important;
    text-align: center;
}
#page div{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
}
#page div > span {
    display: block;
    border-radius: 3px;
    margin: 19px 3px 0 3px;
    height: 22px;
    border: 1px solid #e1e1e1;
    padding: 0 15px;
    cursor: pointer;
}
.page-active{
    background-color: #f49d73;
    border-color: #f49d73 !important;
    color: #fff;
}
#page div .more{
    padding: 0 !important;
    border: none !important;
}
.disabled{
    background-color: #e1e1e1;
}
</style>
