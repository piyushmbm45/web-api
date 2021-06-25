const inpObj = document.getElementById('id1');
const button = document.getElementById('btn');
button.addEventListener('click', function () {
    if (!inpObj.checkValidity()) {
        document.getElementById('demo').innerHTML = inpObj.validationMessage;
    }
    else {
        document.getElementById('demo').innerHTML = 'Input Ok';
    }
});


