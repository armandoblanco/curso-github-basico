# Curso Práctico de GitHub — Fundamentos (2.5 horas)

## De Cero a Colaborar: Git, GitHub y Flujos de Trabajo en Equipo

> **Curso de formación en entorno enterprise:** NO usar datos reales, credenciales ni información sensible durante los ejercicios. Todos los repositorios del curso deben crearse como **Private** o **Internal**.

---

## Tabla de Contenidos

1. [Objetivo del curso](#1-objetivo-del-curso)
2. [Agenda detallada](#2-agenda-detallada-25-horas)
3. [Prerrequisitos](#3-prerrequisitos)
4. [Módulo 1 — Introducción a Git y GitHub](#módulo-1--introducción-a-git-y-github-000010)
5. [Módulo 2 — Repositorios y Estructura de Proyecto](#módulo-2--repositorios-y-estructura-de-proyecto-001035)
6. [Módulo 3 — Branching y Colaboración](#módulo-3--branching-y-colaboración-003500-58)
7. [Módulo 4 — Issues, Proyectos y Planeación Ligera](#módulo-4--issues-proyectos-y-planeación-ligera-005801-13)
8. [Módulo 5 — Seguridad y Gobernanza del Repositorio](#módulo-5--seguridad-y-gobernanza-del-repositorio-011301-38)
9. [Módulo 6 — Automatización con GitHub Actions](#módulo-6--automatización-con-github-actions-013801-58)
10. [Módulo 7 — Releases, Tags y Packages](#módulo-7--releases-tags-y-packages-015802-20)
11. [Cierre y Siguientes Pasos](#cierre-y-siguientes-pasos-022002-30)
12. [Módulo Opcional A — Code Review a Profundidad](#módulo-opcional-a--code-review-a-profundidad)
13. [Módulo Opcional B — Roles, Permisos y Administración de Organización](#módulo-opcional-b--roles-permisos-y-administración-de-organización)
14. [Módulo Opcional C — Discussions, InnerSource y GitHub Pages](#módulo-opcional-c--discussions-innersource-y-github-pages)
15. [Troubleshooting](#troubleshooting)

---

## 1. Objetivo del curso

Proporcionar a los participantes los fundamentos prácticos para trabajar con Git y GitHub en un entorno enterprise. Al finalizar, cada participante será capaz de:

- Entender qué es el control de versiones y por qué es esencial.
- Crear y gestionar repositorios en GitHub Enterprise.
- Colaborar con un equipo usando ramas y Pull Requests.
- Organizar trabajo con Issues y GitHub Projects.
- Configurar políticas de gobernanza y protección de repositorios.
- Automatizar validaciones con GitHub Actions.
- Publicar versiones del proyecto con Tags, Releases y Packages.

### Formato

Este curso es **hands-on**. Cada módulo combina una explicación breve con un ejercicio que los participantes ejecutan en su propia cuenta de GitHub. El instructor demuestra primero y los participantes replican.

### ¿Para quién es este curso?

| Perfil | Beneficio |
| --- | --- |
| Desarrolladores principiantes | Aprender el flujo de trabajo estándar de la industria |
| Equipos nuevos en GitHub | Alinear prácticas de colaboración |
| Profesionales técnicos no-dev | Entender cómo trabajar con repositorios de código |

### Cursos complementarios

Este curso cubre los fundamentos de la plataforma. Para temas especializados, consulta:

| Tema | Repositorio |
| --- | --- |
| GitHub Copilot | [workshop-githubcopilot-basico-net](https://github.com/armandoblanco/workshop-githubcopilot-basico-net) |
| GitHub Advanced Security | [workshop-github-advanced-security](https://github.com/armandoblanco/workshop-github-advanced-security) |

---

## 2. Agenda detallada (2.5 horas)

| Tiempo | Módulo | Descripción | Formato |
| --- | --- | --- | --- |
| 0:00-0:10 | **Módulo 1** — Introducción a Git y GitHub | Conceptos clave: control de versiones, Git vs GitHub | Teoría |
| 0:10-0:35 | **Módulo 2** — Repositorios y Estructura | Crear repos, README, .gitignore, clonar, subir cambios | Hands-on |
| 0:35-0:58 | **Módulo 3** — Branching y Colaboración | Ramas, Pull Requests, revisión de código, conflictos | Hands-on |
| 0:58-1:13 | **Módulo 4** — Issues, Proyectos y Planeación | Issues, labels, milestones, GitHub Projects | Hands-on |
| 1:13-1:38 | **Módulo 5** — Seguridad y Gobernanza | Rulesets, CODEOWNERS, secretos, políticas del repo | Hands-on |
| 1:38-1:58 | **Módulo 6** — GitHub Actions | CI básico, workflows, validaciones en PRs | Hands-on |
| 1:58-2:20 | **Módulo 7** — Releases, Tags y Packages | Versionado semántico, tags, releases, GitHub Packages | Hands-on |
| 2:20-2:30 | **Cierre** | Recapitulación y siguientes pasos | Teoría |

**Contenido opcional** (si sobra tiempo o para sesiones extendidas):

| Módulo | Descripción | Duración estimada |
| --- | --- | --- |
| **Opcional A** — Code Review a Profundidad | Suggestion comments, draft PRs, PR templates, review assignment | ~15 min |
| **Opcional B** — Roles, Permisos y Administración | Niveles de acceso, equipos, org settings, EMU | ~15 min |
| **Opcional C** — Discussions, InnerSource y GitHub Pages | Comunicación en equipo, InnerSource, documentación interna | ~15 min |

---

## 3. Prerrequisitos

### 3.1 Cuentas necesarias

- **Cuenta de GitHub Enterprise**: Proporcionada por la organización. Si no la tienes, contacta a tu administrador de GitHub.

### 3.2 Software requerido

#### 1. Git

- **Descarga:** <https://git-scm.com/downloads>
- **Validar instalación:**

```
git --version
# Esperado: git version 2.x.x
```

#### 2. Visual Studio Code (recomendado)

- **Descarga:** <https://code.visualstudio.com/>
- **Extensiones recomendadas:**
  - GitHub Pull Requests and Issues
  - GitLens

#### 3. GitHub Desktop (alternativa visual)

- **Descarga:** <https://desktop.github.com/>
- Ideal si prefieres una interfaz gráfica en lugar de la terminal.

### 3.3 Checklist de "listo para iniciar"

- [ ] Tengo acceso a la organización de GitHub Enterprise
- [ ] Tengo Git instalado (`git --version` funciona)
- [ ] Tengo VS Code o GitHub Desktop instalado
- [ ] Puedo acceder a GitHub desde mi navegador

---

# Módulo 1 — Introducción a Git y GitHub (0:00-0:10)

**Objetivo:** Entender qué es Git, qué es GitHub y por qué se usan en cualquier equipo de desarrollo.

## ¿Qué es el control de versiones?

Imagina que estás escribiendo un documento importante. Sin control de versiones harías esto:

```
documento_final.docx
documento_final_v2.docx
documento_final_v2_revisado.docx
documento_final_DEFINITIVO.docx
documento_final_DEFINITIVO_ahora_sí.docx
```

El control de versiones resuelve este caos:

- Guarda un historial completo de todos los cambios.
- Permite volver a cualquier versión anterior.
- Permite que múltiples personas trabajen simultáneamente sin sobrescribirse.
- Mantiene un registro de quién hizo qué y cuándo.

## Git vs GitHub

| Concepto | Git | GitHub |
| --- | --- | --- |
| **¿Qué es?** | Sistema de control de versiones | Plataforma en la nube para alojar repos Git |
| **¿Dónde vive?** | En tu computadora (local) | En internet (github.com o tu instancia enterprise) |
| **¿Para qué sirve?** | Rastrear cambios en archivos | Colaborar, revisar código, gestionar proyectos |
| **Analogía** | Tu cuaderno de notas personal | Google Docs compartido con tu equipo |

```
┌─────────────────┐         ┌──────────────────────┐
│   Tu Máquina    │         │      GitHub.com       │
│                 │  push   │   (Enterprise Cloud)  │
│   Repositorio   │ ──────► │   Repositorio Remoto  │
│   Local (Git)   │ ◄────── │   (GitHub)            │
│                 │  pull   │                       │
└─────────────────┘         └──────────────────────┘
```

### GitHub Enterprise Cloud vs GitHub Enterprise Server

En entornos enterprise existen dos modalidades de despliegue:

| Modalidad | Dónde se aloja | Cuándo se usa |
| --- | --- | --- |
| **Enterprise Cloud** | GitHub.com (SaaS) | La mayoría de organizaciones, se gestiona desde github.com |
| **Enterprise Server (GHES)** | Infraestructura propia de la organización | Cuando hay requisitos estrictos de residencia de datos o compliance |

En ambos casos el flujo de trabajo es idéntico. La diferencia es dónde vive la instancia y quién la administra.

## Conceptos fundamentales

### Repositorio (Repo)

Es la carpeta de tu proyecto con todo su historial de cambios. Piensa en él como una carpeta inteligente que recuerda todo.

### Commit

Es una fotografía del estado de tu proyecto en un momento dado. Cada commit tiene:

- Un mensaje que describe el cambio
- Un autor y una fecha
- Un identificador único (hash)

```
Ejemplo de historial de commits:

  a1b2c3d  ← feat: agregar página de contacto      (hace 2 horas)
  e4f5g6h  ← fix: corregir enlace roto en el menú   (hace 1 día)
  i7j8k9l  ← docs: actualizar README                (hace 3 días)
```

### Branch (Rama)

Una línea paralela de desarrollo. Permite trabajar en nuevas funcionalidades sin afectar el código principal.

```
main:       ●───●───●───●───●───●
                     \         /
feature/login:        ●───●───●
```

### Merge

Combinar los cambios de una rama con otra. Es como juntar dos versiones del proyecto.

### Pull Request (PR)

Una solicitud formal para integrar tus cambios al código principal. Permite:

- Que otros revisen tu código antes de fusionarlo.
- Discutir cambios con el equipo.
- Ejecutar validaciones automáticas.

## Flujo típico de trabajo en equipo

```
1. Clonar el repositorio         →  Obtener una copia local
2. Crear una rama                →  feature/mi-cambio
3. Hacer cambios y commits       →  Guardar progreso
4. Subir la rama a GitHub        →  push
5. Crear un Pull Request         →  Solicitar revisión
6. Revisión y aprobación         →  El equipo revisa
7. Merge a main                  →  Integrar cambios
8. Repetir                       →  Siguiente tarea
```

## ¿Cómo me conecto a GitHub?

Existen tres herramientas principales para interactuar con GitHub:

| Herramienta | Ideal para | Conexión |
| --- | --- | --- |
| **Visual Studio Code** | Desarrollo diario | Extensión GitHub + Sign In |
| **GitHub Desktop** | Interfaz visual amigable | Login con cuenta GitHub |
| **Visual Studio** | Proyectos .NET/C# | Team Explorer + GitHub |

### Conectar VS Code a GitHub:

1. Instala la extensión **GitHub Pull Requests and Issues**
2. Haz clic en el ícono de perfil (esquina inferior izquierda)
3. Selecciona **Sign in with GitHub**
4. Autoriza en el navegador

### Conectar GitHub Desktop:

1. Abre GitHub Desktop
2. `File → Options → Accounts`
3. Haz clic en **Sign In** junto a GitHub.com (o tu instancia GHES)
4. Autoriza en el navegador

---

# Módulo 2 — Repositorios y Estructura de Proyecto (0:10-0:35)

**Objetivo:** Aprender a crear, estructurar y trabajar con repositorios de forma profesional.

## Crear un repositorio en GitHub

### Paso 1. Ir a GitHub y crear el repo

1. Ve a GitHub y haz login.
2. Haz clic en el botón verde **"New"** (o ve a github.com/new).
3. Completa los campos:

| Campo | Valor de ejemplo | Explicación |
| --- | --- | --- |
| Owner | Tu organización enterprise | Siempre crear repos dentro de la org, no en tu cuenta personal |
| Repository name | `mi-primer-proyecto` | Nombre corto, sin espacios (usa guiones) |
| Description | `Proyecto de práctica del curso` | Opcional pero recomendado |
| Visibility | **Internal** o **Private** | Ver tabla de abajo |
| Initialize with README | Marcado | Crea el archivo README.md automáticamente |
| .gitignore template | Seleccionar según tecnología | Ej: Node, Python, VisualStudio |

4. Haz clic en **"Create repository"**.

### Visibilidad del repositorio

| Tipo | ¿Quién puede ver? | ¿Cuándo usarlo? |
| --- | --- | --- |
| **Internal** | Todos los miembros de la organización enterprise | Proyectos compartidos entre equipos. Es la opción por defecto en la mayoría de las organizaciones. |
| **Private** | Solo tú y los colaboradores invitados explícitamente | Proyectos sensibles, datos confidenciales o trabajo pre-release |

En entornos enterprise, la visibilidad **Internal** es la más usada porque permite que cualquier miembro de la organización descubra y consulte el código sin necesidad de pedir acceso individual. Esto facilita la reutilización de código entre equipos y es la base del modelo InnerSource.

La organización puede tener políticas que restrinjan qué tipos de visibilidad están permitidos. Si no puedes seleccionar alguna opción, consulta con tu administrador de GitHub.

### Repositorios Template (Plantillas)

GitHub permite crear repos plantilla para estandarizar la estructura entre proyectos:

1. Ve a la configuración del repo (`Settings`)
2. Marca la casilla **"Template repository"**
3. Ahora cualquier persona puede crear un nuevo repo basado en esta plantilla con el botón **"Use this template"**

Útil para estructuras de proyecto estándar, configuraciones CI/CD reutilizables o boilerplates de la organización.

## Estructura básica de un repositorio

Todo repositorio profesional debería tener al menos estos archivos:

```
mi-proyecto/
├── README.md          ← Presentación del proyecto
├── .gitignore         ← Archivos que Git debe ignorar
├── CODEOWNERS         ← Quién revisa qué
├── CONTRIBUTING.md    ← Guía para contribuir
├── src/               ← Código fuente
├── docs/              ← Documentación
└── tests/             ← Pruebas
```

### README.md — La carta de presentación

Es lo primero que ven los visitantes de tu repositorio. Un buen README incluye:

```markdown
# Nombre del Proyecto

Descripción breve de qué hace el proyecto.

## Instalación

Pasos para instalar y configurar el proyecto.

## Uso

Ejemplos de cómo usar el proyecto.

## Contribuir

Guía para contribuir al proyecto.
```

### .gitignore — Lo que NO debe subirse

El archivo `.gitignore` le dice a Git qué archivos ignorar. Esto evita subir archivos innecesarios o peligrosos.

**Ejemplo de `.gitignore` para Node.js:**

```
# Dependencias
node_modules/

# Variables de entorno (NUNCA subir)
.env
.env.local

# Archivos de compilación
dist/
build/

# Archivos del sistema operativo
.DS_Store
Thumbs.db

# Archivos de IDE
.vscode/settings.json
.idea/
```

**Regla de oro:** Si contiene secretos, contraseñas o tokens, DEBE estar en el `.gitignore`.

GitHub ofrece plantillas de `.gitignore` para diferentes lenguajes: [github.com/github/gitignore](https://github.com/github/gitignore)

## Clonar un repositorio

Clonar = descargar una copia completa del repositorio a tu máquina.

### Opción A: Desde GitHub (obtener la URL)

1. Ve al repositorio en GitHub.
2. Haz clic en el botón verde **"<> Code"**.
3. Copia la URL HTTPS.

```
https://github.com/mi-org/mi-primer-proyecto.git
```

### Opción B: Clonar con VS Code

1. Abre VS Code.
2. Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac).
3. Escribe **"Git: Clone"** y selecciónalo.
4. Pega la URL del repositorio.
5. Elige una carpeta destino.
6. VS Code abrirá el proyecto automáticamente.

### Opción C: Clonar con GitHub Desktop

1. Abre GitHub Desktop.
2. `File → Clone Repository`.
3. Selecciona el repositorio de la lista o pega la URL.
4. Elige la carpeta local y haz clic en **"Clone"**.

## Subir cambios: Add, Commit, Push

El flujo de subida de cambios sigue siempre estos tres pasos:

```
┌──────────┐     ┌──────────┐     ┌──────────────┐     ┌──────────┐
│ Editar   │ ──► │   Add    │ ──► │   Commit     │ ──► │   Push   │
│ archivos │     │ (staging)│     │ (guardar     │     │ (subir a │
│          │     │          │     │  snapshot)   │     │  GitHub) │
└──────────┘     └──────────┘     └──────────────┘     └──────────┘
```

### En VS Code (interfaz gráfica):

1. **Edita** un archivo (ej: modifica el README.md).
2. Ve al panel **Source Control** (ícono de rama en la barra lateral, o `Ctrl+Shift+G`).
3. Verás los archivos modificados en "Changes".
4. Haz clic en el **`+`** junto al archivo para hacer **Add** (pasarlo a staging).
5. Escribe un **mensaje de commit** en el campo de texto superior.
6. Haz clic en **"Commit"**.
7. Haz clic en **"Sync Changes"** (o **"Push"**) para subir a GitHub.

### En GitHub Desktop:

1. Los archivos modificados aparecen automáticamente en la columna izquierda.
2. Selecciona los archivos que quieres incluir (checkbox).
3. Escribe un **mensaje de commit** en la parte inferior.
4. Haz clic en **"Commit to main"**.
5. Haz clic en **"Push origin"** en la barra superior.

## Buenas prácticas para mensajes de commit

Un buen mensaje de commit responde a la pregunta: *"¿Qué hice y por qué?"*

### Formato recomendado (Conventional Commits):

```
tipo: descripción breve del cambio

Tipos comunes:
  feat:     Nueva funcionalidad
  fix:      Corrección de error
  docs:     Cambios en documentación
  style:    Formato (no cambia lógica)
  refactor: Reestructuración de código
  test:     Agregar o modificar tests
  chore:    Tareas de mantenimiento
```

### Ejemplos:

| Mal | Bien |
| --- | --- |
| `cambios` | `feat: agregar formulario de contacto` |
| `fix` | `fix: corregir cálculo de impuestos en factura` |
| `update` | `docs: actualizar guía de instalación` |
| `asdf` | `refactor: extraer lógica de validación a servicio` |

## Ejercicio del Módulo 2

> **Tiempo estimado: 10 minutos**

1. Crea un repositorio nuevo en la organización llamado `practica-curso-github` con visibilidad **Internal**.
2. Inicialízalo con README y .gitignore (Node).
3. Clónalo en tu máquina usando VS Code o GitHub Desktop.
4. Edita el README.md: agrega tu nombre y una descripción del proyecto.
5. Crea una carpeta `src/` con un archivo `index.js` que contenga `console.log("Hola mundo");`.
6. Haz add, commit (con mensaje siguiendo Conventional Commits) y push.
7. Verifica en GitHub que los cambios se reflejan.

---

# Módulo 3 — Branching y Colaboración (0:35-0:58)

**Objetivo:** Trabajar en paralelo sin romper el código principal del equipo.

## ¿Por qué usar ramas?

Sin ramas, todos trabajan sobre la misma línea de código:

```
                      Conflicto!
main:  ●───●───●───●───X
       Ana  Bob  Ana  Bob
```

Con ramas, cada persona trabaja en su propia línea:

```
main:              ●───●───────────────●───●
                        \             /     \
feature/login:           ●───●───●──●        \
                                              \
feature/dashboard:                             ●───●───●
```

## Estrategia de ramas: GitFlow simplificado

Para equipos, se recomienda seguir una convención clara:

| Rama | Propósito | Ejemplo |
| --- | --- | --- |
| `main` | Código estable y en producción | Siempre funcional |
| `develop` | Integración de features (opcional) | Preproducción |
| `feature/*` | Nuevas funcionalidades | `feature/login` |
| `fix/*` | Correcciones de errores | `fix/calculo-iva` |
| `hotfix/*` | Correcciones urgentes en producción | `hotfix/security-patch` |

```
main:        ●─────────────────●──────────────●
              \               /              /
develop:       ●───●─────●───●──────●───●───●
                    \   /            \     /
feature/login:       ●─●             \   /
                                      \ /
feature/pagos:                         ●─●
```

## Crear y cambiar de ramas

### En GitHub (plataforma web):

1. Ve a tu repositorio.
2. Haz clic en el desplegable que dice **"main"** (selector de ramas).
3. Escribe el nombre de la nueva rama: `feature/mi-cambio`.
4. Haz clic en **"Create branch: feature/mi-cambio from main"**.
5. Ya estás trabajando en la nueva rama.

### En VS Code:

1. Haz clic en el nombre de la rama actual (esquina inferior izquierda, ej: `main`).
2. Selecciona **"Create new branch..."**.
3. Escribe el nombre: `feature/mi-cambio`.
4. Presiona Enter. Ahora trabajas en la nueva rama.

### En GitHub Desktop:

1. Haz clic en **"Current Branch"** en la barra superior.
2. Haz clic en **"New Branch"**.
3. Escribe el nombre y haz clic en **"Create Branch"**.

Las ramas eliminadas se pueden recuperar desde GitHub durante un tiempo limitado. En la página del Pull Request cerrado/fusionado verás un botón **"Restore branch"**.

## Pull Requests: El corazón de la colaboración

Un Pull Request (PR) es una solicitud para integrar los cambios de tu rama al código principal.

### Paso 1. Crear un Pull Request

1. Sube tu rama a GitHub (push).
2. Ve a tu repositorio en GitHub.
3. Verás un banner amarillo: **"Compare & pull request"** → haz clic.
4. Completa el formulario:

```
Título:    feat: agregar sistema de login

Descripción:
  ## ¿Qué cambió?
  - Agregué la página de login con validación de email
  - Integré autenticación con JWT

  ## ¿Cómo probarlo?
  1. Ir a /login
  2. Ingresar email y contraseña válidos
  3. Verificar redirección al dashboard

  ## Screenshots
  (Opcional: captura de pantalla del cambio)

  Closes #42
```

5. Selecciona **Reviewers** (personas que revisarán tu código).
6. Haz clic en **"Create pull request"**.

### Paso 2. ¿Qué revisar en un PR?

Como revisor, verifica:

| Aspecto | Pregunta clave |
| --- | --- |
| **Funcionalidad** | ¿El código hace lo que dice que hace? |
| **Legibilidad** | ¿Se entiende sin necesidad de explicación? |
| **Tests** | ¿Se agregaron o actualizaron pruebas? |
| **Seguridad** | ¿No se exponen secretos o datos sensibles? |
| **Convenciones** | ¿Sigue los estándares del equipo? |

### Paso 3. Flujo de aprobación

```
Autor crea PR  →  Reviewers revisan  →  Dejan comentarios  →  Autor corrige
                                                                    ↓
                                                            Reviewers aprueban
                                                                    ↓
                                                             Merge a main
```

En GitHub se ve así:

- **Approved**: El revisor aprueba los cambios.
- **Changes requested**: El revisor pide modificaciones.
- **Commented**: El revisor deja comentarios sin aprobar ni rechazar.

## Resolución básica de conflictos

Los conflictos ocurren cuando dos personas modifican la misma línea de un archivo.

### Ejemplo de conflicto:

Ana en `feature/header`:

```html
<h1>Bienvenido a la Tienda</h1>
```

Bob en `feature/branding`:

```html
<h1>MegaStore - Tu tienda online</h1>
```

### ¿Cómo resolver?

**En GitHub (interfaz web):**

1. Al hacer merge verás el mensaje: **"This branch has conflicts"**.
2. Haz clic en **"Resolve conflicts"**.
3. GitHub te mostrará el conflicto marcado así:

```
<<<<<<< feature/header
<h1>Bienvenido a la Tienda</h1>
=======
<h1>MegaStore - Tu tienda online</h1>
>>>>>>> feature/branding
```

4. Edita el archivo para quedarte con la versión correcta:

```html
<h1>MegaStore - Bienvenido a tu tienda online</h1>
```

5. Elimina los marcadores (`<<<<<<<`, `=======`, `>>>>>>>`).
6. Haz clic en **"Mark as resolved"** y luego **"Commit merge"**.

**En VS Code:**

VS Code detecta los conflictos y te ofrece botones:

- **Accept Current Change**: Quedarse con tu versión.
- **Accept Incoming Change**: Quedarse con la otra versión.
- **Accept Both Changes**: Incluir ambas.
- **Compare Changes**: Ver lado a lado.

## Ejercicio del Módulo 3

> **Tiempo estimado: 10 minutos**

1. En tu repo `practica-curso-github`, crea una rama `feature/about-page`.
2. En esa rama, crea el archivo `src/about.js` con contenido: `console.log("About page");`.
3. Haz commit y push de la rama.
4. En GitHub, crea un Pull Request de `feature/about-page` hacia `main`.
5. Escribe una descripción siguiendo el formato del ejemplo.
6. Revisa los cambios en la pestaña "Files changed".
7. Aprueba y haz merge del PR.
8. Verifica que el archivo aparece en `main`.

---

# Módulo 4 — Issues, Proyectos y Planeación Ligera (0:58-1:13)

**Objetivo:** Usar GitHub como herramienta de gestión de trabajo, no solo de código.

## Issues: Más que reportar bugs

Los Issues son la forma de registrar y rastrear cualquier tipo de trabajo en GitHub.

### Tipos comunes de Issues:

| Tipo | Uso | Ejemplo |
| --- | --- | --- |
| **Bug** | Reportar errores | "El botón de enviar no funciona en Safari" |
| **Feature** | Solicitar funcionalidades | "Agregar modo oscuro a la app" |
| **Task** | Tareas generales | "Actualizar dependencias a última versión" |
| **Docs** | Documentación | "Documentar API de pagos" |

### Crear un Issue paso a paso:

1. Ve a tu repositorio, pestaña **"Issues"**.
2. Haz clic en **"New issue"**.
3. Completa:

```
Título: El formulario de contacto no envía emails

Descripción:
  ## Descripción
  Al hacer clic en "Enviar" en el formulario de contacto,
  no se envía el email y no aparece mensaje de error.

  ## Pasos para reproducir
  1. Ir a /contacto
  2. Llenar todos los campos
  3. Hacer clic en "Enviar"
  4. Nada sucede

  ## Comportamiento esperado
  Debería enviar el email y mostrar mensaje de confirmación.

  ## Entorno
  - Navegador: Safari 17
  - SO: macOS 14
```

4. Asigna labels, milestones y assignees.

### Issue Templates (Plantillas)

Para estandarizar cómo se crean Issues en tu repositorio:

1. Ve a `Settings → Features → Issues → Set up templates`.
2. Elige una plantilla predefinida (Bug report, Feature request) o crea una personalizada.
3. GitHub creará archivos en `.github/ISSUE_TEMPLATE/`.

Este repositorio incluye plantillas de ejemplo en `.github/ISSUE_TEMPLATE/` que puedes copiar a tus propios proyectos.

### Labels (Etiquetas)

Las labels clasifican los Issues visualmente:

| Label | Uso |
| --- | --- |
| `bug` | Errores |
| `enhancement` | Mejoras |
| `documentation` | Documentación |
| `good first issue` | Ideal para nuevos contribuidores |
| `priority: high` | Urgente |
| `wontfix` | No se va a arreglar |

Puedes crear labels personalizadas en `Issues → Labels → New label`.

### Milestones (Hitos)

Los milestones agrupan Issues bajo un objetivo común con fecha límite:

1. Ve a `Issues → Milestones → New milestone`.
2. Define nombre, descripción y fecha límite.
3. Asigna Issues al milestone.

```
Milestone: "MVP v1.0"
Fecha límite: 15 de Abril
Issues:
  [x] #1 - Crear página de inicio
  [x] #2 - Implementar login
  [ ] #3 - Sistema de pagos
  [ ] #4 - Dashboard de usuario
Progreso: 50% completado
```

## GitHub Projects — Tableros Kanban

GitHub Projects ofrece una vista de tablero estilo Kanban para organizar el trabajo.

### Crear un Project:

1. Ve a tu repositorio, pestaña **"Projects"**.
2. Haz clic en **"New project"**.
3. Elige la vista: **Board** (tablero Kanban).
4. Agrega columnas típicas:

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  Backlog    │  │ In Progress │  │ In Review   │  │ Done        │
│             │  │             │  │             │  │             │
│  #5 API     │  │  #3 Pagos   │  │  #2 Login   │  │  #1 Home    │
│  #6 Tests   │  │             │  │             │  │  #4 Dashboard│
│  #7 Deploy  │  │             │  │             │  │             │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
```

5. Arrastra los Issues entre columnas conforme avanza el trabajo.

### Vincular PRs con Issues

Puedes cerrar Issues automáticamente cuando se fusiona un PR usando palabras clave en el mensaje del PR:

```
Closes #42
Fixes #15
Resolves #7
```

Cuando el PR se fusione, los Issues referenciados se cerrarán automáticamente.

## Ejercicio del Módulo 4

> **Tiempo estimado: 8 minutos**

1. En tu repo, crea 3 Issues:
   - Un bug: "Error en la página de about" (label: `bug`)
   - Un feature: "Agregar página de contacto" (label: `enhancement`)
   - Una tarea: "Configurar linter" (label: `chore`)
2. Crea un milestone llamado "Sprint 1" con fecha límite a una semana.
3. Asigna los 3 Issues al milestone.
4. Crea un Project tipo Board con columnas: Backlog, In Progress, Done.
5. Agrega los Issues al Project y mueve uno a "In Progress".

---

# Módulo 5 — Seguridad y Gobernanza del Repositorio (1:13-1:38)

**Objetivo:** Configurar las políticas y controles que protegen la integridad del repositorio y del equipo.

## ¿Por qué importa la gobernanza?

En un repositorio personal puedes hacer push directo a `main` sin consecuencias graves. En un equipo, un push directo a `main` puede romper producción, sobrescribir el trabajo de otros o introducir código sin revisar. La gobernanza establece las reglas del juego para que la colaboración sea predecible y segura.

## Rulesets — El mecanismo moderno de protección

Los Rulesets son la forma actual de definir reglas de protección en GitHub. Reemplazan las Branch Protection Rules legacy con una interfaz más flexible y con soporte para múltiples patrones de ramas.

### Crear un Ruleset:

1. Ve a `Settings → Rules → Rulesets`.
2. Haz clic en **"New ruleset"** → **"New branch ruleset"**.
3. Configura:

| Campo | Valor recomendado | Propósito |
| --- | --- | --- |
| Name | `proteccion-main` | Nombre descriptivo |
| Enforcement | Active | Que se aplique (no solo en modo evaluación) |
| Target branches | `main` | A qué ramas aplica |

4. Selecciona las reglas que necesitas:

| Regla | Qué hace | Recomendación |
| --- | --- | --- |
| **Restrict deletions** | Impide borrar la rama | Siempre activa en main |
| **Require a pull request** | Obliga a usar PRs, no push directo | Siempre activa en main |
| **Required approvals** | Cuántas aprobaciones necesita el PR | Mínimo 1 en equipos |
| **Require status checks** | El CI debe pasar antes de merge | Activa si tienes Actions |
| **Require signed commits** | Commits firmados criptográficamente | Opcional, para compliance |
| **Block force pushes** | Impide reescribir historial | Siempre activa en main |
| **Require linear history** | Solo squash o rebase, no merge commits | Opcional, mantiene historial limpio |

5. Haz clic en **"Create"**.

### Rulesets vs Branch Protection Rules

Las Branch Protection Rules siguen funcionando pero GitHub las considera legacy. La diferencia principal es que los rulesets permiten aplicar reglas a múltiples patrones de ramas en una sola configuración (por ejemplo, `main` y `release/*` con las mismas reglas), mientras que con Branch Protection Rules necesitas una regla por patrón.

En GitHub Enterprise, los rulesets se pueden definir a nivel de organización y aplicarse a todos los repositorios de forma centralizada. Esto es una ventaja significativa para equipos de plataforma o administradores que necesitan establecer estándares de gobernanza sin depender de que cada equipo configure su propio repo.

## CODEOWNERS — Revisión obligatoria por área

El archivo `CODEOWNERS` define quién debe revisar los cambios en cada parte del repositorio. Cuando alguien crea un PR que toca archivos cubiertos por CODEOWNERS, GitHub asigna automáticamente a los revisores correspondientes.

### Ubicación del archivo:

El archivo se coloca en la raíz del repositorio o dentro de `.github/`:

```
# CODEOWNERS
# Cada línea define un patrón de archivos y los revisores responsables

# El equipo de frontend revisa todo en src/
/src/                    @mi-org/frontend

# La líder técnica revisa cambios en la configuración de CI
/.github/workflows/      @maria-garcia

# El equipo de seguridad revisa cambios en configuraciones sensibles
/CODEOWNERS              @mi-org/seguridad
*.env.example            @mi-org/seguridad

# Cualquier cambio en docs lo revisa la tech writer
/docs/                   @ana-lopez
```

En entornos enterprise se usan equipos de la organización (`@mi-org/nombre-equipo`) en lugar de usuarios individuales. Esto hace que la propiedad del código sobreviva a la rotación de personas.

Para que CODEOWNERS sea obligatorio (no solo sugerido), necesitas activar **"Require review from Code Owners"** en el ruleset.

## Gestión de secretos

### El error más común: subir secretos al repositorio

```python
# NUNCA hagas esto
API_KEY = "sk-a1b2c3d4e5f6g7h8i9j0"
DATABASE_PASSWORD = "MiPasswordSuperSecreto123"
```

Una vez que un secreto se sube a GitHub, considéralo comprometido. Incluso si lo borras después, queda en el historial de Git y cualquiera que haya clonado el repo tiene una copia.

### Separar código de configuración con variables de entorno

En lugar de poner secretos en el código, se usan como variables de entorno:

**Archivo `.env` (LOCAL, nunca se sube a Git):**

```
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
API_KEY=sk-a1b2c3d4e5f6g7h8i9j0
```

**En tu código:**

```python
# Leer de variables de entorno
import os
api_key = os.environ.get("API_KEY")
```

```javascript
// En Node.js
const apiKey = process.env.API_KEY;
```

### GitHub Secrets — Para CI/CD y automatización

GitHub tiene un almacén seguro de secretos para usar en workflows:

1. Ve a `Settings → Secrets and variables → Actions`.
2. Haz clic en **"New repository secret"**.
3. Define nombre y valor (ej: `API_KEY`).

**Usar secretos en un workflow:**

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        env:
          API_KEY: ${{ secrets.API_KEY }}
        run: echo "Deploying with secure credentials..."
```

Los secretos nunca se imprimen en los logs. GitHub los enmascara automáticamente con `***`.

### Environment Secrets

Permiten tener secretos diferentes por entorno (desarrollo, staging, producción):

1. Ve a `Settings → Environments`.
2. Crea un entorno (ej: `production`).
3. Agrega secretos específicos para ese entorno.
4. Opcional: agrega reglas de protección (requiere aprobación antes de deploy, restringe a cierta rama).

### Otras configuraciones de seguridad del repositorio

Estas configuraciones se encuentran en `Settings → Code security and analysis`:

| Configuración | Qué hace | Recomendación |
| --- | --- | --- |
| **Dependency graph** | Muestra las dependencias del proyecto | Activar |
| **Dependabot alerts** | Alerta sobre vulnerabilidades en dependencias | Activar |
| **Dependabot security updates** | Crea PRs para actualizar dependencias vulnerables | Activar |
| **Secret scanning** | Detecta secretos filtrados en el código | Activar |
| **Push protection** | Bloquea push que contenga secretos conocidos | Activar |

Para un tratamiento profundo de estas herramientas, consulta el [workshop de GitHub Advanced Security](https://github.com/armandoblanco/workshop-github-advanced-security).

## Ejercicio del Módulo 5

> **Tiempo estimado: 12 minutos**

1. En tu repo, ve a `Settings → Rules → Rulesets`.
2. Crea un ruleset llamado `proteccion-main` que aplique a la rama `main` con estas reglas:
   - Require a pull request before merging (1 aprobación)
   - Block force pushes
   - Restrict deletions
3. Crea un archivo `CODEOWNERS` en la raíz del repo con al menos dos reglas (puedes usar tu propio usuario de GitHub como reviewer).
4. Crea un archivo `.env.example` con variables de ejemplo (sin valores reales):
   ```
   DATABASE_URL=
   API_KEY=
   SECRET_KEY=
   ```
5. Verifica que `.env` está en tu `.gitignore`.
6. Intenta hacer push directo a `main` y observa qué sucede.

---

# Módulo 6 — Automatización con GitHub Actions (1:38-1:58)

**Objetivo:** Entender CI/CD y crear un workflow básico que valide código automáticamente.

## ¿Qué es CI/CD?

| Concepto | Significado | Ejemplo |
| --- | --- | --- |
| **CI** — Continuous Integration | Integrar y validar código automáticamente | Ejecutar tests cada vez que alguien hace push |
| **CD** — Continuous Delivery | Preparar el código para producción automáticamente | Build + deploy automático al hacer merge en main |

```
Push/PR  →  Build  →  Tests  →  Deploy
```

## ¿Qué es GitHub Actions?

Es el sistema de automatización integrado en GitHub. Permite ejecutar workflows (flujos de trabajo) en respuesta a eventos del repositorio.

### Anatomía de un Workflow:

```
┌─────────────────────────────────────────────────┐
│                   Workflow                       │
│  (Archivo YAML en .github/workflows/)           │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │              Job: build                   │   │
│  │                                           │   │
│  │  Step 1: Checkout código                  │   │
│  │  Step 2: Instalar dependencias            │   │
│  │  Step 3: Ejecutar tests                   │   │
│  │  Step 4: Build de la aplicación           │   │
│  │                                           │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │              Job: deploy                  │   │
│  │  (depende de: build)                     │   │
│  │                                           │   │
│  │  Step 1: Deploy a Azure/AWS/etc           │   │
│  │                                           │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

| Concepto | ¿Qué es? | Analogía |
| --- | --- | --- |
| **Workflow** | Proceso automatizado completo | La receta completa |
| **Event** | Lo que dispara el workflow | "Cuando alguien hace push..." |
| **Job** | Grupo de pasos que se ejecutan juntos | Un paso de la receta |
| **Step** | Acción individual dentro de un job | Una instrucción específica |
| **Runner** | La máquina donde se ejecuta | La cocina donde preparas |
| **Action** | Componente reutilizable | Un electrodoméstico |

### Runners en Enterprise

En GitHub Enterprise se pueden configurar **self-hosted runners**: máquinas propias de la organización donde se ejecutan los workflows. Esto es común cuando se necesita acceso a redes internas, hardware específico, o para cumplir con políticas de compliance. La organización puede también usar **larger runners** (máquinas con más recursos) o **runners en Azure VNET** para integración con la infraestructura cloud.

## Ejemplo: CI básico para Node.js

```yaml
# .github/workflows/ci.yml
name: CI - Integración Continua

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout del código
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Instalar dependencias
        run: npm ci

      - name: Ejecutar tests
        run: npm test
```

## Ejemplo: CI básico para .NET

```yaml
# .github/workflows/dotnet-ci.yml
name: .NET CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout del código
        uses: actions/checkout@v4

      - name: Configurar .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0.x'

      - name: Restaurar dependencias
        run: dotnet restore

      - name: Build
        run: dotnet build --no-restore

      - name: Ejecutar tests
        run: dotnet test --no-build --verbosity normal
```

## Verificar ejecución

Después de hacer push del archivo workflow:

1. Ve a tu repositorio, pestaña **"Actions"**.
2. Verás la ejecución del workflow en tiempo real.

## Vincular Actions con Rulesets

Si configuraste rulesets en el Módulo 5, puedes vincular los status checks del workflow para que sean obligatorios:

1. Ve a `Settings → Rules → Rulesets → proteccion-main`.
2. Activa **"Require status checks to pass"**.
3. Busca y selecciona el job `build-and-test`.
4. Ahora los PRs no se pueden fusionar si el workflow falla.

## Ejercicio del Módulo 6

> **Tiempo estimado: 10 minutos**

1. En tu repo, crea la carpeta `.github/workflows/`.
2. Crea el archivo `ci.yml` usando el ejemplo de Node.js (o .NET si prefieres).
3. Si usas Node.js, asegúrate de tener un `package.json` en la raíz (puedes usar el que incluye este repositorio como referencia).
4. Haz commit y push.
5. Ve a la pestaña Actions y observa la ejecución.
6. Crea una rama `feature/test-ci`, haz un cambio cualquiera, y crea un PR hacia `main`.
7. Observa cómo el workflow se ejecuta automáticamente en el PR.

---

# Módulo 7 — Releases, Tags y Packages (1:58-2:20)

**Objetivo:** Publicar versiones del proyecto de forma profesional y reproducible.

## ¿Qué problema resuelven?

Cuando un equipo trabaja en un proyecto, necesita responder preguntas como: ¿qué versión tiene el cliente en producción? ¿qué cambió entre la versión 1.2 y la 1.3? ¿cómo vuelvo a la versión que funcionaba? Tags, Releases y Packages resuelven estos problemas.

## Tags — Marcar puntos en el historial

Un tag es una etiqueta que se pega a un commit específico. Es como ponerle un post-it a una fotografía en un álbum para decir "esta es la versión 1.0".

### Tipos de tags:

| Tipo | Descripción | Uso |
| --- | --- | --- |
| **Lightweight** | Solo un nombre apuntando a un commit | Para uso interno, rápido |
| **Annotated** | Incluye autor, fecha y mensaje | Para releases formales |

### Versionado semántico (SemVer)

La convención más usada para nombrar versiones es SemVer: `MAJOR.MINOR.PATCH`

```
v1.0.0  →  v1.1.0  →  v1.1.1  →  v2.0.0

MAJOR: Cambios incompatibles (rompe API)
MINOR: Nueva funcionalidad compatible hacia atrás
PATCH: Corrección de errores compatible hacia atrás
```

Ejemplos concretos:

| Cambio | Versión anterior | Versión nueva | ¿Por qué? |
| --- | --- | --- | --- |
| Corrijo un typo en un cálculo | v1.2.0 | v1.2.1 | Patch: fix sin cambio de funcionalidad |
| Agrego endpoint nuevo a la API | v1.2.1 | v1.3.0 | Minor: funcionalidad nueva, compatible |
| Cambio el formato de respuesta de la API | v1.3.0 | v2.0.0 | Major: rompe compatibilidad con clientes existentes |

### Crear un tag desde la línea de comandos:

```bash
# Tag lightweight
git tag v1.0.0

# Tag annotated (recomendado)
git tag -a v1.0.0 -m "Primera versión estable"

# Subir tags a GitHub
git push origin v1.0.0
# O todos los tags a la vez:
git push origin --tags
```

La forma más directa en el día a día es crear el tag al momento de crear un Release desde la UI de GitHub (siguiente sección).

## Releases — Distribución formal de una versión

Un Release en GitHub es una versión publicada de tu proyecto. Se construye sobre un tag y agrega notas de cambios y archivos adjuntos (binarios, instaladores, etc.).

### Tag vs Release

| Concepto | Tag | Release |
| --- | --- | --- |
| **Qué es** | Etiqueta en un commit | Publicación formal del proyecto |
| **Contenido** | Solo referencia a un commit | Notas de cambios + archivos adjuntos |
| **Visibilidad** | Técnico (lista de tags) | Prominente (página de Releases) |
| **Analogía** | Marcar "v1.0" en el calendario | Enviar el comunicado de prensa de v1.0 |

Todo Release tiene un tag, pero no todo tag necesita un Release.

### Crear un Release:

1. Ve a tu repositorio, sección **"Releases"** (barra lateral derecha) → **"Create a new release"**.
2. Completa:

| Campo | Valor | Notas |
| --- | --- | --- |
| Tag | `v1.0.0` | Puedes crear un tag nuevo aquí mismo |
| Target | `main` | La rama desde donde se crea |
| Title | `v1.0.0 — Primera versión estable` | Nombre descriptivo |
| Description | Ver abajo | Notas de cambios |

3. Para la descripción, haz clic en **"Generate release notes"**. GitHub genera automáticamente las notas basándose en los PRs fusionados desde el último release. Puedes editarlas después.
4. Opcional: adjunta archivos binarios arrastrándolos al campo de assets.
5. Marca **"Set as the latest release"**.
6. Haz clic en **"Publish release"**.

### Auto-generated release notes

GitHub puede generar las notas automáticamente si configuras un archivo `.github/release.yml`:

```yaml
# .github/release.yml
changelog:
  categories:
    - title: Nuevas funcionalidades
      labels:
        - enhancement
    - title: Corrección de errores
      labels:
        - bug
    - title: Documentación
      labels:
        - documentation
    - title: Otros cambios
      labels:
        - "*"
```

Con este archivo, las release notes se organizan por las labels de los PRs fusionados, lo cual le da sentido a etiquetar bien los PRs y Issues desde el inicio.

### Pre-releases

Si una versión no está lista para producción pero quieres que sea accesible para pruebas:

1. Al crear el Release, marca **"Set as a pre-release"**.
2. Usa convención de SemVer para pre-releases: `v2.0.0-beta.1`, `v2.0.0-rc.1`.
3. Los pre-releases aparecen marcados como tal en la página de Releases y no se consideran "latest".

## GitHub Packages — Publicar artefactos consumibles

GitHub Packages es un registro de paquetes integrado en GitHub. Permite publicar y consumir paquetes directamente desde tus repositorios.

### ¿Qué tipo de paquetes soporta?

| Registro | Lenguaje/Tecnología | Ejemplo de uso |
| --- | --- | --- |
| **npm** | JavaScript/TypeScript | Publicar librerías Node.js |
| **NuGet** | .NET | Publicar paquetes .NET |
| **Maven** | Java | Publicar artefactos Java |
| **Container Registry** | Docker | Publicar imágenes de contenedor |
| **RubyGems** | Ruby | Publicar gems |

### ¿Cuándo usar Packages en enterprise?

El caso más común es publicar librerías internas que varios proyectos consumen. En lugar de copiar código entre repositorios, publicas un paquete y los demás proyectos lo instalan como una dependencia normal. Dado que GitHub Packages vive dentro de la misma plataforma, las políticas de acceso de la organización aplican automáticamente: un paquete en un repo Internal es visible para toda la org.

```
Equipo A: publica @mi-org/design-system v2.1.0 en GitHub Packages
    ↓
Equipo B: npm install @mi-org/design-system → obtiene v2.1.0
Equipo C: npm install @mi-org/design-system → obtiene v2.1.0
```

### Publicar un paquete con Actions (ejemplo npm):

```yaml
# .github/workflows/publish.yml
name: Publish Package

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://npm.pkg.github.com'

      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Este workflow se dispara automáticamente cuando publicas un Release, lo cual cierra el ciclo: creas un tag, publicas un Release, y el paquete se publica automáticamente.

### Publicar una imagen de contenedor con Actions:

```yaml
# .github/workflows/docker-publish.yml
name: Publish Docker Image

on:
  release:
    types: [published]

jobs:
  push:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4

      - name: Login to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/${{ github.repository }}:${{ github.event.release.tag_name }}
```

## Ejercicio del Módulo 7

> **Tiempo estimado: 10 minutos**

1. En tu repo `practica-curso-github`, haz un cambio cualquiera en `main` (si tienes rulesets activos, hazlo vía PR).
2. Ve a **Releases** → **"Create a new release"**.
3. Crea un tag `v1.0.0` apuntando a `main`.
4. Escribe un título: `v1.0.0 — Primera versión del curso`.
5. Haz clic en **"Generate release notes"** para ver las notas automáticas.
6. Edita las notas si es necesario y publica el Release.
7. Haz otro cambio menor, crea un nuevo Release con tag `v1.0.1`.
8. Compara las dos versiones: en la página de Releases, observa cómo cada versión muestra los cambios desde la anterior.
9. Explora la sección **"Tags"** del repositorio y verifica que aparecen ambos tags.

---

# Cierre y Siguientes Pasos (2:20-2:30)

## Recapitulación

| Módulo | Concepto clave |
| --- | --- |
| 1. Intro | Git es local, GitHub es la nube. Repos, commits, branches, PRs |
| 2. Repos | Crear repos, README, .gitignore, clonar, add/commit/push |
| 3. Branching | Ramas paralelas, Pull Requests, resolución de conflictos |
| 4. Issues | Gestión de trabajo con Issues, labels, milestones y Projects |
| 5. Gobernanza | Rulesets, CODEOWNERS, secretos, políticas de protección |
| 6. Actions | CI/CD automático con workflows YAML |
| 7. Releases | Tags, versionado semántico, Releases y Packages |

## Para profundizar

| Recurso | Enlace |
| --- | --- |
| GitHub Docs | [docs.github.com](https://docs.github.com) |
| GitHub Skills | [skills.github.com](https://skills.github.com) |
| Gitignore Templates | [github.com/github/gitignore](https://github.com/github/gitignore) |
| Conventional Commits | [conventionalcommits.org](https://www.conventionalcommits.org) |
| Semantic Versioning | [semver.org](https://semver.org) |
| Actions Marketplace | [github.com/marketplace?type=actions](https://github.com/marketplace?type=actions) |
| GitHub Foundations Certification | [resources.github.com/learn/certifications](https://resources.github.com/learn/certifications/) |

## Cursos complementarios

| Tema | Repositorio |
| --- | --- |
| GitHub Copilot | [workshop-githubcopilot-basico-net](https://github.com/armandoblanco/workshop-githubcopilot-basico-net) |
| GitHub Advanced Security | [workshop-github-advanced-security](https://github.com/armandoblanco/workshop-github-advanced-security) |

---

# Módulo Opcional A — Code Review a Profundidad

> **Duración estimada: 15 minutos. Usar si sobra tiempo después del módulo 7.**

El Módulo 3 cubre los fundamentos de Pull Requests. Este módulo opcional profundiza en las herramientas de revisión de código que hacen la diferencia en equipos enterprise.

## Tipos de comentarios en un Code Review

Cuando revisas un PR en la pestaña "Files changed", no todos los comentarios tienen el mismo peso. Una práctica que mejora la comunicación es usar prefijos que indiquen la intención:

| Prefijo | Significado | ¿Bloquea el merge? |
| --- | --- | --- |
| `nit:` | Observación menor (estilo, naming) | No |
| `suggestion:` | Propuesta concreta de mejora | Depende |
| `question:` | Pregunta para entender, no necesariamente un cambio | No |
| `blocker:` | Problema que debe resolverse antes de merge | Sí |
| `praise:` | Algo bien hecho que vale la pena destacar | No |

Esto evita la ambiguedad de "¿este comentario es una sugerencia o me está bloqueando el PR?".

## Suggestion Comments

GitHub permite proponer cambios concretos directamente en la revisión. En lugar de escribir "cambia esta línea por X", puedes usar un **suggestion block** que el autor acepta con un clic:

1. En "Files changed", haz clic en el **`+`** junto a la línea que quieres cambiar.
2. Haz clic en el ícono de **sugerencia** (parece un documento con +/-).
3. Edita el código propuesto dentro del bloque que aparece.
4. Envía el comentario.

El autor del PR puede aceptar la sugerencia directamente desde la conversación, lo que crea un commit con la atribución del revisor como co-author.

Se pueden agrupar varias sugerencias en un solo commit usando **"Add suggestion to batch"** y luego **"Commit suggestions"**.

## Draft Pull Requests

Cuando empiezas a trabajar en algo pero todavía no está listo para revisión, puedes crear un **Draft PR**:

1. Al crear el PR, haz clic en la flecha junto a "Create pull request".
2. Selecciona **"Create draft pull request"**.

Un Draft PR tiene estas características:

- No se puede fusionar hasta que se marque como "Ready for review".
- No asigna reviewers automáticamente (incluyendo CODEOWNERS).
- Los status checks sí se ejecutan, lo cual es útil para validar tu CI antes de pedir revisión.
- Sirve como señal al equipo de que el trabajo está en progreso sin generar ruido de notificaciones.

Para marcarlo como listo: haz clic en **"Ready for review"** en la parte inferior del PR.

## PR Templates

Así como existen Issue Templates, puedes crear un template para Pull Requests que estandarice la información que todo PR debe incluir:

Crea el archivo `.github/pull_request_template.md`:

```markdown
## Descripción

Descripción breve de los cambios.

## Tipo de cambio

- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Breaking change
- [ ] Documentación

## ¿Cómo se probó?

Describe los pasos para validar los cambios.

## Checklist

- [ ] Mi código sigue las convenciones del proyecto
- [ ] He agregado tests que cubren mis cambios
- [ ] La documentación está actualizada
- [ ] Los status checks pasan
```

Este template se aplica automáticamente a todos los PRs nuevos del repositorio.

## Review Assignment y Auto-assignment

En equipos grandes, definir quién revisa qué puede ser tedioso. GitHub ofrece varias herramientas:

**CODEOWNERS** (ya cubierto en Módulo 5): asigna revisores por ruta de archivos.

**Auto-assignment en equipos**: Si un equipo está configurado como reviewer, GitHub puede distribuir automáticamente las reviews entre los miembros:

1. Ve a la página del equipo en la organización.
2. `Settings → Code review`.
3. Activa **"Auto-assign"**.
4. Configura cuántos miembros del equipo deben ser asignados por PR.

Esto evita que un solo miembro del equipo se convierta en cuello de botella para todas las reviews.

## Ejercicio del Módulo Opcional A

> **Tiempo estimado: 8 minutos**

1. Crea el archivo `.github/pull_request_template.md` en tu repo usando el template del ejemplo.
2. Crea una rama con un cambio cualquiera y abre un PR. Verifica que el template se aplica automáticamente.
3. En la pestaña "Files changed", deja un comentario con una sugerencia usando el ícono de suggestion.
4. Acepta tu propia sugerencia para ver cómo se genera el commit.
5. Prueba crear un Draft PR: crea otra rama, haz un cambio, y al crear el PR selecciona "Draft".

---

# Módulo Opcional B — Roles, Permisos y Administración de Organización

> **Duración estimada: 15 minutos. Usar si sobra tiempo o si la audiencia incluye administradores.**

## Niveles de acceso en un repositorio

GitHub define cinco niveles de acceso para repositorios. Cada nivel incluye los permisos del nivel anterior:

| Rol | Qué puede hacer | Para quién |
| --- | --- | --- |
| **Read** | Ver código, issues, PRs, wiki, descargar | Stakeholders, QA, personas que solo consultan |
| **Triage** | Todo lo de Read + gestionar issues y PRs (labels, assign, close) sin acceso a código | Project managers, soporte |
| **Write** | Todo lo de Triage + push a ramas, crear ramas, merge PRs | Desarrolladores activos |
| **Maintain** | Todo lo de Write + gestionar settings del repo (sin acciones destructivas) | Tech leads, project managers técnicos |
| **Admin** | Todo, incluyendo eliminar repo, gestionar acceso, configurar webhooks | Owners del proyecto, administradores |

En enterprise, los permisos se asignan a través de **equipos** (teams) de la organización, no a usuarios individuales. Esto hace que el onboarding/offboarding sea mucho más limpio: agregas a alguien al equipo y automáticamente hereda los permisos de todos los repos que ese equipo tiene configurados.

## Equipos (Teams)

Los equipos son grupos de miembros dentro de una organización. Un equipo puede tener acceso a múltiples repositorios con diferentes niveles.

```
Organización: mi-empresa
├── Equipo: frontend
│   ├── repo: web-app         (Write)
│   ├── repo: design-system   (Admin)
│   └── repo: api-gateway     (Read)
├── Equipo: backend
│   ├── repo: api-gateway     (Write)
│   ├── repo: auth-service    (Write)
│   └── repo: web-app         (Read)
└── Equipo: platform
    ├── repo: infra-terraform  (Admin)
    └── repo: ci-templates     (Admin)
```

Los equipos pueden ser anidados: un equipo `engineering` puede contener los sub-equipos `frontend`, `backend` y `platform`. Los equipos hijo heredan los permisos del equipo padre.

## Configuración de la organización

Los administradores de la organización enterprise pueden definir políticas que aplican a todos los repositorios:

| Política | Dónde se configura | Qué controla |
| --- | --- | --- |
| Visibilidad por defecto | `Org Settings → Member privileges` | Si se permite crear repos Internal o Private |
| Base permissions | `Org Settings → Member privileges` | Nivel de acceso por defecto para todos los miembros |
| Fork policy | `Org Settings → Member privileges` | Si se permite hacer fork de repos de la org |
| Actions permissions | `Org Settings → Actions → General` | Qué workflows pueden ejecutarse, qué actions están permitidas |
| Rulesets de organización | `Org Settings → Rules → Rulesets` | Reglas de protección que aplican a todos los repos |

### Base permissions

El **base permission** define qué acceso tiene cualquier miembro de la organización a cualquier repositorio por defecto. Las opciones son: None, Read, Write, Admin.

En la mayoría de organizaciones enterprise el base permission es **Read** o **None**. Si es Read, cualquier miembro puede ver cualquier repo Internal, lo cual favorece la transparencia y el InnerSource. Si es None, cada repo debe dar acceso explícito.

## Enterprise Managed Users (EMU)

En algunas organizaciones enterprise, las cuentas de GitHub están gestionadas por un proveedor de identidad (Azure AD/Entra ID, Okta, etc.). En este modelo:

- Las cuentas se crean y eliminan automáticamente desde el IdP.
- Los usuarios no pueden crear repos fuera de la organización.
- El SSO es obligatorio.
- Los equipos se pueden sincronizar con grupos del IdP.

Esto es relevante porque si tu organización usa EMU, el proceso de onboarding es diferente: no hay "crear cuenta en github.com", sino que la cuenta se provisiona automáticamente cuando se agrega al grupo correcto en el IdP.

## Ejercicio del Módulo Opcional B

> **Tiempo estimado: 5 minutos (demostración del instructor)**

Este módulo es más efectivo como demostración del instructor porque requiere permisos de administrador de organización:

1. Mostrar la pantalla de `Organization Settings → Member privileges`.
2. Mostrar cómo se crea un equipo y se le asigna acceso a un repositorio.
3. Mostrar la diferencia entre base permissions Read y None.
4. Si aplica, mostrar la configuración de rulesets a nivel de organización.

---

# Módulo Opcional C — Discussions, InnerSource y GitHub Pages

> **Duración estimada: 15 minutos. Útil para equipos que buscan mejorar la comunicación y documentación interna.**

## GitHub Discussions

Las Discussions son un foro de conversación integrado en el repositorio. A diferencia de los Issues (que son tareas rastreables con ciclo de vida), las Discussions son para conversaciones abiertas que no necesariamente se traducen en código.

### Categorías de Discussions:

| Categoría | Formato | Uso |
| --- | --- | --- |
| **Announcements** | Solo maintainers publican | Comunicar releases, cambios de política, información importante |
| **General** | Conversación abierta | Discusiones generales del proyecto |
| **Ideas** | Conversación abierta | Proponer ideas y recibir feedback antes de crear un Issue formal |
| **Q&A** | Pregunta/respuesta (con "marcar como respuesta") | Soporte y preguntas técnicas |
| **Polls** | Votación | Tomar decisiones con el equipo |

### Activar Discussions:

`Settings → Features → Discussions → Activar`

### ¿Cuándo usar Discussions vs Issues?

| Situación | Usar |
| --- | --- |
| "¿Deberíamos migrar a TypeScript?" | Discussion (Idea) |
| "Migrar módulo X a TypeScript" | Issue (Task) |
| "¿Cómo configuro el entorno de desarrollo?" | Discussion (Q&A) |
| "Documentar configuración del entorno" | Issue (Docs) |
| "Comunicar que la versión 2.0 está disponible" | Discussion (Announcement) |

En equipos enterprise, las Discussions son particularmente útiles para evitar que los canales de chat (Slack, Teams) se conviertan en el único lugar donde se toman decisiones. Las Discussions quedan indexadas y buscables dentro del contexto del repositorio.

## InnerSource

InnerSource es la práctica de aplicar principios de open source dentro de una organización. En GitHub Enterprise, esto se implementa naturalmente con repositorios **Internal**:

- Cualquier miembro de la organización puede ver el código.
- Los equipos pueden contribuir a repositorios de otros equipos usando el mismo flujo de PRs.
- Se reduce la duplicación de código entre equipos.
- Se fomenta la revisión cruzada y el aprendizaje.

### Elementos que facilitan InnerSource:

| Elemento | Por qué importa |
| --- | --- |
| **Repos Internal** | Visibilidad para toda la org |
| **README claro** | Que cualquiera entienda qué hace el proyecto y cómo contribuir |
| **CONTRIBUTING.md** | Guía explícita de cómo contribuir |
| **Issue templates** | Estandarizar cómo se reportan bugs o se piden features |
| **CODEOWNERS** | Que las contribuciones externas tengan revisores claros |
| **`good first issue` label** | Identificar tareas accesibles para contribuidores nuevos |
| **Discussions** | Canal de comunicación para preguntas y propuestas |

La mayoría de estos elementos ya los cubrimos en los módulos anteriores. InnerSource no es una herramienta nueva, es una forma de combinar las herramientas existentes para fomentar la colaboración entre equipos.

## GitHub Pages

GitHub Pages permite alojar sitios web estáticos directamente desde un repositorio. En entornos enterprise, el uso más común es para documentación interna de proyectos, guías de equipo o portales de APIs.

### Activar Pages:

1. Ve a `Settings → Pages`.
2. En **Source**, selecciona la rama y carpeta (normalmente `main` y `/docs` o `/ (root)`).
3. Haz clic en **"Save"**.

GitHub construirá y publicará el sitio automáticamente. Si tienes un archivo `index.html` o `index.md` en la ruta seleccionada, ese será la página principal.

### Pages con Jekyll:

Por defecto, GitHub Pages usa Jekyll para convertir archivos Markdown en HTML. Esto significa que puedes tener documentación en Markdown y GitHub Pages la renderiza como un sitio web navegable sin construir HTML manualmente.

### Visibilidad de Pages en Enterprise:

En GitHub Enterprise Cloud, la visibilidad de GitHub Pages sigue la visibilidad del repositorio:

| Repo visibility | Pages visibility |
| --- | --- |
| **Private** | Solo miembros con acceso al repo |
| **Internal** | Todos los miembros de la organización |

Esto hace que Pages sea una opción viable para documentación interna sin necesidad de configurar infraestructura adicional.

## Ejercicio del Módulo Opcional C

> **Tiempo estimado: 8 minutos**

1. Activa Discussions en tu repositorio (`Settings → Features`).
2. Crea una Discussion en la categoría "Ideas" proponiendo alguna mejora para el proyecto.
3. Crea un archivo `docs/index.md` en tu repo con contenido básico en Markdown (título, descripción, enlaces).
4. Activa GitHub Pages en `Settings → Pages`, seleccionando la rama `main` y la carpeta `/docs`.
5. Espera unos segundos y visita la URL que GitHub genera para tu sitio.

---

# Troubleshooting

### "No tengo permisos para hacer push"

Verifica que estás autenticado (`git config --list | grep user`). Si el repo es de la organización, verifica que tu equipo tiene acceso Write. Si la org usa SSO, asegúrate de haber autorizado tu token/credencial para la org. Contacta a tu administrador de GitHub si el problema persiste.

### "Tengo conflictos al hacer merge"

Lee los marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`). Elige la versión correcta o combina ambas. Elimina los marcadores y haz commit.

### "El workflow de Actions falla"

Ve a la pestaña Actions y haz clic en la ejecución fallida. Lee los logs del step que falló. Errores comunes: versión incorrecta de runtime, dependencias faltantes, tests que fallan, permisos insuficientes del `GITHUB_TOKEN`.

### "Accidentalmente subí un secreto"

1. Rota el secreto inmediatamente (genera uno nuevo en el servicio afectado).
2. Elimina el archivo del repo y del historial (requiere `git filter-branch` o [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)).
3. Revisa los logs de acceso del servicio para detectar uso no autorizado.
4. Notifica a tu equipo de seguridad.

### "GitHub Desktop no muestra mis cambios"

Verifica que estás en la rama correcta. Revisa que los archivos no estén en `.gitignore`. Intenta `Repository → Repository Settings → Reset`.

### "No puedo hacer push directo a main"

Si configuraste Rulesets en el Módulo 5, es el comportamiento esperado. Crea una rama, haz tus cambios ahí y crea un PR hacia main. Esto es una buena práctica, no un error.

### "El Release no genera notas automáticas"

Verifica que tienes PRs fusionados desde el último tag/release. Si es tu primer release, las notas incluirán todos los PRs fusionados. Si quieres categorías, crea el archivo `.github/release.yml` del Módulo 7.

### "No puedo ver repos Internal de la organización"

Verifica que tu cuenta está correctamente vinculada a la organización enterprise. Si la org usa EMU, tu cuenta debe estar provisionada por el IdP. Si usa SSO, necesitas autorizar tu sesión para la organización.

---

**Autor:** Armando Blanco
**Duración:** 2.5 horas (+ contenido opcional)
**Nivel:** Básico
**Modalidad:** Hands-on
**Enfoque:** GitHub Enterprise
