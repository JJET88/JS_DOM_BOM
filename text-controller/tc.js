const input = document.querySelector("#input");
const output = document.querySelector("#output");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontsize = document.querySelector("#fontsize");
const fontfamily = document.querySelector("#fontfamily");
// 


const fonts =["IBM Plex Serif","Josefin Sans","Kablammo","Roboto Condensed","Tilt Prism"];


for(x of fonts){
    console.log(new Option(x))
    fontfamily.append(new Option(x))
}

// input to output => count
input.addEventListener("keyup",(event) =>{
    output.innerText = input.value;
    // output.innerText = event.target.value;
    const displayText = output.innerText;
    count.innerText = displayText.length;
})

// Select color
color.addEventListener("change",(event)=>{
    output.style.color = event.target.value;

});

// font-size changing
fontsize.addEventListener("change",(event)=>{
    console.dir(fontsize.value)
    output.style.fontSize = event.target.value +"px";

})

// changing fontfamily
fontfamily.addEventListener("change",()=>{
   output.style.fontFamily = fontfamily.value
   console.log(output.style.fontFamily)
  
})