const inpObj = document.getElementById('id1');
const button = document.getElementById('btn');
button.addEventListener('click', function () {
    // validity property
    if (!inpObj.checkValidity()) {
        document.getElementById('demo').innerHTML = inpObj.validationMessage;
    }
    else {
        document.getElementById('demo').innerHTML = 'Input Ok';
    }
    // rangeOverflow property
    let text;
    if(inpObj.validity.rangeOverflow){
        text = "Value is Too Large"
    }
    else{
        text = "Value is Ok"
    }
    document.getElementById("demo1").innerHTML = text;
});


