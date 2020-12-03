// 登出時 清除瀏覽器所占存的所有會員資料cookie
if (!$.cookie('userID')|| $.cookie('userID')=="null" ){
    $('#login').show();
    $('#changePass').hide();
    $('#username').hide();
    $('#logout').hide();
}
else{
    $('#login').hide();
    $('#changePass').show();
    $('#username').show();
    $('#username').text("UserName :"+$.cookie('username'));
    $('#logout').show();
}

//登出功能
function logout(){
    $.removeCookie("userID");
    $.removeCookie("username");
    history.go(0);
}

function votte(){
    if(!$.cookie('userID') || $.cookie('userID') == "null"){
        alert('請先登入會員');
        location.href='/public/login.html';
        return;
    }
    else{
        location.href='/public/vote.html';
    }
}

function aalbum(){
    if(!$.cookie('userID') || $.cookie('userID') == "null"){
        alert('請先登入會員');
        location.href='/public/login.html';
        return;
    }
    else{
        location.href='/public/album.html';
    }
}

function bblog(){
    if(!$.cookie('userID') || $.cookie('userID') == "null"){
        alert('請先登入會員');
        location.href='/public/login.html';
        return;
    }
    else{
        location.href='/public/blog.html';
    }
}