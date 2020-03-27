var E = window.wangEditor
var editor = new E('#editor')
editor.create()

$('#submit').mouseenter(function(){
// alert(editor.txt.html())
var info = editor.txt.html();
console.log(info)
$('#info').val(info);
})  
