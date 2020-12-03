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

function album(){
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