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

function Res (eve){
    var btn = eve.target;
    document.getElementById('res').innerHTML= '10';

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