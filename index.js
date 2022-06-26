document.getElementsByClassName('pagination')[0].childNodes[0].click()
const Max = document.getElementsByClassName('pagination')[0].childNodes.length
let images = []
for (let i = 1; i < Max + 1; i++) {
    document.getElementById('btnHintMovie').style.display = 'block'
    document.getElementById('btnHintMovie').click()
    images.push(document.getElementsByTagName('img')[1].src)
    document.getElementsByClassName('btn-close')[1].click()
    if (Max !== i) {
        document.getElementsByClassName('btn-next')[0].click()
    }
}
document.body.onload = addImage;
function addImage () {
    let newDiv = document.createElement("div");
    for (let i = 0; i < Max; i++) {
        const img = document.createElement('img')
        img.src = images[i]
        img.style.width = "50%"
        newDiv.append(img);
    }
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}
addImage()
document.getElementsByClassName('pagination')[0].childNodes[0].click()
