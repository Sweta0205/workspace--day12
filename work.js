console.dir(document)
const changeTitle = function (newTitle) {
    console.log(newTitle, "title parameter")
    let newtitleNode = document.getElementsByTagName('h1')[0]
    console.log(newtitleNode, "title node")
    newtitleNode.innerText = newTitle
}
changeTitle("New Title")
const addClassToTitle = function () {

    let newtitleNode = document.getElementById("heading1")
    newtitleNode.classList.add('myheading')
}


addClassToTitle()

const changePcontent = function () {

    var changePcontent = document.querySelector("#parent").children[0]

    console.log(changePcontent)

    changePcontent.innerText = "sweta"

}
changePcontent()

const changeUrls = function () {
    let changeUrls = document.getElementById("googlelink")
    changeUrls.href = "https://www.google.com/";
}
changeUrls()
const addToTheSecond = function () 
{
    alert("executed")
    let addNode = document.getElementById("secondList")
    let itemToAdd = document.createElement("li")
    itemToAdd.appendChild(document.createTextNode("Four"))
    addNode.appendChild(itemToAdd)
}
addToTheSecond()


const addParagraph = function () {
    let addNode = document.getElementById("parent")
    let p1 = document.createElement("p");
    let textNode = document.createTextNode("This is new content");
    p1.appendChild(textNode);
    addNode.appendChild(p1);
}
addParagraph()
