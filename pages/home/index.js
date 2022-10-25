const inputsColor = [...document.querySelectorAll("input[type=color]")];

let colors = [

];
let fontSizes = []
colors.forEach((style, index) => {
  inputsColor[index].value = style;
});


function createColor(){
  colors = [];
  let colorString = ""
  inputsColor.forEach((input)=>{
    
      let valueColor = `--color${input.id}: ${input.value};`
      colors.push(valueColor)
      
      
  })
  colors.forEach((e)=>{
    let index = colors.indexOf(e)
   colorString += `${colors[index]}
   `;
  })
  console.log(colorString)
      return colorString;
 
}

function buttonCopy(){
  const btn = document.querySelector(".button-copy-colors");
  btn.addEventListener("click",(e)=>{
    e.preventDefault()
    const colorPick = createColor()
    const fontsInput = document.querySelector("#fontScale");
    const fontPick = createFonts(fontsInput.value);
    navigator.clipboard.writeText(`${colorPick}${fontPick}`)
    console.log(fontPick);
   
      alert("Variaveis copiadas")
    
    
  })
}

function createFonts(string = ""){
  
  let stringList = string.split(",");
  console.log(stringList)
  const fontsInput = document.querySelector("#fontScale");
  let valueFont = "";
  stringList.forEach((e)=>{
    let index = stringList.indexOf(e);
    console.log(index)
    valueFont += `--font-size-${index+1}: ${e/16}rem;
    `;

  });
  console.log(valueFont)
  return valueFont;
}
buttonCopy()
