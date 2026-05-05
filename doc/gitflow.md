# GitFlow — Guía de Alto Nivel

## ¿Qué es GitFlow?

GitFlow es una **estrategia de ramificación** (branching model) propuesta por Vincent Driessen en 2010. Define un conjunto de reglas claras sobre qué ramas crear, cuándo crearlas y cómo integrarlas. Su objetivo es dar estructura al desarrollo en equipo, especialmente en proyectos con ciclos de release definidos.

---

## Ramas principales

GitFlow se basa en dos ramas permanentes:

| Rama | Propósito |
| --- | --- |
| `main` | Contiene el código **en producción**. Cada commit aquí representa una versión liberada. |
| `develop` | Rama de **integración**. Aquí se acumulan las features terminadas antes de preparar un release. |

```
main:      ●────────────────────●──────────●  (releases)
            \                  /          /
develop:     ●───●───●───●───●──────●───●     (integración continua)
```

---

## Ramas de soporte

Además de las permanentes, GitFlow define tres tipos de ramas temporales:

### 1. Feature branches (`feature/*`)

- **Se crean desde:** `develop`
- **Se integran a:** `develop`
- **Propósito:** Desarrollar una funcionalidad nueva de forma aislada.
- **Convención:** `feature/nombre-descriptivo`

```
develop:         ●───●───────────●───●
                      \         /
feature/login:         ●───●───●
```

**Flujo:**
1. Crear la rama: `git checkout -b feature/login develop`
2. Desarrollar y hacer commits.
3. Abrir un Pull Request hacia `develop`.
4. Revisión, aprobación y merge.
5. Eliminar la rama.

### 2. Release branches (`release/*`)

- **Se crean desde:** `develop`
- **Se integran a:** `main` y `develop`
- **Propósito:** Preparar una versión para producción (últimos ajustes, bump de versión, documentación).
- **Convención:** `release/1.2.0`

```
develop:          ●───●───●───────────●  (recibe merge de vuelta)
                           \         / \
release/1.2.0:              ●───●───●   \
                                 \       \
main:            ●────────────────●───────●
                                  v1.2.0
```

**Flujo:**
1. Crear la rama: `git checkout -b release/1.2.0 develop`
2. Hacer ajustes finales (versión, changelog, docs).
3. Merge a `main` y crear un tag (`v1.2.0`).
4. Merge de vuelta a `develop` para no perder los ajustes.
5. Eliminar la rama.

### 3. Hotfix branches (`hotfix/*`)

- **Se crean desde:** `main`
- **Se integran a:** `main` y `develop`
- **Propósito:** Corregir errores críticos en producción de forma urgente.
- **Convención:** `hotfix/fix-descripcion`

```
main:       ●───────●───────●
                     \     /
hotfix/crash:         ●───●
                           \
develop:    ●───●───●───────●  (recibe el fix también)
```

**Flujo:**
1. Crear la rama: `git checkout -b hotfix/fix-crash main`
2. Corregir el bug y hacer commit.
3. Merge a `main` y crear un tag (`v1.2.1`).
4. Merge a `develop` para incluir la corrección.
5. Eliminar la rama.

---

## Diagrama completo

```
main:        v1.0 ●─────────────────────● v1.1────────● v1.1.1
              \                        / \            /
develop:       ●───●───●───●─────●───●────●───●───●──●
                    \   /    \       /              \  \
feature/login:       ●─●      \     /                \  \
                                \   /                  \  \
feature/pagos:                   ●─●                    \  \
                                                         \  \
release/1.1:                          ●───●               \  \
                                                           \  \
hotfix/fix-crash:                                           ●──●
```

---

## GitFlow vs otras estrategias

| Estrategia | Complejidad | Ideal para | Ramas permanentes |
| --- | --- | --- | --- |
| **GitFlow** | Alta | Releases programados, múltiples versiones en soporte | `main`, `develop` |
| **GitHub Flow** | Baja | Despliegue continuo, equipos ágiles | `main` |
| **Trunk-Based** | Baja | CI/CD avanzado, equipos experimentados | `main` (trunk) |

### ¿Cuándo usar GitFlow?

- El proyecto tiene **releases planificados** (ej. cada sprint o cada mes).
- Se necesita **mantener múltiples versiones** en producción.
- El equipo es grande y trabaja en **varias features en paralelo**.

### ¿Cuándo NO usar GitFlow?

- El equipo hace **deploy continuo** (varias veces al día).
- El proyecto es pequeño o tiene un solo desarrollador.
- Se prefiere simplicidad sobre estructura.

---

## Resumen rápido

| Acción | Rama origen | Rama destino |
| --- | --- | --- |
| Nueva funcionalidad | `develop` | `develop` |
| Preparar release | `develop` | `main` + `develop` |
| Corrección urgente | `main` | `main` + `develop` |

---

## Recursos adicionales

- [Artículo original de Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/)
- [Atlassian — GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [GitHub Flow (alternativa simplificada)](https://docs.github.com/en/get-started/using-github/github-flow)
