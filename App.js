// when hovering get node
// if not span add span to all words with mouseover en mouseout
// if span check if has mouseover & mouseout event 
// => if not add funtion
// => if yes add span in  

console.log("test if app works");

setInterval(function () {
    var nodeList = document.querySelectorAll(":hover");
    var node = nodeList.slice(-1)[0];
    console.log(nodeList);
    console.log(node);
    
    if (node != undefined){
        addSpanElementToAllWords(node);
    }
}, 3000)

function addSpanElementToAllWords(node){
    var words = node.innerHTML.split(" ");
    console.log(words);
}
// check if selection is 1 word
// check if word is a hebrew word by checking if all letters in word are of hebrew letters

// do http request and find definition(s) of word
// check through inspect element where the result sit

// show results in a tooltip