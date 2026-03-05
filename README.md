# Curso Práctico de GitHub — Fundamentos (2 horas)

## De Cero a Colaborar: Git, GitHub y Flujos de Trabajo en Equipo

> **Curso público de formación:** NO usar datos reales, credenciales ni información sensible durante los ejercicios.

---

## 📋 Tabla de Contenidos

1. [Objetivo del curso](#1-objetivo-del-curso)
2. [Agenda detallada](#2-agenda-detallada-2-horas)
3. [Prerrequisitos](#3-prerrequisitos)
4. [Módulo 1 — Introducción a Git y GitHub](#módulo-1--introducción-a-git-y-github-000015)
5. [Módulo 2 — Repositorios y Estructura de Proyecto](#módulo-2--repositorios-y-estructura-de-proyecto-001500-35)
6. [Módulo 3 — Branching y Colaboración](#módulo-3--branching-y-colaboración-003500-55)
7. [Módulo 4 — Issues, Proyectos y Planeación Ligera](#módulo-4--issues-proyectos-y-planeación-ligera-005501-10)
8. [Módulo 5 — Seguridad Básica en GitHub](#módulo-5--seguridad-básica-en-github-011001-25)
9. [Módulo 6 — Automatización con GitHub Actions](#módulo-6--automatización-con-github-actions-012501-45)
10. [Módulo 7 — Uso Responsable de GitHub Copilot](#módulo-7--uso-responsable-de-github-copilot-014502-00)
11. [Resumen y Siguientes Pasos](#resumen-y-siguientes-pasos)
12. [Troubleshooting](#troubleshooting)

---

## 1. Objetivo del curso

Proporcionar a los participantes los **fundamentos prácticos** para trabajar con Git y GitHub en un entorno profesional. Al finalizar, cada participante será capaz de:

- Entender qué es el control de versiones y por qué es esencial.
- Crear y gestionar repositorios en GitHub.
- Colaborar con un equipo usando ramas y Pull Requests.
- Organizar trabajo con Issues y GitHub Projects.
- Aplicar prácticas básicas de seguridad.
- Entender la automatización con GitHub Actions.
- Conocer GitHub Copilot y sus buenas prácticas.

### ¿Para quién es este curso?

| Perfil | Beneficio |
|--------|-----------|
| Desarrolladores principiantes | Aprender el flujo de trabajo estándar de la industria |
| Equipos nuevos en GitHub | Alinear prácticas de colaboración |
| Profesionales técnicos no-dev | Entender cómo trabajar con repositorios de código |

---

## 2. Agenda detallada (2 horas)

| Tiempo | Módulo | Descripción |
|--------|--------|-------------|
| 0:00–0:15 | **Módulo 1** — Introducción a Git y GitHub | Conceptos clave: control de versiones, Git vs GitHub, flujo de trabajo |
| 0:15–0:35 | **Módulo 2** — Repositorios y Estructura | Crear repos, README, .gitignore, clonar, subir cambios |
| 0:35–0:55 | **Módulo 3** — Branching y Colaboración | Ramas, Pull Requests, revisión de código, resolución de conflictos |
| 0:55–1:10 | **Módulo 4** — Issues, Proyectos y Planeación | Issues, labels, milestones, GitHub Projects (Kanban) |
| 1:10–1:25 | **Módulo 5** — Seguridad Básica | .gitignore, secretos, secret scanning, Dependabot |
| 1:25–1:45 | **Módulo 6** — GitHub Actions | CI/CD básico, workflows, jobs, steps |
| 1:45–2:00 | **Módulo 7** — GitHub Copilot *(Opcional)* | Qué es, buenas prácticas, riesgos |

---

## 3. Prerrequisitos

### 3.1 Cuentas necesarias

- **Cuenta de GitHub**: Créala gratis en [github.com/signup](https://github.com/signup)

### 3.2 Software requerido

#### 1. Git
- **Descarga:** [https://git-scm.com/downloads](https://git-scm.com/downloads)
- **Validar instalación:**
  ```bash
  git --version
  # Esperado: git version 2.x.x
  ```

#### 2. Visual Studio Code (recomendado)
- **Descarga:** [https://code.visualstudio.com/](https://code.visualstudio.com/)
- **Extensiones recomendadas:**
  - GitHub Pull Requests and Issues
  - GitLens
  - GitHub Copilot *(si tienes acceso)*

#### 3. GitHub Desktop (alternativa visual)
- **Descarga:** [https://desktop.github.com/](https://desktop.github.com/)
- Ideal si prefieres una interfaz gráfica en lugar de la terminal.

### 3.3 Checklist de "listo para iniciar"

- [ ] Tengo una cuenta de GitHub activa
- [ ] Tengo Git instalado (`git --version` funciona)
- [ ] Tengo VS Code o GitHub Desktop instalado
- [ ] Puedo acceder a [github.com](https://github.com) desde mi navegador

---

# Módulo 1 — Introducción a Git y GitHub (0:00–0:15)

**Objetivo:** Entender qué es Git, qué es GitHub y por qué se usan en cualquier equipo de desarrollo.

## ¿Qué es el control de versiones?

Imagina que estás escribiendo un documento importante. Sin control de versiones harías esto:

```
documento_final.docx
documento_final_v2.docx
documento_final_v2_revisado.docx
documento_final_DEFINITIVO.docx
documento_final_DEFINITIVO_ahora_sí.docx  😱
```

El **control de versiones** resuelve este caos:
- Guarda un **historial completo** de todos los cambios.
- Permite **volver a cualquier versión anterior**.
- Permite que **múltiples personas trabajen simultáneamente** sin sobrescribirse.
- Mantiene un **registro de quién hizo qué y cuándo**.

## Git vs GitHub — ¿Cuál es la diferencia?

| Concepto | Git | GitHub |
|----------|-----|--------|
| **¿Qué es?** | Sistema de control de versiones | Plataforma en la nube para alojar repos Git |
| **¿Dónde vive?** | En tu computadora (local) | En internet (github.com) |
| **¿Para qué sirve?** | Rastrear cambios en archivos | Colaborar, revisar código, gestionar proyectos |
| **Analogía** | Tu cuaderno de notas personal | Google Docs compartido con tu equipo |

```
┌─────────────────┐         ┌──────────────────────┐
│   Tu Máquina    │         │      GitHub.com       │
│                 │  push   │                       │
│   Repositorio   │ ──────► │   Repositorio Remoto  │
│   Local (Git)   │ ◄────── │   (GitHub)            │
│                 │  pull   │                       │
└─────────────────┘         └──────────────────────┘
```

## Conceptos fundamentales

### 🗂️ Repositorio (Repo)
Es la **carpeta de tu proyecto** con todo su historial de cambios. Piensa en él como una carpeta inteligente que recuerda todo.

### 💾 Commit
Es una **fotografía** del estado de tu proyecto en un momento dado. Cada commit tiene:
- Un **mensaje** que describe el cambio
- Un **autor** y una **fecha**
- Un **identificador único** (hash)

```
Ejemplo de historial de commits:
  
  a1b2c3d  ← feat: agregar página de contacto      (hace 2 horas)
  e4f5g6h  ← fix: corregir enlace roto en el menú   (hace 1 día)
  i7j8k9l  ← docs: actualizar README                (hace 3 días)
```

### 🌿 Branch (Rama)
Una **línea paralela de desarrollo**. Permite trabajar en nuevas funcionalidades sin afectar el código principal.

```
main:       ●───●───●───●───●───●
                     \         /
feature/login:        ●───●───●
```

### 🔀 Merge
**Combinar** los cambios de una rama con otra. Es como juntar dos versiones del proyecto.

### 📬 Pull Request (PR)
Una **solicitud formal** para integrar tus cambios al código principal. Permite:
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
|-------------|-----------|----------|
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
3. Haz clic en **Sign In** junto a GitHub.com
4. Autoriza en el navegador

---

# Módulo 2 — Repositorios y Estructura de Proyecto (0:15–0:35)

**Objetivo:** Aprender a crear, estructurar y trabajar con repositorios de forma profesional.

## Crear un repositorio en GitHub

### Paso 1. Ir a GitHub y crear el repo

1. Ve a [github.com](https://github.com) y haz login.
2. Haz clic en el botón verde **"New"** (o ve a [github.com/new](https://github.com/new)).
3. Completa los campos:

| Campo | Valor de ejemplo | Explicación |
|-------|-------------------|-------------|
| Repository name | `mi-primer-proyecto` | Nombre corto, sin espacios (usa guiones) |
| Description | `Proyecto de práctica del curso` | Opcional pero recomendado |
| Visibility | Private o Internal | Ver tabla de abajo |
| Initialize with README | ✅ Marcado | Crea el archivo README.md automáticamente |
| .gitignore template | Seleccionar según tecnología | Ej: Node, Python, VisualStudio |
| License | MIT License | Opcional, define cómo se puede usar tu código |

4. Haz clic en **"Create repository"** 🎉

### Visibilidad del repositorio

| Tipo | ¿Quién puede ver? | ¿Cuándo usarlo? |
|------|-------------------|-----------------|
| **Public** | Cualquier persona en internet | Proyectos open source |
| **Internal** | Solo miembros de la organización | Proyectos compartidos dentro de la empresa |
| **Private** | Solo tú y los colaboradores invitados | Proyectos confidenciales o personales |

> 💡 **Tip:** En entornos empresariales, lo más común es usar **Internal** para compartir entre equipos y **Private** para proyectos sensibles.

### Repositorios Template (Plantillas)

GitHub permite crear **repos plantilla** para estandarizar la estructura entre proyectos:

1. Ve a la configuración del repo (`Settings`)
2. Marca la casilla **"Template repository"**
3. Ahora cualquier persona puede crear un nuevo repo basado en esta plantilla con el botón **"Use this template"**

> Útil para: estructuras de proyecto estándar, configuraciones CI/CD reutilizables o boilerplates de la organización.

## Estructura básica de un repositorio

Todo repositorio profesional debería tener al menos estos archivos:

```
mi-proyecto/
├── README.md          ← Presentación del proyecto
├── .gitignore         ← Archivos que Git debe ignorar
├── LICENSE            ← Licencia de uso
├── src/               ← Código fuente
├── docs/              ← Documentación
└── tests/             ← Pruebas
```

### 📄 README.md — La carta de presentación

Es lo **primero que ven** los visitantes de tu repositorio. Un buen README incluye:

```markdown
# Nombre del Proyecto

Descripción breve de qué hace el proyecto.

## Instalación

Pasos para instalar y configurar el proyecto.

## Uso

Ejemplos de cómo usar el proyecto.

## Contribuir

Guía para contribuir al proyecto.

## Licencia

Información de la licencia.
```

### 🚫 .gitignore — Lo que NO debe subirse

El archivo `.gitignore` le dice a Git qué archivos **ignorar**. Esto evita subir archivos innecesarios o peligrosos.

**Ejemplo de `.gitignore` para Node.js:**

```gitignore
# Dependencias
node_modules/

# Variables de entorno (¡NUNCA subir!)
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

> ⚠️ **Regla de oro:** Si contiene secretos, contraseñas o tokens, **DEBE estar en el `.gitignore`**.

GitHub ofrece plantillas de `.gitignore` para diferentes lenguajes: [github.com/github/gitignore](https://github.com/github/gitignore)

### 📜 Licencias

| Licencia | Permite uso comercial | Permite modificar | Requiere atribución |
|----------|:----:|:----:|:----:|
| **MIT** | ✅ | ✅ | ✅ |
| **Apache 2.0** | ✅ | ✅ | ✅ |
| **GPL v3** | ✅ | ✅ | ✅ (código derivado debe ser GPL) |

> Si no sabes cuál elegir, [choosealicense.com](https://choosealicense.com/) te guía.

## Clonar un repositorio

Clonar = **descargar una copia completa** del repositorio a tu máquina.

### Opción A: Desde GitHub (obtener la URL)

1. Ve al repositorio en GitHub.
2. Haz clic en el botón verde **"<> Code"**.
3. Copia la URL HTTPS.

```
https://github.com/usuario/mi-primer-proyecto.git
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
6. Haz clic en **"✓ Commit"**.
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

| ❌ Mal | ✅ Bien |
|--------|---------|
| `cambios` | `feat: agregar formulario de contacto` |
| `fix` | `fix: corregir cálculo de impuestos en factura` |
| `update` | `docs: actualizar guía de instalación` |
| `asdf` | `refactor: extraer lógica de validación a servicio` |

---

# Módulo 3 — Branching y Colaboración (0:35–0:55)

**Objetivo:** Trabajar en paralelo sin romper el código principal del equipo.

## ¿Por qué usar ramas?

Sin ramas, todos trabajan sobre la misma línea de código:

```
                      💥 Conflicto!
main:  ●───●───●───●───💥
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
|------|-----------|---------|
| `main` | Código estable y en producción | Siempre funcional |
| `develop` | Integración de features *(opcional)* | Preproducción |
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
5. ¡Listo! Ya estás trabajando en la nueva rama.

### En VS Code:

1. Haz clic en el nombre de la rama actual (esquina inferior izquierda, ej: `main`).
2. Selecciona **"Create new branch..."**.
3. Escribe el nombre: `feature/mi-cambio`.
4. Presiona Enter. Ahora trabajas en la nueva rama.

### En GitHub Desktop:

1. Haz clic en **"Current Branch"** en la barra superior.
2. Haz clic en **"New Branch"**.
3. Escribe el nombre y haz clic en **"Create Branch"**.

> 💡 **¿Qué pasa si elimino una rama?** Las ramas eliminadas se pueden recuperar desde GitHub durante un tiempo limitado. En la página del Pull Request cerrado/fusionado verás un botón **"Restore branch"**.

## Pull Requests: El corazón de la colaboración

Un Pull Request (PR) es una **solicitud para integrar los cambios** de tu rama al código principal.

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

Como **revisor**, verifica:

| Aspecto | Pregunta clave |
|---------|---------------|
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
                                                             Merge a main ✅
```

En GitHub se ve así:
- 🟢 **Approved**: El revisor aprueba los cambios.
- 🟡 **Changes requested**: El revisor pide modificaciones.
- 💬 **Commented**: El revisor deja comentarios sin aprobar ni rechazar.

## Resolución básica de conflictos

Los conflictos ocurren cuando **dos personas modifican la misma línea** de un archivo.

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

4. **Edita** el archivo para quedarte con la versión correcta:

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

---

# Módulo 4 — Issues, Proyectos y Planeación Ligera (0:55–1:10)

**Objetivo:** Usar GitHub como herramienta de gestión de trabajo, no solo de código.

## Issues: Más que reportar bugs

Los **Issues** son la forma de registrar y rastrear **cualquier tipo de trabajo** en GitHub.

### Tipos comunes de Issues:

| Tipo | Uso | Ejemplo |
|------|-----|---------|
| 🐛 **Bug** | Reportar errores | "El botón de enviar no funciona en Safari" |
| ✨ **Feature** | Solicitar funcionalidades | "Agregar modo oscuro a la app" |
| 📝 **Task** | Tareas generales | "Actualizar dependencias a última versión" |
| 📚 **Docs** | Documentación | "Documentar API de pagos" |

### Crear un Issue paso a paso:

1. Ve a tu repositorio → pestaña **"Issues"**.
2. Haz clic en **"New issue"**.
3. Completa:

```
Título: 🐛 El formulario de contacto no envía emails

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

4. Asigna **labels**, **milestones** y **assignees** (ver abajo).

### Issue Templates (Plantillas)

Para estandarizar cómo se crean Issues en tu repositorio:

1. Ve a `Settings → Features → Issues → Set up templates`.
2. Elige una plantilla predefinida (Bug report, Feature request) o crea una personalizada.
3. GitHub creará archivos en `.github/ISSUE_TEMPLATE/`.

**Ejemplo de plantilla de bug (`.github/ISSUE_TEMPLATE/bug_report.md`):**

```markdown
---
name: Reporte de Bug
about: Reporta un error para ayudarnos a mejorar
title: '🐛 '
labels: 'bug'
assignees: ''
---

## Descripción del bug
Una descripción clara del error.

## Pasos para reproducir
1. Ir a '...'
2. Hacer clic en '...'
3. Ver el error

## Comportamiento esperado
Qué debería suceder.

## Screenshots
Si aplica, agrega capturas de pantalla.
```

### Labels (Etiquetas)

Las **labels** clasifican los Issues visualmente:

| Label | Color | Uso |
|-------|-------|-----|
| `bug` | 🔴 Rojo | Errores |
| `enhancement` | 🔵 Azul | Mejoras |
| `documentation` | 📘 Azul claro | Documentación |
| `good first issue` | 🟢 Verde | Ideal para nuevos contribuidores |
| `priority: high` | 🟠 Naranja | Urgente |
| `wontfix` | ⚪ Gris | No se va a arreglar |

> **Tip:** Puedes crear labels personalizadas en `Issues → Labels → New label`.

### Milestones (Hitos)

Los milestones agrupan Issues bajo un **objetivo común con fecha límite**:

1. Ve a `Issues → Milestones → New milestone`.
2. Define nombre, descripción y fecha límite.
3. Asigna Issues al milestone.

**Ejemplo:**
```
Milestone: "MVP v1.0"
Fecha límite: 15 de Abril
Issues:
  ✅ #1 - Crear página de inicio
  ✅ #2 - Implementar login
  🔲 #3 - Sistema de pagos
  🔲 #4 - Dashboard de usuario
Progreso: 50% completado
```

## GitHub Projects — Tableros Kanban

GitHub Projects ofrece una vista de **tablero estilo Kanban** para organizar el trabajo.

### Crear un Project:

1. Ve a tu repositorio → pestaña **"Projects"**.
2. Haz clic en **"New project"**.
3. Elige la vista: **Board** (tablero Kanban).
4. Agrega columnas típicas:

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  📋 Backlog │  │ 🏗️ In      │  │ 👀 In       │  │ ✅ Done     │
│             │  │  Progress   │  │  Review     │  │             │
│  #5 API     │  │  #3 Pagos   │  │  #2 Login   │  │  #1 Home    │
│  #6 Tests   │  │             │  │             │  │  #4 Dashboard│
│  #7 Deploy  │  │             │  │             │  │             │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
```

5. Arrastra los Issues entre columnas conforme avanza el trabajo.

### Vincular PRs con Issues

Puedes **cerrar Issues automáticamente** cuando se fusiona un PR usando palabras clave en el mensaje del PR:

```
Closes #42
Fixes #15
Resolves #7
```

**Ejemplo en un PR:**
```
feat: agregar sistema de pagos con Stripe

Implementa pagos con Stripe para el checkout.

Closes #3
Closes #8
```

Cuando este PR se fusione, los Issues #3 y #8 se cerrarán automáticamente. 🎉

---

# Módulo 5 — Seguridad Básica en GitHub (1:10–1:25)

**Objetivo:** Evitar los errores de seguridad más comunes al trabajar con repositorios.

## El error #1: Subir secretos al repositorio

Este es el error de seguridad **más común y más peligroso**:

```python
# ❌ NUNCA hagas esto
API_KEY = "sk-a1b2c3d4e5f6g7h8i9j0"
DATABASE_PASSWORD = "MiPasswordSuperSecreto123"
AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE"
```

> ⚠️ **Una vez que un secreto se sube a GitHub, considéralo comprometido.** Incluso si lo borras después, queda en el historial de Git.

## Capa 1: `.gitignore` — Prevenir antes de subir

Asegúrate de que los archivos sensibles **nunca** se incluyan en un commit:

```gitignore
# Archivos de entorno con secretos
.env
.env.local
.env.production

# Archivos de credenciales
credentials.json
serviceAccountKey.json
*.pem
*.key

# Archivos de configuración local
appsettings.Development.json
local.settings.json
```

## Capa 2: Variables de entorno — Separar código de configuración

En lugar de poner secretos en el código, úsalos como **variables de entorno**:

**Archivo `.env` (LOCAL, nunca se sube):**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
API_KEY=sk-a1b2c3d4e5f6g7h8i9j0
STRIPE_SECRET=whsec_abc123
```

**En tu código:**
```python
# ✅ Así sí — leer de variables de entorno
import os

api_key = os.environ.get("API_KEY")
db_url = os.environ.get("DATABASE_URL")
```

```javascript
// ✅ En Node.js
const apiKey = process.env.API_KEY;
const dbUrl = process.env.DATABASE_URL;
```

## Capa 3: GitHub Secrets — Secretos para CI/CD y la nube

GitHub ofrece un almacén seguro de secretos para usar en automatización:

### Repo Secrets (nivel repositorio):
1. Ve a `Settings → Secrets and variables → Actions`.
2. Haz clic en **"New repository secret"**.
3. Define nombre y valor:
   - Name: `API_KEY`
   - Value: `sk-a1b2c3d4e5f6g7h8i9j0`

### Environment Secrets (nivel entorno):
Permiten tener secretos diferentes por entorno (desarrollo, staging, producción):

1. Ve a `Settings → Environments`.
2. Crea un entorno (ej: `production`).
3. Agrega secretos específicos para ese entorno.
4. Opcional: agrega **reglas de protección** (ej: requiere aprobación antes de deploy).

**Usar secretos en un workflow de GitHub Actions:**
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        env:
          API_KEY: ${{ secrets.API_KEY }}
          DB_PASSWORD: ${{ secrets.DB_PASSWORD }}
        run: |
          echo "Deploying with secure credentials..."
```

> Los secretos **nunca se imprimen en los logs**. GitHub los enmascara automáticamente con `***`.

## Herramientas de detección automática

### Secret Scanning — Detectar secretos filtrados

GitHub escanea automáticamente tu repositorio buscando secretos conocidos (tokens de AWS, API keys de Stripe, etc.).

- **¿Dónde se configura?** `Settings → Code security and analysis → Secret scanning`
- **¿Qué hace?** Si detecta un secreto, te notifica y puede bloquear el push.
- **Push Protection:** Puede **bloquear** un push que contenga un secreto antes de que llegue al repositorio.

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Developer   │ ──► │ Push to      │ ──► │   Secret     │
│  hace push   │     │   GitHub     │     │  Scanning    │
└──────────────┘     └──────────────┘     └───────┬──────┘
                                                   │
                                          ┌────────┴────────┐
                                          │                 │
                                     Sin secretos      Secreto detectado
                                          │                 │
                                     ✅ Push OK        ❌ Push bloqueado
                                                      + Notificación
```

### Dependabot — Mantener dependencias seguras

**Dependabot** monitorea las dependencias de tu proyecto y te alerta cuando hay vulnerabilidades conocidas.

- **¿Qué hace?**
  - Escanea `package.json`, `requirements.txt`, `*.csproj`, etc.
  - Crea PRs automáticos para actualizar dependencias vulnerables.
  
- **¿Dónde se configura?** `Settings → Code security and analysis → Dependabot`

- **Tipos de alertas:**
  - 🔴 **Critical**: Vulnerabilidad grave, actualizar inmediatamente.
  - 🟠 **High**: Vulnerabilidad importante.
  - 🟡 **Medium**: Riesgo moderado.
  - 🟢 **Low**: Riesgo bajo.

---

# Módulo 6 — Automatización con GitHub Actions (1:25–1:45)

**Objetivo:** Entender CI/CD y cómo automatizar tareas con GitHub Actions.

## ¿Qué es CI/CD?

| Concepto | Significado | Ejemplo |
|----------|-------------|---------|
| **CI** — Continuous Integration | Integrar y validar código automáticamente | Ejecutar tests cada vez que alguien hace push |
| **CD** — Continuous Delivery | Preparar el código para producción automáticamente | Build + deploy automático al hacer merge en main |

```
Push/PR  →  Build  →  Tests  →  Deploy
  📤        🔨        ✅/❌      🚀

Sin CI/CD: "Funciona en mi máquina" 😅
Con CI/CD: "Funciona en todas las máquinas" 💪
```

## ¿Qué es GitHub Actions?

Es el sistema de automatización integrado en GitHub. Permite ejecutar **workflows** (flujos de trabajo) en respuesta a eventos del repositorio.

### Conceptos clave:

```
┌─────────────────────────────────────────────────┐
│                   Workflow                       │
│  (Archivo YAML en .github/workflows/)           │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │              Job: build                   │   │
│  │                                           │   │
│  │  ┌─────────────────────────────────────┐  │   │
│  │  │ Step 1: Checkout código            │  │   │
│  │  │ Step 2: Instalar dependencias      │  │   │
│  │  │ Step 3: Ejecutar tests             │  │   │
│  │  │ Step 4: Build de la aplicación     │  │   │
│  │  └─────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │              Job: deploy                  │   │
│  │  (depende de: build)                     │   │
│  │  ┌─────────────────────────────────────┐  │   │
│  │  │ Step 1: Deploy a Azure/AWS/etc      │  │   │
│  │  └─────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

| Concepto | ¿Qué es? | Analogía |
|----------|----------|----------|
| **Workflow** | Proceso automatizado completo | La receta completa |
| **Event** | Lo que dispara el workflow | "Cuando alguien hace push..." |
| **Job** | Grupo de pasos que se ejecutan juntos | Un paso de la receta (ej: preparar ingredientes) |
| **Step** | Acción individual dentro de un job | Una instrucción específica (ej: cortar cebolla) |
| **Runner** | La máquina donde se ejecuta | La cocina donde preparas |
| **Action** | Componente reutilizable | Un electrodoméstico (ej: licuadora) |

## Crear tu primer Workflow

### Paso 1. Crear el archivo

Los workflows viven en `.github/workflows/`. Crea el archivo:

```
.github/
└── workflows/
    └── ci.yml
```

### Paso 2. Escribir el workflow

**Ejemplo: CI básico para una aplicación Node.js**

```yaml
# .github/workflows/ci.yml
name: CI - Integración Continua

# ¿Cuándo se ejecuta?
on:
  push:
    branches: [ main ]          # Al hacer push a main
  pull_request:
    branches: [ main ]          # Al crear/actualizar un PR hacia main

# ¿Qué hace?
jobs:
  build-and-test:
    runs-on: ubuntu-latest      # Máquina virtual donde se ejecuta

    steps:
      # Paso 1: Descargar el código del repo
      - name: 📥 Checkout del código
        uses: actions/checkout@v4

      # Paso 2: Configurar Node.js
      - name: 📦 Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      # Paso 3: Instalar dependencias
      - name: 📥 Instalar dependencias
        run: npm ci

      # Paso 4: Ejecutar tests
      - name: 🧪 Ejecutar tests
        run: npm test

      # Paso 5: Build de la aplicación
      - name: 🔨 Build
        run: npm run build
```

**Ejemplo: CI para una aplicación .NET**

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
      - name: 📥 Checkout del código
        uses: actions/checkout@v4

      - name: 📦 Configurar .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0.x'

      - name: 📥 Restaurar dependencias
        run: dotnet restore

      - name: 🔨 Build
        run: dotnet build --no-restore

      - name: 🧪 Ejecutar tests
        run: dotnet test --no-build --verbosity normal
```

### Paso 3. Subir y verificar

1. Haz commit y push del archivo workflow.
2. Ve a tu repositorio → pestaña **"Actions"**.
3. Verás la ejecución del workflow en tiempo real.

```
✅ CI - Integración Continua
   ✅ build-and-test
      ✅ 📥 Checkout del código         (2s)
      ✅ 📦 Configurar Node.js          (5s)
      ✅ 📥 Instalar dependencias       (12s)
      ✅ 🧪 Ejecutar tests              (8s)
      ✅ 🔨 Build                       (6s)
```

## Validaciones automáticas en Pull Requests

Puedes configurar que los PRs **no se puedan fusionar** si el workflow falla:

1. Ve a `Settings → Branches → Branch protection rules`.
2. Haz clic en **"Add rule"** para la rama `main`.
3. Marca:
   - ✅ **Require status checks to pass before merging**
   - Selecciona el workflow `build-and-test`
   - ✅ **Require pull request reviews before merging**
4. Guarda la regla.

Ahora, si alguien crea un PR y los tests fallan:

```
PR #15: feat: agregar nueva funcionalidad

  ❌ CI - Integración Continua (failed)
     ❌ 🧪 Ejecutar tests — 2 tests failed
  
  ⚠️ Merging is blocked
  "Required status checks must pass before merging"
```

---

# Módulo 7 — Uso Responsable de GitHub Copilot (1:45–2:00)

**Objetivo:** Aumentar la productividad sin comprometer la calidad del código.

## ¿Qué es GitHub Copilot?

GitHub Copilot es un **asistente de programación con IA** que sugiere código en tiempo real mientras escribes. Funciona directamente dentro de tu editor (VS Code, Visual Studio, JetBrains, etc.).

| Copilot ES... | Copilot NO ES... |
|---------------|-------------------|
| Un asistente que sugiere código | Un reemplazo del desarrollador |
| Una herramienta para acelerar tareas repetitivas | Infalible o perfecto |
| Útil para explorar APIs y patrones | Un oráculo que siempre tiene razón |
| Un par de programación con IA | Capaz de entender contexto de negocio complejo solo |

## ¿Qué puede generar Copilot?

### 1. Código — Funciones, clases, lógica

```python
# Escribe un comentario descriptivo y Copilot sugiere la implementación:
# Función que valida si un email tiene formato correcto
def validate_email(email):
    # Copilot sugiere:
    import re
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))
```

### 2. Tests — Pruebas unitarias

```python
# Escribe "test" y el nombre de la función:
def test_validate_email():
    # Copilot sugiere:
    assert validate_email("user@example.com") == True
    assert validate_email("invalid-email") == False
    assert validate_email("") == False
    assert validate_email("user@.com") == False
```

### 3. Comentarios y documentación

```python
# Copilot puede generar docstrings:
def calculate_discount(price, discount_percentage):
    """
    Calcula el precio final después de aplicar un descuento.
    
    Args:
        price (float): Precio original del producto.
        discount_percentage (float): Porcentaje de descuento (0-100).
    
    Returns:
        float: Precio final con descuento aplicado.
    
    Raises:
        ValueError: Si el porcentaje está fuera de rango.
    """
    if not 0 <= discount_percentage <= 100:
        raise ValueError("El descuento debe estar entre 0 y 100")
    return price * (1 - discount_percentage / 100)
```

## Cómo pedir buenas sugerencias

| Práctica | Ejemplo |
|----------|---------|
| **Sé específico en los comentarios** | `# Ordenar lista de usuarios por fecha de registro descendente` |
| **Proporciona contexto** | Nombra bien tus variables y funciones |
| **Divide problemas complejos** | Escribe una función a la vez, no todo junto |
| **Usa Copilot Chat para preguntas** | "¿Cómo hago una consulta paginada en SQL?" |

## ⚠️ Riesgos y precauciones

### 1. Copiar sin entender

```python
# ⚠️ Copilot te sugiere esto... ¿pero sabes qué hace?
result = list(map(lambda x: x ** 2 if x % 2 == 0 else x ** 3, 
                  filter(lambda x: x > 0, numbers)))

# ✅ Mejor: entiende y simplifica si es necesario
positive_numbers = [n for n in numbers if n > 0]
result = [n**2 if n % 2 == 0 else n**3 for n in positive_numbers]
```

> **Regla de oro:** Si no puedes explicar lo que hace el código, no lo uses.

### 2. Seguridad

- Copilot puede sugerir código con **vulnerabilidades** (inyección SQL, XSS, etc.).
- **Siempre revisa** el código sugerido desde una perspectiva de seguridad.
- No confíes ciegamente en validaciones generadas por IA.

### 3. Licencias

- El código sugerido puede **asemejarse a código open source** con licencias restrictivas.
- En proyectos empresariales, considera activar el **filtro de código público** de Copilot.
- `Settings → Copilot → Suggestions matching public code → Block`

### Buenas prácticas resumidas

| ✅ Hacer | ❌ Evitar |
|----------|----------|
| Revisar cada sugerencia antes de aceptar | Aceptar todo sin leer |
| Usar como punto de partida y mejorar | Copiar y pegar sin entender |
| Validar seguridad del código generado | Confiar ciegamente en la IA |
| Escribir tests para código generado | Asumir que el código es correcto |
| Usar Copilot Chat para aprender | Usarlo como sustituto de aprender |

---

# Resumen y Siguientes Pasos

## Lo que aprendimos hoy

| Módulo | Concepto clave |
|--------|---------------|
| 1. Intro | Git es local, GitHub es la nube. Repos, commits, branches, PRs |
| 2. Repos | Crear repos, README, .gitignore, clonar, add/commit/push |
| 3. Branching | Ramas paralelas, Pull Requests, resolución de conflictos |
| 4. Issues | Gestión de trabajo con Issues, labels, milestones y Projects |
| 5. Seguridad | .gitignore, variables de entorno, GitHub Secrets, scanning |
| 6. Actions | CI/CD automático con workflows YAML |
| 7. Copilot | IA como asistente, no como reemplazo |

## Siguientes pasos recomendados

Para profundizar después de este curso:

- **GitHub Skills**: Cursos interactivos gratuitos → [skills.github.com](https://skills.github.com)
- **GitHub Docs**: Documentación oficial → [docs.github.com](https://docs.github.com)
- **Practicar**: Crear un proyecto personal y aplicar todo lo aprendido
- **Explorar**: GitHub Codespaces, GitHub Pages, GitHub Packages
- **Certificarse**: [GitHub Foundations Certification](https://resources.github.com/learn/certifications/)

---

# Troubleshooting

### "No tengo permisos para hacer push"
- Verifica que estás autenticado (`git config --list | grep user`).
- Si el repo es de una organización, pide acceso al administrador.
- Usa HTTPS con token de acceso personal o configura SSH.

### "Tengo conflictos al hacer merge"
- Lee los marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`).
- Elige la versión correcta o combina ambas.
- Elimina los marcadores y haz commit.

### "El workflow de Actions falla"
- Ve a la pestaña **Actions** y haz clic en la ejecución fallida.
- Lee los logs del step que falló.
- Errores comunes: versión incorrecta de runtime, dependencias faltantes, tests que fallan.

### "Accidentalmente subí un secreto"
1. **Rota el secreto inmediatamente** (genera uno nuevo en el servicio afectado).
2. Elimina el archivo del repo y del historial (requiere `git filter-branch` o [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)).
3. Revisa los logs de acceso del servicio para detectar uso no autorizado.

### "GitHub Desktop no muestra mis cambios"
- Verifica que estás en la rama correcta.
- Revisa que los archivos no estén en `.gitignore`.
- Intenta `Repository → Repository Settings → Reset`.

---

## Recursos adicionales

| Recurso | Enlace |
|---------|--------|
| GitHub Docs | [docs.github.com](https://docs.github.com) |
| GitHub Skills | [skills.github.com](https://skills.github.com) |
| Gitignore Templates | [github.com/github/gitignore](https://github.com/github/gitignore) |
| Choose a License | [choosealicense.com](https://choosealicense.com) |
| Conventional Commits | [conventionalcommits.org](https://www.conventionalcommits.org) |
| GitHub Actions Marketplace | [github.com/marketplace?type=actions](https://github.com/marketplace?type=actions) |

---

**Autor:** Armando Blanco  
**Duración:** 2 horas  
**Nivel:** Básico  
**Modalidad:** Curso teórico-práctico
