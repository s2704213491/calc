function btnclick(val){
    document.getElementById("screen").value+=val
}

function clearbutton(){
    document.getElementById("screen").value=""
}
function equalbtn(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result   
}
