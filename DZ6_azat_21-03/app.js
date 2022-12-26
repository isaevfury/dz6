const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const content = document.getElementById("content");
let a = 0;
plus.addEventListener('click',function (){
    a++;
    content.innerHTML = a ;
});
minus.addEventListener('click', function (){
    a--;
    content.innerHTML = a;
})