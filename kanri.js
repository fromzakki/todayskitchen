
    let data=localStorage;
    let todaysmenu=data.getItem(Math.floor(Math.random()*data.length))

//クリックしたら関数が働いてmenuappearをつけたり消したりする。

document.getElementById("popup").onclick = function pop(){
    let a = document.getElementById('menuappear')
    a.style.display="block";
}

document.getElementById("close").onclick = function cls(){
    let a = document.getElementById('menuappear')
    a.style.display="none";
}


//append.html
