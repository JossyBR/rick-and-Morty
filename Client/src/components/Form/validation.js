// import styles from "./Form.module.css"
// import './Form.module.css'

const validation = (data) => {
    let errors = {};

    let validar = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    // if(!data.email.includes(validar)){
    //     errors.e1 = 'Ingresa un email valido.'
    // }
    if(!validar.test(data.email)){
        errors.e1 = 'Ingresa un email valido.'
        document.querySelector('#email').classList.add('error');
    }
    if(!data.email){
        errors.e2 = 'Ingresa un email'
    }
    if(data.email.length > 35){
        errors.e3 = 'No debe ser mayr a 35 caracteres'
    }

    //PASSWORD VALIDATIONS
    const validarPass = /^(?=.*\d).{6,10}$/;

    if(!validarPass.test(data.password)){
        errors.p1 = 'al menos un numero y debe tener entre 6 y 10 caracteres'
    }
    if(!data.password){
        errors.e2 = 'Ingresa un email'
    }

    return errors
}

export default validation;

/*Expresión regular para email
En general, un correo electrónico debe tener los siguientes elementos
Empezar por el identificador o nombre del usuario ^\w+([.-_+]?\w+)*
Seguido por el símbolo de la arroba @
Por último, el nombre del dominio del correo \w+([.-]?\w+)*(\.\w{2,10})+$
Un ejemplo válido para un email es: usuario@dominio.com, si no cumple con estas reglas podemos decir que el correo no es válido.El patrón a utilizar es el siguiente: */