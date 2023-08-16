// bold
document.getElementById('btn-bold').addEventListener('click', function () {
    const inputText = document.getElementById('input-field');
    if (inputText.style.fontWeight === 'bold') {
        inputText.style.fontWeight = 'normal';
    } else {
        inputText.style.fontWeight = 'bold';
    }
})
// italic
document.getElementById('btn-italic').addEventListener('click', function () {
    const inputText = document.getElementById('input-field');
    if (inputText.style.fontStyle === 'italic') {
        inputText.style.fontStyle = 'normal';
    } else {
        inputText.style.fontStyle = 'italic';
    }
})
// underline
document.getElementById('btn-underline').addEventListener('click', function () {
    const inputText = document.getElementById('input-field');
    if (inputText.style.textDecoration === 'underline') {
        inputText.style.textDecoration = 'none';
    } else {
        inputText.style.textDecoration = 'underline';
    }
})
// left
document.getElementById('btn-left').addEventListener('click', function () {
    const inputText = document.getElementById('input-field');
    if (inputText.style.textAlign === 'left') {
        inputText.style.textAlign = '';
    } else {
        inputText.style.textAlign = 'left';
    }
})
// center
document.getElementById('btn-center').addEventListener('click', function () {
    const inputText = document.getElementById('input-field');
    if (inputText.style.textAlign === 'center') {
        inputText.style.textAlign = '';
    } else {
        inputText.style.textAlign = 'center';
    }
})
// right
document.getElementById('btn-right').addEventListener('click', function () {
    const inputText = document.getElementById('input-field');
    if (inputText.style.textAlign === 'right') {
        inputText.style.textAlign = '';
    } else {
        inputText.style.textAlign = 'right';
    }
})
// justify
document.getElementById('btn-justify').addEventListener('click', function () {
    const inputText = document.getElementById('input-field');
    if (inputText.style.textAlign === 'justify') {
        inputText.style.textAlign = '';
    } else {
        inputText.style.textAlign = 'justify';
    }
})
// text-size
document.getElementById('text-size').addEventListener('input', function () {
    const inputText = document.getElementById('input-field');

    const textSizeInput = document.getElementById('text-size');    
    const fontSize = textSizeInput.value + 'px';
    inputText.style.fontSize = fontSize;
})
// text-color
document.getElementById('text-color').addEventListener('input', function () {
    const inputText = document.getElementById('input-field');

    const textColorInput = document.getElementById('text-color');
    const textColor = textColorInput.value;
    inputText.style.color = textColor;
})