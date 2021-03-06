document.addEventListener('DOMContentLoaded', function () {
  let countDisplay = document.querySelector('.count-display');
  let incrementButton = document.querySelector('.increment-button');

  function incrementCount() {
    let currentCount = parseInt(countDisplay.textContent);
    countDisplay.textContent = currentCount + 1;
  }

  incrementButton.addEventListener('click', incrementCount);

  console.log(console === window.console);
  console.log(Math === window.Math);
  console.log(parseInt === window.parseInt);
  console.log(document === window.document);
})

// next page
// document.addEventListener('DOMContentLoaded', function () {
//   let colorInput = document.querySelector('.color-input');
//   let colorBlock = document.querySelector('.color-block');
//   let clearButton = document.querySelector('.clear-color-button');
//
//   function paintBlock() {
//     colorBlock.style.backgroundColor = colorInput.value;
//   }
//   paintBlock();
//
//   colorInput.addEventListener('input', paintBlock);
//
//   clearButton.addEventListener('click', function () {
//     colorBlock.style.removeProperty('background-color');
//     colorInput.value = '';
//   });
// })
