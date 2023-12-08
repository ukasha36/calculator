
//  function for  clear the input
function clearAllDisplay(){
 let input= document.getElementById("display");
 input.value = "";
}

// Displaying the value 
function display(value){
    let input= document.getElementById("display");
    input.value += value ; 
}
//  function for Delete one number 
function clearOneDisplay(){
    let input= document.getElementById("display");
  input.value = input.value.toString().slice(0,-1)

}
function calculate(){

    let input= document.getElementById("display");


     input.value = eval(document.getElementById("display").value);
    

}
input.value = "";