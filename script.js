document.getElementById('btn').onclick = function (){
 background = prompt('фон');
        var font = prompt('шрифт');
 align = prompt('вирівнювання h1');
 fon = prompt('фон параграфа');
 color = prompt('link color');
 div = prompt('color div');
 div1 = prompt('size div');
 div2 = prompt('font-weight div');
 liststyle = prompt('list');
 setlink1 = prompt('setlink1');
 setlink2 = prompt('setlink2');
 setlink3 = prompt('setlink3');

            document.body.style.background = background;
            document.body.style.fontFamily = font;
            document.body.firstElementChild.style.textAlign = align;
            document.body.children[1].style.background = fon;

            var child = document.getElementsByTagName("a");

            for(var i = 0; i<child.length;i++ ){
                child[i].style.color= color;
            }
            document.body.children[2].style.color= div;
            document.body.children[2].style.fontSize= div1;
            document.body.children[2].style.fontWeight= div2;
            document.body.children[2].children[0].style.listStyleType= liststyle;
        document.body.children[1].children[0].innerHTML = setlink1;
        document.body.children[1].children[0].href ='http://' + setlink1;
        document.body.children[1].children[0].target = '_blank';
        document.body.children[1].children[1].innerHTML = setlink2;
        document.body.children[1].children[1].href ='http://' + setlink2;
        document.body.children[1].children[1].target = '_blank';
        document.body.children[1].children[2].innerHTML = setlink3;
        document.body.children[1].children[2].href ='http://' + setlink3;
        document.body.children[1].children[2].target = '_blank';
}