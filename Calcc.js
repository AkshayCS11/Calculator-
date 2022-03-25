function display(val)
{ 
    if(val=='c')
{
    document.getElementById("output").value=""
}
else
document.getElementById("output").value += val
// document.getElementById("output").value= document.getElementById("output").value + val


}

function equalto()
{
var text=document.getElementById("output").value
var result=eval(text)
document.getElementById("output").value=result

}