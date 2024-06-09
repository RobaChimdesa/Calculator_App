let inputbtn = document.getElementById('inputbox');
let buttoninput = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttoninput);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        let result = new Function('return ' + string)();
        inputbtn.value = result;
      } catch (error) {
        inputbtn.value = "Error";
      }
    } else if (e.target.innerHTML == 'C') {
      string = "";
      inputbtn.value = string;
    } else {
      string += e.target.innerHTML;
      inputbtn.value = string;
    }
  });
});
