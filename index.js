console.log("This Is A Drag And Drop Activity");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", (e) => {

    console.log("DragStart Has Beeen Trigggered");

    e.target.className += ' hold'

    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});




imgBox.addEventListener("dragend", (e) => {
    e.target.className = 'imgBox';

    console.log("DragEnd Has Beeen Trigggered");

});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("DragEnter Has Beeen Trigggered");

    });
}


for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragenter', (e) => {
        console.log("DragEnter Has Beeen Trigggered");
        e.target.className +=' dashed';

    });

}
for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragleave', (e) => {
        console.log("DragLeave Has Beeen Trigggered");
        e.target.className ='whiteBox';

    })
}

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('drop', (e) => {
        console.log("Drop Has Beeen Trigggered");
        e.target.append(imgBox);

    })
}

