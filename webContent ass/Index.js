const colors = ['red', 'blue', 'green'];

// console.log("Box one: ", box_1);
// console.log("Colors: ", colors);

function addABoxIntoTheDOM() {
    const div = document.createElement("div");
    div.id = "box_1";
    div.classList.add("box");
    const body = document.querySelector("body");
    body.appendChild(div);
}
addABoxIntoTheDOM();


let numberOfClicks = 0;

function anyNameToThis() {
    const box_1 = document.querySelector("#box_1");

    numberOfClicks += 1;
    box_1.style.backgroundColor = `rgb(0,0,${numberOfClicks})`;
    box_1.style.transform = `translateY(-${numberOfClicks}px)`;
    if (numberOfClicks == 255) {
        document.body.removeChild(box_1);
    }
}

box_1.addEventListener("click", anyNameToThis);