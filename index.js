i= 0;
function changeindex() {
    i++;
    var obj = document.all && document.all("body") || document.getElementById && document.getElementById("body");
    if (i % 2 == 1) {
        if (obj) {
            obj.style.color = "blue";
            obj.style.backgroundColor = "#ff7f7f";
            obj.style.backgroundImage = 'url("./red.gif")';
            obj.style.fontWeight = "normal";
            obj.style.fontStyle = "oblique"
            obj.style.fontSize = "small";
        }
    }
    if (i % 2 == 0) {
        if (obj) {
            obj.style.color = "green";
            obj.style.backgroundColor = "#7ff0ff";
            obj.style.backgroundImage = 'url("./blue.gif")';
            obj.style.fontWeight = "bold";
            obj.style.fontStyle = "normal"
            obj.style.fontSize = "large";
        }
    }
}