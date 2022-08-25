//RESPONSIVE PARA BARRA DE NAVEGACION (NAV)
const navToggle = document.querySelector('.nav__toggle');
const navBox = document.querySelector('.nav__box')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('navActive');
    navBox.classList.toggle('navActive');
});
// -------------- * --------------------

//BOTON ARRIBA TOTOP
const topButton = document.querySelector('.top__button');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        topButton.classList.add('topActive');
    }else {
        topButton.classList.remove('topActive');
    }
});
// -------------- * --------------------


//CÓDIGO PARA -MODO OSCURO-
const mode = document.querySelector('.mode');
const body = document.querySelector('body');
mode.addEventListener('click', () => {
    const permanent = body.classList.toggle('dark') //se almacena body en una variable
    localStorage.setItem('mode', permanent); //almacenar variable  en el localStorage
});

const permanentGet = localStorage.getItem('mode'); //almacenando el valor de localStorage y recogemos el valor
if (permanentGet === 'true') { //se crea una condicion para cuando el usuario elija
    body.classList.add('dark'); //agrega a body la clase "dark"
}else {
    body.classList.remove('dark'); //quita a body la clase "dark"
}





//CÓDIGO PARA LOGIN (INGRESAR)
const ingresar = document.querySelector('.ingresar');
const login = document.querySelector('.login');
ingresar.addEventListener('click', () => {
    Swal.fire({
        title: 'Ingresar',
        html: `<input type="text" id="login" class="email" placeholder="Username">
        <input type="password" id="password" class="password" placeholder="Password">
        <a href="#" class="forget__password">¿Olvidó su contraseña?</a>`,
        confirmButtonText: 'Iniciar sesión',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Please enter login and password`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        let usuario = localStorage.getItem(result.value.login);
        usuario = JSON.parse(usuario);

        const correo = document.querySelector('#correo');

        if (usuario.correo === result.value.login && usuario.contrasena === Number(result.value.password)) {
          correo.classList.add(nombre);
          correo.innerHTML = usuario.name
        }else {
          alert('Sus datos no coinciden');
        } 
      });
});

