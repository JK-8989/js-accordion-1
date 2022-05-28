const accordionItemHeader = document.querySelectorAll('.accordion-item-header');
console.log(accordionItemHeader)

for (let i = 0; i < accordionItemHeader.length; i++){
  accordionItemHeader[i].addEventListener('click', ()=>{
    accordionItemHeader[i].classList.toggle('active');
  });
};
