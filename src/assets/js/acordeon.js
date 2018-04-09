

window.onload = function() {
  var acc = document.getElementsByClassName("accordion1");
  var i;

  for (i = 0; i < acc.length; i++) {
    if(i != 0)
      $( acc[i].nextElementSibling ).hide();
      acc[i].addEventListener("click", function() {
          var panel = this.nextElementSibling;
          if (panel.style.display === "block" || panel.style.display === "") {

            $( panel ).hide(400);
            this.classList.remove("active");
          } else {
            $( panel ).show(400);
            this.classList.add("active");
          }
      });
  }
}
