import { users } from './users.js'

// Genera las filas de la tabla para mostrar los usuarios
function htmlRowsUsers() {
    let idt = 0
    const html = users.map(function(user) {
        return `<tr>
                    <td>${idt += 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>${user.gender == 'female' ? 'femenimo' : 'masculino'}</td>
                    <td>
                        <button class="btn btn-danger" onclick="deleteUser(${idt})">Eliminar</button>
                    </td>
                </tr>`
    })
    return html.join("")
}
// devuelve el body 
function getTablebody() {
    return document.getElementById('table-body')
}
// Imprime los usuarios en el documento
function printUsers() {
    const htmlDataUsers = htmlRowsUsers()
    const tableBody = getTablebody()
    tableBody.innerHTML = htmlDataUsers
}
// Obtiene los datos del nuevo usuario
function getNewUser () {
    const inputName = document.getElementById('input-name')
    const inputEmail = document.getElementById('input-email')
    const inputAge = document.getElementById('input-age')
    const inputGender = document.getElementById('select-age')
    const newUser = {
        id: users.length + 1, // longitud de los usuarios + 1 agrega los id
        name: inputName.value,
        email: inputEmail.value,
        age: inputAge.value,
        gender: inputGender.value
    }
    return newUser
}
// Imprime los datos de un usuario nuevo en el documento
function addUser() {
    const newUser = getNewUser()
    users.unshift(newUser)
    // orderIDs()
    printUsers()
}

// Asigna el id correcto a cada elemento
// function orderIDs() {
//     users.forEach(function(idt) {
//         user.id = idt
//     })
// }

// Llamadas al cargar la página
printUsers()
// Volvemos la función addUser parte del objeto window
window.addUser = addUser


// Hacer que funcione el botón eliminar

function deleteUser(id){
    users.splice(id-1, 1) //recorre los usuarios y elimina el indice con el parametro
    printUsers() // pinta los usuarios
}
window.deleteUser = deleteUser




function filter() {
    // alert('Agregamos un filtro')
// obtenemos el selector y el contenido del selector
    const Selected = document.getElementById(`select-filter`).value

          
          console.log(Selected)
//Filtro mi codigo por medio de la respuesta de mi selector
    if(Selected == `female`) {
        let female_gender = users.filter((users) => users.gender == "female");
        
        // Pintmaos mujeres
        console.log(female_gender)
//CON ESTAS LINEAS SE FILTRAN LOS DATOS
        function CreateRow() {
            const tableB = document.querySelector(`tbody`)
            tableB.innerHTML = ``
    
            for(let i = 0; i<female_gender.length; i++) {
                tableB.innerHTML += printFemale(female_gender[i])
            }
        }
        function printFemale(user) {
            return `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>${user.gender == 'female' ? 'femenimo' : 'masculino'}</td>
            <td>
                <button class="btn btn-danger">Eliminar</button>
            </td>
        </tr>`
        }
        CreateRow()
        
    }
    else if(Selected ==`academlo`) {

        let mails = users.filter(function(user) {  
            return user.email.includes("academlo.com") 
          })
          console.log(mails) 

          function CreateRow() {
            const tableB = document.querySelector(`tbody`)
            tableB.innerHTML = ``
    
            for(let i = 0; i<mails.length; i++) {
                tableB.innerHTML += printFemale(mails[i])
            }
        }
        function printFemale(user) {
            return `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>${user.gender == 'female' ? 'femenimo' : 'masculino'}</td>
            <td>
                <button class="btn btn-danger">Eliminar</button>
            </td>
        </tr>`
        }
        CreateRow()

    }
    else if (Selected == `sort`) {
        let A_Order = users.sort((aname, bname) => aname.name.localeCompare(bname.name))
    
        console.log(A_Order)
        function CreateRow() {
            const tableB = document.querySelector(`tbody`)
            tableB.innerHTML = ``
    
            for(let i = 0; i<A_Order.length; i++) {
                tableB.innerHTML += printFemale(A_Order[i])
            }
        }
        function printFemale(user) {
            return `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>${user.gender == 'female' ? 'femenimo' : 'masculino'}</td>
            <td>
                <button class="btn btn-danger">Eliminar</button>
            </td>
        </tr>`
        }
        CreateRow()
    }
    

    

    }
    window.filter = filter
    


    
    // // 1- Obtener el elemento
    // const BodyHTML = document.getElementsByTagName(`body`)
    // const Body1 = BodyHTML[0]
    // //2- Armar el HTML
    // //3 Meter los datos
    // // Body1.innerHTML = `<div>Hola soy el contenido</div>`
    
    // for(let i = 0; i < female_gender.length; i++) {
    //     Body1.innerHTML += `<div>${female_gender[i]}</div>`}
    
 


//Ejercicios de JS para practicar//

// let increase = 0
// for(let i=1;i<=100;i++) {
//     if (i % 11===0) {
//     console.log(i)
//     increase++
//     }
//     if(increase >= 6) break
// }



// const saludar = (persona = users.name,sexo = users.gender) => {
//     let saludo = sexo ===`m`
//                 ? `Bienvenido`
//                 : `Bienvenida`
//     return `${saludo} a EDteam, ${persona}`
// }

// console.log(saludar())
// console.log(saludar(`Lucia`, `f`))


// const DoSomtg = x => y => x * y

// const a = DoSomtg(2)(4)
// const c = DoSomtg(1)
// console.log(DoSomtg(a)(c(3)))
 
//----------Closures-----------
// function aumentar () {
//     let number = 0
//     return function() {
//         number++
//         console.log(number)
//     }
// }

// const incrementar = aumentar()
// incrementar()
// incrementar()
// incrementar()
// incrementar()


// let mails = [`jesus@gmail.com`,`hector@gmail.com`,`alex@gmail.com`]
// for(let i=0;i<mails.length;i++){
// let getmails = mails
// console.log(getmails)

// const BodyHTML = document.getElementById('mailsdiv')
// let content = getmails
// BodyHTML.innerHTML = content
// }