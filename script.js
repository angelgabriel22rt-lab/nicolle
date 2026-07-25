const sonidoCumple = new Audio('./musica.mp3.mp3');
sonidoCumple.loop = true; 

const lineasPastel = [
"   PARA MI AMIGA :       NICOLLE                                                                          ",
"                                                                                             ",
"        $$$   $$$                       $$$    $$$                                           ",
"      $$$$$  $$$$$                     $$$$$  $$$$$                                          ",
"     $$$$$$$$$$$$$$     i   i   i     $$$$$$$$$$$$$$                                         ",
"     $$$$$$$$$$$$$$    | | | | | |    $$$$$$$$$$$$$$                                         ",
"      $$$$$$$$$$$$     |_|_|_|_|_|     $$$$$$$$$$$$                                          ",
"       `$$$$$$$$'      [_________]      `$$$$$$$$'                                           ",
"         `$$$$'        |$$$$$$$$$$|       `$$$$$'                                             ",
"          `$$'        /___________\\       `$$'                                              ",
"            $        |$$$$$$$$$$$$$|       $                                                 ",
"            $        |$$$ _$$$$__$$|       $                                                 ",
"           $         |$$$| |$|| |$$|        $                                                ",
"           $         |__| |_| |_|__|         $                                              ",
"                    [_______________]                                                        ",
"                           | |                                                               ",
"                          /___\\                                                             ",
"                         /_____\\                                                            ",
"                        /_______\\                                                           ",
"                                                                                             ",
"  /$$   /$$                                         /$$                                      ",
" | $$  | $$                                        | $$                                      ",
" | $$  | $$  /$$$$$$   /$$$$$$   /$$$$$$  /$$   /$$| $$                                      ",
" | $$$$$$$$ |____  $$ /$$____$$ /$$__  $$| $$  | $$| $$                                      ",
" | $$__  $$  /$$$$$$$| $$$$$$$ | $$   \\ $$| $$  | $$|__/                                     ",
" | $$  | $$ /$$__  $$| $$      | $$  | $$| $$  | $$                                          ",
" | $$  | $$ | $$$$$$$| $$      | $$$$$$$/|  $$$$$$$ /$$                                      ",
" |__/  |__/ \\_______/|__/      | $$____/  \\____  $$|__/                                    ",
"                               | $$       /$$  | $$                                          ",
"                               | $$      |  $$$$$$/                                          ",
"                               |__/       \\______/                                          ",
"  /$$$$$$$   /$$             /$$      /$$             |$$                $$      $$          ",
" | $$__  $$ |__/.           | $$     | $$             |$$                $$      $$          ",
" | $$  \\ $$  /$$  /$$$$$$  /$$$$$$  | $$$$$$$     ____|$$    /$$$$$$     $$      $$          ",
" | $$$$$$$  | $$ /$$__  $$|_  $$_/   | $$ __$$   |$$$$ $$    |____ $$    $$      $$           ",
" | $$__  $$ | $$| $$  \\__/  | $$    | $$   |$$  | $$   $$    /$$$$$$$|    $$$$$$$            ",
" | $$  \\ $$ | $$| $$        | $$ /$$| $$   |$$  | $$___$$    /$$__ $$|          $$           ",
" | $$$$$$$/ | $$| $$        |  $$$$/ | $$   |$$  | $$$$$$    |$$$$$$$|          $$            ",
" |_______/  |__/|__/         \\___/   \\__        \\_______      \\_______/   $$$$$$          ",
"                                                                                             ",
"   Que nunca te falten razones para reír, personas que te quieran de verdad y sueños tan     ",
"    grandes que te obliguen a seguir creciendo. Feliz cumpleaños                               ", 
"                   Te desea tu amigo ANGEL :)                                                   "                                                                                        
];

const container = document.getElementById('ascii-container');
const btnIniciar = document.getElementById('btn-iniciar');
const pantallaInicio = document.getElementById('pantalla-inicio');

function procesarLinea(linea) {
    if (linea.length < 50) return linea;

    const izquierda = linea.substring(0, 18);
    const centro = linea.substring(18, linea.length - 18);
    const derecha = linea.substring(linea.length - 18);

    const izqHtml = izquierda.trim() !== "" ? `<span class="parpadeo">${izquierda}</span>` : izquierda;
    const derHtml = derecha.trim() !== "" ? `<span class="parpadeo">${derecha}</span>` : derecha;

    return izqHtml + centro + derHtml;
}

async function renderizarAnimacion() {
    let contenidoActual = [];
    for (let i = 0; i < lineasPastel.length; i++) {
        contenidoActual.push(procesarLinea(lineasPastel[i]));
        container.innerHTML = contenidoActual.join('\n');
        await new Promise(resolve => setTimeout(resolve, 140));
    }
}

// Escuchamos el clic en el botón de la interfaz
btnIniciar.addEventListener('click', () => {
    // 1. Ocultamos el botón de inicio
    pantallaInicio.style.display = 'none';

    // 2. Reproducimos el audio (ahora el navegador lo permitirá porque hubo un clic)
    sonidoCumple.play().catch(error => console.log("Error al reproducir:", error));

    // 3. Iniciamos la caída del pastel de inmediato
    renderizarAnimacion();
});