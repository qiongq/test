<template>
    <div id="page">
	    <span :class="['prev',{'disabled':currentPage == 1}]" @click="prevPage">&lt;</span>
        <!--当总页数小于6时-->
        <span
            v-for="(num,index) in sumPage"
            :class="{'page-active':(index+1)==currentPage}"
            v-if="sumPage<=6"
            @click="toPage(index)"
        >{{num}}</span>
        <!--总页数-当页>4<7-->
        <div v-if="(sumPage-currentPage)>4 && (sumPage-currentPage)<=7">
            <span class="page-active" @click="toPage(currentPage-1)">{{currentPage}}</span>
            <span @click="toPage(currentPage)">{{currentPage+1}}</span>
            <span @click="toPage(currentPage+1)">{{currentPage+2}}</span>
            <span @click="toPage(currentPage+2)">{{currentPage+3}}</span>
            <span class="more">···</span>
            <span @click="toPage(sumPage-2)">{{sumPage-1}}</span>
            <span @click="toPage(sumPage-1)">{{sumPage}}</span>
        </div>
        <!--当页数与总数差4时-->
        <div v-if="(sumPage-currentPage)<=4">
            <span
                :class="{'page-active':(sumPage-4)==currentPage}"
                @click="toPage(sumPage-5)">
            {{sumPage-4}}</span>
            <span
                :class="{'page-active':(sumPage-3)==currentPage}"
                @click="toPage(sumPage-4)">
            {{sumPage-3}}</span>
            <span
                :class="{'page-active':(sumPage-2)==currentPage}"
                @click="toPage(sumPage-3)">
            {{sumPage-2}}</span>
            <span
                :class="{'page-active':(sumPage-1)==currentPage}"
                @click="toPage(sumPage-2)">
            {{sumPage-1}}</span>
            <span
                :class="{'page-active':(sumPage)==currentPage}"
                @click="toPage(sumPage-1)">
            {{sumPage}}</span>
        </div>
        <!--总页数-当页>7-->
        <div v-if="(sumPage-currentPage)>7">
            <span class="page-active" @click="toPage(currentPage-1)">{{currentPage}}</span>
            <span @click="toPage(currentPage)">{{currentPage+1}}</span>
            <span class="more">···</span>
            <span @click="toPage(currentPage+2)">{{currentPage+3}}</span>
            <span @click="toPage(currentPage+3)">{{currentPage+4}}</span>
            <span class="more">···</span>
            <span @click="toPage(sumPage-2)">{{sumPage-1}}</span>
            <span @click="toPage(sumPage-1)">{{sumPage}}</span>
        </div>
        <span :class="['next',{'disabled':currentPage == sumPage}]">&gt;</span>
    </div>
</template>
<script>
export default {
  data() {
    return {
        currentPage:1,
        sumPage:10
    };
  },
  components: {},
  methods: {
    prevPage(){
        this.currentPage == 1 ? this.currentPage = 1 : this.currentPage -= 1;
    },
    nextPage(){
        this.currentPage == this.sumPage ? this.currentPage = this.sumPage : this.currentPage += 1;
    },
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
