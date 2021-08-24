const text = "You know the rules and so do I?";
const title = "Never gonna give you up";

var i = 0;
var ti = 0;

let writing = false;
let titleWriting = false;

function writeText() {

    if (!writing) {
        document.getElementById("paragraph").innerHTML = "";
    };

    if (i < text.length) {
        writing = true;

        document.getElementById("paragraph").innerHTML += text.charAt(i);
        i++
        setTimeout(writeText, 60);
    };

};

function writeTitle() {

    if (!titleWriting) {
        document.getElementById("title").innerHTML = "";
    };

    if (ti < title.length) {

        titleWriting = true;

        document.getElementById("title").textContent += title.charAt(ti);
        ti++
        setTimeout(writeTitle, 70);
    };
};