window.onload = iniciar;

function iniciar(){
    const btnEnviar = document.getElementById("btn-enviar");
    btnEnviar.addEventListener('click', validacion);
}



const validacion = (e) => {
  e.preventDefault();
  const usuario = document.getElementById('nombre');
  const email = document.getElementById('correo');
  const mensaje = document.getElementById('mensaje');
  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre.");
    usuario.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    email.focus();
    return false;
  }

  if (mensaje.value === "") {
    alert("Por favor, escribe algún mensaje.");
    mensaje.focus();
    return false;
  }
  
  alert("Mensaje enviado. Gracias por contactarte!")
  
  return true;
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

