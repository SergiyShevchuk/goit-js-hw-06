const form = document.querySelector('.login-form');
const input = document.querySelector('.js-input')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    event.preventDefault();

    const meaningEl = event.currentTarget.elements;

    const email = meaningEl.email.value;
    const password = meaningEl.password.value;

    if(
        form.elements.email.value === '' || form.elements.password.value === '') 
        {
        return alert('Не все поля заполнены !!!!!')
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);

    form.reset();

};
