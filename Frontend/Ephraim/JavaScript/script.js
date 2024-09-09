////....................gestion de mot de passe ..................////

let CloseEyes = document.getElementById("eyes")
console.log(CloseEyes)
let OpenEyes = document.getElementById("eyes2")
console.log(OpenEyes)
let password = document.querySelector('input[type=password]')
console.log(password)
CloseEyes.addEventListener("click",()=>{
    CloseEyes.style.display='none'
    OpenEyes.style.display='block'
    password.type='text'
})
OpenEyes.addEventListener("click",()=>{
    CloseEyes.style.display='block'
    OpenEyes.style.display='none'
    password.type='password'
})


let step1 = document.getElementById("etp1")
console.log(step1)

let step2 = document.getElementById("etp2")
console.log(step2)

let step3 = document.getElementById("etp3")
console.log(step3)

let  triangle1 = document.getElementById("triangle1")
console.log(triangle1)
let  triangle2 = document.getElementById("triangle2")
console.log(triangle2)
let  triangle3 = document.getElementById("triangle3")
console.log(triangle3)
let  triangle4 = document.getElementById("triangle4")
console.log(triangle4)

let section = document.getElementById("part1")
console.log(section)
let sectionTwo = document.getElementById("part2")
console.log(sectionTwo)
//recuperer le champ de saisie de nom
let inputName = document.getElementById("name")
console.log(inputName)
//recuperer le champ de saisie des prenoms
let inputPrenoms = document.getElementById("prenom")
console.log(inputPrenoms)
//recuperer le champ de saisie des numeros de cartes
let inputCartes = document.getElementById("numCarte")
console.log(inputCartes)

let suivant = document.getElementById("bouton")
console.log(suivant)
let error = document.getElementById("error")
console.log(error)
//recuperer les images de validations et de rejet de l'entrée des noms
let exclamation = document.getElementById("exclamation")
let validation = document.getElementById("validation")
//recuperer les images de validations et de rejet de l'entrée des prenoms
let exclamation2 = document.getElementById("exclamation2")
let validation2 = document.getElementById("validation2")
//recuperer les images de validations et de rejet de l'entrée des numeros de carte
let exclamation3 = document.getElementById("exclamation3")
let validation3 = document.getElementById("validation3")
suivant.addEventListener("click",() =>{
    if(inputName.value === "" && inputPrenoms.value === "" && inputCartes.value === ""){

        inputName.style.borderColor = "red"
        inputName.style.borderBottom =" 2px solid red"
        inputName.style.borderRadius ="10px"
        exclamation.style.display = "block"

        inputPrenoms.style.borderColor = "red"
        inputPrenoms.style.borderBottom =" 2px solid red"
        inputPrenoms.style.borderRadius ="10px"
        exclamation2.style.display = "block"

        inputCartes.style.borderColor = "red"
        inputCartes.style.borderBottom =" 2px solid red"
        inputCartes.style.borderRadius ="10px"
        exclamation3.style.display = "block"
    

    } else if (inputName.value !== "" && inputPrenoms.value == ""  && inputCartes.value == "") {
            inputName.style.borderColor = "green"
            inputName.style.borderBottom =" 2px solid green"
            inputName.style.borderRadius ="10px"
            exclamation.style.display = "none"
            validation.style.display = "block"

            inputPrenoms.style.borderColor = "red"
            inputPrenoms.style.borderBottom =" 2px solid red"
            inputPrenoms.style.borderRadius ="10px"
            exclamation2.style.display = "block"
    
            inputCartes.style.borderColor = "red"
            inputCartes.style.borderBottom =" 2px solid red"
            inputCartes.style.borderRadius ="10px"
            exclamation3.style.display = "block"
    
            
        } else if (inputName.value !== "" && inputPrenoms.value !== ""  && inputCartes.value === "") {
            inputName.style.borderColor = "green"
            inputName.style.borderBottom =" 2px solid green"
            inputName.style.borderRadius ="10px"
            exclamation.style.display = "none"
            validation.style.display = "block"

            inputPrenoms.style.borderColor = "green"
            inputPrenoms.style.borderBottom =" 2px solid green"
            inputPrenoms.style.borderRadius ="10px"
            exclamation2.style.display = "none"
            validation2.style.display = "block"

            inputCartes.style.borderColor = "red"
            inputCartes.style.borderBottom =" 2px solid red"
            inputCartes.style.borderRadius ="10px"
            exclamation3.style.display = "block"
        } else if (inputName.value !== "" && inputPrenoms.value !== ""  && inputCartes.value !== ""){
            inputName.style.borderColor = "green"
            inputName.style.borderBottom =" 2px solid green"
            inputName.style.borderRadius ="10px"
            exclamation.style.display = "none"
            validation.style.display = "block"

            inputPrenoms.style.borderColor = "green"
            inputPrenoms.style.borderBottom =" 2px solid green"
            inputPrenoms.style.borderRadius ="10px"
            exclamation2.style.display = "none"
            validation2.style.display = "block"

            inputCartes.style.borderColor = "green"
            inputCartes.style.borderBottom =" 2px solid green"
            inputCartes.style.borderRadius ="10px"
            exclamation3.style.display = "none"
            validation3.style.display = "block"

            step2.style.display = "block"
            triangle3.style.display = "block"
            triangle4.style.display = "block"
            section.style.display = "none"
            sectionTwo.style.display= "block"
            sectionTwo.style.marginTop= "15px"
        }
})

//recuperer les bouton de section2
let BtnSuivant = document.getElementById("btnSuivant")
console.log(BtnSuivant)


let BtnRetour = document.getElementById("btnRetour")
console.log(BtnRetour)

BtnRetour.addEventListener("click",()=>{
    step2.style.display = "none"
    triangle3.style.display = "none"
    triangle4.style.display = "none"
    section.style.display = "block"
    sectionTwo.style.display= "none"
})
let sectionThree = document.getElementById("part3")
console.log(sectionThree)


BtnSuivant.addEventListener("click",()=>{
    if(inputEmail.value === "" && password.value === "" && inputNumber.value === ""){

        inputEmail.style.borderColor = "red"
        inputEmail.style.borderBottom =" 2px solid red"
        inputEmail.style.borderRadius ="10px"
        exclamation4.style.display = "block"

        password.style.borderColor = "red"
        password.style.borderBottom =" 2px solid red"
        password.style.borderRadius ="10px"
        exclamation5.style.display = "block"

        inputNumber.style.borderColor = "red"
        inputNumber.style.borderBottom =" 2px solid red"
        inputNumber.style.borderRadius ="10px"
        exclamation6.style.display = "block"
    

    } else if (inputEmail.value !== "" && password.value == ""  && inputNumber.value == "") {
            inputEmail.style.borderColor = "green"
            inputEmail.style.borderBottom =" 2px solid green"
            inputEmail.style.borderRadius ="10px"
            exclamation4.style.display = "none"
            validation4.style.display = "block"

            password.style.borderColor = "red"
            password.style.borderBottom =" 2px solid red"
            password.style.borderRadius ="10px"
            exclamation5.style.display = "block"

            inputNumber.style.borderColor = "red"
            inputNumber.style.borderBottom =" 2px solid red"
            inputNumber.style.borderRadius ="10px"
            exclamation6.style.display = "block"
    
            
        } else if (inputEmail.value !== "" && password.value !== ""  && inputNumber.value === "") {
            inputEmail.style.borderColor = "green"
            inputEmail.style.borderBottom =" 2px solid green"
            inputEmail.style.borderRadius ="10px"
            exclamation4.style.display = "none"
            validation4.style.display = "block"

            password.style.borderColor = "green"
            password.style.borderBottom =" 2px solid green"
            password.style.borderRadius ="10px"
            exclamation5.style.display = "none"
            validation5.style.display = "block"

            inputNumber.style.borderColor = "red"
            inputNumber.style.borderBottom =" 2px solid red"
            inputNumber.style.borderRadius ="10px"
            exclamation6.style.display = "block"
        } else if (inputEmail.value !== "" && password.value !== ""  && inputNumber.value !== ""){
            inputEmail.style.borderColor = "green"
            inputEmail.style.borderBottom =" 2px solid green"
            inputEmail.style.borderRadius ="10px"
            exclamation4.style.display = "none"
            validation4.style.display = "block"

            password.style.borderColor = "green"
            password.style.borderBottom =" 2px solid green"
            password.style.borderRadius ="10px"
            exclamation5.style.display = "none"
            validation5.style.display = "block"

            inputNumber.style.borderColor = "green"
            inputNumber.style.borderBottom =" 2px solid green"
            inputNumber.style.borderRadius ="10px"
            exclamation6.style.display = "none"
            validation6.style.display = "block"

            sectionTwo.style.display = "none"
            sectionThree.style.display = "block"
            step3.style.display = "block"
        }
})

let btn3Retour = document.getElementById("btn3Retour")
console.log(btn3Retour)
let btn3Suivant = document.getElementById("btn3Suivant")
console.log(btn3Suivant)

btn3Retour.addEventListener("click",()=>{

    sectionTwo.style.display = "block"
    sectionThree.style.display = "none"
    step3.style.display = "none"

})

let part4 = document.getElementById("part4")

btn3Suivant.addEventListener("click",()=>{
    part4.style.display ="block"
    part3.style.display ="none"
    triangle1.style.display = "none"
    triangle2.style.display = "none"
    triangle3.style.display = "none" 
    triangle4.style.display = "none"
    step1.style.display = "none"
    step2.style.display = "none"
    step3.style.display = "none"
})




let inputEmail = document.getElementById("email")
console.log(email)
let inputNumber = document.getElementById("number")
console.log(number)
//recupere le images de validation et de rejet de l'entrée des emails 
let exclamation4 = document.getElementById("exclamation4")
let validation4 = document.getElementById("validation4")
//recuperer les images de validations et de rejet de l'entrée de mot de passe
let exclamation5 = document.getElementById("exclamation5")
let validation5 = document.getElementById("validation5")
//recuperer les images de validations et de rejet de l'entrée des numeros de phone
let exclamation6 = document.getElementById("exclamation6")
let validation6 = document.getElementById("validation6")
