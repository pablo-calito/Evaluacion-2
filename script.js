// Index

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    removeActiveCLass();
    card.classList.add('active');
  })
});

function removeActiveCLass() {
  cards.forEach(card => card.classList.remove('active'));
}



// Proyecto Numero 1 

function mensaje1() {
  console.log("Mensaje 1: Este es un mensaje enviado desde la funcion 1");
}

function mensaje2() {
  console.log("Mensaje 2: Este es un mensaje enviado desde la funcion 2");
}

function mensaje3() {
  console.log("Mensaje 3: Este es un mensaje enviado desde la funcion 3");
}

function mensaje4() {
  console.log("Mensaje 4: Este es un mensaje enviado desde la funcion 4");
}

function mensaje5() {
  console.log("Mensaje 5: Este es un mensaje enviado desde la funcion 5");
}

const funciones = [mensaje1, mensaje2, mensaje3, mensaje4, mensaje5];

function ejecutarFuncionAleatoria() {
  const resultado = document.getElementById('resultado');
  const randomIndex = Math.floor(Math.random() * funciones.length);
  const funcionAleatoria = funciones[randomIndex];
  const mensaje = funcionAleatoria();

}


ejecutarFuncionAleatoria();

// Proyecto Numero 2

function esPalindromo(cadena) {
  const cadenaFormateada = cadena.toLowerCase().replace(/\s/g, '');
  const cadenaInvertida = cadenaFormateada.split('').reverse().join('');
  return cadenaFormateada === cadenaInvertida;
}

function verificarPalindromo() {
  const inputTexto = document.getElementById('inputTexto');
  const resultado = document.getElementById('resultado');

  const texto = inputTexto.value;

  if (texto === '') {
    resultado.value = 'Por favor, ingrese un texto.';
    return;
  }

  if (esPalindromo(texto)) {
    resultado.value = `${texto} Es un palíndromo.`;
  } else {
    resultado.value = `${texto}  No es un palíndromo.`;
  }
}

// Proyecto 3

function contarVocalesYConsonantes() {

  const texto = document.getElementById("inputText").value.toLowerCase();

  const vocales = "aeiou";

  let vocalCount = 0;
  let consonantCount = 0;
  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    if (char.match(/[a-z]/i)) {
      if (vocales.includes(char)) {
        vocalCount++;
      } else {
        consonantCount++;
      }
    }
  }

  console.log("Vocales:", vocalCount);
  console.log("Consonantes:", consonantCount);
  document.getElementById("vocalCountLabel").textContent = vocalCount.toString();
  document.getElementById("consonantCountLabel").textContent = consonantCount.toString();
}

//Proyecto 4


function validarContraseña() {
  const contraseñaInput = document.getElementById("contrasenaInput");
  const resultadoLabel = document.getElementById("resultadoLabel");
  const contraseña = contraseñaInput.value;

 
  if (contraseña.length < 8) {
    resultadoLabel.textContent = "Contraseña incorrecta: Debe tener al menos 8 caracteres.";
    resultadoLabel.style.color = "red";
    return;
  }

  
  if (!/[A-Z]/.test(contraseña)) {
    resultadoLabel.textContent = "Contraseña incorrecta: Debe contener al menos una letra mayúscula.";
    resultadoLabel.style.color = "red";
    return;
  }

  if (!/[a-z]/.test(contraseña)) {
    resultadoLabel.textContent = "Contraseña incorrecta: Debe contener al menos una letra minúscula.";
    resultadoLabel.style.color = "red";
    return;
  }


  if (!/\d/.test(contraseña)) {
    resultadoLabel.textContent = "Contraseña incorrecta: Debe contener al menos un número.";
    resultadoLabel.style.color = "red";
    return;
  }


  resultadoLabel.textContent = "Contraseña correcta";
  resultadoLabel.style.color = "green";
}


// Proyecto 5

function contarDigitos() {
  const numeroInput = document.getElementById("numeroInput");
  const respuestaTextarea = document.getElementById("respuestaTextarea");
  
  const numero = parseInt(numeroInput.value, 10);
  
  if (!isNaN(numero)) {
      const cantidadDeDigitos = contarDigitosEnNumero(numero);
      respuestaTextarea.value = `El número ${numero} tiene ${cantidadDeDigitos} dígitos.`;
  } else {
      respuestaTextarea.value = "Por favor, ingresa un número válido.";
  }
}

function contarDigitosEnNumero(numero) {
  const numeroComoCadena = numero.toString();
  return numeroComoCadena.length;
}

// Proyecto 6

function calcularDias() {
  const fechaInicioInput = document.getElementById("fechaInicio");
  const fechaFinInput = document.getElementById("fechaFin");
  const resultadoTextarea2 = document.getElementById("resultadoTextarea2");

  const fechaInicio = new Date(fechaInicioInput.value);
  const fechaFin = new Date(fechaFinInput.value);

  if (isNaN(fechaInicio.getTime()) || isNaN(fechaFin.getTime())) {
      resultadoTextarea2.value = "Por favor, ingresa fechas válidas.";
  } else {
      const diferenciaEnMilisegundos = fechaFin - fechaInicio;
      const dias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
      resultadoTextarea2.value = `Días entre las fechas: ${dias} días.`;
  }
}