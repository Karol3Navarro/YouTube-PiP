# YouTube PiP 🎬

**Reproductor flotante de YouTube para Windows**

YouTube PiP es una aplicación de escritorio desarrollada con Electron y JavaScript que busca facilitar la visualización de videos de YouTube en una ventana independiente, para poder ver contenido mientras se utilizan otras aplicaciones.

Este proyecto personal fue desarrollado con asistencia de herramientas de inteligencia artificial como parte de mi proceso de aprendizaje y exploración del desarrollo de aplicaciones de escritorio.

## ✨ Características

- Aplicación de escritorio basada en Electron.
- Reproducción de contenido de YouTube desde una ventana independiente.
- Proyecto orientado a generar una versión portable para Windows.
- Código fuente disponible para consulta y aprendizaje.

## 🛠️ Tecnologías utilizadas

- **JavaScript**
- **Electron 36.4.0**
- **HTML y CSS**, según la interfaz del proyecto.
- **Node.js y npm**
- **electron-builder**, para empaquetar la aplicación, si está configurado en las dependencias del proyecto.

## 📋 Requisitos previos

Para ejecutar o compilar el proyecto desde el código fuente necesitas:

- Windows.
- [Node.js](https://nodejs.org/), que incluye npm.
- Git, si deseas clonar el repositorio.
- Una conexión a Internet para acceder a YouTube y descargar las dependencias.

## 🚀 Instalación y ejecución en desarrollo

### 1. Clonar el repositorio

Abre una terminal y ejecuta:

```bash
git clone https://github.com/Karol3Navarro/YouTube-PiP.git
cd YouTube-PiP
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

Si `package.json` contiene un script `start` configurado para Electron:

```bash
npm start
```

Si no existe ese script, revisa los comandos disponibles en `package.json` y el archivo principal de Electron antes de ejecutarla.

## 📦 Generar una versión portable para Windows

El proyecto puede empaquetarse con el objetivo `portable` de electron-builder, siempre que esté instalado y configurado en el proyecto.

### 1. Instalar las dependencias

Si todavía no lo has hecho:

```bash
npm install
```

### 2. Generar el ejecutable portable

Si `electron-builder` está incluido en las dependencias del proyecto, ejecuta:

```bash
npx electron-builder --win portable
```

### 3. Localizar el archivo generado

Cuando la compilación finalice correctamente, revisa la carpeta de salida configurada en el proyecto. Con la configuración habitual de electron-builder, los archivos se generan en `dist`.

Busca el archivo `.exe` correspondiente a la versión portable.

### 4. Ejecutar la aplicación

Copia el ejecutable portable a la ubicación que prefieras y ábrelo en Windows. No debería requerir un instalador tradicional.

> **Importante:** los comandos de ejecución y compilación deben coincidir con los scripts y las dependencias reales de `package.json`. La generación del ejecutable portable no se ha verificado desde una instalación limpia.

## ⚠️ Consideraciones

- La aplicación necesita conexión a Internet para cargar contenido de YouTube.
- La reproducción puede depender de las restricciones del contenido, las políticas de YouTube y la implementación utilizada por la aplicación.
- Una versión portable no equivale necesariamente a una aplicación que funcione sin Internet.
- El ejecutable generado puede ser detectado por Windows Defender o SmartScreen como una aplicación desconocida si no cuenta con firma digital reconocida.

## 🤖 Uso de herramientas de inteligencia artificial

Se utilizaron herramientas de inteligencia artificial como asistencia durante el desarrollo del proyecto. El repositorio se comparte con fines de aprendizaje, consulta del código y desarrollo de habilidades de programación.

## 👩‍💻 Autora

**Karol Navarro**  
Analista Programador Computacional

- GitHub: [Karol3Navarro](https://github.com/Karol3Navarro)
- Repositorio: [YouTube-PiP](https://github.com/Karol3Navarro/YouTube-PiP)
