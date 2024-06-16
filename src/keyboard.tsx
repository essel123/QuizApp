
var test =  document.getElementById("btn");

test?.addEventListener('click',()=>{
   if (test) {
     test.innerHTML = "Tested";
     
   }
})