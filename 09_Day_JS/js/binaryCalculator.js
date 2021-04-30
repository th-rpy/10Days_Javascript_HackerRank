document.getElementById('btn0').addEventListener('click', function()
{
  document.getElementById('res').insertAdjacentHTML('beforeend', '0');
});

document.getElementById('btn1').addEventListener('click', function()
{
  document.getElementById('res').insertAdjacentHTML('beforeend', '1');
});

function operatorAction(eve)
{
    var btn = eve.target;
    // Add the inner html for the operator buttons into the results field
    document.getElementById('res').insertAdjacentHTML('beforeend', btn.innerHTML);
}
const Dig2Bin  = (a) =>{
    let n = a;
    let binList = []
    while (n!=0){
      binList.unshift(n%2)
      n = parseInt(n/2)
    }
    return binList.reduce((a, b)=> a + b, '')
  }
function Res (eve){
    var btn = eve.target;
    let ab = document.getElementById('res').innerText;
    if (ab.includes('+')){
        let a = ab.split('+')[0];
        let b = ab.split('+')[1];
        document.getElementById('res').innerHTML= Dig2Bin((parseInt(a, 2) + parseInt(b, 2)))
    }
    if (ab.includes('-')){
        let a = ab.split('-')[0];
        let b = ab.split('-')[1];
        document.getElementById('res').innerHTML= Dig2Bin((parseInt(a, 2) - parseInt(b, 2)))
    }
    if (ab.includes('*')){
        let a = ab.split('*')[0];
        let b = ab.split('*')[1];
        document.getElementById('res').innerHTML=  Dig2Bin((parseInt(a, 2) * parseInt(b, 2)))
    }

    if (ab.includes('/')){
        let a = ab.split('/')[0];
        let b = ab.split('/')[1];
        document.getElementById('res').innerHTML= Dig2Bin((parseInt(a, 2) / parseInt(b, 2)))
    }

}

document.getElementById('btnSum').onclick = operatorAction;
document.getElementById('btnMul').onclick = operatorAction;
document.getElementById('btnDiv').onclick = operatorAction;
document.getElementById('btnSub').onclick = operatorAction;
document.getElementById('btnEql').onclick = Res;

document.getElementById('btnClr').onclick = function()
{
    (document.getElementById('res').innerHTML) = "";
};