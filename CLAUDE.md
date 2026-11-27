# CLAUDE.md

## Resumen del proyecto

Portafolio personal de Alejandro González Chávez, escrito principalmente en español. El sitio principal es estático y está construido con HTML y CSS sin un framework o gestor de paquetes identificado. El repositorio también contiene demos y ejercicios independientes dentro de `Proyectos/`.

## Estructura

- `index.html`, `about.html`, `proyectos.html`, `certificados.html`: páginas del portafolio principal.
- `css/`: hojas de estilo del sitio principal.
- `style.css`: estilos de una versión anterior o página auxiliar; identifica sus referencias antes de editarlo.
- `img/`, `assets/`: imágenes y recursos del portafolio.
- `Proyectos/Culturama/`, `Proyectos/Pro_Fokus/`, `Proyectos/Pro_music/`, `Proyectos/Pro_video/`: proyectos de demostración con sus propios archivos y recursos.

## Forma de trabajar

- Antes de cambiar una página, revisa sus enlaces a CSS, JavaScript e imágenes y conserva las rutas relativas existentes.
- Trata cada subcarpeta de `Proyectos/` como una demo potencialmente independiente. Revisa sus archivos y README locales antes de asumir cómo se ejecuta o qué tecnología utiliza.
- Mantén el contenido visible del portafolio en español, salvo que el usuario pida otro idioma.
- Conserva el estilo visual, la navegación y la estructura existentes; evita introducir dependencias o herramientas de build sin necesidad.
- Mantén las páginas adaptables y semánticas. Usa etiquetas HTML adecuadas, textos alternativos útiles y enlaces con atributos seguros cuando abran otra pestaña.
- No inventes datos personales, enlaces, certificados, resultados ni capacidades. Si un cambio requiere información ausente, deja el contenido existente o pregunta al usuario.
- Al editar recursos, comprueba que las rutas y nombres respeten mayúsculas, minúsculas y espacios tal como aparecen en el repositorio.
- Algunos archivos existentes parecen mostrar caracteres mal codificados. Comprueba la codificación antes de guardar; evita convertir o reescribir archivos completos como efecto secundario.

## Comandos y validación

No se detectó un `package.json` ni una configuración de build en la raíz. No asumas que existen comandos de test o build. Para cambios en HTML/CSS, inspecciona el diff y confirma que las referencias a recursos sigan siendo válidas. Abre la página en un navegador si el entorno ofrece esa posibilidad.

## Git

- Mantén los cambios acotados a lo que pidió el usuario.
- No reviertas cambios ajenos ni sobrescribas trabajo local sin autorización explícita.
- Antes de terminar, resume los archivos modificados y las comprobaciones realizadas; indica con claridad si no fue posible validar visualmente.
