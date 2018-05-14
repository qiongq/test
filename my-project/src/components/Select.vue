<template>
    <div id="select">
	    <div v-for="(item,index) in items">
            <label>{{item.label}}</label>
            <select @change="provinceval(index)" v-model="item.val">
                <option v-for="(province,inx) in provinces" :value="inx">{{province}}</option>
            </select>
        </div>
        <hr>
        <hr>
        <div class="checkedbox" v-if="result.val" v-for="(result,INDEX) in results">
            <label>{{result.label}}：</label>
            <input type="text" :value="result.val" readonly="readonly"/>
            <span @click="deleteval(INDEX)">&times;</span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        results:[],
        provinces:[],
        items:[],
        Inx:''
    };
  },
  components: {},
  methods: {
    provinceval:function(index){
        if(this.items[index].val == 0){
            this.$set(this.results,index,{});
        }else{
            this.$set(this.results,index,{'label':this.items[index].label,'val':this.provinces[this.items[index].val]})
        }
    },
    deleteval:function(INDEX){
       this.$set(this.results,INDEX,{});
       this.items[INDEX].val = '请选择';

    }
  },
  created() {
    //select循环
    let items = [
        {
            'label':'角色类型',
            'val':'0'
        },
        {
            'label':'阶段',
            'val':'0'
        },
        {
            'label':'话术',
            'val':'0'
        }
    ];
    this.items = items;

    //option循环
    let provinces = ['请选择','角色一','角色二','角色三','角色四','角色五'];
    this.provinces = provinces;
    
    let len = this.items.length;
    for(let i=0;i<len;i++){
        this.results.push({})
    }
  }
};
</script>

<style scoped>
#select{
    margin-top: 20px;
}
#select > div{
    display: inline-block;
}
#select label{
    font-size: 14px;
    color: #333;
}
#select select{
    width:150px;
    margin-right: 30px;
    margin-left: 15px;
}
.checkedbox{
    border: 1px solid #999;
    display: inline-block;
    margin-right: 20px;
    padding: 0 10px;
}
.checkedbox >input{
    border: none;
    display: inline-block;
    outline: none;
    width: 50px;
}
.checkedbox >span{
    font-size: 16px;
    display: inline-block;
    line-height: 28px;
    padding-right: 5px;
    color: crimson;
    cursor: pointer;
}
</style>
