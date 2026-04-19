# 💍 Página Web de Mi Boda

¡Felicidades por tu boda! Esta es una página web moderna y responsiva para compartir los detalles de tu gran día.

## 📋 Contenido de la Página

✅ **Información de la Boda**
- Fecha y hora del evento
- Lugar del evento
- Código de vestimenta

✅ **Ubicación**
- Mapa interactivo de Google Maps

✅ **Regalos**
- Links a Mesa de Regalos en Amazon
- Links a Mesa de Regalos en Liverpool

✅ **RSVP**
- Formulario para confirmar asistencia
- Registro de restricciones dietéticas

## 🎨 Características

- Diseño moderno y responsivo
- Se adapta perfectamente a celulares, tablets y computadoras
- Animaciones suaves y elegantes
- Formulario interactivo con validación
- Almacenamiento local de confirmaciones

## 📝 Cómo Personalizar

### 1. Editar la Información Básica

Abre el archivo `index.html` y busca estas secciones:

#### Fecha y Hora
```html
<p class="value">15 de Junio, 2024</p>  <!-- Cambia esta fecha -->
<p class="value">4:00 PM</p>             <!-- Cambia esta hora -->
```

#### Lugar
```html
<p class="value">Salón de Eventos Villa Real</p>
<p class="details">Calle Principal 123, Ciudad</p>
```

#### Código de Vestimenta
```html
<p class="value">Formal Elegante</p>
<p class="details">Colores sugeridos: Negro, Azul Marino, Dorado</p>
```

### 2. Actualizar el Mapa de Google Maps

Para obtener el código de incrustación de tu ubicación:

1. Abre [Google Maps](https://www.google.com/maps)
2. Busca tu ubicación
3. Haz clic en el botón de menú (tres líneas) y selecciona "Compartir o insertar mapa"
4. Elige "Insertar mapa"
5. Copia el código `<iframe>`
6. Pega el código en `index.html` reemplazando el actual

### 3. Personalizar los Links de Regalos

Para Amazon y Liverpool, actualiza las URLs en `index.html`:

```html
<a href="https://www.amazon.com.mx/registries/..." target="_blank" class="gift-link amazon">
```

```html
<a href="https://www.liverpool.com.mx/..." target="_blank" class="gift-link liverpool">
```

### 4. Cambiar Nombres y Título

En el `index.html`:
```html
<h1 class="title">Nos Casamos</h1>
<p class="subtitle">Celebra con nosotros nuestro gran día</p>
```

### 5. Personalizar los Colores

En `styles.css`, busca las líneas con `background: linear-gradient`:

```css
/* Cambiar colores principales */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Puedes usar cualquier color en formato hexadecimal. Algunos ejemplos:
- 🎀 Rosa clásico: `#ff69b4` a `#ff1493`
- 💜 Púrpura elegante: `#9b59b6` a `#8e44ad`
- 💙 Azul sofisticado: `#3498db` a `#2980b9`
- ✨ Dorado romántico: `#f39c12` a `#d68910`

## 🌐 Cómo Subir a Internet

### Opción 1: GitHub Pages (GRATIS)
1. Crea una cuenta en [GitHub](https://github.com)
2. Crea un repositorio llamado `tu-usuario.github.io`
3. Sube los archivos de la carpeta `/web`
4. Tu página estará en `https://tu-usuario.github.io`

### Opción 2: Netlify (GRATIS)
1. Ve a [Netlify](https://www.netlify.com)
2. Arrastra la carpeta `/web` a Netlify
3. Tu página se publicará automáticamente

### Opción 3: Hosting Pagado
Usa servicios como GoDaddy, Bluehost, etc.

## 📁 Estructura de Archivos

```
web/
├── index.html      (Estructura de la página)
├── styles.css      (Estilos y diseño)
└── script.js       (Funcionalidad)
```

## 💡 Consejos

- Añade una foto de portada hermosa en el header
- Incluye fotos tuyas en la página
- Considera agregar una sección de itinerario del día
- Agrega información de estacionamiento si es necesario
- Incluye datos de contacto para confirmaciones especiales

## 🛠️ Personalización Avanzada

Si quieres agregar más funcionalidades como:
- Envío de confirmaciones por correo
- Galerías de fotos
- Contador regresivo
- Sistema de comentarios
- Música de fondo

¡Pídeme ayuda y podremos agregar estas características!

## ✨ ¡Que disfrutes tu gran día!

Personalizá esta página con los detalles especiales de tu boda y comparte el link con tus invitados.

---

**Última actualización:** Abril 2026
