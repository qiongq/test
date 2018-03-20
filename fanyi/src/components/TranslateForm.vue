<template>
  <div class="row" id="translateForm">
  	<div class="col-md-6 col-md-offset-3">
  		<form id="transForm" class="well form-inline" @submit="formSubmit">
	    	<input class="form-control" type="text" v-model="textToTranslate" placeholder="输入需要翻译的内容" />
	    	<select class="form-control" v-model="language">
	    		<option value="en">english</option>
	    		<option value="ar">Arabic</option>
	    		<option value="be">Belarusian</option>
	    		<option value="he">Hebrew</option>
	    		<option value="lo">Laotian</option>
	    	</select>
	    	<input class="btn btn-primary" type="submit" value="翻译" />
	    </form>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data(){
  	return {
  		textToTranslate:'',
  		language:''
  	}
  },
  methods:{
  	formSubmit:function(e){
  		this.$emit("formSubmit",this.textToTranslate,this.language);
  		e.preventDefault();
  	}
  },
  created:function(){
    this.language = 'en';
  }
}
</script>

<style>
#transForm{
	border: 1px solid #ccc;
	border-radius: 10px;
	text-align: center;
}

</style>
