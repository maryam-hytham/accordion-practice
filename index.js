// variables
const accordionItem = document.querySelectorAll(".accordion-item");

// event listeners
for (let i = 0; i < accordionItem.length; i++) {
  accordionItem[i].addEventListener("click", function () {
    this.classList.toggle("show");
  });
}
