// Maminpulando conteúdo
// textContent // altera o texto do elemento
// const element = document.querySelector('h1')
// element.textContent += " Olá Devs!"
// console.log(element.textContent)


// Manipulando conteúdo
// innerText - texto interno
//const element= document.querySelector('h1')
//element.innerText = "Olá Devs"


// Manipulando conteúdo
// innerHTML conteúdo html interno
//const element= document.querySelector('h1')
//element.innerHTML ="Olá Devs! <small>!!!</small>"


// Manipulando conteúdo
// value
//const element = document.querySelector('input')
//console.log(element.value)
//element.value="outro valor"



// Manipulando elementos
// Atributos
/*
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID= document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class','bg header')
*/

// Alterando estilos
//const element = document.querySelector('body')
//console.log(element.style.backgroundColor = "#f9f3D2")


//Alterando estilos
// classList
/*
const element = document.querySelector('body')
element.classList.add('active','green')
console.log(element.classList)
element.classList.remove('active')
//element.classList.toggle('active')
console.log(element.classList)
*/


// Navegando pelos elementos
// parentNode parentElement // pega os pais da árvore
//const body = document.querySelector('body')
//console.log(body.parentNode)



// Navegando pelos elementos
// childNodes (pega todas as tags filhas inclusive as linha vazias) children ((pega todas as tags filhas, mas elimina as linha vazias) 
//const el = document.querySelector('body')
//console.log(el.children)
//fistChild (leva em consideração o espaço vazio) firstElement (não leva em consideração o espaço vazio)
//console.log(el.firstChild)
//lastChild lastElement (mesma lógica do fistChild)


// Navegando pelos elementos irmãos
// nextSibling nextElementSibling
// previousSibling previousElementSibling
/*
const el= document.querySelector('body script')
console.log(el.nextElementSibling)
*/

// Criando e adicionando elementos na página
/*
// creatElement
const div = document.createElement('div')
div.innerText = "Olá Devs"
// append prenpend
const body = document.querySelector('body')
body.append(div) // adiciona depois
body.prepend(div) // adiciona antes
*/
/*
const div = document.createElement('div')
div.innerText = "Olá Devs"
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)
// insertAftrs
const div = document.createElement('div')
div.innerText = "Olá Devs"
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)
*/


// Eventos

// com on na tag html ex: onclik="print()"
/*
function print(){
    console.log('print')
}
*/

//teclado
/*

const input = document.querySelector('input')
input.onkeypress = function (){
    console.log('rodei')
}
*/

/*
const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print(){
    console.log('print')
}
*/

/*
const h1 = document.querySelector('h1')

h1.addEventListener('click', print) //adiciona evento no h1

function print(){
    console.log('print')
}

h1.addEventListener('click', function(){
    console.log('outro momento')
})
*/

// Eventos
// argumento event

const input = document.querySelector('input')

input.onkeydown = function(event){
    console.log(event.currentTarget.value)
}

