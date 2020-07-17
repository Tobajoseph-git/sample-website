// Get the elements with class="sp-column"
var elements = document.getElementsByClassName("sp-column" );

// Declare a loop variable
var i;

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}