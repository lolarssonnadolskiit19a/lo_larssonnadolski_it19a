let textArea =document.querySelector("#textArea")
let countWordBtn = document.querySelector("#countWordBtn")
let p_displatWords =document.querySelector("#displayWords")

countWordBtn.addEventListner("click" , countwords)

function countwords (){
    console.log ("kör funktion countWords")
    let text = textArea.value
    console.log(text)
let words = text.split(" ")
console.log(words.length)
p_displayWords.innerHTML = words.length

}