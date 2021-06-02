// getElementyById()

const element = document.getElementById('blog-title')
console.log(element)

// getElementsByClassName()
const elementClass = document.getElementsByClassName('one')
console.log(elementClass)

// getElementsByTagName()

const elementTag = document.getElementsByTagName('meta')
console.log(elementTag)

// querySelector() pegar o primeiro parâmetro que achar 

const elementQuery = document.querySelector('[src]')
console.log(elementQuery)

// guerySelectorAll() todos que tem os atributos - lista de nós

const elementsSelector = document.querySelectorAll('#blog-title') // ('.one) - class
console.log(elementsSelector)

// Qual usar?

// getElementById (element)
// getElementByClassName (HTML collection)
// getElementByTagName (HTML collection)
// querySelector (element)
// querySelectorAll (Nodelist)