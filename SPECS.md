# Especificaciones Técnicas y de Diseño — Portal GIFAA
**Grupo de Investigación en Física y Aprendizaje Automático (GIFAA)**  
*Universidad de Panamá · Facultad de Ciencias Naturales, Exactas y Tecnología · Departamento de Física*

---

## 1. Visión General del Proyecto

El objetivo es desarrollar un portal web estático institucional, formal y moderno para **GIFAA** (Grupo de Investigación en Física y Aprendizaje Automático) de la Universidad de Panamá, hospedado en GitHub Pages (`gifaaup.github.io`).

El sitio se fundamenta en los contenidos científicos e institucionales del `index.html` original y adopta la identidad de marca oficial definida en `logotipo.html`, así como el patrón de navegación superior de `new-brand-start.png`.

---

## 2. Identidad Visual y Manual de Estilo

### 2.1 Paleta Cromática Oficial (`logotipo.html`)
- **Rojo Panamá / Carmesí:** `#D21034` (Acento principal, barras de contraste, estados activos, badges de alerta técnica).
- **Azul Intermedio Institucional:** `#005293` (Color de enlace, isotipo de red neuronal, acentos científicos).
- **Azul Marino Profundo (Navy):** `#0A2A5C` (Encabezados h1-h4, texto de alto contraste, marcas identitarias).
- **Azul Marino Nocturno:** `#061B3B` (Fondos principales en tema oscuro).
- **Gris Pizarra / Slate:** `#4A5873` (Subtítulos de categoría, metadatos, bordes suaves).
- **Gradiente Insignia (`new-brand-start.png`):**  
  `linear-gradient(90deg, #D21034 0%, #71406C 48%, #005293 100%)` (Borde exterior de la barra de navegación flotante).

### 2.2 Tema Dual: Claro (Por Defecto) y Oscuro
El sitio contará con un conmutador de tema (Theme Toggle: sol/luna) accesible en el menú superior:
- **Tema Claro (Default):**
  - Fondo de página: `#FAF9F5` / `#FFFFFF`
  - Superficie de tarjetas: `#FFFFFF` con sombra sutil `0 4px 14px rgba(10, 42, 92, 0.06)`
  - Texto principal: `#0A2A5C` / `#0B192C`
  - Texto secundario: `#4A5873`
- **Tema Oscuro:**
  - Fondo de página: `#070C16`
  - Superficie de tarjetas: `#0F1829` con bordes sutiles `rgba(255, 255, 255, 0.08)`
  - Texto principal: `#F1F5F9`
  - Texto secundario: `#94A3B8`
- Persistencia de preferencia en `localStorage.getItem('gifaa-theme')` con fallback al `prefers-color-scheme` del sistema.

### 2.3 Tipografía
- **Títulos y Marca:** `Space Grotesk` (Pesos 500, 600, 700). Letras limpias, geométricas, con carácter científico y moderno.
- **Cuerpo de Texto:** `Inter` (Pesos 300, 400, 500, 600). Máxima legibilidad en párrafos largos y contenido académico.
- **Código y Metadatos:** `JetBrains Mono` (Pesos 400, 500). Para fórmulas, rutas, badges de tecnologías (PINNs, FNO, PyTorch).

### 2.4 Isotipo y Logotipo Oficial
- **Isotipo (SVG vectorial puro):** Red neuronal de 3 capas superpuesta con la función de onda senoidal de mecánica cuántica y rodeada por dos arcos semicirculares (rojo arriba `#D21034` y azul abajo `#005293`). No contiene texto.
- **Logotipo Completo:** Isotipo + acrónimo **GIFAA** en `Space Grotesk 700` + dos barras rectangulares roja y azul + subtítulo *"Física y Aprendizaje Automático"* + *"Grupo de investigación · Panamá"*.

---

## 3. Arquitectura de Navegación y Header (`new-brand-start.png`)

### 3.1 Barra de Navegación Flotante (Pill Navbar)
- Diseño flotante centrado con forma de píldora (`border-radius: 9999px`) y borde exterior degradado continuo (`#D21034` a `#005293`).
- **Extremo Izquierdo:** Isotipo SVG en contenedor circular + texto `GIFAA` con subtítulo sutil `Física & ML · UP`.
- **Centro / Derecha:** Menú de navegación principal con orden lógico formal:
  1. **Quiénes somos** (`quienes-somos.html`)
  2. **Investigaciones** (`investigaciones.html`)
  3. **Roadmap** (`roadmap.html`)
  4. **Blog** (`blog.html`)
  5. **Ingresar** (`ingresar.html`) — *Página de requisitos de membresía y convocatoria*
  6. **Contáctanos** (`contactanos.html`)
- **Acciones Rápidas en Barra:**
  - Selector de Tema Claro / Oscuro (botón accesible con icono Sol/Luna).
- **Comportamiento Responsivo:**
  - Botón hamburguesa animado en pantallas `< 960px` que despliega el menú vertical adaptado manteniendo los estilos visuales y el selector de tema.

---

## 4. Mapa del Sitio y Especificación de Páginas

### 4.1 Portada (`index.html`)
- **Hero Section:**
  - Logotipo completo con Isotipo SVG interactivo.
  - Título y filiación institucional: *Universidad de Panamá · Facultad de Ciencias Naturales, Exactas y Tecnología · Departamento de Física*.
  - Descripción sintética del grupo y sus enfoques (PINNs, FNO, MACE, JAX, PyTorch).
  - Botones de acción principales: *"Explorar Investigaciones"*, *"Quiénes Somos"* y acceso directo a la *"Comunidad de WhatsApp"*.
- **Ejes Estratégicos del Portal (Tarjetas Interactivas):**
  - Resumen y accesos directos a las 6 áreas del sitio.
- **¿Por qué Panamá? (Resumen Ejecutivo):**
  - Gestión hídrica de la cuenca del Canal.
  - Logística marítima y dinámica de fluidos (CFD).
  - Microelectrónica y semiconductores.
  - Biomedicina y descubrimiento molecular.
- **Alineación con la Estrategia Nacional de IA 2036:**
  - IA confiable (Trustworthy AI), soberanía de cómputo y formación de talento local.
- **Footer Institucional:**
  - Créditos académicos, enlaces de navegación, redes y leyenda legal de la Universidad de Panamá.

### 4.2 Quiénes Somos (`quienes-somos.html`)
- Marco institucional dentro del Departamento de Física / FACINET / UP.
- **Misión, Visión y Objetivo General.**
- **Dirección y Miembros Fundadores:** Perfiles con rol, formación y líneas de interés.
- **Valores y Principios:** Rigor científico, reproducibilidad, apertura comunitaria y ética algorítmica.

### 4.3 Investigaciones (`investigaciones.html`)
- **Líneas Prioritarias de Investigación:**
  1. *Física Informada por Redes Neuronales (PINNs) para Ecuaciones Diferenciales.*
  2. *Modelación Hidrológica y Cuencas del Canal de Panamá.*
  3. *Dinámica de Fluidos Computacional (CFD) Acelerada por IA.*
  4. *Diseño de Materiales y Semiconductores mediante Grafos Equivariantes.*
- **Metodologías y Stack Tecnológico:** Python, PyTorch, JAX, DeepXDE, MACE.
- **Publicaciones y Proyectos:** Fichas de proyectos en formulación y pre-prints proyectados.

### 4.4 Roadmap (`roadmap.html`)
- **Hoja de Ruta Formal a 12 Meses (4 Fases Trimestrales):**
  - *Fase 1 (Meses 1-3): Nivelación e infraestructura básica* (seminarios de Python científico, cálculo tensorial, primeros modelos PINN).
  - *Fase 2 (Meses 4-6): Proyectos piloto aplicados* (simulaciones preliminares de cuenca y dinámica fluvial).
  - *Fase 3 (Meses 7-9): Redacción de propuestas de fondos SENACYT y artículos*.
  - *Fase 4 (Meses 10-12): Consolidación, congreso nacional y apertura de nuevo semillero*.
- Indicadores de éxito y entregables tangibles.

### 4.5 Blog Científico (`blog.html`)
- **Estructura Estática en Markdown:**
  - Carpeta de posts: `blog/posts/` con archivos `.md` formateados con metadatos (título, fecha, autor, resumen, etiquetas).
  - Archivo índice: `blog/posts.json` para carga ágil de la lista cronológica.
  - Visor en `blog.html`: Renderiza el listado de comunicados y, al seleccionar un artículo, carga y procesa dinámicamente el Markdown a HTML utilizando un parser ligero integrado (`marked.js`), soportando bloques de código y fórmulas.
- **Artículos Iniciales de Lanzamiento:**
  1. *Lanzamiento oficial del GIFAA en la Universidad de Panamá*.
  2. *Introducción a las Physics-Informed Neural Networks (PINNs): De Navier-Stokes a PyTorch*.
  3. *Panamá y la Estrategia IA 2036: El rol crucial de la física computacional*.

### 4.6 Ingresar (`ingresar.html`)
- **Propósito:** Página de Admisión y Convocatoria de Nuevos Miembros (NO es formulario de login).
- **Secciones:**
  - Mensaje de bienvenida a aspirantes (estudiantes de licenciatura, postgrado e investigadores de la UP).
  - **Categorías de Membresía:** Investigadores Titulares, Investigadores Asociados y Semillero Estudiantil.
  - **Requisitos Formales:**
    - Estudiante regular o egresado de Física, Matemáticas, Informática, Ingeniería o carreras afines.
    - Compromiso de dedicación horaria (mínimo 4-6 horas semanales para semillero).
    - Interés comprobado en física matemática y/o programación científica en Python.
    - Respeto al código de ética académica de la Universidad de Panamá.
  - **Llamado a la Acción Principal (CTA):** Botón prominente *"Completar Formulario Oficial de Postulación (Google Forms)"* con enlace directo.
  - Preguntas frecuentes sobre el proceso de selección y entrevistas.

### 4.7 Contáctanos (`contactanos.html`)
- Formulario de contacto directo (nombre, correo, perfil, mensaje) con validación frontend.
- Enlace directo al **Grupo Oficial de WhatsApp de la Comunidad GIFAA**.
- Datos de ubicación: Departamento de Física, Facultad de Ciencias Naturales, Exactas y Tecnología, Campus Octavio Méndez Pereira, Universidad de Panamá.
- Correo electrónico institucional y enlaces a repositorios de GitHub.

---

## 5. Requerimientos Técnicos y de Rendimiento

1. **Sin dependencias pesadas de build:** HTML5 semántico puro, CSS3 moderno (Custom Properties, Flexbox, CSS Grid) y JavaScript ES6 modular nativo.
2. **Cero dependencias externas complejas:** Fuentes importadas de Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`), iconos SVG en línea o embebidos para evitar roturas o demoras de carga.
3. **Total compatibilidad con GitHub Pages:** Rutas relativas para que funcione sin problemas en `gifaaup.github.io`.
4. **Accesibilidad (a11y):** Contraste WCAG AAA/AA, atributos ARIA en navegación y botones, etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
5. **SEO y Metadatos:** Open Graph tags, meta descripciones y favicon con el isotipo SVG oficial.
