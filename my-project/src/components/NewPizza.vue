<template>
    <form action="">
        <h3 class="text-muted my-5">添加新的Pizza</h3>
        <div class="form-group row">
            <label for="" class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.name"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
            </div>
        </div>
        <p><strong></strong></p>
    </form>
</template>

<script>
export default {
  data () {
      return {
          newPizza:{}
      }
  }
}
</script>

