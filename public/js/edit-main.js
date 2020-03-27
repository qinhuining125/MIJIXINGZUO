var E = window.wangEditor
  var editor = new E('#editor')
  editor.customConfig.uploadImgShowBase64 = true ;
  editor.customConfig.uploadImgMaxLength = 3;
  editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024;
  // editor.customConfig.debug = true;
  editor.create()
  // editor.txt.html('<%= post.content %>')
$('#submit').mouseenter(function(){
  // alert(editor.txt.html())
  var info = editor.txt.html();
  console.log(info)
  $('#info').val(info);
})  