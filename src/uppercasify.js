document.body.style.textTransform = "uppercase";

document.querySelectorAll("input").forEach(function(element){
  element.value = element.value.toLocaleUpperCase()
  element.addEventListener("input", function(event) {
    event.target.value = event.target.value.toLocaleUpperCase()
  })
})
