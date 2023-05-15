////////////Get input and parent /////////////////
var input = document.getElementById("myInput")
var parentWork = document.getElementById("parent")
function add(){

    if(!input.value || !input.value.trim()){
        return
    }
    ///////////CreateElement////////////
    /////////create div element///////////
    var divElement = document.createElement("div") 
    divElement.className = "Work"
    /////////create p element///////////
    var pElement = document.createElement("p")
    var pTxt = document.createTextNode(input.value)
    pElement.appendChild(pTxt)
    /////////create span element///////////
    var spanElement = document.createElement("span") 
    spanElement.className = "edit"
    spanElement.innerHTML ="edit"
    spanElement.setAttribute("onclick","edt(this)")
    /////////create span1 element///////////
    var spanElementsec = document.createElement("span") 
    spanElementsec.className = "delete"
    spanElementsec.innerHTML = "DELETE"
    spanElementsec.setAttribute("onclick","delet(this)")
  //////////////appendElment////////////
    divElement.appendChild(pElement)
    divElement.appendChild(spanElement)
    divElement.appendChild(spanElementsec)
    parentWork.appendChild(divElement)
    input.value = ""
    
}
function cler(){
  parentWork.innerHTML = ""
}
function delet(val){
    if(val){
       val.parentNode.remove()
    }
}
function edt(edi){
     var value = edi.previousElementSibling.innerHTML
     var newValue = prompt("Edit:",value)
     if(!newValue || !newValue.trim()){
        return
     }
     edi.previousElementSibling.innerHTML = newValue

    
    
}