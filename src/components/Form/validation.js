export let validation = (userData, setErrors) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /\d/;

    let errors = {};

    if (!userData.email) {
        errors.email = 'El campo email está vacío';
    } else if (!regexEmail.test(userData.email)) {
        errors.email = 'El email no es válido';
    } else if (userData.email.length > 35) {
        errors.email = 'Este campo no puede contener más de 35 caracteres';
    }

    if (!regexPassword.test(userData.password)) {
        errors.password = 'La contraseña tiene que contener un número';
    } else if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña tiene que tener entre 6 y 10 caracteres';
    }

    setErrors(errors);
};