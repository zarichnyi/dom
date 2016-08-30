 
            
            document.body.style.background= background;
            document.body.style.fontFamily= font;
            document.body.firstElementChild.style.textAlign= align;
            document.body.children[1].style.background= fon;

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

var background = prompt('фон');
        var font = prompt('шрифт');
var align = prompt('вирівнювання h1');
var fon = prompt('фон параграфа');
var color = prompt('link color');
var div = prompt('color div');
var div1 = prompt('size div');
var div2 = prompt('font-weight div');
var liststyle = prompt('list');
var setlink1 = prompt('setlink1');
var setlink2 = prompt('setlink2');
var setlink3 = prompt('setlink3');