

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("v").textContent = "v1.3";
});

////////////////////////////////

var flip = false;

var str = "";
var pos = 0;
var invert = false;

var name1 = "jedrychowski ninja";
var name2 = "sunne.tech";

function loop() {
    var text = flip ? name1 : name2;

    if (pos > text.length) {
        invert = true;
    } else if (pos < 0) {
        if (invert) {
            flip = !flip;
            text = flip ? name1 : name2;

            pos = 0;
        }

        invert = false;
    }

    str = text.substring(0, pos);
    pos += (invert ? -1 : 1);

    if (isEven(str.length))
        str = `${str}_`;

    document.getElementsByTagName('title')[0].innerHTML = str;
}

function isEven(value) {
    return !(value % 2)
}

setInterval(loop, 333);

/////////////////////////////////////////////////////////////
