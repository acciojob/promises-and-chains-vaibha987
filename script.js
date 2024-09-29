//your JS code here. If required.
const button=document.getElementById("btn")
button.addEventListener('click',(e)=>{
e.preventDefault();
const name= document.getElementById("name").value
const age= document.getElementById("age").value

let promise =new Promise(function (resolve,reject) {
setTimeout(()=>{
if(age>=18){
	resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}, You aren't old enough.`);
      }

},4000)	
})	
promise.then((message)=>{
	alert(message)
}).catch((message)=>{
	alert(message)
})
})