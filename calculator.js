let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        let result = new Function('return ' + string)();
        input.value = result;
      } catch (error) {
        input.value = "Error";
      }
    } else if (e.target.innerHTML == 'C') {
      string = "";
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
