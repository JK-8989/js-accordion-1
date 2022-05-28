const accordionItemHeader = document.querySelectorAll(".accordion-item-header");
const toggleBtn = document.querySelector("i");

for (let i = 0; i < accordionItemHeader.length; i++) {
  accordionItemHeader[i].addEventListener("click", () => {
    accordionItemHeader[i].classList.toggle("active");

    const contentBody = accordionItemHeader[i].nextElementSibling;

    if (accordionItemHeader[i].classList.contains("active")) {
      contentBody.style.maxHeight = contentBody.scrollHeight + "px";
    } else {
      contentBody.style.maxHeight = 0;
    }

    toggleBtn.addEventListener("click", () => {
      contentBody.style.maxHeight = 0;

      accordionItemHeader[i].classList.remove("active");

    });
  });
}
