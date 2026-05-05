# Referencia: package.json

El archivo `package.json` en la raíz del repositorio es un ejemplo funcional que los participantes pueden usar como referencia para su propio proyecto de práctica.

Usa el test runner nativo de Node.js 20+ (`node --test`) para que no haya dependencias externas que instalar y el `npm ci` del workflow de CI funcione sin `package-lock.json`.

## Estructura mínima

```json
{
  "name": "practica-curso-github",
  "version": "1.0.0",
  "description": "Proyecto de práctica del curso de GitHub Fundamentos",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "test": "node --test tests/*.test.js"
  },
  "license": "MIT"
}
```

## Notas para el instructor

- No se usan frameworks de testing externos (jest, mocha) para evitar complicaciones con `npm ci` y lock files.
- El test runner nativo de Node.js 20 soporta `describe`, `it` y `assert` sin dependencias.
- Si un participante no tiene Node.js, puede usar el ejemplo de .NET CI del README como alternativa.
