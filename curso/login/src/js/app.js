
const input = document.querySelector('#email')

input.addEventListener("keydown", function(event) {
    //
    const tam = input?.value.length;
    if(tam > 10) {
        document.querySelector('#alerta').innerHTML = `NO PUEDEN SER MÁS DE 10 CARACTERES` 
    }
    else {
        document.querySelector('#alerta').innerHTML = ``
    }
});

const pass = document.querySelector('#password')
const button = document.querySelector('#btn-i')

button.addEventListener("click", () => {
    if(pass.type === "password")
        pass.type = "text"
    else if(pass.type === "text")
        pass.type = "password"

})

pass.onpaste = (event) => {
    event.preventDefault();
}

pass.oncopy = (event) => {
    event.preventDefault();
}
