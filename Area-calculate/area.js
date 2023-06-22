const result = document.querySelector("#result");
const store = document.querySelector("#store");
const clear = document.querySelector("#clear");
const width = document.querySelector("#width");
const breadth = document.querySelector("#breadth");
// const calculate = document.querySelector("#calculate");
const calculate = document.getElementById("calculate");
const storelist = document.querySelector("#storelist");

//Testing  event.stopPropagation
// var body = document.querySelector("body");
//  body.addEventListener("click",(event)=>{
//      body.style.backgroundColor = "red";
     
//  })



// calculate.addEventListener("click",function(){
//     const area = width.value * breadth.value;
//     result.innerHTML = area;
// })
calculate.onclick = function(event){
    // event.stopPropagation();

    const area = width.value * breadth.value;
    result.innerText = `w:${width.value}ft * b:${breadth.value}ft = ${area}sqft`;
    width.value= breadth.value = null;

}

store.onclick = ()=>{
    storelist.innerHTML +=`<li>${result.innerText}</li>`
    result.innerText = null;
    width.value= breadth.value = null;

}

clear.onclick =()=>{
    result.innerText = null;
    width.value= breadth.value = null;


}

