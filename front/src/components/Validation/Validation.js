const Validation = (userData) => {
    let errors = {};
    let expr = /^w+@[a-zA-Z_]+?.[a-zA-Z] {2,3}$/;

    if( expr.test(userData.username)){
        errors.username = 'El email es inválido';
    }

    if(!userData.username){
        errors.username = 'Este campo no puede estar vacío'
    }

    if(userData.username.length > 35){
        errors.username = 'El email no puede superar los 35 caracteres'
    }

    if(!userData.password.match(/\d/)){
        errors.password = 'La contraseña debe contener al menos un número'
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe contener entre 6 y 10 caracteres'
    }
    return errors;
}

export default Validation