

jQuery(document).ready(function($){
 var bArray = [];
 //泡のサイズの配列
 var sArray = [6,8,10,12];

 //泡が出る幅の範囲計算
 for (var i = 0; i < $('.event').width(); i++) {
   bArray.push(i);
 }

 //配列からランダムに値を出す関数
 function randomValue(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
 }

 setInterval(function(){
   //泡のサイズをランダムに選定
   var size = randomValue(sArray);

   //body内のランダムな場所に泡を配置
   $('.event').append(
     '<div class="bubble" style="left: ' + randomValue(bArray) + 'px; ' +
     'width: ' + size + 'px; height:' + size + 'px;"></div>'
   );

   //5秒かけて下から上に泡が上るようにし、不透明度を下げる。上まで上った泡は取り除く
   $('.bubble').animate({
     'bottom': '100%',
     'opacity' : '-=0.7'
   }, 5000, function(){
     $(this).remove()
   });

   //0.35秒ごとに泡を発生させる
 }, 350);

});