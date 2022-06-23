//Totally ripped off from W3Schools

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.innerHTML[0] === "S")
      this.innerHTML = "Hide" + this.innerHTML.slice(4);
    else this.innerHTML = "Show" + this.innerHTML.slice(4);
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    if (content.classList.contains("curvy")) {
      var _start = new Date().getTime();
      while (200 > new Date().getTime() - _start);
      content.classList.remove("curvy");
    } else content.classList.add("curvy");
  });
}
