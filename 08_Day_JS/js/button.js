let btn = document.getElementById('btn');
let inc = 0;
btn.onclick = function(event){
    
    inc++;
    btn.innerHTML = inc;
}