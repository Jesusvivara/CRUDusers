import { users } from './users.js'

// Ejercicios:
// Obtener todos los correos de los usuarios y crear función que simule envío de email
// Obtener los usuarios menores de 18 años
// Obtener los usuarios entre 20 y  50 años
// Agregar una propiedad nueva que sea fullname y contenga el nombre y el apellido
// Encontrar a todos los hombres que sean mayores a 30 años
// Encontrar a todos los usuarios que sean mujeres o que sean mayores a 20 años
// Encotrar al usuario con el correo georg@academlo.com

// https://www.w3schools.com/jsref/jsref_forEach.asp
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.w3schools.com/jsref/jsref_filter.asp
// https://www.w3schools.com/jsref/jsref_find.asp


// function getEmails() {
//     const emails = users.map(function(user) {
//         return user.email
//     })
//     return emails
// }

// function sendEmail(emails) {
//     for(let i = 0; i < emails.length; i++) {
//         console.log(`Enviamos un correo a ${emails[i]}`)
//     }
// }

// const emails = getEmails()
// console.log(emails)
// sendEmail(emails)



// function menores() {
//     return users.filter(function(user) {
//         return user.age > 19 && user.age < 51
//         // return user.age < 18 
//     })
// }
// console.log(menores())

// function addFullname() {
//     users.forEach(function(user) {
//         user.fullname = `${user.name} ${user.lastname}`
//     })
//     console.log(users)
// }

// addFullname()


// function getWomen() {
//     return users.filter(function(user) {
//         return user.gender == 'female' || user.age > 20
//     })
// }
// console.log(getWomen())

// function findGeorge() {
//     return users.find(function(user) {
//         return user.email == 'georg@academlo.com'
//     })
// }

// console.log(findGeorge())