/*eslint-env browser*/

//STEP 1
const displayAlert = () => {
    alert("I have been clicked");
};

//STEP 2
const btn2 = document.getElementById("button2");
btn2.onclick = () => {
    displayAlert();
};

//STEP 3
const btn3 = document.getElementById("button3");
btn3.addEventListener("click", displayAlert);

//STEP 4
const btn4 = document.getElementById("button4");
btn4.addEventListener("click", () => {
    alert("I have been clicked");
});

//STEP 5
document.addEventListener("DOMContentLoaded", () => {
    const btn5 = document.getElementById("button5");

    btn5.addEventListener("click", () => {
        displayAlert();
    });
});
