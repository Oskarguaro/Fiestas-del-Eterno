//Constantes globales DOM
const d = document,
  w = window,
  n = navigator;

//Constantes globales HTML
const $divPrincipal =
    d.getElementById("principal") || d.getElementById("principal-dark"),
  $reloj = d.querySelector(".reloj"),
  $temporizador = d.querySelector(".temporizador"),
  $tituloFiesta = d.querySelector(".titulo-fiesta"),
  $descripcion = d.querySelector(".descripcion"),
  $citas = d.querySelector(".citas"),
  $btnMas = d.querySelector(".btn-more"),
  $container = d.getElementById("container"),
  $contenidoFiestas = d.getElementById("contenido-fiestas"),
  $menuNav = d.getElementById("navegacion"),
  $footer = d.querySelector("footer");

//Calculando alto del body
function calcularAltoBody() {
  //Creando variables
  const body = d.querySelector("body"),
    html = d.querySelector("html");

  //Valores iniciales del body
  body.style.height = `initial`;

  //Estableciendo altura dinámica del body
  if (body.offsetHeight < html.clientHeight) {
    // console.log("condición 1");
    body.style.height = `${html.clientHeight}px`;
  } else if (body.offsetHeight <= html.offsetHeight) {
    // console.log("condición 2");
    body.style.height = `${html.offsetHeight}px`;
  }

  //Estableciendo altura del fondo de pantalla
  body.offsetWidth / body.offsetHeight > 740 / 682
    ? (body.className = "body-desktop")
    : (body.className = "body-mobile");
}

//Generando reloj dinámico
let fechaActual = new Date();
$reloj.textContent = fechaActual.toLocaleString();

const reloj = () => {
  setInterval(() => {
    $reloj.textContent = new Date().toLocaleString();
  }, 1000);
};

reloj();

//Función para remover carácteres especiales y poner texto en misnúsculas
function removerAcentos(texto) {
  let textoLower = texto.toLowerCase();

  return textoLower.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

//Coleccion de Fiestas
let fiestasAnuales = [
  {
    nombre: "Pesaj",
    fechaInicio: "04/05/23 18:30:00",
    fechaFinal: "04/06/23 18:30:00",
    descripcion: `La fiesta de Pesaj (Pasar por alto), conmemora la liberación de Israel de la esclavitud de Egipto y el sacrificio de nuestro Adón (Señor) Yahshua Hamashiaj. Ambos sucesos representan en lo espiritual la oportunidad de ser "libres del pecado". Inicia a la puesta de sol del día 14 de Aviv (Nisán) y finaliza a la puesta de sol del día siguiente. En la preparación para la fiesta se ordena apartar un cordero, macho de un 1 año sin defecto, por familia desde el día 10 de Aviv (Nisán), si la familia es muy pequeña se debe compartir con el vecino cercano. El cordero servirá de sacrificio el día de inicio de Pesaj y se comerá asado al fuego con matzah (pan sin levadura) y maror (hierbas amargas). Además el Eterno ordena no comer nada leudado y sacar toda la levadura de los hogares, ya que esta representa el "pecado". Todo lo que no se consumiere del cordero en este día debe ser quemado al fuego.`,
    citas:
      "Éxodo 12:1-28,43-49; Éxodo 16:12; Éxodo 34:24-25; Números 9:1-5; Levítico 23:4; Deuteronomio 16:1-8; Josué 5:10; 2Reyes 23:21-23; 2Crónicas 30:1-5; Esdras 6:19-21; Ezequiel 45:21-24; Mateo 26:17-19; Marcos 14:12-16; Lucas 2:41-42; Lucas 22:7-13,15; Juan 1:29; Juan 2:23; Juan 6:4; Juan 11:55; Juan 19:36; Hechos 12:4; 1Corintios 5:7; Apocalipsis 5:5-6",
    reflexiones: [
      `La "muerte a los pecados" o "salir de Egipto" implica renunciar a los malos deseos de la carne para ser kadosh (apartado) delante del Eterno. Este hecho a su vez tiene su punto fundamental en un genuino Teshuvá (Arrepentimiento) el cual nos lleva a reconocer nuestra naturaleza pecaminosa y buscar nuestra redención (limpieza) en la Sangre de nuestro Mashiaj Yahshua, porque donde hay un teshuvá genuino no vuelve a haber pecado.`,
      `En la fiesta el Eterno nos exhorta a llevar una vida sin levadura (Pecado, Orgullo) y ser humildes (Matzah), desechándola de nuestros corazones (Hogar espiritual). Por esta razón nuestro Adón Yahshua se comparó con el matzah (Pan ácimo) cuando comía la cena de Pesaj con sus Talmidín (Discípulos).`,
      `El compartir el cordero asado entre familias pequeñas nos invita a ser compasivos, piadosos, generosos, unánimes y más con los creyentes y temerosos del Eterno.`,
      `Pesaj singnifica "pasar por alto" o "salto" indicando que el Eterno no traería su juicio contra aquellos que se encontraran regocijados en sus hogares y cuyos dinteles y postes tenían la señal de sangre del sacrificio. En lo espiritual esto tiene mucha connotación, ya que el hogar hace referencia además del lugar físico a nuestro corazón. La Sangre es el creer, aceptar y obedecer el Sacrificio Perfecto (Yahshua Hamashiaj) y así estaremos protegidos de los juicios que el Eterno traerá sobre la tierra o las naciones (Egipto) al final de los tiempos. Nuestro corazón tiene una puerta la cual puede dejar entrar las cosas buenas o las cosas malas, si esa puerta fue marcada con la Sangre del Mashiaj, entrarán cosas buenas (santidad) y así debemos perseverar hasta el fin para ser salvos.`,
      `En la cita Éxo 34:24 vemos que el pueblo tenía que dejar sus tierras para subir a Yahrushalayim (Jerusalén) a observar las fiestas del Eterno y Él les dijo que confiaran que las otras naciones no vendrían a robar sus tierras, porque ellas conocían el Poder y las Obras del Eterno y por ello temían ante el Nombre de YHWH; dándonos una lección de no poner nuestro corazón en las cosas terrenales sino en las espirituales (santidad al Eterno), obedeciendo su Torah.`,
      `El pueblo tenía que subir a purificarse antes de Pesaj, no podía comer Pesaj siendo inmundo.`,
    ],
  },
  {
    nombre: "Hamatzot",
    fechaInicio: "04/06/23 18:30:00",
    fechaFinal: "04/07/23 18:30:00",
    descripcion:
      "Esta fiesta representa la salida de Egipto, en lo espiritual la decisión de apartarnos del pecado.",
    citas: "Proverbios 3",
    reflexiones: ["Aquí van las reflexiones espirituales"],
  },
  {
    nombre: "Bikurim",
    fechaInicio: "04/07/23 18:30:00",
    fechaFinal: "04/08/23 18:30:00",
    descripcion: "¿Qué se conmemora y cómo?",
    citas: "cita",
    reflexiones: ["Aquí van las reflexiones espirituales"],
  },
  {
    nombre: "Pesaj Shení",
    fechaInicio: "05/04/23 18:30:00",
    fechaFinal: "05/05/23 18:30:00",
    descripcion:
      "En Pesaj Shení (Segundo Pesaj) se commemora y celebra las mismas razones que en la fiesta de Pesaj, la preparación se realiza de la misma forma, se aparta el Korbán Pesaj (Sacrificio Pascual) el día 10 del més segundo (Iyar o Zif) y se come asado el día 14 del mes. Se como con matza (Pan sin levadura) y maror (Hierbas amargas). Esta fiesta respresemta una segunda oportnidad para comer de Pesaj para aquellos que por algún motivo no pudieron el día 14 del mes de Aviv.",
    citas: "Números 9:7-13; Éxodo 16:1; 2 Crónicas 30:2-15; 2 Crónicas 35",
    reflexiones: [
      "La fiesta de Pesaj tiene una gran importancia espiritual porque respresenta nuestra libertad a los pecados al aceptar la Sangre del Mashiaj, es la única fiesta que el Eterno permitió ser celebrada nuevamente (segunda opotunidad) para aquellos que no podían guadarla en el mes de Aviv, el Eterno indica que nadie se puede sin comer de Pesaj porque sería cortado del pueblo. Pesaj es el primer paso para la conversión de nuestras almas.",
      "El Eterno estípulo Pesaj Shení para que no fueramos a comer de Pesaj estando impuros, contaminados de pecado pero al mismo tiempo no quiere que ninguno pierda la oportunidad de limpiarse y comer de Su Pesaj",
    ],
  },
  {
    nombre: "Shavuot",
    fechaInicio: "05/25/23 18:30:00",
    fechaFinal: "05/26/23 18:30:00",
    descripcion: "¿Qué se conmemora y cómo?",
    citas: "cita",
    reflexiones: ["Aquí van las reflexiones espirituales"],
  },
  {
    nombre: "Yom Teruah",
    fechaInicio: "09/15/23 18:30:00",
    fechaFinal: "09/16/23 18:30:00",
    descripcion: "¿Qué se conmemora y cómo?",
    citas: "cita",
    reflexiones: ["Aquí van las reflexiones espirituales"],
  },
  {
    nombre: "Yom Kippur",
    fechaInicio: "09/24/23 18:30:00",
    fechaFinal: "09/24/23 18:30:00",
    descripcion: "Día de la expiación (Teshuvá)",
    citas: "cita",
    reflexiones: ["Aquí van las reflexiones espirituales"],
  },
  {
    nombre: "Sukot",
    fechaInicio: "09/29/23 18:30:00",
    fechaFinal: "10/07/23 18:30:00",
    descripcion: "¿Qué se conmemora y cómo?",
    citas: "cita",
    reflexiones: ["Aquí van las reflexiones espirituales"],
  },
  // {
  //   nombre: "Purim",
  //   fechaInicio: "05/09/23 18:30:00",
  //   fechaFinal: "05/10/23 18:30:00",
  //   descripcion: `La fiesta de Pesaj (Pasar por alto), conmemora la liberación de Israel de la esclavitud de Egipto y el sacrificio de nuestro Adón (Señor) Yahshua Hamashiaj. Ambos sucesos representan en lo espiritual la oportunidad de ser "libres del pecado". Inicia a la puesta de sol del día 14 de Aviv (Nisán) y finaliza a la puesta de sol del día siguiente. En la preparación para la fiesta se ordena apartar un cordero, macho de un 1 año sin defecto, por familia desde el día 10 de Aviv (Nisán), si la familia es muy pequeña se debe compartir con el vecino cercano. El cordero servirá de sacrificio el día de inicio de Pesaj y se comerá asado al fuego con matzah (pan sin levadura) y maror (hierbas amargas). Además el Eterno ordena no comer nada leudado y sacar toda la levadura de los hogares, ya que esta representa el "pecado". Todo lo que no se consumiere del cordero en este día debe ser quemado al fuego.`,
  //   citas:
  //     "Éxodo 12:1-28,43-49; Éxodo 16:12; Éxodo 34:24-25; Números 9:1-5; Levítico 23:4; Deuteronomio 16:1-8; Josué 5:10; 2Reyes 23:21-23; 2Crónicas 30:1-5; Esdras 6:19-21; Ezequiel 45:21-24; Mateo 26:17-19; Marcos 14:12-16; Lucas 2:41-42; Lucas 22:7-13,15; Juan 1:29; Juan 2:23; Juan 6:4; Juan 11:55; Juan 19:36; Hechos 12:4; 1Corintios 5:7; Apocalipsis 5:5-6",
  //   reflexiones: [
  //     `La "muerte a los pecados" o "salir de Egipto" implica renunciar a los malos deseos de la carne para ser kadosh (apartado) delante del Eterno. Este hecho a su vez tiene su punto fundamental en un genuino Teshuvá (Arrepentimiento) el cual nos lleva a reconocer nuestra naturaleza pecaminosa y buscar nuestra redención (limpieza) en la Sangre de nuestro Mashiaj Yahshua, porque donde hay un teshuvá genuino no vuelve a haber pecado.`,
  //     `En la fiesta el Eterno nos exhorta a llevar una vida sin levadura (Pecado, Orgullo) y ser humildes (Matzah), desechándola de nuestros corazones (Hogar espiritual). Por esta razón nuestro Adón Yahshua se comparó con el matzah (Pan ácimo) cuando comía la cena de Pesaj con sus Talmidín (Discípulos).`,
  //     `El compartir el cordero asado entre familias pequeñas nos invita a ser compasivos, piadosos, generosos, unánimes y más con los creyentes y temerosos del Eterno.`,
  //     `Pesaj singnifica "pasar por alto" o "salto" indicando que el Eterno no traería su juicio contra aquellos que se encontraran regocijados en sus hogares y cuyos dinteles y postes tenían la señal de sangre del sacrificio. En lo espiritual esto tiene mucha connotación, ya que el hogar hace referencia además del lugar físico a nuestro corazón. La Sangre es el creer, aceptar y obedecer el Sacrificio Perfecto (Yahshua Hamashiaj) y así estaremos protegidos de los juicios que el Eterno traerá sobre la tierra o las naciones (Egipto) al final de los tiempos. Nuestro corazón tiene una puerta la cual puede dejar entrar las cosas buenas o las cosas malas, si esa puerta fue marcada con la Sangre del Mashiaj, entrarán cosas buenas (santidad) y así debemos perseverar hasta el fin para ser salvos.`,
  //     `En la cita Éxo 34:24 vemos que el pueblo tenía que dejar sus tierras para subir a Yahrushalayim (Jerusalén) a observar las fiestas del Eterno y Él les dijo que confiaran que las otras naciones no vendrían a robar sus tierras, porque ellas conocían el Poder y las Obras del Eterno y por ello temían ante el Nombre de YHWH; dándonos una lección de no poner nuestro corazón en las cosas terrenales sino en las espirituales (santidad al Eterno), obedeciendo su Torah.`,
  //     `El pueblo tenía que subir a purificarse antes de Pesaj, no podía comer Pesaj siendo inmundo.`,
  //   ],
  // },
];

//Ordenando Fiestas por fecha de inicio
fiestasAnuales.sort((a, b) => {
  let fechaA = new Date(a.fechaInicio),
    fechaB = new Date(b.fechaInicio);

  return fechaA - fechaB;
});

//Ordenando reflexiones
const ordenandoReflexiones = (fiesta) => {
  const $fragment = d.createDocumentFragment();

  Object.values(fiesta.reflexiones).forEach((el) => {
    const $li = d.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
  });

  return $fragment;
};

//Creando anclas para las citas del Tanak
const ordenandoCitas = (citas) => {
  const $fragment = d.createDocumentFragment();

  citas.split("; ").forEach((el) => {
    const $a = d.createElement("a");

    let indexEspacio = el.indexOf(" "),
      indexDosPuntos = el.indexOf(":"),
      libro,
      numCapitulo;

    if (indexEspacio !== -1 && indexEspacio > 1) {
      libro = removerAcentos(el.slice(0, indexEspacio));
    } else if (indexEspacio === 1) {
      el = el.replace(" ", "");
      indexEspacio = el.indexOf(" ");
      indexDosPuntos = el.indexOf(":");
      libro = removerAcentos(el.slice(0, indexEspacio));
    } else {
      $a.textContent = "Formato no coincide";
      return $fragment.appendChild($a);
    }

    indexDosPuntos != -1
      ? (numCapitulo = el.slice(indexEspacio + 1, indexDosPuntos))
      : (numCapitulo = el.slice(indexEspacio + 1));

    $a.textContent = el;
    $a.href = `https://www.bibliatodo.com/la-biblia/kadosh-israelita-mesianica/${libro}-${numCapitulo}`;
    $a.target = "_blank";
    $fragment.appendChild($a);
  });

  return $fragment;
};

//Creando menú de navegación
function pintarMenuNav() {
  fiestasAnuales.forEach((fiesta) => {
    $menuNav.innerHTML += `<a href="#${fiesta.nombre}">${fiesta.nombre}</a>`;
  });
}

pintarMenuNav();

//Creando contenido de las fiestas en el DOM
function pintarContenidoFiestas() {
  const $templateFiestas = d.getElementById("template-fiestas").content,
    $fragment = d.createDocumentFragment();

  fiestasAnuales.forEach((fiesta) => {
    const $clone = $templateFiestas.cloneNode(true);

    $clone.querySelector("section").id = fiesta.nombre;
    $clone.querySelector(
      ".titulo-fiesta"
    ).textContent = `🌺 Fiesta de ${fiesta.nombre} 🌻`;
    $clone.querySelector(
      ".inicia"
    ).textContent = `Inicia: ${fiesta.fechaInicio.slice(0, 8)}`;
    $clone.querySelector(
      ".finaliza"
    ).textContent = `Finaliza: ${fiesta.fechaFinal.slice(0, 8)}`;
    $clone.querySelector(".descripcion").textContent = fiesta.descripcion;
    $clone
      .querySelector(".reflexiones")
      .appendChild(ordenandoReflexiones(fiesta));
    $clone.querySelector(".citas").appendChild(ordenandoCitas(fiesta.citas));

    $fragment.appendChild($clone);
  });

  $contenidoFiestas.appendChild($fragment);
}

pintarContenidoFiestas();

//Calculando la proxima fiesta en el calendario
let animacion = false;
let tempoInter;

let calcularProximaFiesta = () => {
  let memoria = null;
  let obj;

  fiestasAnuales.forEach((fiesta) => {
    let fechaFiesta = new Date(fiesta.fechaInicio);
    let difFechas = fechaFiesta - new Date();
    let difFechaFinal = new Date(fiesta.fechaFinal) - new Date();

    if (!memoria && difFechas > 0) {
      // console.log("No existe memoria");
      memoria = difFechas;
      obj = fiesta;
    } else if (memoria > difFechas && difFechas > 0) {
      // console.log("Existe memoria");
      memoria = difFechas;
      obj = fiesta;
    }

    if (difFechas < 0 && difFechaFinal > 0 && animacion === false) {
      pintarAnimacionFiesta(fiesta);
      animacion = true;
    }
  });

  //Validando si existe animación para ejecutar el temporizador
  if (animacion === true) {
    if (tempoInter) clearInterval(tempoInter);

    setTimeout(() => {
      $reloj.className = "reloj";
      $divPrincipal.id = "principal";
      $btnMas.classList.remove("d-none");
      $tituloFiesta.className = "titulo-fiesta";
      $tituloFiesta.parentNode.classList.remove("seccion-titulo");

      temporizador(obj);

      tempoInter = setInterval(() => {
        temporizador(obj);
      }, 1000);

      pintarFiestaDOM(obj);

      calcularAltoBody();
    }, 10000);
  } else {
    temporizador(obj);

    tempoInter = setInterval(() => {
      temporizador(obj);
    }, 1000);

    pintarFiestaDOM(obj);
  }
};

//Pintando la próxima fiesta en el DOM
function pintarFiestaDOM({ nombre, descripcion, citas }) {
  $tituloFiesta.textContent = `🧡😋 Para ${nombre} 😊🎈`;
  $descripcion.textContent = descripcion;
  $citas.appendChild(ordenandoCitas(citas));
}

//Generando cuentra reresiva para la fiesta
function temporizador(fiesta) {
  // let fiesta = calcularProximaFiesta();
  let difFechas = (new Date(fiesta.fechaInicio) - new Date()) / 1000;

  // console.log(fiesta, difFechas);
  if (difFechas < 0) return calcularProximaFiesta();

  let restDias = difFechas % (24 * 60 * 60);
  let restHoras = difFechas % (60 * 60);
  let restMinutos = difFechas % 60;

  let dias = Math.floor(difFechas / (24 * 60 * 60));
  let horas = ("0" + Math.floor(restDias / (60 * 60))).slice(-2);
  let minutos = ("0" + Math.floor(restHoras / 60)).slice(-2);
  let segundos = ("0" + Math.floor(restMinutos)).slice(-2);

  const $pHTML = ($temporizador.innerHTML = `
    <p>Faltan:</p>
    <p class="texto-tempo">${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos</p>
    `);

  $temporizador.innerHTML = $pHTML;
}

calcularProximaFiesta();

//Ejecutando animación del texto de la fiesta
function pintarAnimacionFiesta({ nombre }) {
  const large = 700,
    medium = 400,
    small = 200;

  $temporizador.textContent = "";
  $descripcion.textContent = "";
  $citas.textContent = "";
  $tituloFiesta.textContent = "";
  $btnMas.classList.add("d-none");
  let texto = `Haj ${nombre} Sameaj`.split("");
  texto.forEach((letra) => {
    $tituloFiesta.innerHTML += `<span>${letra}</span>`;
  });
  $tituloFiesta.parentNode.classList.add("seccion-titulo");

  if ($divPrincipal.clientWidth > large) {
    $tituloFiesta.className = "fiesta-activa-large";
    // console.log("Grande");
  } else if ($divPrincipal.clientWidth > medium) {
    $tituloFiesta.className = "fiesta-activa-medium";
    // console.log("Mediano");
  } else if ($divPrincipal.clientWidth > small) {
    $tituloFiesta.className = "fiesta-activa-small";
    // console.log("Pequeño");
  }

  $reloj.className = "reloj-white";
  $divPrincipal.id = "principal-dark";
}

//Calcular dimensiones del contenido de las Fiestas
function tamañoSeccionFiestas() {
  if ($container.classList.value === "is-active") {
    const $body = d.querySelector("body");

    //Esconder el scroll durante la animación
    $body.style.overflow = "hidden";

    //Calculando altura del Contenido en pantallas small
    $container.style.height = "max-content";
    $menuNav.style.height = "max-content";

    //Mostrar scroll después de la animación
    setTimeout(() => {
      $body.style.overflow = "initial";
    }, 300);

    $container.style.paddingBottom = "15px";
    let alturaMenu = $menuNav.offsetHeight;
    $contenidoFiestas.style.height = `${alturaMenu}px`;

    //Calculando top del Contenido
    let h1 = d.getElementById("titulo-principal");
    $container.style.top = `${
      $btnMas.offsetTop + $btnMas.offsetHeight + h1.offsetHeight + 15
    }px`;

    //Calculando altura del contenido en pantallas large y medium
    let alturaBody = d.querySelector("body").offsetHeight,
      alturafooter = d.querySelector("footer").offsetHeight,
      tamañoSmallMenu = alturaMenu + $container.offsetTop + alturafooter;
    console.log(alturaBody, tamañoSmallMenu);

    if (alturaBody > tamañoSmallMenu) {
      // console.log("El div Principal es más grande");
      $container.style.bottom = `0px`;
      $container.style.height = "auto";
      $container.style.paddingBottom = "0px";
      $menuNav.style.height = "auto";
      $contenidoFiestas.style.height = `auto`;
    }
  }
}

//Delegando eventos
d.addEventListener("click", (e) => {
  //Desplegar u ocultar menú fiestas
  if (e.target === $btnMas && e.target.textContent === "Ver Fiestas") {
    const $seccionPadre = d.querySelector("#principal .descripcion").parentNode;

    $seccionPadre.classList.add("d-none");
    $container.classList.add("is-active");

    // console.log($btnMas.getBoundingClientRect(), $btnMas.clientTop);
    $btnMas.textContent = "Regresar";

    calcularAltoBody();
    tamañoSeccionFiestas();
  } else if (e.target.textContent === "Regresar") {
    const $seccionPadre = d.querySelector("#principal .descripcion").parentNode,
      $container = d.getElementById("container");

    $seccionPadre.classList.remove("d-none");
    $container.classList.remove("is-active");

    $btnMas.textContent = "Ver Fiestas";

    calcularAltoBody();
  }
});

w.addEventListener("resize", (e) => {
  //Calcular tamaño del menu fiestas
  setTimeout(() => {
    tamañoSeccionFiestas();
  }, 160);

  //calcular tamaño de la ventana principal
  calcularAltoBody();
});

//Cargar seccion principal despues de cargar el HTML y los estilos
w.addEventListener("load", (e) => {
  calcularAltoBody();
});
