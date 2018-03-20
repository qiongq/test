<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单 / 易用 / 便捷</h5>
    <translateForm @formSubmit="translateText"></translateForm>
    <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm'
import translateOutput from './components/translateOutput'


export default {
  name: 'App',
  data(){
    return {
      translatedText:''
    }
  },
  components:{
    TranslateForm,
    translateOutput
  },
  methods:{
    translateText:function(text,language){
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180316T055816Z.73dcf81f7258208e.ab7c80f4c56a040b039974d8acb4e8a7dc94eadf&lang=' + language +'&text='+text)
        .then((response) => {
          this.translatedText = response.body.text[0];
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
