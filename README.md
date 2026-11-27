# Portafolio de Alejandro González Chávez

Portafolio personal para presentar mi perfil, proyectos y certificaciones en desarrollo web y diseño UX/UI. El sitio está escrito en español y utiliza HTML y CSS; incluye demos web independientes en la carpeta `Proyectos/`.

## Contenido

- `index.html`: página principal y datos de contacto.
- `about.html`: información sobre el perfil.
- `proyectos.html`: selección de proyectos y enlaces a las demos.
- `certificados.html`: certificados.
- `css/`: estilos del sitio principal.
- `img/` y `assets/`: imágenes y recursos visuales.
- `Proyectos/`: demos independientes, como Culturama, Pro Fokus, Pro Music y Pro Video.

## Cómo verlo

No se requiere instalación para el sitio principal. Abre `index.html` directamente en un navegador.

Si prefieres servirlo localmente, desde la raíz del repositorio puedes ejecutar:

```bash
python -m http.server 8000
```

Luego visita [http://localhost:8000](http://localhost:8000). También puedes abrir directamente las páginas HTML de cada demo dentro de `Proyectos/`; revisa el README de la demo cuando exista.

## Tecnologías

- HTML
- CSS
- JavaScript en algunas demos

El repositorio no tiene un `package.json` ni un proceso de build definido en la raíz.

## Nota de estructura

Cada carpeta dentro de `Proyectos/` puede tener su propia organización y requisitos. Los cambios en una demo deben respetar sus rutas relativas a hojas de estilo, scripts e imágenes.
