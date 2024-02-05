function left_btn() {
    document.getElementById('panel-block').style.display = "none";
    var left=document.querySelector(".icon-list");
    left.scrollBy(-1000, 0)
}
function right_btn() {
    document.getElementById('panel-block').style.display = "block";
    var right=document.querySelector(".icon-list");
    right.scrollBy(1000, 0)
}
