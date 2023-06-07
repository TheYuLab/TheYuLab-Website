var coll = document.getElementsByClassName("dropdown-toggle");
var i;

for (i = 0; i < coll.length; i++) {
    var content = coll[i].nextElementSibling;
    content.style.display = "block";
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

