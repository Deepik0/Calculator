let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = 'Error';
            }
        } else if (buttonText === 'C') {
            string = "";
            document.querySelector('input').value = '';
        } else {
            string += buttonText;
            document.querySelector('input').value = string;
        }
    });
});
