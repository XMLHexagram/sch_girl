import component from './component'
import './main.css'

document.body.appendChild(component())

console.log('hello world')
console.log(process.env.NODE_ENV)
