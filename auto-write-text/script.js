const text = "Auto Generated Text..."

let index = 0;

function generateText(){
    document.body.innerText = text.slice(0,index);

    index++;

    if(index > text.length){
        index = 0;
    }
}

setInterval(generateText,100)