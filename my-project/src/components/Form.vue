<template>
    <div id="form">
	    <form action="">
            <div class="form-list">
                <label>活动名称</label>
                <input type="text" v-model="name"/>
            </div>
            <div class="form-list">
                <label>活动区域</label>
                <select v-model="area">
                    <option 
                     v-for="option in options" 
                     v-bind:value="option.value">{{option.areaval}}</option>
                </select>
            </div>
            <div class="form-list">
                <label>即时配送</label>
                <span class="dispatch-btn" 
                 v-for="derail,index in derails" 
                 @click="switchs(index)" 
                 :class="{active:derail}"></span>
                <input type="hidden" v-model="dispatch"/>
            </div>
            <div class="form-list">
                <label>活动性质</label>
                <div 
                v-for="naturelist in natures" 
                class="mr10 line">
                    <input type="checkbox" 
                    v-model="nature" 
                    v-bind:value="naturelist.value"/>{{naturelist.natureval}}</div>
            </div>
            <div class="form-list">
                <label>特殊资源</label>
                <div v-for="resourcelist in resources" class="mr10 line">
                 <input
                  type="radio" 
                  name="resource"
                  v-model="resource"
                  :value="resourcelist.value"
                  />{{resourcelist.resourceval}}</div>
            </div>
            <div class="form-list">
                <label>活动形式</label>
                <textarea class="" cols="70" rows="5" v-model="shape"></textarea>
            </div>
            <div class="form-list">
                <div class="btn" @click="subform">立即创建</div>
                <div class="btn" @click="cancel">取消</div>
            </div>
        </form>

        <!-- <div>
            活动名称:{{name}}<br/>
            活动区域:{{area}}<br/>
            即时配送:{{dispatch}}<br/>
            活动性质:{{nature}}<br/>
            特殊资源:{{resource}}<br/>
            活动形式:{{shape}}<br/>
        </div> -->
    </div>

</template>
<script>
export default {
  data() {
    return {
      name: "",
      area: "",
      options: [],
      dispatch: [],
      nature: [],
      natures: [],
      resource: "",
      resources: [],
      shape: "",
      derails: []
    };
  },
  components: {},
  methods: {
    switchs: function(index) {
      for (var i = 0; i < 5; i++) {
        if (i == index) {
          this.$set(this.derails, index, !this.derails[index]);
        } else {
          this.$set(this.derails, i, false);
        }
      }
      this.dispatch = this.derails;
    },
    subform: function() {
      console.log(
        "活动名称:" +
          this.name +
          "  活动区域:" +
          this.area +
          "  即时配送:" +
          this.dispatch +
          "  活动性质:" +
          this.nature +
          "  特殊资源:" +
          this.resource +
          "  活动形式:" +
          this.shape
      );
    },
    cancel: function() {
      this.name = "";
      this.area = "";
      this.nature = [];
      this.resource = "";
      this.shape = "";
      for (var i = 0; i < 5; i++) {
        this.$set(this.derails, i, false);
      }
    }
  },
  created() {
    let derails = [];
    for (var i = 0; i < 5; i++) {
      derails.push(false);
    }
    this.derails = derails;

    let resources = [
      {
        value: 0,
        resourceval: "线上品牌赞助商"
      },
      {
        value: 1,
        resourceval: "线下场地免费"
      }
    ];
    this.resources = resources;

    let options = [
      {
        value: "0",
        areaval: "区域一"
      },
      {
        value: "1",
        areaval: "区域二"
      },
      {
        value: "2",
        areaval: "区域三"
      }
    ];
    this.options = options;

    let natures = [
      {
        value: 0,
        natureval: "美食/餐厅线上活动"
      },
      {
        value: 1,
        natureval: "地推活动"
      },
      {
        value: 2,
        natureval: "地上主题活动"
      },
      {
        value: 3,
        natureval: "单纯品牌曝光"
      }
    ];
    this.natures = natures;
  }
};
</script>

<style scoped>
#form {
  width: 1200px;
  margin: 0 auto;
  padding: 30px;
}
.form-list {
  margin-bottom: 20px;
}
label {
  margin-right: 10px;
  display: inline-block;
}
input[type="text"] {
  width: 500px;
  height: 40px;
  line-height: 40px;
}
select {
  width: 500px;
  height: 40px;
  line-height: 40px;
}
.dispatch-btn {
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  margin-right: 10px;
  position: relative;
  background: #ccc;
  vertical-align: middle;
}
.dispatch-btn::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 0;
  left: 0;
  background: #fff;
}
.dispatch-btn.active {
  background: #0ea7f8;
}
.dispatch-btn.active::before {
  right: 0;
  left: auto;
}
.mr10 {
  margin-right: 10px;
}
.line {
  display: inline-block;
  vertical-align: middle;
}
textarea {
  vertical-align: top;
}
input[type="radio"],
input[type="checkbox"] {
  margin-right: 5px;
  display: inline-block;
  vertical-align: initial;
}
.btn {
  display: inline-block;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
}
</style>
