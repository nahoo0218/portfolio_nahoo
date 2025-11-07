$(function () {
  

// フォームのバリデーション
$(".alert").hide();
$("input[type='submit']").click(function(){

    var sendFlag=true;
if(!$(".name").val()){
    $("#nameSection .alert").show();
    sendFlag=false;
}else{
     $("#nameSection .alert").hide();
}
if(!$(".kana").val()){
    $("#name2Section .alert").show();
       sendFlag=false;
}else{
     $("#name2Section .alert").hide();
}

if(!$(".adress").val()){
    $("#adressSection .alert").show();
       sendFlag=false;
}else{
     $("#adressSection .alert").hide();
}

if(!$(".phone").val()){
    $("#phoneSection .alert").show();
       sendFlag=false;
}else{
     $("#phoneSection .alert").hide();
}


if(!$(".content").val()){
    $("#contentSection .alert").show();
       sendFlag=false;
}else{
     $("#contentSection .alert").hide();
}


// ラジオボタンのチェック
var chkboxChk=$('input[name="checkbox"]:checked').length;
// 選択されたラジオボタンの数を調べる
if(chkboxChk==0){
    // 選択がない：アラート文を表示
    $("#agreeSection .alert").show();
    sendFlag=false;// 入力がなければfalseに
}else{
    // 選択がある：アラート文を非表示
    $("#agreeSection .alert").hide();
}

if(sendFlag==false){
return false;
}


});
});
