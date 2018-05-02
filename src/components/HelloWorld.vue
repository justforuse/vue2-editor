<template>
  <div class="hello">
    <editor v-model="content" @init="editorInit" theme="github" lang="html" width="500" height="100"></editor>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      content: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    editor: require('vue2-ace-editor')
  },
  methods: {
    editorInit: function(editor) {
      console.log(editor)
      // var editor = ace.edit('javascript-editor');
      editor.getSession().setMode('ace/mode/html')
      editor.setTheme('ace/theme/github')
      editor.getSession().setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false,
        enableEmmet: true
      })
      require('brace/ext/emmet')
      require('brace/ext/language_tools') //language extension prerequsite...
      // require('brace/mode/html')
      // require('brace/mode/javascript')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
